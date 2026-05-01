import ChildComponentC from "../common/ChildComponentC";

function Ch02Component() {
    return (
        <div className="card mt-2">
            <div className="card-header">
                Ch02Component
            </div>
            <div className="card-body">
                <ChildComponentC/>
            </div>
        </div>
    );
}

export default Ch02Component;