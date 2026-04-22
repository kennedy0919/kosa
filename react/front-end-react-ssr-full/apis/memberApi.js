import axios from "axios";

//회원 가입
function join(member) {
    /*
    member = {
        mid: "user1",
        mname: "사용자1",
        mpassword: "Ab123",
        memail:"user1@naver.com"
    }
    */
    //POST: raw/json 방식으로 전달
    return axios.post("/database/member/join", member);
}

//로그인
function login(member) {
    /*
    member = {
        mid: "user",
        mpassword: "12345"
    }
    */
   //POST: raw/json 방식으로 전달
   return axios.post("/database/member/login", member);
}

const obj = {
  join,
  login
};
export default obj;