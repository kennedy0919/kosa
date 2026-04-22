"use client"

import { redirect, useRouter } from "next/navigation";

function ClientComponentA() {
  //리다이렉트로 이동
  //redirect("ClientComponentB");

  const router = useRouter();

  const goClientComponentB = () => {
    //이벤트에 의한 이동
    router.push("ClientComponentB");
  } 

  return (
    <div className="card">
      <div className="card-header">
        ClientComponentA
      </div>
      <div className="card-body">
        <button className="btn btn-info" 
                onClick={goClientComponentB}>ClientComponentB로 이동</button>  
      </div>
    </div>
  );
}

export default ClientComponentA;

