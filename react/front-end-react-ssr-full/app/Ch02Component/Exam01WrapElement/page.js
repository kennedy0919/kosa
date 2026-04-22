import ChildComponentA from "./ChildComponentA/index.js"
import ChildComponentB from "./ChildComponentB";

function Exam01WrapElement() {
  return (
    <div className="card">
      <div className="card-header">Exam01WrapElement</div>
      <div className="card-body">
        {/* <input> */}
        입력 박스: <input type="text"/>
        <hr/>
        <ChildComponentA/>
        <hr/>
        <ChildComponentB/>
      </div>
    </div>
  );
}

export default Exam01WrapElement;