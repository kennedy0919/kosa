"use client"

import { useRef } from "react";

function Exam09DomRef() {
    // DOM 객체 찾기
    // const email = document.querySelector("#email");  (x)
    // console.log(email); (x)

    // 훅을 이용해서 DOM 참조 얻기
    const emailRef = useRef();


    const handleClick = function (event) {
        // const email = document.querySelector("#email");
        const email = emailRef.current;
        console.log(email);
        email.focus();
        email.style.backgroundColor = "orange";
        console.log(email.value);

        // form 태그의 제출 기능을 제거
        event.preventDefault();
    }
    return (
        <div className="card mt-2">
            <div className="card-header">
                Exam09DomRef
            </div>
            <div className="card-body">
                <form className="row g-3" action="서버요청경로">
                    <div className="col-auto">
                        <input ref={emailRef} type="text" style={{ width: "200px" }} className="form-control"
                            defaultValue={"email@example.com"} />
                    </div>
                    <div className="col-auto">
                        {/* 일반 버튼 */}
                        <button type="button" onClick={handleClick} className="btn btn-info">입력양식 포커스 및 스타일 변경</button>
                    
                        {/* 제출 버튼 */}
                        <input type="submit" value="제출" className="btn btn-info btn-sm" />
                        <button type="submit" value="제출" className="btn btn-info btn-sm">제출</button>
                        <input type="image" src="/logo512.png" widtho="50" height="50" /> 
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Exam09DomRef;