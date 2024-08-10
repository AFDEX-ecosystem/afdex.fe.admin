<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">CAT 대학적응력 검사</h2>
      </div>
    </div>
    <div class="grid_content">
      <div class="sub_section_sm">
        <div class="radio_tab_md_wrap">
          <p class="radio_tab_md">
            <input type="radio" id="radio_md_1" v-model="radioTab" value="r1" />
            <label for="radio_md_1">진단목록</label>
          </p>
          <p class="radio_tab_md">
            <input type="radio" id="radio_md_2" v-model="radioTab" value="r2" />
            <label for="radio_md_2">진단검사</label>
          </p>
        </div>
      </div>
      <div class="sub_section">
        <div v-if="radioTab === 'r1'">
          <!-- 진단목록 -->

          <!-- 내용없을때 -->
          <!-- <div class="no_list">
            <div>
              <p>내용이 없습니다.</p>
            </div>
          </div> -->

          <div class="cat_list">
            <div class="box cat_viewbox">
              <!-- 기간만료 : finished 추가 -->
              <button class="cat_btn" @click="$router.push('')">
                <span>참여하기</span>
              </button>
              <div class="cont">
                <strong
                  >CAT 대학적응력 진단제목이 표시됩니다. CAT 대학적응력 진단제목이 표시됩니다. CAT 대학적응력 진단제목이
                  표시됩니다. 만족도 조사 제목이 표시됩니다.</strong
                >
                <div class="bottom">
                  <ul>
                    <li><strong>진단대상</strong>전체</li>
                    <li><strong>진단기간</strong> 2024/06/01 ~ 2024/06/07</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box cat_viewbox">
              <!-- 기간만료 : finished 추가 -->
              <button class="cat_btn finished" disabled>
                <span>참여하기</span>
              </button>
              <div class="cont">
                <strong
                  >CAT 대학적응력 진단제목이 표시됩니다. CAT 대학적응력 진단제목이 표시됩니다. CAT 대학적응력 진단제목이
                  표시됩니다. 만족도 조사 제목이 표시됩니다.</strong
                >
                <div class="bottom">
                  <ul>
                    <li><strong>진단대상</strong>전체</li>
                    <li><strong>진단기간</strong> 2024/06/01 ~ 2024/06/07</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box cat_viewbox">
              <!-- 기간만료 : finished 추가 -->
              <button class="cat_btn" disabled>
                <span>참여하기</span>
              </button>
              <div class="cont">
                <strong
                  >CAT 대학적응력 진단제목이 표시됩니다. CAT 대학적응력 진단제목이 표시됩니다. CAT 대학적응력 진단제목이
                  표시됩니다. 만족도 조사 제목이 표시됩니다.</strong
                >
                <div class="bottom">
                  <ul>
                    <li><strong>진단대상</strong>전체</li>
                    <li><strong>진단기간</strong> 2024/06/01 ~ 2024/06/07</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="box cat_viewbox">
              <!-- 기간만료 : finished 추가 -->
              <button class="cat_btn" disabled>
                <span>참여하기</span>
              </button>
              <div class="cont">
                <strong
                  >CAT 대학적응력 진단제목이 표시됩니다. CAT 대학적응력 진단제목이 표시됩니다. CAT 대학적응력 진단제목이
                  표시됩니다. 만족도 조사 제목이 표시됩니다.</strong
                >
                <div class="bottom">
                  <ul>
                    <li><strong>진단대상</strong>전체</li>
                    <li><strong>진단기간</strong> 2024/06/01 ~ 2024/06/07</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <PaginationUi />
        </div>
        <div v-if="radioTab === 'r2'">
          <!-- 진단검사 -->

          <!-- 내용없을때 -->
          <!-- <div class="no_list">
            <div>
              <p>내용이 없습니다.</p>
            </div>
          </div> -->

          <div class="cat_list result_list">
            <div class="box cat_viewbox">
              <button class="cat_btn" @click="$router.push('')">
                <span>참여완료</span>
              </button>
              <div class="cont">
                <strong
                  >CAT 대학적응력 진단제목이 표시됩니다. CAT 대학적응력 진단제목이 표시됩니다. CAT 대학적응력 진단제목이
                  표시됩니다. 만족도 조사 제목이 표시됩니다.</strong
                >
                <div class="bottom">
                  <ul>
                    <li><strong>진단대상</strong>전체</li>
                    <li><strong>진단기간</strong> 2024/06/01 ~ 2024/06/07</li>
                    <li><strong>진단일시</strong> 2024/06/01 ~ 2024/06/07</li>
                  </ul>
                  <button type="button" class="btn_round btn_sm btn_bo_primary">결과 보기</button>
                </div>
              </div>
            </div>
            <div class="box cat_viewbox">
              <button class="cat_btn">
                <span>참여완료</span>
              </button>
              <div class="cont">
                <strong
                  >CAT 대학적응력 진단제목이 표시됩니다. CAT 대학적응력 진단제목이 표시됩니다. CAT 대학적응력 진단제목이
                  표시됩니다. 만족도 조사 제목이 표시됩니다.</strong
                >
                <div class="bottom">
                  <ul>
                    <li><strong>진단대상</strong>전체</li>
                    <li><strong>진단기간</strong> 2024/06/01 ~ 2024/06/07</li>
                    <li><strong>진단일시</strong> 2024/06/01 ~ 2024/06/07</li>
                  </ul>
                  <button type="button" class="btn_round btn_sm btn_bo_primary">결과 보기</button>
                </div>
              </div>
            </div>
            <div class="box cat_viewbox">
              <button class="cat_btn">
                <span>참여완료</span>
              </button>
              <div class="cont">
                <strong
                  >CAT 대학적응력 진단제목이 표시됩니다. CAT 대학적응력 진단제목이 표시됩니다. CAT 대학적응력 진단제목이
                  표시됩니다. 만족도 조사 제목이 표시됩니다.</strong
                >
                <div class="bottom">
                  <ul>
                    <li><strong>진단대상</strong>전체</li>
                    <li><strong>진단기간</strong> 2024/06/01 ~ 2024/06/07</li>
                    <li><strong>진단일시</strong> 2024/06/01 ~ 2024/06/07</li>
                  </ul>
                  <button type="button" class="btn_round btn_sm btn_bo_primary">결과 보기</button>
                </div>
              </div>
            </div>
            <div class="box cat_viewbox">
              <button class="cat_btn">
                <span>참여완료</span>
              </button>
              <div class="cont">
                <strong
                  >CAT 대학적응력 진단제목이 표시됩니다. CAT 대학적응력 진단제목이 표시됩니다. CAT 대학적응력 진단제목이
                  표시됩니다. 만족도 조사 제목이 표시됩니다.</strong
                >
                <div class="bottom">
                  <ul>
                    <li><strong>진단대상</strong>전체</li>
                    <li><strong>진단기간</strong> 2024/06/01 ~ 2024/06/07</li>
                    <li><strong>진단일시</strong> 2024/06/01 ~ 2024/06/07</li>
                  </ul>
                  <button type="button" class="btn_round btn_sm btn_bo_primary">결과 보기</button>
                </div>
              </div>
            </div>
          </div>
          <PaginationUi />
        </div>
      </div>
    </div>
  </div>

  <PopupView v-model="isPopups[0]" class="large">
    <template #title>개인참여 사회봉사 승인 신청(등록)</template>
    <template #footer>
      <button type="button" class="btn_round2 btn_white btn_xl" @click="popupHide(0)">닫기</button>
      <button type="button" class="btn_round2 btn_primary btn_xl" @click="onclickApply()">승인 요청</button>
    </template>
    <!--  -->
  </PopupView>
</template>

<script lang="ts">
import PopupView from "@/components/common/PopupView.vue";
import PaginationUi from "@/components/common/PaginationUi.vue";

export default {
  components: {
    PopupView,
    PaginationUi,
  },
  data: () => ({
    radioTab: "r1",
    isPopups: [false],
    selectOption: {
      value1: "2024",
      value2: "참여여부 전체",
      type1: [
        { label: "전체", value: "" },
        { label: "2024", value: "01" },
      ],
      type2: [
        { label: "참여여부 전체", value: "" },
        { label: "참여여부", value: "01" },
      ],
    },
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
    onclickApply() {
      const vm = this;
      vm.$confirm("승인 요청하시겠습니까?", "알림", (isConfirm: Boolean) => {
        if (isConfirm) {
          vm.$toast("승인 요청 되었습니다.");
        }
      });
    },
  },
};
</script>
