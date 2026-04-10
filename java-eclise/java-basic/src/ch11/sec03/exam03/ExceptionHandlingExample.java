package ch11.sec03.exam03;

public class ExceptionHandlingExample {
	public static void main(String[] args) {
		String[] array = {"100", "100", "70", "200"};
		
		for(int i=0; i<=array.length; i++) {		
			try {
				int value = Integer.parseInt(array[i]);
				System.out.println("array[" + i + "]: " + value);
			} catch(ArrayIndexOutOfBoundsException e) {
				System.out.println("배열 인덱스가 초과됨: " + e.getMessage());
			} catch(NullPointerException | NumberFormatException e) {
				System.out.println("데이터에 문제가 있음: " + e.toString());
			} catch(Exception e) {
				System.out.println("알수 없는 예외 발생: " + e.toString());
			}
		}
	}
}
