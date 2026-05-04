"use client"

import boardApi from "@/apis/boardApi";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "@/contexts/AuthContext";


function BoardRead() {
    // 쿼리스트링에서 bno와 pageNo 받기
    const queryString = useSearchParams();
    const strBno = queryString.get("bno");
    const pageNo = queryString.get("pageNo");
    console.log("pageNo", pageNo)

    // 상태 정의
    const [bno, setBno] = useState(parseInt(strBno));
    const [board, setBoard] = useState(null);
    const [imgSrc, setImgSrc] = useState(null);

    // 상태 bno가 변경이 되었을때 자동 호출되는 함수 등록
    useEffect(() => {
        const work = async () => {
            try {
                const response = await boardApi.boardRead(bno);
                setBoard(response.data);
                console.log("response.data: ", response.data);
            } catch (error) {
                console.log(error)
            }
        };
        work();
    }, [bno]);

    useEffect(() => {
        const work = async () => {
            try {
                if (board != null && board.battachoname) {
                    const response = await boardApi.boardAttachDownload(board.bno);
                    // 바이너리 데이터는 <Imgage> 또는 <img>의 src 값으로 바로 사용할 수 없음
                    // 반드시 URL 형태로 제공 URL.createObjectURL는 바이너리데이터를 URL 형식으로 변환
                    setImgSrc(URL.createObjectURL(response.data));
                }
            } catch (error) {
                console.log(error)
            }
        };
        work();
    }, [board]);

    // 전역상태 accessToken 가져오기
    const authContext = useContext(AuthContext);
    const router = useRouter();

    // 이벤트 함수 정의
    const handleRemove = async () => {
        try {
            await boardApi.boardDelete(bno);
            router.push("BoardList");
        } catch (error) {
            console.log(error);
        }
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
                                <p>battachoname:
                                    {board.battachoname &&
                                        <a href={`${axios.defaults.baseURL}/board/battach/${bno}?accessToken=${authContext.accessToken}`}>
                                            {board.battachoname}
                                        </a>
                                    }
                                </p>
                                <p>battachtype: {board.battachtype}</p>
                            </div>
                            <div className="col-md-6">
                                {imgSrc &&
                                    <Image src={imgSrc} alt="" width="200" height="150" />
                                }
                                {board.battachoname &&
                                    <div>
                                        <hr />
                                        <img src={`${axios.defaults.baseURL}/board/battach/${bno}?accessToken=${authContext.accessToken}`} alt="" width="200" height="150"></img>
                                    </div>
                                }
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