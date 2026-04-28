import Link from "next/link";

function NotFound() {
    return (
        <div className="card mt-2">
            <div className="card-header">
                NotFound
            </div>
            <div className="card-body">
                <h4>똑바로 입력 안할래?</h4>
                <p>요청된 리소스가 없어. 못줘.</p>
                <Link href={"/"}>홈으로 돌아가기</Link>
            </div>
        </div>
    );
}

export default NotFound;