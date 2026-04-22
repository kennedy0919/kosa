"use client"

import { useContext, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";

function LoginForm() {
  const authContext = useContext(AuthContext);
  
  const [user, setUser] = useState("");

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const login = (event) => {
    authContext.setUser(user);
    authContext.setAccessToken("xxxxx");
    setUser(""); // 로그인 후 입력 필드 초기화
  };

  const logout = (event) => {
    authContext.setUser("");
    authContext.setAccessToken("");
    setUser(""); // 로그아웃 후 입력 필드 초기화
  };

  return (
    <div className="card">
      <div className="card-header">LoginForm</div>
      <div className="card-body">
        {authContext.user === "" ? (
          <div>
            <div className="form-group row">
              <label htmlFor="user" className="col-sm-2 col-form-label">User ID</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="user"  name="user" value={user} onChange={handleChange}/>
              </div>
            </div>
            <button className="btn btn-info btn-sm" onClick={login}>로그인</button>
          </div>
        ) : ( 
          <button className="btn btn-info btn-sm" onClick={logout}>로그아웃</button>
        )}
      </div>
    </div>
  );
}

export default LoginForm;
