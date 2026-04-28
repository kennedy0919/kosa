import ChildComponent from "./ChildComponent";

function Exam01Props() {
    return (
        <div className="card mt-2">
            <div className="card-header">
                Exam01Props
            </div>
            <div className="card-body">
                <ChildComponent name="React" version={10}>
                    <div>자식 내용입니다.</div>
                </ChildComponent>
            </div>
        </div>
    );
}

export default Exam01Props;