"use client"

import { useState } from "react";

function Exam03ObjectTypeState() {
    // 상태 정의
    const [state, setState] = useState({
        number: 0,
        color: "black"
    });

    // 이벤트 처리 함수
    const addNumber = function() {
        // 완전히 새로운 객체를 생성해서 매개값으로 전달
        setState({
            ...state,
            number: state.number + 1
        });
    };

    const changeColor = () => {
        // 완전히 새로운 객체를 생성해서 매개값으로 전달
        setState({
            ...state,
            color: getRandomColor()
        });
    };

    const getRandomColor = function() {
        return "#" + Math.floor(Math.random() * parseInt("ffffff", 16)).toString(16);
    };

    ////////////////////////////////////////////////////////////////
    // 상태 정의
    const [boards, setBoards] = useState([
        {bno:1, btitle:"제목1", bwriter:"사용자1"},
        {bno:2, btitle:"제목2", bwriter:"사용자2"},
        {bno:3, btitle:"제목3", bwriter:"사용자3"}
    ]);

    // 이벤트 처리 함수
    const addBoard = function() {
        const newBoard = {bno:4, btitle:"제목4", bwriter:"사용자4"}
        // 방법 1
        setBoards([...boards, newBoard])
        // setBoards(boards => [...boards, newBoard])
        // 방법 2
        // setBoards(boards.concat(newBoard));
        // setBoards(boards => boards.concat(newBoard))
    };

    const changeBoard = () => {
        setBoards(boards.map(board => {
            if(board.bno !== 2) return board;
            else return {...board, btitle:"제목 수정2"};
        }));
    };

    return (
        <div className="card mt-2">
            <div className="card-header">
                Exam03ObjectTypeState
            </div>
            <div className="card-body">
                <button onClick={addNumber} className="btn btn-info btn-sm me-2">숫자 증가</button>
                <button onClick={changeColor} className="btn btn-info btn-sm me-2">색깔 변경</button>
                <hr/>
                <h3 style={{color: state.color}}>{state.number}</h3>

                <hr/>
                
                <button onClick={addBoard} className="btn btn-info btn-sm me-2">게시물 추가</button>
                <button onClick={changeBoard} className="btn btn-info btn-sm me-2">게시물 변경</button>
                <hr/>
                <table className="table table-hover">
                    <thead>
                        <tr className="text-center">
                            <th>bno</th>
                            <th>btitle</th>
                            <th>bwriter</th>
                        </tr>
                    </thead>
                    <tbody>
                        {boards.map(board => (
                            <tr className="text-center" key={board.bno}>
                                <td>{board.bno}</td>
                                <td>{board.btitle}</td>
                                <td>{board.bwriter}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Exam03ObjectTypeState;