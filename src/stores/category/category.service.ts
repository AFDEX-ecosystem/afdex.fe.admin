import http from "@/utils/http";

const url = "/a/category"
export const getListData = (searchForm :any) => {
    return http.post(url + '/list', searchForm)
} 