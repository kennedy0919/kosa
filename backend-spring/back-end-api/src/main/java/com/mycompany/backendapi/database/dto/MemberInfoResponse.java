package com.mycompany.backendapi.database.dto;

import lombok.Data;

@Data
public class MemberInfoResponse {
	private String mid;
	private String mname;
	private String memail;
	private boolean menabled;
	private String mrole;
}
