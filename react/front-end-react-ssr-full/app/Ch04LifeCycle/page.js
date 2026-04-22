"use client"

import { useEffect, useState } from "react";

function Ch04LifeCycle() {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(101);

  // 마운트/언마운트, 업데이터 전/후 모두 관심이 있을 경우
  // useEffect(() => {
  //   console.log("마운트/업데이트후 실행");
  //   return () => {
  //     console.log("언마운트/업데이트전 실행");
  //   };
  // });

  //마운트/언마운트만 관심이 있을 경우
  // useEffect(() => {
  //   console.log("마운트 실행");
  //   return () => {
  //     console.log("언마운트 실행");
  //   };
  // }, []); 

  //마운트/언마운트, count1 상태로 인한 업데이터 전/후에 관심이 있을 경우
  // useEffect(() => {
  //   console.log(`마운트/count1 업데이트후 실행(count1=${count1})`);
  //   return () => {
  //     console.log(`언마운트/count1 업데이트전 실행(count1=${count1})`);
  //   };
  // }, [count1]);  


  //마운트/언마운트, count2 상태로 인한 업데이터 전/후에 관심이 있을 경우
  // useEffect(() => {
  //   console.log(`마운트/count2 업데이트후 실행(count2=${count2})`);
  //   return () => {
  //     console.log(`언마운트/count2 업데이트전 실행(count2=${count2})`);
  //   };
  // }, [count2]);   


  const addCount1 = (event) => {
    setCount1(count1 + 1);
  };

  const addCount2 = (event) => {
    setCount2(count2 + 1);
  };  

  return (
    <div className="card">
      <div className="card-header">Ch04LifeCycle</div>
      <div className="card-body">
        <button className="btn btn-info me-2" onClick={addCount1}>count1 증가</button>
        <button className="btn btn-info" onClick={addCount2}>count2 증가</button>
      </div>
    </div>
  );
}

export default Ch04LifeCycle;