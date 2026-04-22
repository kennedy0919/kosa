import moduleA from "./moduleA.js"

// 변수값 읽기
console.log(moduleA.moduleA_var1);
console.log(moduleA.moduleA_var2);
console.log(moduleA.moduleA_var3);

// 함수 호출 코드
moduleA.moduleA_fun1();
moduleA.moduleA_fun2();
moduleA.moduleA_fun3();

import moduleB, { moduleB_var1, moduleB_fun1 } from "./moduleB.js";

// 변수값 읽기
console.log(moduleB_var1);
console.log(moduleB.moduleB_var2);

// 함수 호출
moduleB_fun1(); 
moduleB.moduleB_fun2();