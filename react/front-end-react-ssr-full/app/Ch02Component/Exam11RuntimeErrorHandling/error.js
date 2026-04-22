"use client"

import { useEffect } from "react";

function Error({error}) {
  useEffect(() => {
    console.group("[런타임 에러 내용]")
    console.log(error);
    console.groupEnd();
  }, [error])

  return (
    <div className="card">
      <div className="card-header">
        Error
      </div>
      <div className="card-body">    
        <p>런타임 오류 발생</p>
      </div>
    </div>
  );
}

export default Error;