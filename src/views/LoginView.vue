<template>
  <div class="login_wrap">
    <div class="login_box">
      <div class="login_header">
        <h3 class="login_logo">
          <img src="@/assets/images/common/logo.svg" alt="영산대학교"/>
        </h3>
      </div>
      <div class="login_input">
        <strong>아이디</strong>
        <input type="text" v-model="username" class="form_style wd_p100" placeholder="아이디를 입력하세요"/>
      </div>
      <div class="login_input">
        <strong>비밀번호</strong>
        <input type="password" v-model="password" class="form_style wd_p100" placeholder="비밀번호를 입력하세요"/>
      </div>
      <p class="login_error" v-if="errorMessage">아이디가 일치하지 않습니다.</p>

      <div class="login_btn_area">
        <button type="button" class="btn_round btn_primary btn_xl btn_login" @click="login">로그인</button>
      </div>

      <div class="remember_id">
        <div class="check_row">
          <input type="checkbox" name="join_check" id="join_check1" class="hidden"/>
          <label for="join_check1">아이디 저장</label>
        </div>
      </div>
    </div>
    <p class="login_tip">
      * ID/PW는 학사정보시스템 접속정보를 이용합니다.<br />
      * ID/PW 조회 및 로그인 관련문의는 000-0000-0000으로 문의해주세요.
    </p>
    <footer id="footer" class="footer_wrap">
      <p class="copyright">Copyright @2024 <strong>Youngsan University.</strong> All Right Reserved</p>
    </footer>
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

export default {
  components: {
    LoaddingComponent,
  },
  data() {
    return {
      username: 'dainls',
      password: 'dainls123!@#',
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
      store
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