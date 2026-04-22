"use client"

import { useContext } from "react";
import { ColorContext } from "@/contexts/ColorContext";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

function ChildComponentA() {
  //ColorContext로부터 전역 상태 가져오기
  const colorContext = useContext(ColorContext);

  const handleClick = (color) => {
    //전역 상태 변경 함수를 이용해서 상태 변경
    colorContext.setColor(color);
  };

  return (
    <div className="card">
      <div className="card-header">ChildComponentA</div>
      <div className="card-body">
        <h6>색상을 선택하세요</h6>
        <div className="d-flex">
          {colors.map((color) => (
            <div
              key={color}
              style={{ background: color, width: "24px", height: "24px", cursor: "pointer" }}
              onClick={(event) => handleClick(color)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ChildComponentA;
