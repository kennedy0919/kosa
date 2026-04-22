"use client"

function Exam07EventHandling() {
  const handleBtn1 = (event) => {
    console.log(event.target);
  };

  const handleBtn2 = (arg) => {
    console.log(arg);
  };

  return (
    <div className="card">
      <div className="card-header">
        Exam07EventHandling
      </div>
      <div className="card-body">
        <button className="btn btn-info me-2" onClick={handleBtn1}>버튼1</button>
        <button className="btn btn-info" onClick={(event)=>handleBtn2(event.target)}>버튼2</button>
      </div>
    </div>
  );
}

export default Exam07EventHandling;