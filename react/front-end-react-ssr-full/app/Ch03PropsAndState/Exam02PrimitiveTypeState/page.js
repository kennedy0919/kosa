"use client"

import { useEffect, useState } from "react";

function getRandomColor() {
  return '#' + Math.floor(Math.random() * parseInt("ffffff", 16)).toString(16);
}

function Exam02PrimitiveTypeState() {
  // 상태 선언
  const [number, setNumber] = useState(0);
  const [color, setColor] = useState("black");  

  const addNumber = () => {
    //상태 변경
    setNumber(number + 1);
  };

  const changeColor = () => {
    //상태 변경
    setColor(getRandomColor());
  };

  //상태 변경후, 콜백 등록
  useEffect(() => {
    console.log("상태 변경 완료:", number, color);
  });

  return (
    <div className="card">
      <div className="card-header">
        PrimitiveTypeState
      </div>
      <div className="card-body">
        <h3 style={{color: color}}>{number}</h3>
        <button className="btn btn-info btn-sm me-2" onClick={addNumber}>숫자 증가</button>
        <button className="btn btn-info btn-sm me-2" onClick={changeColor}>색깔 변경</button>
      </div>
    </div>
  );
}

export default Exam02PrimitiveTypeState;