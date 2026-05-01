import JoinForm from "./JoinForm";
import LoginForm from "./LoginForm";

function Exam02Auth() {
    return (
        <div className="card mt-2">
            <div className="card-header">
                Exam02Auth
            </div>
            <div className="card-body">
                <LoginForm />
                <hr/>
                <JoinForm />
            </div>
        </div>
    );
}

export default Exam02Auth;