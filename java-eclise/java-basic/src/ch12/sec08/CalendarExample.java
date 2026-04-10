package ch12.sec08;

import java.util.*;

public class CalendarExample {
	public static void main(String[] args) {
		// 현재 컴퓨터의 정보를 기준으로 달력 얻기
		Calendar now = Calendar.getInstance();
		
		// 영국 달력 얻기
		Calendar englishCal = Calendar.getInstance(Locale.ENGLISH);
		// 미국의 로스엔젤리스 달력 얻기
		Calendar usaLosCal = Calendar.getInstance(TimeZone.getTimeZone("America/Los_Angeles"), Locale.US);
		 
		int year    = now.get(Calendar.YEAR);                
		int month  = now.get(Calendar.MONTH) + 1;          
		int day    = now.get(Calendar.DAY_OF_MONTH);     
		
		int week    = now.get(Calendar.DAY_OF_WEEK);        
		String strWeek = null;
		switch(week) {
			case Calendar.MONDAY: 		strWeek = "월"; 	break;
			case Calendar.TUESDAY: 		strWeek = "화"; break;
			case Calendar.WEDNESDAY: 	strWeek = "수"; break;
			case Calendar.THURSDAY: 	strWeek = "목"; break;
			case Calendar.FRIDAY: 		strWeek = "금"; break;
			case Calendar.SATURDAY: 	strWeek = "토"; break;
			default: 							strWeek = "일";
		}
		
		int amPm  = now.get(Calendar.AM_PM);   
		String strAmPm = null;
		if(amPm == Calendar.AM) {
			strAmPm = "오전";
		} else {
			strAmPm = "오후";
		}
		
		int hour    = now.get(Calendar.HOUR);                 
		int minute  = now.get(Calendar.MINUTE);             
		int second  = now.get(Calendar.SECOND);              

		System.out.print(year + "년 ");
		System.out.print(month + "월 ");
		System.out.println(day + "일 ");
		System.out.print(strWeek + "요일 ");
		System.out.println(strAmPm + " ");
		System.out.print(hour + "시 ");
		System.out.print(minute + "분 ");
		System.out.println(second + "초 ");
	}
}


