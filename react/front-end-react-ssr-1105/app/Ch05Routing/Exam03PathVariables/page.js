import Link from "next/link";

function Exam03PathVariables() {
    return (
        <div className="card mt-2">
            <div className="card-header">
                Exam03PathVariables
            </div>
            <div className="card-body">
                <Link
                    href="Exam03PathVariables/ComponentA/user1/30" 
                    className="btn btn-info btn-sm">경로 변수로 데이터 전달</Link>
            </div>
        </div>
    );
}

export default Exam03PathVariables;