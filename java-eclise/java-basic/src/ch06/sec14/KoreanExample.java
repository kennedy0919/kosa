package ch06.sec14;

public class KoreanExample {
    public static void main(String[] args) {
        Korean k1 = new Korean("홍길동", "123456-1234567", 30, true);

        System.out.println("이름: " + k1.getName());
        System.out.println("주민번호: " + k1.getSsn());
        System.out.println("나이: " + k1.getAge());
        System.out.println("남성 여부: " + k1.isMale());

        k1.setName("홍길남");
        System.out.println("이름 변경 후: " + k1.getName());

        k1.setSsn("654321-7654321");
        System.out.println("주민번호 변경 후: " + k1.getSsn());

        k1.setAge(25);
        System.out.println("나이 변경 후: " + k1.getAge());

        k1.setMale(false);
        System.out.println("남성 여부 변경 후: " + k1.isMale());
    }
}
