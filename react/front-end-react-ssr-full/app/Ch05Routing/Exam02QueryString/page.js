import Link from "next/link";

function Exam02QueryString() {
  return (
    <div className="card">
      <div className="card-header">Exam02QueryString</div>
      <div className="card-body">
        <div>
          <h6>쿼리 스트링으로 데이터 전달</h6>
          <Link href="Exam02QueryString/ComponentA?key1=value1&key2=value2" 
                className="btn btn-info me-2">ComponentA?key1=value1&key2=value2</Link>
        </div>
      </div>
    </div>
  );
}

export default Exam02QueryString;