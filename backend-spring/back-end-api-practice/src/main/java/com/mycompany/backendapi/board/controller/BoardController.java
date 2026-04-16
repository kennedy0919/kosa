package com.mycompany.backendapi.board.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mycompany.backendapi.board.dto.BoardRequestDto;
import com.mycompany.backendapi.board.dto.BoardResponseDto;
import com.mycompany.backendapi.board.service.BoardService;

@RestController
@RequestMapping("/api")
public class BoardController {
	@Autowired
	private BoardService boardService;
	
	@PostMapping("/boards")
	public BoardResponseDto create(@RequestBody BoardRequestDto dto) {
        return boardService.createBoard(dto);
    }
}
