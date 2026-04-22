// ------------------------------------------------------------------------------
// 클라이언트 컴포넌트로 작성
// ------------------------------------------------------------------------------
/*
"use client"

import { useParams } from "next/navigation";

export default function ComponentA() {
  const params = useParams();
  const seg1 = params.seg1;
  const seg2 = params.seg2;

  return (
    <div className="card">
      <div className="card-header">
        ComponentA
      </div>
      <div className="card-body">
        <div>seg1: {seg1}</div>
        <div>seg2: {seg2}</div>
      </div>
    </div>
  );
}
*/

// ------------------------------------------------------------------------------
// 서버 컴포넌트로 작성
// 정적 내보기를 할 경우에는 반드시 서버 컴포넌트로 작성해야함
// generateStaticParams() 함수 정의 필수
// next.config.json에서 output: 'export' 추가
// npm run build -> out 폴더로 생성
// ------------------------------------------------------------------------------

//PathVariables를 받는 방법1
// export default async function ComponentA({params}) {
//   // params가 Promise로 변경되었기 때문에 직접 접근하지 말고 먼저 unwrap해야됨
//   // async-await 이용
//   const { seg1, seg2 } = await params;

//PathVariables를 받는 방법2
import { use } from "react";
export default function ComponentA({params}) {
  // params가 Promise로 변경되었기 때문에 직접 접근하지 말고 먼저 unwrap해야됨
  // use() 함수 이용
  const { seg1, seg2 } = use(params);

  return (
    <div className="card">
      <div className="card-header">
        ComponentA
      </div>
      <div className="card-body">
        <div>seg1: {seg1}</div>
        <div>seg2: {seg2}</div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  // PathVariables가 가질 수 있는 모든 경우의 값을 리턴해야함
  // 정적 내보내기를 하면 data2.html, data3.html과 같이 정적 파일로 생성됨
  return [
    { seg1: 'data1', seg2: 'data2'},
    { seg1: 'data1', seg2: 'data3'},
    // 모든 정적 경로를 여기에 추가해야함
  ];
}
// ------------------------------------------------------------------------------