import RepeatTableRowWithBno from "./RepeatTableRowWithBno";
import RepeatWithIndex from "./RepeatWithIndex";

function Exam08Repeat() {


    return (
        <div className="card mt-2">
            <div className="card-header">
                Exam08Repeat
            </div>
            <div className="card-body">
                <RepeatWithIndex />
                <hr/>
                <RepeatTableRowWithBno />
            </div>
        </div>
    );
}

export default Exam08Repeat;