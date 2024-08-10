import http from "@/utils/http"

const url = "/admin/role"
export const getListData = () => {
    return http.get(url + '/list')
} 