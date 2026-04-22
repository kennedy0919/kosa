"use client"

import BoardWriteForm from "./BoardWriteForm";
import LoginForm from "./LoginForm";

function Exam02AuthContext() {
  return (
    <div className="card">
      <div className="card-header">
        Exam02AuthContext
      </div>
      <div className="card-body">
        <LoginForm/>
        <hr/>
        <BoardWriteForm/>
      </div>
    </div>
  );
}

export default Exam02AuthContext;