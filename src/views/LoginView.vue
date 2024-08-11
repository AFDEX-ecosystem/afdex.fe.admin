<template>
  <div class="login_wrap">
    <img :src="logo" class="w-[220px] mb-[40px]" alt=""/>
    <div class="login_box">
      <div class="login_header">
        <h3 class="login_logo text-4xl flex justify-center font-bold">
          Đăng nhập AFDEX
        </h3>
      </div>
      <div class="login_input">
        <strong>Số điện thoại</strong>
        <input type="text" v-model="username" class="form_style wd_p100" placeholder="아이디를 입력하세요"/>
      </div>
      <div class="login_input">
        <strong>Mật khẩu</strong>
        <input type="password" v-model="password" class="form_style wd_p100" placeholder="비밀번호를 입력하세요"/>
      </div>
      <p class="login_error" v-if="errorMessage">Tài khoản hoặc mật khẩu không đúng</p>

      <div class="login_btn_area">
        <button type="button" class="btn_round bg-[--base-color-1] text-white btn_xl btn_login" @click="login">Đăng nhập</button>
      </div>

      <div class="remember_id">
        <div class="check_row">
          <input type="checkbox" name="join_check" id="join_check1" class="hidden"/>
          <label for="join_check1">Lưu tài khoản</label>
        </div>
      </div>
    </div>
    <p class="login_tip">
      <!-- Tổng ài hỗ trợ: 19001900 <br/>
 Hỗ trợ khách hàng các ngày trong tuần <br/> từ Thứ Hai ến Chủ nhật <br/>
 (từ 07h00 - 22h hàng ngày) -->
    </p>
  </div>
  <LoaddingComponent v-if="isLoading"></LoaddingComponent>
</template>

<script lang="ts">
import commonService from '@/service/common/CommonService'
// import { userInfoStore } from '../stores/userInfo'
import LoaddingComponent from '@/components/common/loading/LoaddingComponent.vue'
import {setUserInfo} from '@/utils/storage'
import router from '@/router'
import {commonStore} from '@/stores/common'
import logo from '@/assets/images/icon/logo white.png'

export default {
  components: {
    LoaddingComponent,
  },
  data() {
    return {
      username: '032***',
      password: '032***',
      isLoad: false,
      isSubmitted: false,
      openModal: [
        {id: 'findId', status: false},
        {id: 'reset', status: false}
      ],
      isRememberId: false,
      modalOpenConfirm: false,
      messModalConfirm: null,
      isDisabled: true,
      errorMessage: '',
      isLoading: false,
    }
  },
  setup() {
    const store = commonStore()

    return {
      store,
      logo
    }
  },
  mounted() {
    this.store.setLoading(false)
  },
  methods: {
    login() {
      let obj = {
        userId: this.username,
        password: this.password,
        loginDiv: "admin",
        userRoles: '3'
      }
      this.isLoading = true
      this.errorMessage = ''
      commonService
          .login(obj)
          .then(async (response) => {
            this.store.setLoading(false)
            if (response.status == 200 && response.data.data) {
              await setUserInfo(response.data.data)
              await this.$router.push({name: "Home"})
            }
          })
          .catch((e) => {
            this.errorMessage = e.message
          })
          .finally(() => {
            this.isLoading = false
          })
    },
  }
}

</script>