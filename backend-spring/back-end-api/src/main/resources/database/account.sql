-- account 테이블 생성
CREATE TABLE account (
    ano VARCHAR2(20) PRIMARY KEY,
    balance NUMBER DEFAULT 0 NOT NULL
);

-- 샘플 데이터 입력 (옵션)
INSERT INTO account (ano, balance) VALUES ('111-111-111111', 100000);
INSERT INTO account (ano, balance) VALUES ('222-222-222222', 50000);
INSERT INTO account (ano, balance) VALUES ('333-333-333333', 200000);

COMMIT;