"use client"

import ChildComponentA from "./ChildComponentA";
import ChildComponentB from "./ChildComponentB";

function Exam01ColorContext() {
  return (
    <div className="card">
      <div className="card-header">Exam01ColorContext</div>
      <div className="card-body">
        <ChildComponentA />
        <hr/>
        <ChildComponentB />
      </div>
    </div>
  );
}

export default Exam01ColorContext;
