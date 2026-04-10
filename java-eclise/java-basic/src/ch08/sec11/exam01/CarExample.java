package ch08.sec11.exam01;

public class CarExample {
	public static void main(String[] args) {
		//자동차 객체 생성
		Car myCar = new Car();
		
		//타이어 객체 교체
		myCar.tire1 = new NexenTire();
		myCar.tire2 = new HankookTire();
		myCar.tire3 = new NexenTire();
		
		//run 메소드 실행(다형성: 실행 결과가 다름)
		myCar.run();
	}
}
