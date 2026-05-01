import Image from "next/image";

function ChildComponent({ imgFile, changeImg }) {
    return (
        <div className="card mt-2">
            <div className="card-header">
                ChildComponent
            </div>
            <div className="card-body">
                <button className="btn btn-info btn-sm me-2" onClick={changeImg}>이미지 변경 요청</button>
                <hr/>
                <Image src={`/images/${imgFile}`} alt="" width="150" height="100" />
            </div>
        </div>
    );
}

export default ChildComponent;