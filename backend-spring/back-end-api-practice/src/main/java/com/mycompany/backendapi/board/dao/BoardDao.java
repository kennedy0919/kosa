package com.mycompany.backendapi.board.dao;

import org.apache.ibatis.annotations.Mapper;

import com.mycompany.backendapi.board.entity.Board;

@Mapper
public interface BoardDao {
	int insert(Board board);
    Board selectByBno(int bno);
}
