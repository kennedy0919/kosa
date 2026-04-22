"use client"

import { useState, useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import memberApi from "@/apis/memberApi";

function LoginForm() {
  const [member, setMember] = useState({
    mid: "",
    mpassword: "",
  });

  //AuthContext 전역 상태 이용
  const authContext = useContext(AuthContext)

  //사용자 입력시 상태 변경
  const handleChange = (event) => {
    setMember((prevMember) => {
      return { ...prevMember, [event.target.name]: event.target.value };
    });
  };

  const handleLogin = async (event) => {
    try {
      //로그인 요청
      const response = await memberApi.login(member);
      //전역 상태 수정
      authContext.setUser(response.data.mid);
      authContext.setAccessToken(response.data.accessToken);
      //상태 수정
      setMember({
        mid: "",
        mpassword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = (event) => {
    //전역 상태 수정
    authContext.setUser("");
    authContext.setAccessToken("");
  };

  return (
    <div className="card">
      <div className="card-header">LoginForm</div>
      <div className="card-body">
        {authContext.user === "" ? (
          <div>
            <div className="mb-2">
              <label htmlFor="mid" className="form-label">Member ID</label>
              <input type="text" className="form-control" name="mid" value={member.mid} onChange={handleChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="mpassword" className="form-label">Member Password</label>
              <input type="password" className="form-control" name="mpassword" value={member.mpassword} onChange={handleChange}/>
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