"use client"

import { AuthContext } from "@/contexts/AuthContext";


import { useContext, useState } from "react";

function LoginForm() {

    // AuthContext 가져오기
    const authContext = useContext(AuthContext);


    // 상태 정의
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    // 이벤트 처리 함수
    const handleChange = (event) => {
        if (event.target.name === "user") {
            setUser(event.target.value);
        } else {
            setPassword(event.target.value);
        }
    };

    // 로그인 함수 정의
    const login = () => {

        // 전역 상태를 수정
        authContext.setUser(user);
        authContext.setAccessToken("xxxxxxxxxxxxxxx");

        // 컴포넌트의 상태를 초기화 (로그인 폼의 입력된 내용을 없애기 위해)
        setUser("");
        setPassword("");
        
    };

    // 로그아웃 함수 정의
    const logout = () => {
         authContext.setUser("");
        authContext.setAccessToken("");
    };
    
    return (
        <div className="card mt-2">
            <div className="card-header">
                LoginForm
            </div>
            <div className="card-body">
                <div>
                    {(authContext.user === "") ?
                        <div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">User ID</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" name="user" value={user} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-2 col-form-label">User Password</label>
                                <div className="col-sm-10">
                                    <input type="password" className="form-control" name="password" value={password} onChange={handleChange} />
                                </div>
                            </div>
                            <button className="btn btn-info btn-sm" onClick={login}>로그인</button>
                        </div>
                        :
                        <button className="btn btn-info btn-sm" onClick={logout}>로그아웃</button>
                    }
                </div>
            </div>
        </div>
    );
}

export default LoginForm;