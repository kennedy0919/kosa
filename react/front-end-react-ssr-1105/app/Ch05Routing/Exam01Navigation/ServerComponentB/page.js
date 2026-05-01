import Link from "next/link";

function ServerComponentB() {
    return (
        <div className="card mt-2">
            <div className="card-header">
                ServerComponentB
            </div>
            <div className="card-body">
                로그인을 하셔야 합니다.
                <Link className="btn btn-info btn-sm" href="/" >로그인 페이지</Link>
            </div>
        </div>
    );
}

export default ServerComponentB;