package ch06.sec10.exam02;

public class Television {
	// 필드 선언
	static String company = "MyCompany";
	static String model = "LCD";
	static String info;

	//정적 블록(정적 필드를 초기화하는 역할)
	static {
		info = company + "-" + model;
	}

	// 생성자 선언
	// 인스턴스 필드를 초기화하는 역할

	// 메소드 선언
}
