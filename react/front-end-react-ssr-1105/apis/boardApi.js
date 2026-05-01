import axios from "axios";

function getBoardList(pageNo = 1) {
    return axios.get("/board/list", {params:{pageNo:pageNo}});
}
 
export default {
    getBoardList
}
