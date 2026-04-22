"use client"

import { useContext } from "react";
import { ColorContext } from "@/contexts/ColorContext";

function ChildComponentB() {
  //ColorContext로부터 전역 상태 가져오기
  const colorContext = useContext(ColorContext);

  return (
    <div className="card">
      <div className="card-header">ChildComponentB</div>
      <div className="card-body">
        {/* 전역 상태가 변경되면 리렌터링됨 */}
        <div style={{ width: "64px", height: "64px", background: colorContext.color }}></div>
      </div>
    </div>
  );
}

export default ChildComponentB;
