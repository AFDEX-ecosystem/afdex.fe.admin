<template>
  <div class="header_wrap">
    <div class="header_top">
      <div class="grid_content">
        <button type="button" class="btn_menu">메뉴보기</button>
        <h1 class="header_logo">
          <router-link to="/">
            <img src="@/assets/images/common/img_logo.svg" alt="영산대학교" />
          </router-link>
        </h1>
        <div class="header_function">
          <p class="login_info">와이즈유님 [2024.07.01 17:04]</p>
          <button type="button" class="btn_logout" @click="logout">로그아웃</button>
        </div>
      </div>
    </div>
    <div class="header_bottom">
      <div class="grid_content">
        <nav class="nav_wrap">
          <ul id="gnbMenu" class="gnb_1depth">
            <li><router-link to="/portfolio">포트폴리오</router-link></li>
            <li><router-link to="/abilityDiagram">역량체계도 소개</router-link></li>
            <li>
              <router-link to="/diag">진단</router-link>
              <ul class="gnb_2depth">
                <li><router-link to="/diag/coreAbility">핵심역량진단</router-link></li>
                <li><router-link to="/diag/majorAbility">전공능력진단</router-link></li>
                <li><router-link to="/diag/learnAbility">학습역량진단</router-link></li>
                <li><router-link to="/diag/basicAbility">기초학력진단</router-link></li>
                <li><router-link to="/diag/sltTest">SLT 자기조절학습 검사</router-link></li>
                <li><router-link to="/diag/catTest">CAT 대학적응력 검사</router-link></li>
                <li><router-link to="/diag/satisRsch">만족도 조사</router-link></li>
              </ul>
            </li>
            <li>
              <router-link to="/abilityDevelop">역량개발</router-link>
              <ul class="gnb_2depth">
                <li><router-link to="/learnTutoring">학습튜터링</router-link></li>
                <li><router-link to="/learnSdl">학습SDL</router-link></li>
                <li><router-link to="/volunteerApply">사회봉사 신청</router-link></li>
                <li><router-link to="/individualVolunteer">개인참여 사회봉사 등록</router-link></li>
              </ul>
            </li>
            <li>
              <router-link to="/community">커뮤니티</router-link>
              <ul class="gnb_2depth">
                <li><router-link to="/notice">공지사항</router-link></li>
                <li><router-link to="/qna">Q&A</router-link></li>
                <li><router-link to="/alarmTalk">알림톡</router-link></li>
              </ul>
            </li>
            <li>
              <router-link to="/mycertistate">나의 인증 현황</router-link>
              <ul class="gnb_2depth">
                <li><router-link to="/coreState">핵심역량 현황</router-link></li>
                <li><router-link to="/majorState">전공능력 현황</router-link></li>
              </ul>
            </li>
            <li><router-link to="/trackEdu">트랙교육과정 이수현황</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
    <!-- 모바일 메뉴 -->
    <div class="gnb_submenu">
      <div class="grid_content">
        <nav class="nav_wrap">
          <ul class="sub_1depth">
            <li><router-link to="/portfolio">포트폴리오</router-link></li>
            <li><router-link to="/abilityDiagram">역량체계도 소개</router-link></li>
            <li>
              <a href="javascript:void(0);">진단</a>
              <ul class="sub_2depth">
                <li><router-link to="/diag/coreAbility">핵심역량진단</router-link></li>
                <li><router-link to="/diag/majorAbility">전공능력진단</router-link></li>
                <li><router-link to="/diag/learnAbility">학습역량진단</router-link></li>
                <li><router-link to="/diag/basicAbility">기초학력진단</router-link></li>
                <li><router-link to="/diag/sltTest">SLT 자기조절학습 검사</router-link></li>
                <li><router-link to="/diag/catTest">CAT 대학적응력 검사</router-link></li>
                <li><router-link to="">만족도 조사</router-link></li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0);">역량개발</a>
              <ul class="sub_2depth">
                <li><router-link to="/learnTutoring">학습튜터링</router-link></li>
                <li><router-link to="/learnSdl">학습SDL</router-link></li>
                <li><router-link to="/volunteerApply">사회봉사 신청</router-link></li>
                <li><router-link to="/individualVolunteer">개인참여 사회봉사 등록</router-link></li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0);">커뮤니티</a>
              <ul class="sub_2depth">
                <li><router-link to="/notice">공지사항</router-link></li>
                <li><router-link to="/qna">Q&A</router-link></li>
                <li><router-link to="/alarmTalk">알림톡</router-link></li>
              </ul>
            </li>
            <li>
              <a href="javascript:void(0);">나의 인증 현황</a>
              <ul class="sub_2depth">
                <li><router-link to="/coreState">핵심역량 현황</router-link></li>
                <li><router-link to="/majorState">전공능력 현황</router-link></li>
              </ul>
            </li>
            <li><router-link to="/trackEdu">트랙교육과정 이수현황</router-link></li>
          </ul>
        </nav>
      </div>
      <div class="sub_footer">
        <div class="grid_content"></div>
      </div>
    </div>
    <!-- 모바일 메뉴 -->
  </div>
</template>

<script lang="ts">
import { headerStyle, mobileGnb, gnbOneDepth } from "@/assets/js/common";
import {removeUserInfo} from "@/utils/storage";
import commonService from "@/service/common/CommonService";
export default {
  mounted: function () {
    headerStyle();
    mobileGnb();
    gnbOneDepth();
  },
  setup(){
    const route = useRoute()
    const router = useRouter()

    const isLoading = ref(false)

    const logout = () => {
      isLoading.value = true
      commonService
          .logout()
          .then(async (response) => {
            if (response.status == 200) {
              await removeUserInfo()
              await router.push({name: "Login"})
            }
          })
          .catch((e) => {
            console.log(e)
          })
          .finally(() => {
            isLoading.value = false
          })
    }
    return {
      logout
    }
  }
};
</script>
