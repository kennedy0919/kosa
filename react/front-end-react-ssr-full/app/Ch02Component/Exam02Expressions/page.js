import Image from "next/image";

function Exam02Expressions() {
  const name = "리액트";
  const imageFile = "photo1.jpg"
  const imageHeight = 130;
  return (
    <div className="card">
      <div className="card-header">Exam02Expressions</div>
      <div className="card-body">
        <>
          <p>{name} 표현식</p>
          <p>함수 호출 결과: {fun()}</p>
          <p>연산식: {2+3}</p>
          <p>
            {
              <Image src={`/images/${imageFile}`} 
                    width="200" height={imageHeight} 
                    loading="eager" alt=""/>           
            }
          </p>
        </>
      </div>
    </div>
  );
}

function fun() {
  return "동작"
};

export default Exam02Expressions;