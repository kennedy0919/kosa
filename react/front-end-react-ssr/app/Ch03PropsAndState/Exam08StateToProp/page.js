"use client"

import Image from "next/image";
import { useState } from "react";
import ChildComponent from "./ChildComponent";


function Exam08StateToProp() {
    // 상태 정의
    const [imgFile, setImgFile] = useState("photo1.jpg");

    // 상태 변경 함수
    const changeImg = () => {
        if(imgFile === "photo1.jpg") {
            setImgFile("photo2.jpg");
        } else {
            setImgFile("photo1.jpg");
        }
    };
    return (
        <div className="card mt-2">
            <div className="card-header">
                Exam08StateToProp
            </div>
            <div className="card-body">
                <Image src={`/images/${imgFile}`} alt="" width="150" height="100" />
                <hr/>

                <ChildComponent imgFile={ imgFile } changeImg={changeImg} />
            </div>
        </div>
    );
}

export default Exam08StateToProp;