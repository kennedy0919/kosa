import Link from "next/link";

function Exam01Navigation() {
    return (
        <div className="card mt-2">
            <div className="card-header">
                Exam01Navigation
            </div>
            <div className="card-body">
                <Link className="btn btn-info btn-sm me-2" href="Exam01Navigation/ChildComponentA">ClientComponentA</Link>
                <Link className="btn btn-info btn-sm me-2" href="Exam01Navigation/ServerComponentA">ServerComponentA</Link>
            </div>
        </div>
    );
}

export default Exam01Navigation;