"use client"

import boardApi from "@/apis/boardApi";
import { AuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

function BoardList() {
    // 쿼리스트림에서 pageNo 얻기
    const queryString = useSearchParams();
    let paramPageNo = queryString.get("pageNo");
    paramPageNo = parseInt(queryString.get("pageNo") || "1");

    // AuthContext 가져오기
    const authContext = useContext(AuthContext);

    // 상태 정의
    const [page, setPage] = useState(null);
    const [pageNo, setPageNo] = useState(paramPageNo);

    // pageNo가 변경될때 자동 실행하는 함수 등록
    useEffect(() => {
        const work = async () => {
            try {
                const response = await boardApi.getBoardList(pageNo);
                setPage(response.data)
            } catch(err) {
                console.log(err);
            }
        };
        work();
    }, [pageNo]);


    // 이벤트 처리 함수
    


    return (
        <div className="card">
            <div className="card-header">BoardList</div>
            <div className="card-body">
                {page != null &&
                    <div>
                        <div className="mb-3">
                            {authContext.user !== "" ? (
                                <Link href={`/Ch08RestAPI/Exam03Board/BoardWrite?pageNo=${pageNo}`} className="btn btn-success btn-sm">생성</Link>
                            ) : ""}
                        </div>
                        <table className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>제목</th>
                                    <th>글쓴이</th>
                                    <th>날짜</th>
                                    <th>조회수</th>
                                </tr>
                            </thead>
                            <tbody>
                                {page.boards.map(board => {
                                    return (
                                        <tr key={board.bno}>
                                            <td>{board.bno}</td>
                                            <td style={{ width: "40%" }}>
                                                {authContext.user !== "" ? (
                                                    <Link href={`BoardRead?bno=${board.bno}&pageNo=${page.pager.pageNo}`}>
                                                        {board.btitle}
                                                    </Link>
                                                ) : (
                                                    board.btitle
                                                )}
                                            </td>
                                            <td>{board.bwriter}</td>
                                            <td>{new Date(board.bdate).toLocaleDateString()}</td>
                                            <td>{board.bhitcount}</td>
                                        </tr>
                                    );
                                })}

                                <tr>
                                    <td colSpan="5" style={{ textAlign: "center" }}>
                                        <button className="btn btn-outline-primary btn-sm me-1" onClick={() => setPageNo(1)}>처음</button>
                                        {(page.pager.groupNo > 1) &&
                                            <button className="btn btn-outline-info btn-sm me-1" onClick={() => setPageNo(page.pager.startPageNo - 1)}>이전</button>
                                        }
                                        {page.pager.pageArray.map(i =>
                                            <button className={`btn ${i === page.pager.pageNo ? "btn-danger" : "btn-outline-success"} btn-sm me-1`} key={i} onClick={() => setPageNo(i)}>{i}</button>
                                        )}
                                        {page.pager.groupNo < page.pager.totalGroupNo &&
                                            <button className="btn btn-outline-info btn-sm me-1" onClick={() => setPageNo(page.pager.endPageNo + 1)}>다음</button>
                                        }
                                        <button className="btn btn-outline-primary btn-sm" onClick={() => setPageNo(page.pager.totalPageNo)}>맨끝</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        </div>
    );
}

export default BoardList;