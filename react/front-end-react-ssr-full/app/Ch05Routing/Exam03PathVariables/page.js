import Link from "next/link";

function Exam03PathVariables() {
  return (
    <div className="card">
      <div className="card-header">
        Exam03PathVariables
      </div>
      <div className="card-body">
        <h6>세그먼트로부터 값 읽기</h6>
        <div>
          <Link href="Exam03PathVariables/ComponentA/data1/data2" 
                className="btn btn-warning me-2">ComponentA/data1/data2</Link>
        </div>       
      </div>
    </div>
  );
}

export default Exam03PathVariables;