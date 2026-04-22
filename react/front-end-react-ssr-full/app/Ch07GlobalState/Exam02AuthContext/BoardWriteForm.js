"use client"

import { useEffect, useCallback, useContext, useState, startTransition } from "react";
import { AuthContext } from "@/contexts/AuthContext";

function BoardWriteForm() {
  const authContext = useContext(AuthContext);

  // board 상태 관리 - bwriter는 제출 시점에 authContext.user 사용
  const [board, setBoard] = useState({
    btitle: "",
    bcontent: "",
    bwriter: ""
  });

  //authContext.user가 변경되면 board.bwriter도 변경
  useEffect(() => {
    // startTransition으로 감싸서 React 19의 경고 방지
    // React 19는 useEffect 내부의 동기적 setState를 경고함 (실행에는 영향 없음)
    // startTransition으로 감싸면 "transition 업데이트"로 마킹되어 경고 예외 처리됨
    // 감싼 코드는 즉시 실행되며, 렌더링 우선순위만 낮아짐    
    startTransition(() => {
      setBoard(prevBoard => {
        if(prevBoard.bwriter !== authContext.user) {
          return {...prevBoard, bwriter:authContext.user};
        } else {
          return prevBoard;
        }
      });
    });
  }, [authContext.user]);  

  const handleChange = useCallback(event => {
    setBoard(prevBoard => {
      const newBoard = {...prevBoard, [event.target.name]:event.target.value}
      return newBoard;
    });
  }, []);

  const handleAdd = useCallback(event => {
    event.preventDefault();
    console.log(board);
  }, [board]);

  return (
    <div className="card">
      <div className="card-header">
        BoardWriteForm
      </div>
      <div className="card-body">
        <form onSubmit={handleAdd}>
          <div className="form-group row">
            <label htmlFor="btitle" className="col-sm-2 col-form-label">btitle</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="btitle" name="btitle" value={board.btitle} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="bcontent" className="col-sm-2 col-form-label">bcontent</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="bcontent" name="bcontent" value={board.bcontent} onChange={handleChange}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="bwriter" className="col-sm-2 col-form-label">bwriter</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" id="bwriter" name="bwriter" value={board.bwriter} readOnly/>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-12 d-flex justify-content-center">
              <input type="submit" className="btn btn-info btn-sm mt-2 me-2" value="추가"/>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BoardWriteForm;