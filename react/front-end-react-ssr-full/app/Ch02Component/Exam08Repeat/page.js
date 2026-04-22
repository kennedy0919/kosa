import RepeatWithIndex from "./RepeatWithIndex";
import RepeatTableRowWithBno from "./RepeatTableRowWithBno";

function Exam08Repeat(props) {
  return (
    <div className="card">
      <div className="card-header">Exam08Repeat</div>
      <div className="card-body">
        <RepeatWithIndex/>
        <hr/>
        <RepeatTableRowWithBno/>
      </div>
    </div>
  );
}

export default Exam08Repeat;