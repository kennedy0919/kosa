/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  // Ch01. React 시작: 자동 메모이제이션 (Automatic Memoization) 활성화 여부
  // 프로젝트 생성시에 선택 가능
  // 활성화될 경우 불필요한 렌더링 최소화시킴
  //   - 실제로 값이 바뀐 부분만 다시 계산
  //   - 영향없는 JSX는 그대로 재사용
  //   - state 하나 바뀌었다고 화면 전체가 다시 렌더링 안됨
  //   - useMemo, useCallback을 사용할 필요 없음
  reactCompiler: false,

  // Ch02. Component: Stric 모드 활성화 여부 
  // 기본: true
  //   - 개발 모드에서 컴포넌트를 2번 실행되도록 의도된 것
  //   - 잠재적인 문제가 있는지 확인하기 위해 2번 실행
  //   - 2번 실행해서 결과가 달라지면 문제있는 컴포넌트
  //   - 실행은 2번, 렌더링은 1번
  //   - 프로적션 모드에서는 1번만 실행 
  reactStrictMode: false,

  // Ch09. Deployment: 정적 내보기기를 할 경우
  // 정적 내보기
  //   - npm run build로 빌드 -> out 폴더로 생성
  //   - HTML, CSS, JS로만 구성되어 CSR로 동작
  //   - 웹 서버 환경과 관련없이 배포 가능
  // output: 'export'
};

export default nextConfig;
