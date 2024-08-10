import { defineStore } from "pinia"
import type { RoleModel } from "./role.type"
import { ref } from "vue"
import { getListData } from "./role.service"

export const roleStore = defineStore('roleStore', () => {
    const resultData = ref<RoleModel[]>([])
    const status = ref<number>()

    const getListRole = async () => {
        try {
            const res = await getListData()
            resultData.value = res.data.data
            status.value = res.status
        } catch (e) {
            alert('Error api get list role')
        }
    }

    return {
        resultData,
        status,
        getListRole
    }
})