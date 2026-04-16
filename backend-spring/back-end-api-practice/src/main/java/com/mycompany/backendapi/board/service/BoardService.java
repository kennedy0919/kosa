package com.mycompany.backendapi.board.service;

import com.mycompany.backendapi.board.dto.BoardRequestDto;
import com.mycompany.backendapi.board.dto.BoardResponseDto;

public interface BoardService {
	BoardResponseDto createBoard(BoardRequestDto dto);
}
