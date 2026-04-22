import Link from "next/link";

function ServerComponentB() {
  return (
    <div className="card">
      <div className="card-header">
        ServerComponentB
      </div>
      <div className="card-body"> 
        <Link className="btn btn-warning" href="../Exam01Navigation">Exam01Navigation</Link>
      </div>
    </div>
  );
}

export default ServerComponentB;

