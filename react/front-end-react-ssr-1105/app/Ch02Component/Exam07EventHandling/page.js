"use client" 

function Exam07EventHandling() {
    const fun1 = function(event) {
        console.log("버튼1 클릭");
        console.log("이벤트가 발생한 객체:", event.target)
        console.log("이벤트 이름:", event.type)
    }

    const fun2 = function(arg, event) {
        console.log(`${arg}`);
        console.log("이벤트가 발생한 객체:", event.target)
        console.log("이벤트 이름:", event.type)
    }
    
    return (
        <div className="card mt-2">
            <div className="card-header">
                Exam07EventHandling
            </div>
            <div className="card-body">
                <button className="btn btn-info btn-sm me-2" onClick={ fun1 }>버튼1</button>
                <button className="btn btn-info btn-sm me-2" onClick={(event) => fun2('버튼2', event)}>버튼2</button>
            <hr/>

            {/* React 컴포넌트는 이벤트 속성을 작성할 수 없음 */}
            {/* <ChildComponentA onClick={fun}/>  */}
            
            </div>
        </div>
    );
}

export default Exam07EventHandling;