"use client"

import { useRef } from "react";

function Exam09DomRef() {
  const inputRef = useRef();

  const handleClick = (event) => {
    event.preventDefault(true);
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "orange";
    console.log(inputRef.current.value);
  };

  return (
    <div className="card">
      <div className="card-header">
        Exam09DomRef
      </div>
      <div className="card-body">
        <form className="row g-3">
            <div className="col-auto">
              <label htmlFor="email" className="visually-hidden">Email</label>
              <input type="text" id="email" ref={inputRef} style={{width:"200px"}} className="form-control" 
                    defaultValue={"email@example.com"}/>
            </div>
            <div className="col-auto">
              <button type="submit" onClick={handleClick} className="btn btn-info">입력양식 포커스 및 스타일 변경</button>
            </div>
        </form>  
      </div>
    </div>
  );
}

export default Exam09DomRef;