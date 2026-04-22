"use client"

import { useCallback, useMemo, useState } from "react";
import BoardListItem from "./BoardListItem";

function getBoards() {
  const boards = [];
  for(var i=5; i>=1; i--) {
    boards.push({bno:i, btitle:"제목"+i, selected:false});
  }
  return boards;
}

function BoardList() {
  const [bno, setBno] = useState(6);
  const [btitle, setBtitle] = useState("");  
  const [boards, setBoards] = useState(getBoards);

  const getLength = useMemo(() => {
    return boards.length
  }, [boards]);

  const handleBtitleChange = useCallback((event) => {
    setBtitle(event.target.value);
  }, []);

  const addBoard = (event) => {
    const newBoard = {bno, btitle};
    const newBoards = boards.concat(newBoard);
    newBoards.sort((a, b) => b.bno-a.bno);
    setBoards(newBoards);
    setBno(bno + 1);
    setBtitle("");
  };

  //---------------------------------------------------------------
  //boards 상태가 변경되더라도 함수가 리렌더링시 재선언되지 않도록 해야함
  const changeBoard = useCallback((argBno) => {
    setBoards(prevBoards => {
      const newBoards = prevBoards.map(board => {
        if(board.bno === argBno) {
          const newBoard = {...board, btitle:board.btitle+"(변경)"};
          return newBoard;
        } else {
          return board;
        }
      });
      return newBoards;
    });
  }, []);  

  //boards 상태가 변경되더라도 함수가 리렌더링시 재선언되지 않도록 해야함
  const removeBoard = useCallback((bno) => {
    setBoards(prevBoards => {
      const newBoards = prevBoards.filter(board => board.bno !== bno);
      return newBoards;
    });
  }, []);
//---------------------------------------------------------------

  return (
    <div className="card">
      <div className="card-header">BoardList</div>
      <div className="card-body">
          <div>
            <div className="mb-2">게시물 수: {getLength}</div>
            <div className="d-flex align-items-center mt-2 mb-3">
              <span className="me-2">제목:</span>
              <input type="text" value={btitle} onChange={handleBtitleChange}/>
              <button className="btn btn-info btn-sm ms-2" onClick={addBoard}>추가</button>
            </div>
          </div>
          <div className="d-flex bg-info">
            <span className="border" style={{width:"80px"}}>번호</span>
            <span className="border flex-fill">제목</span>
          </div>
          {boards.map((board) => (
            <BoardListItem key={board.bno} 
                           board={board} 
                           removeBoard={removeBoard}
                           changeBoard={changeBoard}/>
          ))}
      </div>
    </div>
  );
}

export default BoardList;