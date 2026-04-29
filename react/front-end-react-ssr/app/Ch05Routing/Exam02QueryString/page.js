"use client"

import Link from "next/link";
import { useState } from "react";

function Exam02QueryString() {

    const [key1, setKey1] = useState("value1");
    const [key2, setKey2] = useState("value2");

    return (
        <div className="card mt-2">
            <div className="card-header">
                Exam02QueryString
            </div>
            <div className="card-body">
                <Link 
                    className="btn btn-info btn-sm" 
                    href={`Exam02QueryString/ComponentA?key1=${key1}&key2=${key2}`}>
                        QueryString으로 데이터 전달</Link>
            </div>
        </div>
    );
}

export default Exam02QueryString;