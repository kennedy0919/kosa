'use client';

import { createContext, useState } from "react";

// 색상 관련 전역 상태를 관리하는 Context 생성
export const ColorContext = createContext();

// ColorContext를 제공하는 Provider 컴포넌트
// 앱 전체에서 색상 정보를 공유하기 위해 사용
export function ColorContextProvider({ children }) {
  // 색상 상태 관리
  // 기본값은 빈 문자열 또는 원하는 초기 색상으로 설정
  const [color, setColor] = useState("black");

  // Context를 통해 제공할 전역 상태 객체
  const value = {
    color,        // 현재 색상 값
    setColor,     // 색상을 업데이트하는 함수
  };

  // Provider를 통해 하위 컴포넌트에 value 전달
  return (
    <ColorContext.Provider value={value}>
      {children}
    </ColorContext.Provider>
  );
}
