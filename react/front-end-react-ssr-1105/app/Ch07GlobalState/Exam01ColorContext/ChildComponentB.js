"use client"

import { ColorContext } from "@/contexts/ColorContext";
import { useContext } from "react";

function ChildComponentB() {
    // ColorContext 얻기
    const colorContext = useContext(ColorContext);

    return (
        <div className="card mt-2">
            <div className="card-header">
                ChildComponentB
            </div>
            <div className="card-body">
                <div style={{ backgroundColor: colorContext.color, width: "100px", height: "100px" }}>
            </div>
            </div>
        </div>
    );
}

export default ChildComponentB;