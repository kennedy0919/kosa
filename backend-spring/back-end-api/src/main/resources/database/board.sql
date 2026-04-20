create table board (
  bno          number          primary key,
  btitle       varchar(255)    not null,
  bcontent       clob          null,
  bdate       timestamp       not null,
  bwriter       varchar(50)    not null references member(mid),
  bhitcount    number          default 0 not null,
  battachoname    varchar(255)    null,
  battachsname    varchar(255)    null,
  battachtype    varchar(255)    null,
  battachdata    blob          null
);

create sequence board_bno_seq 
   minvalue 0 
   start with 0;


-- 임의의 게시물 데이터 삽입
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'Java 기초', 'Java 언어의 기초 개념과 문법을 학습합니다', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'Spring Boot 시작', 'Spring Boot 프레임워크를 이용한 웹 개발', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '데이터베이스 설계', 'Oracle 데이터베이스 설계 원칙과 정규화', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'HTML5 기본', 'HTML5의 새로운 기능과 태그 활용법', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'CSS3 스타일링', 'CSS3를 이용한 반응형 웹 디자인', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'JavaScript ES6', 'ES6의 새로운 문법과 기능들', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'React 입문', 'React 라이브러리를 이용한 SPA 개발', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'Vue.js 활용', 'Vue.js 프레임워크 기초부터 고급까지', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'Node.js 백엔드', 'Node.js를 이용한 서버 개발', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'Python 프로그래밍', 'Python 언어의 기초와 활용', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'Django 웹 개발', 'Django 프레임워크를 이용한 웹 애플리케이션', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'Git 버전관리', 'Git을 이용한 협업과 버전 관리', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'Docker 컨테이너', 'Docker를 이용한 컨테이너 기반 개발', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'AWS 클라우드', 'Amazon Web Services 기초 및 활용', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'REST API 설계', 'RESTful API 설계 원칙과 구현', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'JPA 하이버네이트', 'JPA와 Hibernate를 이용한 ORM', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'MyBatis 매핑', 'MyBatis를 이용한 SQL 매핑', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'Spring Security', 'Spring Security를 이용한 보안 구현', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'JWT 토큰', 'JWT를 이용한 인증과 인가', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'Redis 캐시', 'Redis를 이용한 캐시 시스템 구축', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'MongoDB 사용법', 'NoSQL 데이터베이스 MongoDB 활용', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'Elasticsearch 검색', 'Elasticsearch를 이용한 검색 엔진 구축', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'Apache Kafka', 'Kafka를 이용한 메시지 큐 시스템', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'RabbitMQ 활용', 'RabbitMQ 메시지 브로커 활용법', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'Microservices 아키텍처', '마이크로서비스 아키텍처 설계와 구현', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'Kubernetes 오케스트레이션', 'Kubernetes를 이용한 컨테이너 오케스트레이션', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'CI/CD 파이프라인', '지속적 통합과 배포 파이프라인 구축', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'Jenkins 자동화', 'Jenkins를 이용한 빌드 자동화', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'GitHub Actions', 'GitHub Actions를 이용한 워크플로우 자동화', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'TDD 개발', '테스트 주도 개발 방법론과 실습', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'JUnit 테스트', 'JUnit을 이용한 단위 테스트 작성', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'Mockito 목킹', 'Mockito를 이용한 모킹 테스트', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'Selenium 자동화', 'Selenium을 이용한 웹 테스트 자동화', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'Postman API 테스트', 'Postman을 이용한 API 테스트', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'Swagger 문서화', 'Swagger를 이용한 API 문서 자동화', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '리팩토링 기법', '코드 리팩토링 기법과 패턴', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '디자인 패턴', '소프트웨어 디자인 패턴 활용', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '클린 코드', '클린 코드 작성법과 원칙', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'SOLID 원칙', 'SOLID 원칙을 적용한 객체지향 설계', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '알고리즘 기초', '자료구조와 알고리즘 기초 개념', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '정렬 알고리즘', '다양한 정렬 알고리즘 비교와 구현', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '검색 알고리즘', '이진 검색과 해시 테이블 활용', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '트리 자료구조', '이진 트리와 균형 트리 구현', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '그래프 알고리즘', '그래프 탐색과 최단경로 알고리즘', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '동적 프로그래밍', '동적 계획법을 이용한 최적화', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '네트워크 프로그래밍', 'Socket을 이용한 네트워크 통신', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'HTTP 프로토콜', 'HTTP 프로토콜의 이해와 활용', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'TCP/IP 통신', 'TCP/IP 프로토콜 스택 이해', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'WebSocket 실시간', 'WebSocket을 이용한 실시간 통신', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'GraphQL API', 'GraphQL을 이용한 API 개발', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'gRPC 서비스', 'gRPC를 이용한 고성능 RPC 통신', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'OAuth2 인증', 'OAuth2를 이용한 소셜 로그인', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'HTTPS 보안', 'SSL/TLS를 이용한 보안 통신', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '암호화 기법', '대칭키와 비대칭키 암호화', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '해시 함수', '해시 함수와 메시지 다이제스트', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'XSS 공격', 'XSS 공격과 방어 기법', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'CSRF 방어', 'CSRF 공격과 토큰 기반 방어', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'SQL Injection', 'SQL Injection 공격과 예방법', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '성능 최적화', '웹 애플리케이션 성능 최적화 기법', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '메모리 관리', 'JVM 메모리 구조와 가비지 컬렉션', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '프로파일링', '애플리케이션 성능 프로파일링', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '로드 밸런싱', '로드 밸런서를 이용한 부하 분산', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'CDN 활용', 'Content Delivery Network 활용', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '캐싱 전략', '다양한 캐싱 전략과 구현', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '데이터베이스 최적화', 'SQL 쿼리 성능 튜닝', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '인덱스 설계', '데이터베이스 인덱스 설계와 최적화', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '파티셔닝', '테이블 파티셔닝 전략', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '샤딩', '데이터베이스 샤딩 기법', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '복제와 동기화', '데이터베이스 복제와 동기화', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '백업과 복구', '데이터베이스 백업과 복구 전략', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '트랜잭션 관리', 'ACID 속성과 트랜잭션 관리', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '동시성 제어', '락과 동시성 제어 메커니즘', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '모니터링 시스템', 'Prometheus와 Grafana 모니터링', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '로깅 시스템', 'ELK 스택을 이용한 로그 분석', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '메트릭 수집', '애플리케이션 메트릭 수집과 분석', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '알림 시스템', '장애 감지와 알림 시스템 구축', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '장애 복구', '장애 대응과 복구 프로세스', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '코드 리뷰', '효과적인 코드 리뷰 프로세스', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'Agile 방법론', 'Agile 개발 방법론과 Scrum', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'DevOps 문화', 'DevOps 문화와 실천 방법', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '브랜치 전략', 'Git Flow와 브랜치 전략', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '이슈 관리', 'Jira를 이용한 이슈 관리', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '문서화', '프로젝트 문서화 도구와 방법', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'API 설계', 'RESTful API 설계 가이드라인', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '에러 처리', '전역 예외 처리와 에러 핸들링', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '검증 로직', 'Bean Validation을 이용한 입력 검증', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '국제화', 'i18n을 이용한 다국어 지원', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '접근성', '웹 접근성 가이드라인과 구현', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'SEO 최적화', '검색 엔진 최적화 기법', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'PWA 개발', 'Progressive Web App 개발', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '모바일 앱', 'React Native를 이용한 모바일 앱', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'Flutter 개발', 'Flutter를 이용한 크로스 플랫폼 앱', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '머신러닝 기초', '머신러닝 알고리즘 기초', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'TensorFlow 활용', 'TensorFlow를 이용한 딥러닝', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '데이터 분석', 'Python을 이용한 데이터 분석', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '빅데이터 처리', 'Apache Spark를 이용한 빅데이터', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '시각화', 'D3.js를 이용한 데이터 시각화', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '블록체인', '블록체인 기술과 스마트 컨트랙트', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'IoT 개발', 'IoT 디바이스와 클라우드 연동', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '게임 개발', 'Unity를 이용한 게임 개발', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'VR/AR 개발', '가상현실과 증강현실 개발', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'ERP 시스템', 'ERP 시스템 개발과 구축', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'CRM 관리', 'CRM 시스템 설계와 구현', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, 'E-commerce', 'E-commerce 플랫폼 개발', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '결제 시스템', '온라인 결제 시스템 구축', sysdate, 'user');
insert into board (bno, btitle, bcontent, bdate, bwriter) values (board_bno_seq.nextval, '채팅 서비스', '실시간 채팅 서비스 개발', sysdate, 'user');

commit;

