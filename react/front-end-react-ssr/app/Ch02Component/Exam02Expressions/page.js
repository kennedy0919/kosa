import ChildComponentC from "@/app/common/ChildComponentC";
import Image from "next/image";

function Exam02Expressions() {
    const name = "리액트";
    const fun = function() {
        return "함수리턴값";
    }

    const imageFile = "photo1.jpg"
    const imageHeight = 130;
    return (
        <div className="card mt-2">
            <div className="card-header">
                Exam02Expressions
            </div>
            <div className="card-body">
                <ChildComponentC />
                <div className="mt-2">
                    <p>변수값: { name }</p>
                    <p>연산식: { 2 + 3 }</p>
                    <p>함수호출: { fun() }</p>
                    <p>
                        {
                            <Image src={`/images/${ imageFile }`} alt="" width="200" height={ imageHeight } loading="eager" />
                        }
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Exam02Expressions;