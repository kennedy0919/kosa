package com.mycompany.backendapi.database.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mycompany.backendapi.database.dto.MemberJoinRequest;
import com.mycompany.backendapi.database.dto.MemberJoinResponse;
import com.mycompany.backendapi.database.dto.MemberLoginRequest;
import com.mycompany.backendapi.database.dto.MemberLoginResponse;
import com.mycompany.backendapi.database.dto.MemberRemoveResponse;
import com.mycompany.backendapi.database.dto.MemberResponse;
import com.mycompany.backendapi.database.dto.MemberUpdateRequest;
import com.mycompany.backendapi.database.entity.Member;
import com.mycompany.backendapi.database.service.MemberService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/database/member")
@Slf4j
public class MemberController {
	@Autowired
	private MemberService memberService;
	
	@PostMapping("/join")
	public MemberJoinResponse join(@RequestBody MemberJoinRequest memberJoinRequest) {
		// Member 엔티티 객체로 변환
		Member member = new Member();
		member.setMid(memberJoinRequest.getMid());
		member.setMname(memberJoinRequest.getMname());
		member.setMpassword(memberJoinRequest.getMpassword());
		member.setMemail(memberJoinRequest.getMemail());
		member.setMenabled(true);
		member.setMrole("ROLE_USER");
		
		//MemberService로 회원 가입 처리 위임
		memberService.join(member);
		
		MemberJoinResponse memberJoinResponse = new MemberJoinResponse();
		memberJoinResponse.setMid(member.getMid());
		memberJoinResponse.setMname(member.getMname());
		memberJoinResponse.setMemail(member.getMemail());
		memberJoinResponse.setMenabled(member.isMenabled());
		memberJoinResponse.setMrole(member.getMrole());
		return memberJoinResponse;
	}
	
	@PostMapping("/login")
	public MemberLoginResponse login(@RequestBody MemberLoginRequest request) {
		// Member 엔티티 객체로 변환
				Member member = new Member();
				member.setMid(request.getMid());
				member.setMpassword(request.getMpassword());
				
				// MemberService로 아이디하고 비밀번호 확인 작업 위임
				// success, wrong-mid, wrong-mpassword
				String result = memberService.login(member);
				
				// 응답 객체 생성
				MemberLoginResponse response = new MemberLoginResponse();
				if (result.equals("wrong-mid")) {
					response.setMessage("아이디가 존재하지 않습니다.");
				} else if (result.equals("wrong-mpassword")) {
					response.setMessage("비밀번호가 틀립니다.");
				}
				response.setResult(result);
				return response;
				
	}
	
	@GetMapping("/info")
	public MemberResponse info(@RequestParam("mid") String mid) {
		Member member = memberService.getMember(mid);
		
		MemberResponse response = new MemberResponse();
		response.setMid(member.getMid());
		response.setMname(member.getMname());
		response.setMemail(member.getMemail());
		response.setMenabled(member.isMenabled());
		response.setMrole(member.getMrole());
		
		return response;
	}
	
	@PutMapping("/modify")
	public Object modify(@RequestBody MemberUpdateRequest request) {
		// 데이터베이스에 있는 정보 가져오기
		Member member = memberService.getMember(request.getMid());
		member.setMpassword(request.getMpassword());
		member.setMemail(request.getMemail());
		member.setMenabled(request.isMenabled());
		// 검색 조건
		member.setMid(request.getMid());
		
		Member modifiedMember = memberService.modify(member);
		
		if (modifiedMember != null) {
			MemberResponse response = new MemberResponse();
			response.setMid(member.getMid());
			response.setMname(member.getMname());
			response.setMemail(member.getMemail());
			response.setMenabled(member.isMenabled());
			response.setMrole(member.getMrole());	
			
			return response;
		} else {
			return "수정 되지 않았음";
		}
		
	}
	
	@DeleteMapping("/remove/{mid}")
	public MemberRemoveResponse remove(@PathVariable("mid") String mid) {
		boolean result = memberService.remove(mid);
		MemberRemoveResponse response = new MemberRemoveResponse();
		
		if (result) {
			response.setResult("success");
		} else {
			response.setResult("failure");
			response.setMessage("mid가 존재하지 않습니다");
		}
		return response;
	}
}
