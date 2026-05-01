"use client"

import axios from "axios"

axios.defaults.baseURL="http://localhost/database";

// 로그인 성공했을때 기본 요청 해더에 Authorization 추가
export function addAuthHeader(accessToken) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
}


// 로그아웃을 했을때 기본 요청 헤더에 Authorization을 제거
export function removeAuthHeader() {
    delete axios.defaults.headers.common["Authorization"];
}



function AxiosConfig() {
    return null;
}

export default AxiosConfig;
