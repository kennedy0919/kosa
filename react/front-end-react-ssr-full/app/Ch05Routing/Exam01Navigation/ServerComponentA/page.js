import { redirect } from "next/navigation";
// import { useRouter } from "next/navigation";  //서버 컴포넌트에서는 사용 못함

function ServerComponentA() {
  //리다이렉트로 이동(클라이어넌트 컴포넌트/서버 컴포넌트 상관없음)
  redirect("ServerComponentB");

  //const router = useRouter(); //서버 컴포넌트에서 사용 못함

  //서버 컴포넌트에서 사용 못함
  // const goServerComponentB = () => {
  //   //이벤트에 의한 이동
  //   router.push("ServerComponentB");
  // } 

  return (
    <div className="card">
      <div className="card-header">
        ServerComponentA
      </div>
      <div className="card-body">
        {/* 서버 컴포넌트에서는 이벤트 처리 코드 사용 못함 */}
        {/* <button className="btn btn-info" 
                onClick={goServerComponentB}>ServerComponentB로 이동</button>   */}
      </div>
    </div>
  );
}

export default ServerComponentA;

