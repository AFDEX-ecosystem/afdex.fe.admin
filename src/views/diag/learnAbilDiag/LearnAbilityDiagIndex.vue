<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">학습역량진단</h2>
      </div>
    </div>
    <div class="grid_content">
      <div class="sub_section_md">
        <div class="diag_intro learn_ability">
          <div>
            우리 대학에서 설정한<br />
            학습역량의 수준을 측정하는 검사입니다.
          </div>
        </div>
      </div>
      <div class="diag_grid">
        <div class="diag_card_wrap">
          <div class="section_tit_wrap">
            <h4 class="section_tit">학습역량진단 목록</h4>
          </div>
          <div class="diag_swiper">
            <!-- 역량진단 전일 경우 표출 -->
            <!--  
              <div class="box test_before">
                <div>
                  <p>올해 학습역량진단 준비중입니다.</p>
                </div>
              </div>
            -->
            <swiper v-bind="swiperOptions" :modules="modules">
              <swiper-slide class="box">
                <div class="test_stare">
                  <div class="label_wrap">
                    <!-- 상태에 따른 클래스 변경 : 
                      진행중 : green
                      미참여 : purple
                      종료 : gray
                    -->
                    <span class="status_label green">진행중</span>
                  </div>
                  <div class="title">
                    <p>
                      2024학년도 학습역량진단 2024학년도 학습역량진단 2024학년도 학습역량진단 2024학년도 학습역량진단
                    </p>
                  </div>
                  <span class="date">2024.01.01~2024.08.25</span>
                  <div class="btn_area">
                    <button type="button" class="btn_round2 btn_md btn_primary" @click="popupShow(0)">진단시작</button>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="box">
                <div class="test_stare">
                  <div class="label_wrap">
                    <!-- 상태에 따른 클래스 변경 : 
                      진행중 : green
                      미참여 : purple
                      종료 : gray
                    -->
                    <span class="status_label purple">미참여</span>
                  </div>
                  <div class="title">
                    <p>
                      2024학년도 학습역량진단 2024학년도 학습역량진단 2024학년도 학습역량진단 2024학년도 학습역량진단
                    </p>
                  </div>
                  <span class="date">2024.01.01~2024.08.25</span>
                  <div class="btn_area">
                    <button type="button" class="btn_round2 btn_md btn_primary">진단시작</button>
                  </div>
                </div>
              </swiper-slide>
              <swiper-slide class="box" @click="onclickDiagMsg()">
                <div class="test_stare">
                  <div class="label_wrap">
                    <!-- 상태에 따른 클래스 변경 : 
                      진행중 : green
                      미참여 : purple
                      종료 : gray
                    -->
                    <span class="status_label gray">종료</span>
                  </div>
                  <div class="title">
                    <p>
                      2024학년도 학습역량진단 2024학년도 학습역량진단 2024학년도 학습역량진단 2024학년도 학습역량진단
                    </p>
                  </div>
                  <span class="date">2024.01.01~2024.08.25</span>
                </div>
              </swiper-slide>
              <swiper-slide class="box">
                <div class="test_stare">
                  <div class="label_wrap">
                    <!-- 상태에 따른 클래스 변경 : 
                      진행중 : green
                      미참여 : purple
                      종료 : gray
                    -->
                    <span class="status_label gray">종료</span>
                  </div>
                  <div class="title">
                    <p>
                      2024학년도 학습역량진단 2024학년도 학습역량진단 2024학년도 학습역량진단 2024학년도 학습역량진단
                    </p>
                  </div>
                  <span class="date">2024.01.01~2024.08.25</span>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="diag_rslt_wrap">
          <div class="section_tit_wrap">
            <h4 class="section_tit">학습역량진단 결과</h4>
          </div>
          <div class="box test_result">
            <!-- 결과 없을 경우 표출 -->
            <!--  
              <div class="test_before">
                <div>
                  <p>학습역량진단 결과가 없습니다.</p>
                </div>
              </div>
            -->
            <ul class="testresult_list">
              <li>
                <div>
                  <p class="title">2024학년도 학습역량진단 (1차)</p>
                  <div class="function">
                    <p class="date">응시일<span>예정</span></p>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <p class="title">2024학년도 학습역량진단 (1차)</p>
                  <div class="function">
                    <p class="date">응시일<span>예정</span></p>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <p class="title">2024학년도 학습역량진단 (1차)</p>
                  <div class="function">
                    <p class="date">응시일<span>2024.04.11</span></p>
                    <span class="label">응시완료</span>
                    <button type="button" @click="onclickDiagMsg()">결과보기</button>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <p class="title">2024학년도 학습역량진단 (1차)</p>
                  <div class="function">
                    <p class="date">응시일<span>2024.04.11</span></p>
                    <span class="label">응시완료</span>
                    <button type="button" @click="$router.push('/diag/learnAbility/result')">결과보기</button>
                  </div>
                </div>
              </li>
              <li>
                <div>
                  <p class="title">2024학년도 학습역량진단 (1차)</p>
                  <div class="function">
                    <p class="date">응시일<span>2024.04.11</span></p>
                    <span class="label">응시완료</span>
                    <button type="button">결과보기</button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <PopupView v-model="isPopups[0]" class="medium">
    <template #title>개인정보 수집 및 이용에 대한 동의</template>
    <template #footer>
      <button type="button" class="btn_round2 btn_white btn_xl" @click="popupHide(0)">취소</button>
      <button type="button" class="btn_round2 btn_primary btn_xl" @click="$router.push('/diag/learnAbility/do')">
        동의
      </button>
    </template>
    <div class="privacy_wrap">
      <div class="privacy_box">
        <ul class="list_dot">
          <li>수집 및 이용 항목 : 소속, 성별, 학번 등</li>
          <li>수집 및 이용 목적 : 학습역량진단 조사 통계 분석</li>
          <li>보유 및 이용기간 : 3개월</li>
        </ul>
      </div>
      <div class="privacy_check">
        <p class="title">
          개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 동의를 거부할 경우 조사에 응답이 불가합니다.
        </p>
        <div class="choice dp_block ta_c">
          <strong class="dp_block mb-4">개인정보 수집·이용하는데 동의하십니까?</strong>
          <div>
            <p class="radio_row">
              <input type="radio" id="privacyChoice2_1" value="true" /><label for="privacyChoice2_1">예</label>
            </p>
            <p class="radio_row">
              <input type="radio" id="privacyChoice2_2" value="false" /><label for="privacyChoice2_2">아니오</label>
            </p>
          </div>
        </div>
      </div>
    </div>
  </PopupView>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import PopupView from "@/components/common/PopupView.vue";

import "swiper/css";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
    PopupView,
  },
  setup() {
    return {
      modules: [Pagination],
      swiperOptions: {
        breakpoints: {
          1024: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 8,
          },
        },
        slidesPerView: 1,
        spaceBetween: 8,
        pagination: {
          clickable: true,
        },
      },
    };
  },
  data: () => ({
    isPopups: [false],
  }),
  methods: {
    popupShow(idx: number) {
      const vm = this;
      vm.isPopups[idx] = true;
    },
    popupHide(idx: number) {
      const vm = this;
      vm.isPopups[idx] = false;
    },
    onclickDiagMsg() {
      const vm = this;
      vm.$alert("진단 결과는 진단 기간 종료 후 확인 가능합니다.");
    },
  },
};
</script>
