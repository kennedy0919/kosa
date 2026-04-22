// 변수 선언
export var moduleB_var1 = "moduleB_var1_value";
let moduleB_var2 = "moduleB_var2_value";
const moduleB_var3 = "moduleB_var3_value";

// 함수 선언
export function moduleB_fun1 () {
    console.log("fun1 실행");
};

const moduleB_fun2 = function() {
    console.log("fun2 실행");
};

const moduleB_fun3 = () => console.log("fun3 실행");


export default {
    moduleB_var2,
    moduleB_var3,
    moduleB_fun2,
    moduleB_fun3 
}