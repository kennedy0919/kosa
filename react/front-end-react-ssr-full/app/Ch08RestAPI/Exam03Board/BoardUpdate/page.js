"use client"

import { useEffect, useRef, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import boardApi from "@/apis/boardApi";

function BoardUpdate() {
  //쿼리스트링에서 bno 얻기
  const bno = parseInt(useSearchParams().get("bno"));

  //상태 선언
  const [board, setBoard] = useState({
    bno: "",
    btitle: "",
    bcontent: "",
  });

  //수정할 게시물 가져오기
  useEffect(() => {
    const work = async () => {
      try {
        const response = await boardApi.boardRead(bno)
        console.log(response);
        setBoard({
          bno: response.data.bno,
          btitle: response.data.btitle,
          bcontent: response.data.bcontent
        });
      } catch(error) {
          console.log(error);
      };
    };
    work();
  }, [bno]);

  //폼의 입력값을 상태에 저장
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

  //게시물 업데이트 요청
  const handleUpdate = async (event) => {
    event.preventDefault();
    const multipartFormData = new FormData();
    multipartFormData.append("bno", board.bno);
    multipartFormData.append("btitle", board.btitle);
    multipartFormData.append("bcontent", board.bcontent);
    if(inputFile.current.files.length === 1) {
      multipartFormData.append("battach", inputFile.current.files[0]);
    }
    await boardApi.boardUpdate(multipartFormData);
    router.back();
  };

  //취소하기
  const handleCancel = (event) => {
    router.back();
  };

  return (
    <div className="card">
      <div className="card-header">BoardUpdate</div>
      <div className="card-body">
        <form onSubmit={handleUpdate}>
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
            <input type="submit" className="btn btn-primary btn-sm me-2" value="수정" />
            <input type="button" className="btn btn-primary btn-sm" value="취소" onClick={handleCancel}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BoardUpdate;
