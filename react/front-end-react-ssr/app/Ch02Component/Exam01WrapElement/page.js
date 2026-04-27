import ChildComponentC from "@/app/common/ChildComponentC";
import ChildComponentA from "./ChildComponentA";
import ChildComponentB from "./ChildComponentB";

function Exam01WrapElement() {
    return (
        <div className="card mt-2">
            <div className="card-header">
                Exam01WrapElement
            </div>
            <div className="card-body">
                <ChildComponentA />
                <ChildComponentB />
                <ChildComponentC />
            </div>
        </div>
    );
}

export default Exam01WrapElement;