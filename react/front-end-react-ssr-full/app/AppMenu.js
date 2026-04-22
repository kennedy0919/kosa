import Link from "next/link";

async function AppMenu() {
  // Streaming SSR 테스트 코드
  // 실제 비동기 작업 (예: DB 조회, API 호출): 1초 소요
  await new Promise(resolve => setTimeout(resolve, 1000));
  return (
    <div className="accordion" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" 
            data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
            Ch01. React 시작
          </button>
        </h2>
        <div id="collapse1" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <Link href="/">Home</Link>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
            data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
            Ch02. Component
          </button>
        </h2>
        <div id="collapse2" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link href="/Ch02Component">Ch02Component</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch02Component/Exam01WrapElement">Exam01WrapElement</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch02Component/Exam02Expressions">Exam02Expressions</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch02Component/Exam03Condition">Exam03Condition</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch02Component/Exam04InlineStyle">Exam04InlineStyle</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch02Component/Exam05ExternalCss">Exam05ExternalCss</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch02Component/Exam06Comments">Exam06Comments</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch02Component/Exam07EventHandling">Exam07EventHandling</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch02Component/Exam08Repeat">Exam08Repeat</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch02Component/Exam09DomRef">Exam09DomRef</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch02Component/Exam10NestedLayout/ComponentA">Exam10NestedLayout/ComponentA</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch02Component/Exam10NestedLayout/ComponentB">Exam10NestedLayout/ComponentB</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch02Component/Exam11RuntimeErrorHandling">Exam11RuntimeErrorHandling</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
            data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
            Ch03. Props and State
          </button>
        </h2>
        <div id="collapse3" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link href="/Ch03PropsAndState/Exam01Props">Exam01Props</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch03PropsAndState/Exam02PrimitiveTypeState">Exam02PrimitiveTypeState</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch03PropsAndState/Exam03ObjectTypeState">Exam03ObjectTypeState</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch03PropsAndState/Exam04FormState">Exam04FormState</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch03PropsAndState/Exam05RepeatUpdate">Exam05RepeatUpdate</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch03PropsAndState/Exam06StateInitFun">Exam06StateInitFun</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch03PropsAndState/Exam07StateToProp">Exam07StateToProp</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
            data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
            Ch04. LifeCycle
          </button>
        </h2>
        <div id="collapse4" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link href="/Ch04LifeCycle">Ch04LifeCycle</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>      

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
            data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
            Ch05. Routing
          </button>
        </h2>
        <div id="collapse5" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link href="/Ch05Routing/Exam01Navigation">Exam01Navigation</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch05Routing/Exam02QueryString">Exam02QueryString</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch05Routing/Exam03PathVariables">Exam03PathVariables</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
            data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
            Ch06. Performance
          </button>
        </h2>
        <div id="collapse6" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link href="/Ch06PerformanceImprovement/Exam01UseMemo">Exam01UseMemo</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch06PerformanceImprovement/Exam02UseCallback">Exam02UseCallback</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch06PerformanceImprovement/Exam03ReactMemo">Exam03ReactMemo</Link>
              </li>
            </ul>
          </div>
        </div>
      </div> 

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
            data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
            Ch07. GlobalState
          </button>
        </h2>
        <div id="collapse7" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link href="/Ch07GlobalState/Exam01ColorContext">Exam01ColorContext</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch07GlobalState/Exam02AuthContext">Exam02AuthContext</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
            data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
            Ch08. RestAPI
          </button>
        </h2>
        <div id="collapse8" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link href="/Ch08RestAPI/Exam01AsyncControl">Exam01AsyncControl</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch08RestAPI/Exam02Auth">Exam02Auth</Link>
              </li>
              <li className="nav-item">
                <Link href="/Ch08RestAPI/Exam03Board/BoardList">Exam03Board</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default AppMenu;