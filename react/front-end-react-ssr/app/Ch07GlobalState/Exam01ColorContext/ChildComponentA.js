"use client"

import { ColorContext } from "@/contexts/ColorContext";
import { useContext } from "react";

function ChildComponentA() {
    // 변수 선언
    const colors = ["red", "yellow", "orange", "green", "blue", "indigo", "violet"]

    // ColorContext를 찾기
    const colorContext = useContext(ColorContext);

    // 이벤트 처리 선언
    const handleClick = function (color) {
        colorContext.setColor(color);
    };

    return (
        <div className="card mt-2">
            <div className="card-header">
                ChildComponentA
            </div>
            <div className="card-body">
                <h6>색상을 선택하세요</h6>
                <div className="d-flex">
                    {colors.map((color, index) => (
                        <div key={index}
                            style={{ backgroundColor: color, width: "24px", height: "24px", cursor: "pointer" }}
                            onClick={() => handleClick(color)}></div>
                    ))}

                </div>
            </div>

            <hr />
            <div style={{ backgroundColor: colorContext.color, width: "100px", height: "100px" }}>

            </div>
        </div>
    );
}

export default ChildComponentA;