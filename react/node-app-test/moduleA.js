// 변수 선언
var moduleA_var1 = "moduleA_var1_value";
let moduleA_var2 = "moduleA_var2_value";
const moduleA_var3 = "moduleA_var3_value";

// 함수 선언
function moduleA_fun1 () {
    console.log("fun1 실행");
};

const moduleA_fun2 = function() {
    console.log("fun2 실행");
};

const moduleA_fun3 = () => console.log("fun3 실행");



export default {
    moduleA_var1: moduleA_var1,
    moduleA_var2: moduleA_var2,
    moduleA_var3: moduleA_var3,

    moduleA_fun1,
    moduleA_fun2,
    moduleA_fun3

}