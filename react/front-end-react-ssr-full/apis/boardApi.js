import axios from "axios";

//게시물 목록 가져오기
function getBoardList(pageNo = 1) {
    //GET: http://localhost/database/board/list?pageNo=1
    return axios.get("/database/board/list", {params: {pageNo:pageNo}});
}

//게시물 쓰기
function boardWrite(formData) {
    //multipart/form-data로 데이터 전송
    return axios.post("/database/board/create", formData);
}

//게시물 읽기
function boardRead(bno, caller) {
    //Path Variable로 데이터 전송
    return axios.get("/database/board/read/" + bno + "?caller=" + caller);
}

//첨부 다운로드
function boardAttachDownload(bno) {
    //Path Variable로 데이터 전송
    return axios.get("/database/board/battach/" + bno, {responseType:"blob"});
}

//게시물 삭제
function boardDelete(bno) {
    //Path Variable로 데이터 전송
    return axios.delete("/database/board/delete/" + bno)
}

//게시물 수정
function boardUpdate(formData) {
    //multipart/form-data로 데이터 전송
    return axios.put("/database/board/update", formData);
}

const obj = {
    getBoardList,
    boardWrite,
    boardRead,
    boardAttachDownload,
    boardDelete,
    boardUpdate
};
export default obj;
