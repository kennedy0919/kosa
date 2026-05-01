"use client";

import { AuthContext } from "@/contexts/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/navigation";

export default function AppHeader() {

    // AuthContext 가져오기
    const authContext = useContext(AuthContext);
    // 라우터 객체 얻기
    const router = useRouter();
    // 이벤트 처리 함수 정의
    const login = () => {
        router.push("/Ch08RestAPI/Exam02Auth")
    };

    const logout = () => {
        authContext.setUser("");
        authContext.setAccessToken("");
        router.push("/");
    }

    return (
        // JSX 코드
        <nav className="navbar justify-content-between bg-dark">
            <Link href="/" className="navbar-brand ms-2 text-white">
                <Image src="/logo512.png" width="30" height="30" alt="" className="align-top" />
                {" "}
                React
            </Link>
            <div className="text-white me-2">
                {(authContext.user === "") ?
                    <button className="btn btn-success btn-sm" onClick={login}>로그인</button>
                    :
                    <div>
                        <span className="me-2">User ID: {authContext.user}</span>
                        <button className="btn btn-success btn-sm" onClick={logout}>로그아웃</button> 
                    </div>
                }

            </div>
        </nav>
    );
}

