"use client"

import { addAuthHeader, removeAuthHeader } from "@/apis/AxiosConfig";
import { createContext, startTransition, useEffect, useState } from "react";

// 컴포넌트에서 AuthContext를 사용하므로 export 해야함
export const AuthContext = createContext();

// 배치를 위한 컴포넌트
function AuthContextProvider({ children }) {

    // 상태 정의
    const [user, setUser] = useState("");
    const [accessToken, setAccessToken] = useState("");

    // Context를 통해서 제공할 전역 객체
    const value = {
        user,
        setUser,
        accessToken,
        setAccessToken
    };

    // 브라우저가 리프레쉬 되었을때 (애플리케이션이 다시 시작할때) 실행되는 자동 콜백 함수 등록
    // 로컬 스토리지에 저장된 정보를 읽고, 다시 전역 상태로 복원
    useEffect(() => {
        startTransition(() => {
            setUser(localStorage.getItem("user") || "");
            setAccessToken(localStorage.getItem("accessToken") || "");
        });
    }, []);


    // 로그인/로그아웃으로 인해 상태가 변경되었을때 자동 콜백 함수 등록
    useEffect(() => {
        // 로그인 했을 경우
        if (user != "") {
            // 로컬 스토리지에 user와 accessToken을 저장
            localStorage.setItem("user", user);
            localStorage.setItem("accessToken", accessToken);
            // Axios 설정 변경(기본 요청 해더에 Authorization을 추가)
            addAuthHeader(accessToken);

            // 로그아웃을 했을 경우
        } else {
            // 로컬 스토리지에 user와 accessToken을 삭제
            localStorage.removeItem("user");
            localStorage.removeItem("accessToken");
            // Axios 설정 변경(기본 요청 해더에 Authorization을 삭제)
            removeAuthHeader();


        }
        console.log("전역상태가 변경되었음");
    }, [user, accessToken]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
