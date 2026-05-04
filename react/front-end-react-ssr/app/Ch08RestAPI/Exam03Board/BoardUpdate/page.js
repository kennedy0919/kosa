"use client"

import boardApi from "@/apis/boardApi";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function BoardUpdate() {

    const queryString = useSearchParams();
    const bno = parseInt(queryString.get("bno"));

    const [board, setBoard] = useState({
        bno: "",
        btitle: "",
        bcontent: ""
    });

    // 마운트 될때 딱 1번 콜백되는 함수 등록
    useEffect(() => {
        const work = async () => {
            try {
                const response = await boardApi.boardRead(bno);
                setBoard(b => ({
                    // bno: response.data.bno,
                    // btitle: response.data.btitle,
                    // bcontent: response.data.bcontent
                    bno: response.data.bno ?? "",
                    btitle: response.data.btitle ?? "",
                    bcontent: response.data.bcontent ?? ""
                }))
            } catch (error) {
                console.log(error);
            }
        }
        work();
    }, []);

    const handleChange = (event) => {
        setBoard(b => ({ ...b, [event.target.name]: event.target.value }))
    };

    // Dom 참조
    const inputFile = useRef();
    const router = useRouter();


    const handleUpdate = async () => {
        const formData = new FormData();
        // 문자파트 추가
        formData.append("bno", board.bno);
        formData.append("btitle", board.btitle);
        formData.append("bcontent", board.bcontent);
        console.log("bcontent", board.bcontent);
        // 파일 파트 추가
        if (inputFile.current.files.length === 1) {
            formData.append("battach", inputFile.current.files[0])
        }
        await boardApi.boardUpdate(formData);
        router.back();
    };
    // multipart/form-data 객체 생성

    const handleCancel = () => {
        router.back();
    };

    


    return (
        <div className="card mt-2">
            <div className="card-header">
                BoardUpdate
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
                        <input type="file" className="form-control" name="battach" ref={inputFile} />
                    </div>
                    <div className="d-flex justify-content-center">
                        <input type="button" className="btn btn-primary btn-sm me-2" value="수정" onClick={handleUpdate} />
                        <input type="button" className="btn btn-primary btn-sm" value="취소" onClick={handleCancel} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardUpdate;