package ch05.sec12;

public class SeasonExample {
    public static void main(String[] args) {
        Season var;

        var = Season.SPRING;
        var = Season.SUMMER;
        var = Season.FALL;
        var = Season.WINTER;

        if(var == Season.SPRING) {
            System.out.println("봄입니다.");
        } else if(var == Season.SUMMER) {
            System.out.println("여름입니다.");
        } else if(var == Season.FALL) {
            System.out.println("가을입니다.");
        } else if(var == Season.WINTER) {
            System.out.println("겨울입니다.");
        }

        switch (var) {
            case Season.SPRING:
                System.out.println("봄입니다.");
                break;
            case Season.SUMMER:
                System.out.println("여름입니다.");
                break;
            case Season.FALL:
                System.out.println("가을입니다.");
                break;
            case WINTER:
                System.out.println("겨울입니다.");
                break;
        }
    }
}
