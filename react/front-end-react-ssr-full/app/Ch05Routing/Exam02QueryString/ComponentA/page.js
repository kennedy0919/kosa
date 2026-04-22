"use client"

import { useSearchParams } from "next/navigation";

function ComponentA() {
  const queryString = useSearchParams()
  const key1 = queryString.get("key1");
  const key2 = queryString.get("key2");
  return (
    <div className="card">
      <div className="card-header">
        ComponentA
      </div>
      <div className="card-body">
        <div>key1: {key1}</div>
        <div>key2: {key2}</div>
      </div>
    </div>
  );
}

export default ComponentA;

