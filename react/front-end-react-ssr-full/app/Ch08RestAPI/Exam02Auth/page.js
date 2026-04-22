import LoginForm from "./LoginForm";
import JoinForm from "./JoinForm";

function Exam02Auth() {
  return (
    <div className="card">
      <div className="card-header">Exam02Auth</div>
      <div className="card-body">
        <LoginForm/>
        <hr/>
        <JoinForm/>
      </div>
    </div>
  );
}

export default Exam02Auth;
