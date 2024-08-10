import http from "@/utils/http"
import type { ResourceRequestModel, ResourceRoleRequestModel, ResourceSearchModel } from "./resource.type"

const url = "/admin/resources"
export const getListData = (searchForm: ResourceSearchModel) => {
    return http.post(url + '/list', searchForm)
} 

export const detailById = (id: string) => {
    return http.post(url + '/', id)
}

export const create = (data: ResourceRequestModel) => {
    return http.post(url + '/create', data)
} 

export const update = (data: ResourceRequestModel) => {
    return http.put(url + '/update', data)
}

export const updateDelete = (id: string) => {
    return http.delete(url + '/',  {
        data: id
    })
}

export const findResourceRoleById = (id: string) => {
    return http.post(url +  '/resource-role/', id)
}

export const createResourceRole = (data: ResourceRoleRequestModel) => {
    return http.post(url +  '/createResourceRole', data)
}