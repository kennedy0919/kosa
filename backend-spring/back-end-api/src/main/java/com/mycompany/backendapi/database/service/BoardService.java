package com.mycompany.backendapi.database.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mycompany.backendapi.database.dao.BoardDao;
import com.mycompany.backendapi.database.dto.Pager;
import com.mycompany.backendapi.database.entity.Board;

@Service
public class BoardService {
	@Autowired
	private BoardDao boardDao;
	
	public int getTotalRows() {
		
		int rows = boardDao.countAllRows();
		return rows;
	}

	public List<Board> getList(Pager pager) {
		List<Board> boards = boardDao.selectPage(pager);
		return boards;
	}
	
}
