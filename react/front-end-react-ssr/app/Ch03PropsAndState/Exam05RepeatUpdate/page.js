"use client"

import { useState } from "react";

function Exam05RepeatUpdate() {
    // 상태 정의
    const [number, setNumber] = useState(0);

    // 이벤트 처리 함수
    const addNumber1 = function() {
        // 업데이트 도중에 업데이트가 되면 비동기로 두개가 같이 실행
        // 하나의 상태변경이 완전히 끝나지 않은 상태에서 다른 상태변경 불가
        setNumber(number + 1);
        setNumber(number + 1);
    };

    const addNumber2 = () => {
        setNumber(number => number + 1);
        setNumber(number => number + 1);
    };

    return (
        <div className="card mt-2">
            <div className="card-header">
                Exam05RepeatUpdate
            </div>
            <div className="card-body">
                <button onClick={addNumber1} className="btn btn-info btn-sm me-2">연이은 상태 변경</button>
                <button onClick={addNumber2} className="btn btn-info btn-sm me-2">연이은 상태 변경2</button>
                <hr/>
                <h3>{number}</h3>
            </div>
        </div>
    );
}

export default Exam05RepeatUpdate;