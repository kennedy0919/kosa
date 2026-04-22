"use client"

import { useState } from "react";

function initBoardList() {
  console.log("initBoardList() 실행");
  const boardList = [];
  for (var i = 1; i <= 3; i++) {
    boardList.push({ bno: i, btitle: "제목" + i });
  }
  return boardList;
}

function Exam06StateInitFun() {
  const [boardList, setBoardList] = useState(initBoardList()); //상태 변경시 마다 호출(x)
  //const [boardList, setBoardList] = useState(initBoardList); //한번만 호출(o)

  const [newBno, setNewBno] = useState(4);

  const addBoard = (event) => {
    const board = { bno: newBno, btitle: "제목" + newBno };
    setBoardList(boardList.concat(board));
    setNewBno(newBno + 1);
  };

  return (
    <div className="card">
      <div className="card-header">UseStateInitFun</div>
      <div className="card-body">
        <button className="btn btn-success btn-sm" onClick={addBoard}>추가</button>
        <table className="table table-hover">
          <thead>
            <tr className="text-center">
              <th>bno</th>
              <th>btitle</th>
            </tr>
          </thead>
          <tbody>
            {boardList.map((board) => (
              <tr className="text-center" key={board.bno}>
                <th>{board.bno}</th>
                <td>{board.btitle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Exam06StateInitFun;
