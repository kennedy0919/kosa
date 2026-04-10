package ch12.sec05;

import java.util.Arrays;

public class BytesToStringExample {
	public static void main(String[] args) throws Exception  {
		String data = "자바";
		
		byte[] array = data.getBytes();
		System.out.println(array);
		System.out.println(Arrays.toString(array));
		
		String data2 = new String(array);
		System.out.println(data2);
		
	}
}


