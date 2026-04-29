"use client"

import { useRouter } from "next/navigation";


function ChildComponentA() {

    // Router 객체 얻기
    const router = useRouter();

    const goNextPage = function() {
        // 브라우저 히스토리 객체에 새로운 URl을 추가하므로 해서
        // 페이지 이동 효과
        router.push("ChildComponentB");
    };

    return (
        <div className="card mt-2">
            <div className="card-header">
                ChildComponentA
            </div>
            <div className="card-body">
                <button className="btn btn-info btn-sm" onClick={goNextPage}>ChildComponentB</button>
            </div>
        </div>
    );
}

export default ChildComponentA;