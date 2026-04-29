import { redirect } from "next/navigation";


function ServerComponentA() {

    let login = false;

    if (!login) {
        // 강제로 페이지를 이동
        redirect("ServerComponentB")
    }

    return (
        <div className="card mt-2">
            <div className="card-header">
                ServerComponentA
            </div>
            <div className="card-body">
                로그인을 해야 볼 수 있는 내용        
            </div>
        </div>
    );
}

export default ServerComponentA;