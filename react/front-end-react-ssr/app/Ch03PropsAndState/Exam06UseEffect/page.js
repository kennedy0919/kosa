"use client"

import { useEffect, useState } from "react";

function Exam06UseEffect() {
    // 상태 정의
    const [number, setNumber] = useState(0);
    const [color, setColor] = useState("#000000");

    // 일반 변수
    // let number2 = 0;
    // let color2 = "black";
    
    const addNumber = function () {
        // setNumber(number + 1);
        setNumber(number => number + 1);
        // number2 = number2 + 1; 에러!!!!!!!
    };

    const changeColor = () => {
        setColor(getRandomColor());
        // setColor(color => getRandomColor());

        // color2 = "#00ff00"  에러!!!!!!!
    };

    const getRandomColor = function() {
        return "#" + Math.floor(Math.random() * parseInt("ffffff", 16)).toString(16);
    };
    
    // 상태가 변경되면 자동 콜백
    useEffect(() => {
        console.log("상태 변경 완료1: ", number, color);
    });

    useEffect(() => {
        console.log("상태 변경 완료2: ", number, color);
    });

    return (
        <div className="card mt-2">
            <div className="card-header">
                Exam06UseEffect
            </div>
            <div className="card-body">
                <button onClick={addNumber} className="btn btn-info btn-sm me-2">숫자 증가</button>
                <button onClick={changeColor} className="btn btn-info btn-sm me-2">색상 변경</button>
                <hr/>
                <h3 style={{ color: color }}>{number}</h3>
            </div>
        </div>
    );
}

export default Exam06UseEffect;