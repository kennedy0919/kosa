"use client"

import { useState } from "react";
import ChildComponent from "./ChildComponent";
import Image from "next/image";

function Exam04StateToProp() {
  const [imgFile, setImgFile] = useState("photo1.jpg");
  
  const changeImg = () => {
    if(imgFile === "photo1.jpg") {
      setImgFile("photo2.jpg");
    } else {
      setImgFile("photo1.jpg");
    }
  };

  return (
    <div className="card">
      <div className="card-header">Exam04StateToProp</div>
      <div className="card-body">
        <div className="mb-2">
          {/* Node.js 환경에서 실행할 경우: 이미지 최적화 기능 적용 */}
          {/* 이미지 최적화 기능: 크기 조절, 포맷 변환, 지연 로딩, 자동 캐싱등을 말함 */}
          {/* public/*는 빌드 후 .next/images/* 폴더에 저장 */}
          {/* <Image src={`/images/${imgFile}`} alt="" width="150" height="100"/> */}

          {/* 정적 내보내기를 할 경우 사용 */}
          {/* 이미지 최적화 기능 사용 안함 */}
          {/* public/*는 빌드 후 out/* 폴더로 저장 */}
          <img src={`/images/${imgFile}`} alt="" width="150" height="100"/>
        </div>
        <ChildComponent imgFile={imgFile} changeImg={changeImg}/> 
      </div>
    </div>
  );
}

export default Exam04StateToProp;