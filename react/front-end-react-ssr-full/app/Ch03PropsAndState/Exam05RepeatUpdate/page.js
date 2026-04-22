"use client"

import { useState, useEffect } from "react";

function Exam05RepeatUpdate() {
  const [number, setNumber] = useState(0);

  const addNumber1 = () => {
    //업데이트는 적용 안됨
    setNumber(number + 1);

    //마지막에 업데이트만 적용
    setNumber(number + 1);
  };

  const addNumber2 = () => {
    //업데이트 적용
    setNumber((prevNumber) => { 
      return prevNumber + 1
    });
    
    //업데이트 적용
    setNumber((prevNumber) => { 
      return prevNumber + 1
    });
  };

  useEffect(() => {
    console.log("상태 변경 완료:", number);
  });

  return (
    <div className="card">
      <div className="card-header">
        OneAfterAnotherStateChange
      </div>
      <div className="card-body">
        <h3>{number}</h3>
        <button className="btn btn-info btn-sm me-2" onClick={addNumber1}>값으로 연이은 상태변경</button>
        <button className="btn btn-info btn-sm" onClick={addNumber2}>함수로 연이은 상태변경</button>
      </div>
    </div>
  );
}

export default Exam05RepeatUpdate;