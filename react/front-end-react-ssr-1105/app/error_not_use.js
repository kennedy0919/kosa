"use client"

function ErrorComponent() {
    return (
        <div className="card mt-2">
            <div className="card-header">
                ErrorComponent
            </div>
            <div className="card-body">
                <p>처리 도중에 알 수 없는 오류가 발생했습니다.</p>
                <p>조금 후에 사용하세요.</p>
                
            </div>
        </div>
    );
}

export default ErrorComponent;