"use client"

import Image from "next/image";

function ChildComponent({
  imgFile,
  changeImg
}) {
  return (
    <div className="card">
      <div className="card-header">ChildComponent</div>
      <div className="card-body">
        <button className="btn btn-info btn-sm" onClick={changeImg}>이미지 변경</button>
        <div className="mt-2">
          {/* <Image src={`/images/${imgFile}`} alt="" width="150" height="100"/> */}
          <img src={`/images/${imgFile}`} alt="" width="150" height="100"/>
        </div>
      </div>
    </div>
  );
}

export default ChildComponent;