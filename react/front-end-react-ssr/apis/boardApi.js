import axios from "axios";

function getBoardList(pageNo = 1) {
    return axios.get("/board/list", {params:{pageNo:pageNo}});
}
 

// formData: 요청 본문을 멀티 파트로 구분해서 저장하는 객체
function boardWrite(formData) {
    // 요청 본문에 멀티 파트로 데이터를 전송
    return axios.post("/board/create", formData);
}

function boardRead(bno) {
    return axios.get("/board/read/" + bno);
}

function boardAttachDownload(bno) {
    return axios.get("/board/battach/" + bno, {
        responseType: 'blob'  // ✅ blob으로 받기
    });
}

export default {
    getBoardList,
    boardWrite,
    boardRead,
    boardAttachDownload
}
