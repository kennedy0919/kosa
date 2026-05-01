"use client"

import { useState } from "react";

function initBoardList() {
    console.log("initBoardList 실행된다잉")
    const boardList = [];
    for (var i = 1; i <= 3; i++) {
        boardList.push({ bno: i, btitle: "제목" + i })
    }
    return boardList;
}
function Exam07StateInitFun() {

    const [boardList, setBoardList] = useState(initBoardList);

    // 이벤트 처리 함수
    const addBoard = () => {
        setBoardList([...boardList, { bno: 4, btitle: "제목4" }])
    };

    return (
        <div className="card mt-2">
            <div className="card-header">
                Exam07StateInitFun
            </div>
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

export default Exam07StateInitFun;