"use client"

import { createContext, useState } from "react";

// 컴포넌트에서 ColorContext를 사용하므로 export 해야함
export const ColorContext = createContext();

// 배치를 위한 컴포넌트
function ColorContextProvider({children}) {
    // 전역 상태 정의
    const [color, setColor] = useState("black");

    // Context를 통해서 제공할 전역 객체
    const value = {
        color,
        setColor
    };

    return (
        <ColorContext.Provider value={ value }>
            {children}
        </ColorContext.Provider>    
    );
}

export default ColorContextProvider;
