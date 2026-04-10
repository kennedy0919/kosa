package ch16.sec01;

public class MyCalc implements Calculable {
	@Override
	public void calculate(int x, int y) {
		int result = x + y;
		System.out.println("MyCalc의 결과: " + result);
		
	}
}
