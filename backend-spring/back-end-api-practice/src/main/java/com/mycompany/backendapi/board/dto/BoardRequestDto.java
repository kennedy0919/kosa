package com.mycompany.backendapi.board.dto;

import lombok.Data;

@Data
public class BoardRequestDto {
	private String btitle;
    private String bcontent;
    private String bwriter;
}
