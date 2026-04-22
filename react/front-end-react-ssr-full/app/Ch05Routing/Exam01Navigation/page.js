import Link from "next/link";

function Exam01Navigation() {
  return (
    <div className="card">
      <div className="card-header">Exam01Navigation</div>
      <div className="card-body">
        <Link className="btn btn-info me-2" href="Exam01Navigation/ClientComponentA">ClientComponentA</Link>
        <Link className="btn btn-warning" href="Exam01Navigation/ServerComponentA">ServerComponentA</Link>
      </div>
    </div>
  );
}

export default Exam01Navigation;
