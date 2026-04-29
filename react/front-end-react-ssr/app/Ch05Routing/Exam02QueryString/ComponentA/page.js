"use client"

import { useSearchParams } from "next/navigation";

function ComponentA() {
    // QueryString 객체 얻기
    const queryString = useSearchParams();
    const key1 = queryString.get("key1");
    const key2 = queryString.get("key2");

    return (
        <div className="card mt-2">
            <div className="card-header">
                ComponentA
            </div>
            <div className="card-body">
                <p>key1: {key1}</p>
                <p>key2: {key2}</p>
            </div>
        </div>
    );
}

export default ComponentA;