package com.mycompany.backendapi.board.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mycompany.backendapi.board.dao.BoardDao;
import com.mycompany.backendapi.board.dto.BoardRequestDto;
import com.mycompany.backendapi.board.dto.BoardResponseDto;
import com.mycompany.backendapi.board.entity.Board;

@Service
public class BoardServiceImpl implements BoardService{
	
	@Autowired
	private BoardDao boardDao;

    @Override
    public BoardResponseDto createBoard(BoardRequestDto dto) {

        // 1. DTO → Entity
        Board board = new Board();
        board.setBtitle(dto.getBtitle());
        board.setBcontent(dto.getBcontent());
        board.setBwriter(dto.getBwriter());

        // 2. DB 저장
        boardDao.insert(board);

        // 3. Response DTO
        BoardResponseDto res = new BoardResponseDto();
        res.setBno(board.getBno());
        res.setBtitle(board.getBtitle());
        res.setBcontent(board.getBcontent());
        res.setBwriter(board.getBwriter());
        res.setBdate(board.getBdate());

        return res;
    }
}
