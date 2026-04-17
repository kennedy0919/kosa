package com.mycompany.backendapi.database.dto;

import lombok.Data;

@Data
public class MemberLoginResponse {
	private String result;  // success, wrong-mid, wrong-mpassword
	private String message;  // 실패에 대한 상세 내용
	private String AccessToken;  // 성공시 JWT 토큰
	
}
