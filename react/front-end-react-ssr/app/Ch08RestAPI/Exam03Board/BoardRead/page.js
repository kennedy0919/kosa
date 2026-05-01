"use client"

import boardApi from "@/apis/boardApi";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function BoardRead() {
    // 쿼리스트링에서 bno와 pageNo 받기
    const queryString = useSearchParams();
    const strBno = queryString.get("bno");
    const pageNo = queryString.get("pageNo");

    // 상태 정의
    const [bno, setBno] = useState(parseInt(strBno));
    const [board, setBoard] = useState(null);
    

    // 상태 bno가 변경이 되었을때 자동 호출되는 함수 등록
    useEffect(() => {
        const work = async () => {
            try {
                const response = await boardApi.boardRead(bno);
                setBoard(response.data);
            } catch (error) {
                console.log(error)
            }
        };
        work();
    }, [bno]);

    

    // 이벤트 함수 정의
    const handleRemove = () => {

    };

    return (
        <div className="card mt-2">
            <div className="card-header">
                BoardRead
            </div>
            <div className="card-body">
                {board &&
                    <div>
                        <div className="row">
                            <div className="col-md-6">
                                <p>bno: {board.bno}</p>
                                <p>btitle: {board.btitle}</p>
                                <p>bcontent: {board.bcontent}</p>
                                <p>bwriter: {board.bwriter}</p>
                                <p>bdate: {new Date(board.bdate).toLocaleDateString()}</p>
                                <p>bhitcount: {board.bhitcount}</p>
                                <p>battachoname: {board.battachoname}</p>
                                <p>battachtype: {board.battachtype}</p>
                            </div>
                            
                        </div>
                        <div className="mt-3">
                            <Link href={"BoardList?pageNo=" + pageNo} className="btn btn-info btn-sm me-2">
                                목록
                            </Link>
                            <Link href={`BoardUpdate?bno=${board.bno}`} className="btn btn-info btn-sm me-2">
                                수정
                            </Link>
                            <button className="btn btn-info btn-sm mr-2" onClick={handleRemove}>
                                삭제
                            </button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default BoardRead;