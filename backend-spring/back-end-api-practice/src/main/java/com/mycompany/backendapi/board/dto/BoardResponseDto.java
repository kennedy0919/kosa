package com.mycompany.backendapi.board.dto;

import java.util.Date;

import lombok.Data;

@Data
public class BoardResponseDto {
	private int bno;
    private String btitle;
    private String bcontent;
    private String bwriter;
    private Date bdate;
}
