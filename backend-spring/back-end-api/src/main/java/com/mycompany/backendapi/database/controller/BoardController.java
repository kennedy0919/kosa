package com.mycompany.backendapi.database.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mycompany.backendapi.database.dto.BoardListItemResponse;
import com.mycompany.backendapi.database.dto.Pager;
import com.mycompany.backendapi.database.entity.Board;
import com.mycompany.backendapi.database.service.BoardService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/database/board")
@Slf4j
public class BoardController {
	@Autowired
	private BoardService boardService;
	
	@GetMapping("/list")
	public Map<String, Object> list(@RequestParam(value="pageNo", defaultValue="1") int pageNo) {
		// 페이징 대상이 되는 전체 행의 수 얻기
		int totalRows = boardService.getTotalRows();
		// 페이징 정보를 담고 있는 pager 생성
		Pager pager = new Pager(10, 5, totalRows, pageNo);
		// 현재 페이지 내용 가져오기
		List<Board> list = boardService.getList(pager);
		List<BoardListItemResponse> listItems = new ArrayList<>();
		for (Board board : list) {
			BoardListItemResponse item = new BoardListItemResponse();
			item.setBno(board.getBno());
			item.setBtitle(board.getBtitle());
			item.setBwriter(board.getBwriter());
			item.setBdate(board.getBdate());
			item.setBhitcount(board.getBhitcount());
			listItems.add(item); 
		}
		
		// JSON 응답을 위한 MAP 리턴
		Map<String, Object> map = new HashMap<>();
		map.put("pager", pager);
		map.put("boards", listItems);
		
		return map;
		
	}
	
	@PostMapping("/create")
	public void create() {
		public BoardCreateResponse create(@ModelAttribute MoardCreateRequest request) {
			
		}
	}
	
	
	@RequestMapping("/read")
	public void read() {
		
	}
	@PutMapping("/update")
	public void update() {
		
	}
	@DeleteMapping("/delete")
	public void delete() {
		
	}
	@GetMapping("/battach")
	public void battach() {
		
	}
}
