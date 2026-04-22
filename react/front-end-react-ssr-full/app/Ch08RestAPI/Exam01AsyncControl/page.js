"use client"

import { useState } from "react";

//비동기 작업 정의
function asyncWork() {
  //3초후에 응답이 오는 Promise 생성
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      //성공적으로 처리했을 경우
      resolve({ message: "성공" });
      //실패 처리할 경우
      reject({ message: "실패" });
    }, 3000);
  });
  return promise;
}

function Exam01AsyncControl() {
  const [loading, setLoading] = useState(false);

  const handleBtn1 = (event) => {
    console.log("요청중...");
    setLoading(true);
    asyncWork()
      .then((result) => {
        //resolve 경우
        console.log(result.message);
      })
      .catch((error) => {
        //reject 경우
        console.log(error.message);
      })
      .finally(() => {
        console.log("마무리");
        setLoading(false);
      });
  };

  const handleBtn2 = (event) => {
    console.log("요청중...");
    setLoading(true);
    const work = async () => {
      try {
        const result = await asyncWork();
        //resolve 경우
        console.log(result.message);
      } catch (error) {
        //reject 경우
        console.log(error.message);
      } finally {
        console.log("마무리");
        setLoading(false);
      }
    };
    work();
  };

  return (
    <div className="card">
      <div className="card-header">Exam01AsyncControl</div>
      <div className="card-body">
        <div className="mb-3">
          <button className="btn btn-primary btn-sm me-2" onClick={handleBtn1}>
            로그인(Promise: then-catch-finally)
          </button>
          <button className="btn btn-primary btn-sm me-2" onClick={handleBtn2}>
            로그인(Promise: async-await)
          </button>
          <hr/>
          {loading ? (
            <div className="mt-3">
              <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Exam01AsyncControl;