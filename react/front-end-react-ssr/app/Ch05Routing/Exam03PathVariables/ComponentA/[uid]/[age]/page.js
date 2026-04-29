"use client"

import { useParams } from "next/navigation";

function ComponentA() {

    const pathVariables = useParams();
    const uid = pathVariables.uid;
    const age = pathVariables.age;

    return (
        <div className="card mt-2">
            <div className="card-header">  
                ComponentA
            </div>
            <div className="card-body">
                <p>uid: {uid}</p>
                <p>age: {age}</p>
            </div>
        </div>
    );
}

export default ComponentA;