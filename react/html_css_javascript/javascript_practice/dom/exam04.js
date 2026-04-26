// DOM 트리가 다  만들어진 후에 실행
document.addEventListener("DOMContentLoaded", () => {
    // id가 checkData인걸 찾아서 변수선언
    const checkBtn = document.querySelector("#checkData");
    
    checkBtn.addEventListener("click", () => {
        // document.querySelector 이게 id값 찾음
        const uid = document.querySelector("#uid").value;
        const uemail = document.querySelector("#uemail").value;
        const upassword = document.querySelector("#upassword").value;
        const uphone = document.querySelector("#uphone").value;
        const ucity = document.querySelector("#ucity").value;
            
        // 체크된 요소만 선택
        const uhobbyEls = document.querySelectorAll("input[name='uhobby']:checked");
        // uhobbyEls 선택된것 배열로 넣어주기
        const uhobby = Array.from(uhobbyEls).map(checked => checked.value);

       // 체크된 요소만 선택
        const ujob = document.querySelector("input[name='ujob']:checked").value;

        // 유효성 검사 (정규표현식)
        const uidRegex = /^[A-Za-z0-9]{6,10}$/;
        const passwordRegex = /^[A-Za-z0-9]{8,15}$/;
        const phoneRegex = /^010-\d{3,4}-\d{4}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // 값이 없으면 데이터가 유효하지 않음 리턴
        if (!uidRegex.test(uid) || !passwordRegex.test(upassword) ||
            !phoneRegex.test(uphone) || !emailRegex.test(uemail)) {
            console.log("데이터가 유효하지 않음");
            return;
        }
        // 있다면 
        const userData = {
            uid,
            uemail,
            upassword,
            uphone,
            ucity,
            uhobby,
            ujob
        };
        // 출력~~~~~
        console.log(userData);

    })
});
    