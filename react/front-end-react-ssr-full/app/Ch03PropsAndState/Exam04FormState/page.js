"use client"

import { useState } from "react";

function Exam04FormState() {
  //상태 선언
  const [user, setUser] = useState({
    userId: "",
    userName: "",
    userPassword: "",
  });

  const handleChange = (event) => {
    //상태 변경 방법1(객체를 매개값으로 전달)
    // setUser({
    //   ...user, [event.target.name]:event.target.value
    // });

    //상태 변경 방법2(함수를 매개값으로 전달)
    setUser((prevUser) => {
      return {
        ...prevUser, [event.target.name]:event.target.value
      }
    });
  };

  const handdleJoin = (event) => {
    event.preventDefault();
    console.log(user);
  }

  return (
    <div className="card">
      <div className="card-header">
        FormState2
      </div>
      <div className="card-body">
        <form>
          <div className="mb-2">
            <label htmlFor="btitle" className="form-label">User ID</label>
            <input type="text" className="form-control" name="userId" value={user.userId} onChange={handleChange}/>
          </div>
          <div className="mb-2">
            <label htmlFor="bcontent" className="form-label">User Name</label>
            <input type="text" className="form-control" name="userName" value={user.userName} onChange={handleChange}/>
          </div>
          <div className="mb-2">
            <label htmlFor="bcontent" className="form-label">User Password</label>
            <input type="password" className="form-control" name="userPassword" value={user.userPassword} onChange={handleChange}/>
          </div>
          <div className="d-flex justify-content-center mb-2">
            <button className="btn btn-primary btn-sm mr-2" onClick={handdleJoin}>제출</button>
          </div>
          <div className="alert alert-success">
            <div>userId: {user.userId}</div>
            <div>userName: {user.userName}</div>
            <div>userPassword: {user.userPassword}</div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Exam04FormState;