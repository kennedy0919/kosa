import styles from "./page.module.css";

function Exam06Comments() {
  const name = '리액트';

  return (
    <div className="card">
      <div className="card-header">
        Exam06Comments
      </div>
      <div className="card-body">
        <>
          {/* 주석은 이렇게 작성합니다. */}
          <div
            // 시작 태그를 여러 줄로 작성하게 된다면 여기에 주석을 작성 할 수 있습니다.
            className={styles.react} >
            {name}
          </div>
        </>
      </div>
    </div> 
  );
}

export default Exam06Comments;