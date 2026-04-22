"use client"

import { useEffect, useState } from "react";

function getRandomColor(props) {
  return '#' + Math.floor(Math.random() * parseInt("ffffff", 16)).toString(16);
}

function Exam03ObjectTypeState() {
  const [state, setState] = useState({
    number: 0,
    color: "black"
  });

  const addNumber = () => {
    setState({
      ...state,
      number: state.number + 1
    });
  };

  const changeColor = () => {
    setState({
      ...state,
      color: getRandomColor()
    });
  };

  useEffect(() => {
    console.log("상태 변경 완료:", state);
  });

  return (
    <div className="card">
      <div className="card-header">
        ObjectTypeState
      </div>
      <div className="card-body">
        <h3 style={{color: state.color}}>{state.number}</h3>
        <button className="btn btn-info btn-sm me-2" onClick={addNumber}>숫자 증가</button>
        <button className="btn btn-info btn-sm me-2" onClick={changeColor}>색깔 변경</button>
      </div>
    </div>
  );
}

export default Exam03ObjectTypeState;