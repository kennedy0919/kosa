import axios from "axios";


// 회원 가입
function join(member) {
    /*
    {
    "mid" : "user1",
    "mname" : "사용자1",
    "mpassword" : "12345",
    "memail" : "user1@mycompany.com"
    }
    */
   // 요청 body에 json으로 데이터를 전달
    return axios.post("/member/join", member);
}

function login(member) {
    return axios.post("/member/login", member);
}

export default {
    join,
    login 
};