"use client"

import { createContext, useState, useEffect, startTransition } from "react";
import axiosConfig from "@/apis/axiosConfig";

// 인증 관련 전역 상태를 관리하는 Context 생성
export const AuthContext = createContext();

// AuthContext를 제공하는 Provider 컴포넌트
// 앱 전체에서 사용자 인증 정보를 공유하기 위해 최상위에서 감싸줌
export function AuthContextProvider({ children }) {
  // 사용자 정보 상태 관리
  const [user, setUser] = useState("");
  const [accessToken, setAccessToken] = useState("");
  //브라우저 갱신시 로그인 또는 로그인폼이 잠깐 나왔다가 사라지는 현상 방지용 
  const [isLoading, setIsLoading] = useState(true);

  //로컬 스토리지에서 읽기
  useEffect(() => {
    // startTransition으로 감싸서 React 19의 경고 방지
    // React 19는 useEffect 내부의 동기적 setState를 경고함 (실행에는 영향 없음)
    // startTransition으로 감싸면 "transition 업데이트"로 마킹되어 경고 예외 처리됨
    // 감싼 코드는 즉시 실행되며, 변경된 상태를 보여주는 UI 렌더링이 우선순위만 낮아짐   
    startTransition(() => {
      setUser(localStorage.getItem("user") || "");
      setAccessToken(localStorage.getItem("accessToken") || "");
      setIsLoading(false);
    });
  }, []);

  //로그인, 로그아웃시 런타임시 상태가 변경되면 로컬 스토리지 변경 및 Axios 설정 변경
  useEffect(() => {
    if(user !== "") {
      localStorage.setItem("user", user);
      localStorage.setItem("accessToken", accessToken);    
      axiosConfig.addAuthHeader(accessToken);  
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      axiosConfig.removeAuthHeader();
    }
  }, [user, accessToken]);

  // Context를 통해 제공할 전역 상태 객체
  const value = {
    user,
    accessToken,
    setUser,
    setAccessToken,
  };

  // 로딩 중일 때는 아무것도 렌더링하지 않음
  // 브라우저 갱신시 로그인 또는 로그인폼이 잠깐 나왔다가 사라지는 현상 방지   
  if (isLoading) {
    return null;
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}