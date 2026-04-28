function ChildComponent({
    name, 
    version=10,
    children
    }) {
    console.log("name: ", name);
    console.log("version: ", version);
    console.log("children: ", children);
    return (
        <div className="card mt-2">
            <div className="card-header">
                ChildComponent
            </div>
            <div className="card-body">
                <div>이름: {name}</div>
                <div>버전: {version}</div>
                {children}
            </div>
        </div>
    );
}

export default ChildComponent;