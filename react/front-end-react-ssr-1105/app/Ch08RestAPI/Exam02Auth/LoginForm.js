"use client"

import { useCallback, useContext, useState } from "react";
import memberApi from "@/apis/memberApi";
import { AuthContext } from "@/contexts/AuthContext";

function LoginForm() {
    // AuthContext 가져오기
    const authContext = useContext(AuthContext);

    // 상태 정의
    const [member, setMember] = useState({
        mid: "user1",
        mpassword: "12345"
    });

    // 이벤트 처리 함수 정의
    const handleChange = useCallback((event) => {
        setMember(m => ({ ...m, [event.target.name]: event.target.value }));
    }, []);

    const handleLogin = async () => {
        try {
            const response = await memberApi.login(member);
            console.log(response.data);

            authContext.setUser(member.mid);
            authContext.setAccessToken(response.data.accessToken);
        } catch (error) {
            console.log("로그인 실패: ", err)
        }
    };


    const handleLogout = () => {
        authContext.setUser("");
        authContext.setAccessToken("");
    };



    return (
        <div className="card mt-2">
            <div className="card-header">
                LoginForm
            </div>
            <div className="card-body">
                {authContext.user === "" ? (
                    <div>
                        <div className="mb-2">
                            <label htmlFor="mid" className="form-label">Member ID</label>
                            <input type="text" className="form-control" name="mid" value={member.mid} onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mpassword" className="form-label">Member Password</label>
                            <input type="password" className="form-control" name="mpassword" value={member.mpassword} onChange={handleChange} />
                        </div>
                        <div className="d-flex justify-content-center mb-2">
                            <button className="btn btn-success btn-sm" onClick={handleLogin}>로그인</button>
                        </div>
                    </div>
                ) : (
                    <div className="d-flex justify-content-center mb-2">
                        <button className="btn btn-success btn-sm" onClick={handleLogout}>로그아웃</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LoginForm;