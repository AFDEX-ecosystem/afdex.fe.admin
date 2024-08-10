import { defineStore } from "pinia";
import { ref } from "vue";
import type { MenuRequestModel, MenuResponseModel, MenuSearchModel } from "./menu.type";
import { create, detailById, getListData, getListParent, update, updateDelete } from "./menu.service";

export const menuStore = defineStore('menuStore', () => { 
    const resultData = ref<MenuResponseModel[]>([])
    const detailData = ref<MenuResponseModel>()
    const status = ref<number>()

    const searchMenu = async (params: MenuSearchModel) => {
        try {
            const res = await getListData(params)
            resultData.value = res.data.data
            status.value = res.status
        } catch (e) {
            alert('Error api search menu')
        }
    }

    const getDetailById = async (id: string) => {
        try {
            const res = await detailById(id)
            detailData.value = res.data.data
            status.value = res.status
        } catch (e) {
            alert('Error api get detail menu')
        }
    }

    const createMenu = async (data: MenuRequestModel) => {
        try {
            const res = await create(data)
            detailData.value = res.data.data
            status.value = res.status
        } catch (e) {
            alert('Error api create menu')
        }
    }

    const updateMenu = async (data: MenuRequestModel) => {
        try {
            const res = await update(data)
            detailData.value = res.data.data
            status.value = res.status
        } catch (e) {
            alert('Error api update menu')
        }
    }

    const deleteMenu = async (id: string) => {
        try {
            const res = await updateDelete(id)
            detailData.value = res.data.data
            status.value = res.status
        } catch (e) {
            alert('Error api update delete flag menu')
        }
    }

    const getSelectBoxParent = async () => {
        try {
            const res = await getListParent()
            resultData.value = res.data.data
            status.value = res.status
        } catch (e) {
            alert('Error api update delete flag menu')
        }
    }

    return {
        resultData,
        detailData,
        status,
        searchMenu,
        getDetailById,
        createMenu,
        updateMenu,
        deleteMenu,
        getSelectBoxParent
    }
})