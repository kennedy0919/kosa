"use client"

import React from "react";

function BoardListItem({
  board,
  removeBoard,
  changeBoard
}) {
  const handleChange = (bno) => {
    changeBoard(bno);
  };

  const handleRemove = (bno) => {
    removeBoard(bno);
  };

  console.log("BoardListItem 리렌더링:", board.bno);

  return (
    <div className="d-flex align-items-center justify-content-between border-bottom">
      <div className="d-flex">
        <span style={{width:"80px"}}>{board.bno}</span>
        <span>{board.btitle}</span>
      </div>
      <div>
        <button className="btn btn-outline-primary btn-sm me-1" onClick={() => handleChange(board.bno)}>변경</button>
        <button className="btn btn-outline-danger btn-sm" onClick={() => handleRemove(board.bno)}>삭제</button>
      </div>
    </div>
  );
}

export default React.memo(BoardListItem);