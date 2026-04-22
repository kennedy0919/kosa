"use client"

import { useRouter } from "next/navigation";

function ClientComponentB() {
  const router = useRouter();

  return (
    <div className="card">
      <div className="card-header">
        ClientComponentB
      </div>
      <div className="card-body">
        <button className="btn btn-info" onClick={() => router.back()}>뒤로 가기</button>
      </div>
    </div>
  );
}

export default ClientComponentB;

