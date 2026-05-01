"use client"

import { AuthContext } from "@/contexts/AuthContext";
import { startTransition, useCallback, useContext, useEffect, useState } from "react";


function BoardWriteForm() {
    // AuthContext 가져오기
    const authContext = useContext(AuthContext);


    // 상태 정의
    const [board, setBoard] = useState({
        btitle: "",
        bcontent: "",
        bwriter: ""
    });

    // 전역 상태가 변경되었을 때 자동으로 콜백되는 함수 등록
    useEffect(() => {
        startTransition(() => {
            setBoard(b => ({...b, bwriter: authContext.user}))
        });
    }, [authContext.user])

    // 이벤트 처리 함수 정의
    const handleChange = useCallback((event) => {
        setBoard((b) => ({...b, [event.target.name]: event.target.value}))
    }, []);

    const handleAdd = () => {
        console.log(board);
    };

    return (
        <div className="card mt-2">
            <div className="card-header">
                BoardWriteForm
            </div>
            <div className="card-body">
                <div>
                    <div className="form-group row">
                        <label  className="col-sm-2 col-form-label">btitle</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" name="btitle" value={board.btitle} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label  className="col-sm-2 col-form-label">bcontent</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control"  name="bcontent" value={board.bcontent} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">bwriter</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control"  name="bwriter" value={board.bwriter} readOnly />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-12 d-flex justify-content-center">
                            <input type="submit" className="btn btn-info btn-sm mt-2 me-2" value="추가" onClick={handleAdd} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardWriteForm;