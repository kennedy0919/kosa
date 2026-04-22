import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="card">
      <div className="card-header">NotFound: 404</div>
      <div className="card-body">
        <h4>리소스 없음</h4>
        <p>요청된 리소스를 찾을 수 없습니다.</p>
        <Link href="/">홈으로 돌아가기</Link>
      </div>
    </div>  
  );
}