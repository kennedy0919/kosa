"use client"

import { useState } from "react";
import memberApi from "@/apis/memberApi";

function JoinForm() {

    // 상태 정의
    const [member, setMember] = useState({
        mid: "user1",
        mname: "사용자1",
        mpassword: "12345",
        memail: "user1@mycompany.com"
    });

    // 이벤트 처리 함수 정의
    const handleChange = (event) => {
        setMember(m => ({...m, [event.target.name]: event.target.value}));
    };

    const handleJoin = async() => {
        try {
            const response = await memberApi.join(member);
            console.log(response.data); // 응답본문 JSON -> 자동으로 JS Object
        } catch(error) {
            console.log("회원가입 실패: ", err);
        }
    };

    return (
        <div className="card mt-2">
            <div className="card-header">
                JoinForm
            </div>
            <div className="card-body">
                <div>
                    <div className="mb-2">
                        <label htmlFor="mid" className="form-label">Member ID</label>
                        <input type="text" className="form-control" name="mid" value={member.mid} onChange={handleChange} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="mname" className="form-label">Member Name</label>
                        <input type="text" className="form-control" name="mname" value={member.mname} onChange={handleChange} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="mpassword" className="form-label">Member Password</label>
                        <input type="password" className="form-control" name="mpassword" value={member.mpassword} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="memail" className="form-label">Member Email</label>
                        <input type="email" className="form-control" name="memail" value={member.memail} onChange={handleChange} />
                    </div>
                    <div className="d-flex justify-content-center mb-2">
                        <button className="btn btn-primary btn-sm mr-2" onClick={handleJoin}>제출</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JoinForm;