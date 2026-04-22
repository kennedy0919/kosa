"use client"

import { useState, useRef, useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import boardAPI from "@/apis/boardApi";
import { useRouter } from "next/navigation";

function BoardWriteForm() {
  //상태 선언
  const [board, setBoard] = useState({
    btitle: "",
    bcontent: "",
  });

  //전역 상태 얻기
  const authContext = useContext(AuthContext)

  //폼 입력값을 상태에 저장
  const handleChange = (event) => {
    setBoard({
      ...board,
      [event.target.name]: event.target.value
    });
  };

  //DOM 참조 선언
  const inputFile = useRef();

  //내비게이션 객체 얻기
  const router = useRouter();

  //게시물 생성
  const handleAdd = async (event) => {
      try {
        event.preventDefault();
        const multipartFormData = new FormData();
        multipartFormData.append("btitle", board.btitle);
        multipartFormData.append("bcontent", board.bcontent);
        multipartFormData.append("bwriter", authContext.user);
        if(inputFile.current.files.length === 1) {
          multipartFormData.append("battach", inputFile.current.files[0]);
        }
        await boardAPI.boardWrite(multipartFormData);
        router.back();
      } catch (error) {
        console.log(error);
      }
  };

  //취소 핸들러
  const handleCancel = (event) => {
    router.back();
  };

  return (
    <div className="card">
      <div className="card-header">BoardWrite</div>
      <div className="card-body">
        <form onSubmit={handleAdd}>
          <div className="mb-2">
            <label htmlFor="btitle" className="form-label">btitle</label>
            <input type="text" className="form-control" name="btitle" value={board.btitle} onChange={handleChange}/>
          </div>
          <div className="mb-2">
            <label htmlFor="bcontent" className="form-label">bcontent</label>
            <input type="text" className="form-control" name="bcontent" value={board.bcontent} onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="battach" className="form-label">battach</label>
            <input type="file" className="form-control" name="battach" ref={inputFile}/>
          </div>
          <div className="d-flex justify-content-center">
            <input type="submit" className="btn btn-primary btn-sm me-2" value="추가" />
            <input type="button" className="btn btn-primary btn-sm" value="취소" onClick={handleCancel}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BoardWriteForm;
