"use client"

import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import Image from "next/image";

function AppHeader() {
  //Ch07: Global State
  const authContext = useContext(AuthContext);

  //Ch07: Global State
  const handleLogout = () => {
    authContext.setUser("");
    authContext.setAccessToken("");
  } 

  return (
    <nav className="navbar justify-content-between bg-dark">
      <Link href="/" className="navbar-brand ps-2 text-white">
        {/* Node.js 환경에서 실행할 경우: 이미지 최적화 기능 적용 */}
        {/* 이미지 최적화 기능: 크기 조절, 포맷 변환, 지연 로딩, 자동 캐싱등을 말함 */}
        {/* public/*는 빌드 후 .next/* 폴더에 저장 */}
        {/* <Image src="/logo512.png" alt="" width="30" height="30" className="align-top"/> */}

        {/* 정적 내보내기를 할 경우 사용 */}
        {/* 이미지 최적화 기능 사용 안함 */}
        {/* public/*는 빌드 후 out/* 폴더로 저장 */}
        <img src="/logo512.png" alt="" width="30" height="30" className="align-top"/>
        
        {' '} React
      </Link>

      {/* <div className="pe-2">
        <Link href="/" className="btn btn-success btn-sm">로그인</Link>
      </div> */}

      {/* Ch07: Context */}
      <div className="me-2">
        {(authContext.user === "")? (
          <Link href="/Ch07GlobalState/Exam02AuthContext" className="btn btn-success btn-sm">로그인</Link>
        ) : (
          <div className="d-flex align-items-center">
            <span className="me-2 text-white">User ID: {authContext.user}</span>
            <button className="btn btn-success btn-sm" onClick={handleLogout}>로그아웃</button>
          </div> 
        )}
      </div>      
    </nav>
  );
}

export default AppHeader;