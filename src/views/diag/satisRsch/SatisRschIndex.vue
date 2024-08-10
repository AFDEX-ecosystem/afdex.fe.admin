<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">만족도 조사</h2>
      </div>
      <div class="sub_section_md">
        <div class="search_box">
          <div class="search_section">
            <div class="search_toggle lg center flip">
              <div class="left">
                <p class="total_count"><strong>103</strong>개의 설문조사</p>
              </div>
              <div class="right">
                <div class="select_row sm">
                  <vue-select
                    class="select_box"
                    :options="selectOption.type1"
                    v-model="selectOption.value1"
                  ></vue-select>
                </div>
                <div class="select_row md">
                  <vue-select
                    class="select_box"
                    :options="selectOption.type2"
                    v-model="selectOption.value2"
                  ></vue-select>
                </div>
                <div class="search_row">
                  <input type="search" class="form_style wd_p100" placeholder="만족도 조사를 찾아보세요" />
                  <button type="button" class="btn_search btn_icon icon_only">검색</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 내용없을때 -->
      <!-- <div class="no_list">
          <div>
            <p>내용이 없습니다.</p>
          </div>
        </div> -->
      <!-- 내용없을때 -->
      <div class="satis_list">
        <div class="box satis_viewbox">
          <!-- 상태에 따른 클래스 변경 : 
          이어서 참여하기 : do
          참여완료 : done
          기간만료 : finished
          -->
          <button class="satis_btn do" @click="$router.push('/diag/satisRsch/do')">
            <span>이어서<br />참여하기</span>
          </button>
          <div class="cont">
            <strong
              >만족도 조사 제목이 표시됩니다. 만족도 조사 제목이 표시됩니다. 만족도 조사 제목이 표시됩니다. 만족도 조사
              제목이 표시됩니다.</strong
            >
            <div class="bottom">
              <div class="left">
                <p>2024/06/01 ~ 2024/06/07</p>
              </div>
              <div class="right">
                <p>조사지 수 5개</p>
              </div>
            </div>
          </div>
        </div>
        <div class="box satis_viewbox">
          <!-- 상태에 따른 클래스 변경 : 
          이어서 참여하기 : do
          참여완료 : done
          기간만료 : finished
          -->
          <button class="satis_btn done">
            <span>참여완료</span>
          </button>
          <div class="cont">
            <strong
              >만족도 조사 제목이 표시됩니다. 만족도 조사 제목이 표시됩니다. 만족도 조사 제목이 표시됩니다. 만족도 조사
              제목이 표시됩니다.</strong
            >
            <div class="bottom">
              <div class="left">
                <p>2024/06/01 ~ 2024/06/07</p>
              </div>
              <div class="right">
                <button
                  type="button"
                  class="btn_sm btn_round btn_white"
                  @click="$router.push('/diag/satisRsch/result')"
                >
                  제출내역보기
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="box satis_viewbox">
          <!-- 상태에 따른 클래스 변경 : 
          이어서 참여하기 : do
          참여완료 : done
          기간만료 : + finished
          -->
          <button class="satis_btn do finished" disabled>
            <span>이어서<br />참여하기</span>
          </button>
          <div class="cont">
            <strong
              >만족도 조사 제목이 표시됩니다. 만족도 조사 제목이 표시됩니다. 만족도 조사 제목이 표시됩니다. 만족도 조사
              제목이 표시됩니다.</strong
            >
            <div class="bottom">
              <div class="left">
                <p>2024/06/01 ~ 2024/06/07</p>
              </div>
              <div class="right">
                <p>조사지 수 10개</p>
              </div>
            </div>
          </div>
        </div>
        <div class="box satis_viewbox">
          <!-- 상태에 따른 클래스 변경 : 
          이어서 참여하기 : do
          참여완료 : done
          기간만료 : + finished
          -->
          <button class="satis_btn done finished" disabled>
            <span>참여완료</span>
          </button>
          <div class="cont">
            <strong
              >만족도 조사 제목이 표시됩니다. 만족도 조사 제목이 표시됩니다. 만족도 조사 제목이 표시됩니다. 만족도 조사
              제목이 표시됩니다.</strong
            >
            <div class="bottom">
              <div class="left">
                <p>2024/06/01 ~ 2024/06/07</p>
              </div>
              <div class="right">
                <button type="button" class="btn_sm btn_round btn_white">제출내역보기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PaginationUi />
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
