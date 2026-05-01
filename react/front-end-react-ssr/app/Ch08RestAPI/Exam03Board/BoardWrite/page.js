"use client"

import boardApi from "@/apis/boardApi";
import { AuthContext } from "@/contexts/AuthContext";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useRef, useState } from "react";

function BoardWrite() {

    // 쿼리스티링에서 pageNo얻기
    const queryString = useSearchParams();
    const pageNo = queryString.get("pageNo");

    // 상태 정의
    const [board, setBoard] = useState({
        btitle: "",
        bcontent: "",
    });

    // 파일 양식 객체 참조
    const inputFile = useRef();

    // AuthContext 가져오기 (전역객체)
    const authContext = useContext(AuthContext);

    // 페이지 컴포넌트 이동을 위해 라우터 얻기
    const router = useRouter();

    // 이벤트 처리 함수 정의
    const handleChange = (event) => {
        setBoard(board => ({ ...board, [event.target.name]: event.target.value }));
    };

    const handleAdd = async () => {
        try {
            // FormData 생성(멀티파트 객체)
            const formData = new FormData();
            // 문자 파트 추가
            formData.append("btitle", board.btitle);
            formData.append("bcontent", board.bcontent);
            // 파일 파트 추가
            if (inputFile.current.files.length === 1) {
                formData.append("battach", inputFile.current.files[0]);
            }

            await boardApi.boardWrite(formData);
            // 게시물 목록 1페이지로 이동
            router.push("BoardList?pageNo=" + 1);
        } catch (error) {
            console.log(err);
        }
    };

    const handleCancel = () => {
        // 이전 페이지 컴포넌트로 이동
        router.push("BoardList?pageNo=" + pageNo);
    }


    return (
        <div className="card mt-2">
            <div className="card-header">
                BoardWrite
            </div>
            <div className="card-body">
                <div>
                    <div className="mb-2">
                        <label htmlFor="btitle" className="form-label">btitle</label>
                        <input type="text" className="form-control" name="btitle" value={board.btitle} onChange={handleChange} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="bcontent" className="form-label">bcontent</label>
                        <input type="text" className="form-control" name="bcontent" value={board.bcontent} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="battach" className="form-label">battach</label>
                        <input type="file" multiple className="form-control" name="battach" ref={inputFile} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary btn-sm me-2" onClick={handleAdd}>추가</button>
                        <button className="btn btn-primary btn-sm" onClick={handleCancel}>취소</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardWrite;