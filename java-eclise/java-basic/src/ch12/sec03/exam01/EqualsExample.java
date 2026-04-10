package ch12.sec03.exam01;

public class EqualsExample {
	public static void main(String[] args) {
		Member m1 = new Member("spring", "김벛꽃");
		Member m2 = new Member("spring", "김벛꽃2");
		
		System.out.println(m1 == m2);
		System.out.println(m1.equals(m2));
	}
}

