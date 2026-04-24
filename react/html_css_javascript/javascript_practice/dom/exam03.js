document.addEventListener("DOMContentLoaded", () => {
    const btn2 = document.querySelector("#btn2");
    btn2.addEventListener("click", () => {
        console.log("버튼2가 클릭됨");
    })

    const btn3 = document.querySelector("#btn3");
    btn3.addEventListener("click", () => {
        console.log("버튼3가 클릭됨");
    })
});
