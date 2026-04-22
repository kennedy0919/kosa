"use client"

import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation"
import boardApi from "@/apis/boardApi";
import axios from "axios";
import { AuthContext } from "@/contexts/AuthContext";
import Image from "next/image";

function BoardRead() {
  //쿼리스트링에서 값 얻기
  const queryString = useSearchParams();
  const bno = queryString.get("bno");
  const pageNo = queryString.get("pageNo");
  const caller = queryString.get("caller");

  //상태 선언
  const [board, setBoard] = useState({});

  //게시물을 요청해서 상태에 저장
  useEffect(() => {
    const work = async () => {
      try {
        const response = await boardApi.boardRead(bno, caller);
        setBoard(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    work();
  }, [bno, caller]);

  //게시물 삭제 요청
  const router = useRouter();
  const handleRemove = async (event) => {
    try {
      await boardApi.boardDelete(board.bno);
      router.push("BoardList?pageNo=" + pageNo);
    } catch (error) {
      console.log(error);
    }
  };

  //방법1: 첨부 파일 다운로드를 Axios 이용
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    if (board.battachoname) {
      const work = async () => {
        try {
          const response = await boardApi.boardAttachDownload(board.bno);
          setImgSrc(URL.createObjectURL(response.data));
        } catch (error) {
          console.log(error);
        }
      };
      work();
    }
  }, [board]);
  
  //방법2: 첨부 파일 다운로드를 <img> 태그의 src 이용
  const authContext = useContext(AuthContext);

  return (
    <div className="card">
      <div className="card-header">BoardRead</div>
      {board && (
        <div className="card-body">
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
            <div className="col-md-6">
              {board.battachoname && (
                <>
                  {/* 방법1 */}
                  {/* <Image/>는 Blob 지원하지 않음 */}
                  <img src={imgSrc} alt="" width="200" height="150"/>

                  <hr />

                  {/* 방법2 */}
                  {/* <Image/>는 Blob 지원하지 않음 */}
                  <img
                    src={`${axios.defaults.baseURL}/database/board/battach/${board.bno}?accessToken=${authContext.accessToken}`}
                    alt=""
                    width="200" height="150"/>
                </>
              )}
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
      )}
    </div>
  );
}

export default BoardRead;
