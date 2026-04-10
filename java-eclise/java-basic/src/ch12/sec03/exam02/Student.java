package ch12.sec03.exam02;

import lombok.Data;

@Data
public class Student {
	private int no;
	private String name;
	
	public Student(int no, String name) {
		this.no = no;
		this.name = name;
	}
	
	
}

