import { defineStore } from "pinia";
import { ref } from "vue";
import { create, detailById, getListData, update, updateDelete,findResourceRoleById, createResourceRole } from "./resource.service";
import type { ResourceModel, ResourceRoleModel, ResourceRoleRequest, ResourceSearchModel } from "./resource.type";

export const resourceStore = defineStore('resourceStore', () => { 
    const resultData = ref<ResourceModel[]>([])
    const resultResourceRole = ref<ResourceRoleModel[]>([])
    const detailData = ref<ResourceModel>()
    const status = ref<number>()

    const searchResource = async (params: ResourceSearchModel) => {
        try {
            const res = await getListData(params)
            resultData.value = res.data.data
            status.value = res.status
        } catch (e) {
            alert('Error api search resource')
        }
    }

    const getDetailById = async (id: string) => {
        try {
            const res = await detailById(id)
            detailData.value = res.data.data
            status.value = res.status
        } catch (e) {
            alert('Error api get detail resource')
        }
    }

    const createResource = async (data: ResourceModel) => {
        try {
            const res = await create(data)
            detailData.value = res.data.data
            status.value = res.status
        } catch (e) {
            alert('Error api create resource')
        }
    }

    const updateResource = async (data: ResourceModel) => {
        try {
            const res = await update(data)
            detailData.value = res.data.data
            status.value = res.status
        } catch (e) {
            alert('Error api update resource')
        }
    }

    const deleteResoure = async (id: string) => {
        try {
            const res = await updateDelete(id)
            detailData.value = res.data.data
            status.value = res.status
        } catch (e) {
            alert('Error api delete resource')
        }
    }

    const findByRoleId = async (id: string) => {
        try {
            const res = await findResourceRoleById(id)
            resultResourceRole.value = res.data.data
            status.value = res.status
        } catch (e) {
            alert('Error api find resource role by role id')
        }
    }

    const createOrDeleteResourceRole = async (data: ResourceRoleRequest) => {
        try {
            const res = await createResourceRole(data)
            status.value = res.status
        } catch (e) {
            alert('Error api create or delete resource role')
        }
    }

    return {
        resultData,
        resultResourceRole,
        detailData,
        status,
        searchResource,
        getDetailById,
        createResource,
        updateResource,
        deleteResoure,
        findByRoleId,
        createOrDeleteResourceRole
    }
})