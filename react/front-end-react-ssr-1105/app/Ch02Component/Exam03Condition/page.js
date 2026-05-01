function Exam03Condition() {
  const var1 = "리액트";
  const var2 = false;
  const var3 = 0;
  let var4; //undefined
  return (
    <div className="card">
      <div className="card-header">Exam03Condition</div>
      <div className="card-body">
        <>
          <h6 className="text-info">삼항 연산식을 이용한 선택 렌더링</h6>
          <div>{var1 === "리액트" ? <p>내용1</p> : <p>내용 없음</p>}</div> {/*내용1*/}
          <div>{var1 !== "리액트" ? <p>내용2</p> : null}</div> {/*보이지 않음*/}

          <h6 className="mt-4  text-info">&& 을 이용한 선택 렌더링</h6>
          <div>{var1 === "리액트" && <p>내용3</p>}</div> {/*내용3*/}
          <div>{var1 && <p>내용4</p>}</div> {/*내용4*/}
          <div>{var2 && <p>내용5</p>}</div> {/*보이지 않음*/}
          <div>{var3 && <p>내용6</p>}</div> {/*0이 출력: 예외적으로 알아둘 것*/}
          <div>{var4 && <p>내용7</p>}</div> {/*보이지 않음*/}
          
          <h6 className="mt-4 text-info">|| 을 이용한 선택 렌더링</h6>
          <div>{var1 || <p>내용8</p>}</div> {/*리액트*/}
          <div>{var2 || <p>내용9</p>}</div> {/*내용9*/}
          <div>{var3 || <p>내용10</p>}</div> {/*내용10*/}
          <div>{var4 || <p>내용11</p>}</div> {/*내용11*/}
        </>
      </div>
    </div> 
  );
}

export default Exam03Condition;