"use client"

import { useState } from "react";
import memberApi from "@/apis/memberApi";

function JoinForm() {
  const [member, setMember] = useState({
    mid: "",
    mname: "",
    mpassword: "",
    memail: ""
  });

  const handleChange = (event) => {
    setMember({
      ...member, [event.target.name]: event.target.value
    });
  };

  const handleJoin = async (event) => {
    try {
      event.preventDefault();
      const response = await memberApi.join(member);
      console.log(response);
    } catch(error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      <div className="card-header">JoinForm</div>
      <div className="card-body">
        <form>
          <div className="mb-2">
            <label htmlFor="mid" className="form-label">Member ID</label>
            <input type="text" className="form-control" name="mid" value={member.mid} onChange={handleChange}/>
          </div>
          <div className="mb-2">
            <label htmlFor="mname" className="form-label">Member Name</label>
            <input type="text" className="form-control" name="mname" value={member.mname} onChange={handleChange}/>
          </div>
          <div className="mb-2">
            <label htmlFor="mpassword" className="form-label">Member Password</label>
            <input type="password" className="form-control" name="mpassword" value={member.mpassword} onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="memail" className="form-label">Member Email</label>
            <input type="email" className="form-control" name="memail" value={member.memail} onChange={handleChange}/>
          </div>
          <div className="d-flex justify-content-center mb-2">
            <button className="btn btn-primary btn-sm mr-2" onClick={handleJoin}>제출</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JoinForm;