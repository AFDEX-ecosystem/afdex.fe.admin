<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">개인참여 사회봉사 승인 신청</h2>
      </div>
      <div class="sub_section_xs">
        <div class="toggle_wrap lg">
          <div class="left">
            <p class="radio_tab_md">
              <input type="radio" id="radio_md_1" v-model="radioTab" value="r1" />
              <label for="radio_md_1">전체</label>
            </p>
            <p class="radio_tab_md">
              <input type="radio" id="radio_md_2" v-model="radioTab" value="r2" />
              <label for="radio_md_2">심사중</label>
            </p>
            <p class="radio_tab_md">
              <input type="radio" id="radio_md_3" v-model="radioTab" value="r3" />
              <label for="radio_md_3">승인</label>
            </p>
            <p class="radio_tab_md">
              <input type="radio" id="radio_md_4" v-model="radioTab" value="r4" />
              <label for="radio_md_4">반려</label>
            </p>
          </div>
          <div class="right">
            <button type="button" class="btn_lg btn_round2 btn_primary" @click="popupShow(0)">등록하기</button>
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
      <div class="volntr_appr_list">
        <div class="box volntr_appr_viewbox">
          <!-- 상태에 따른 클래스 변경 : 
          승인 : approved
          심사중 : pending
          반려 : rejected
          -->
          <button class="volntr_btn approved" @click="popupShow(1)">
            <span>승인</span>
          </button>
          <div class="cont">
            <strong>봉사활동 제목이 표시됩니다.</strong>
            <p><span>신청일</span>2024 - 09 -09</p>
            <p><span>봉사 시간</span>8시간</p>
          </div>
        </div>
        <div class="box volntr_appr_viewbox">
          <button class="volntr_btn pending">
            <span>심사중</span>
          </button>
          <div class="cont">
            <strong>봉사활동 제목이 표시됩니다. 봉사활동 제목이 표시됩니다.</strong>
            <p><span>신청일</span>2024 - 09 -09</p>
            <p><span>봉사 시간</span>8시간</p>
          </div>
        </div>
        <div class="box volntr_appr_viewbox">
          <button class="volntr_btn rejected">
            <span>반려</span>
          </button>
          <div class="cont">
            <strong>봉사활동 제목이 표시됩니다. 봉사활동 제목이 표시됩니다. 봉사활동 제목이 표시됩니다.</strong>
            <p><span>신청일</span>2024 - 09 -09</p>
            <p><span>봉사 시간</span>8시간</p>
          </div>
        </div>
        <div class="box volntr_appr_viewbox">
          <button class="volntr_btn approved">
            <span>승인</span>
          </button>
          <div class="cont">
            <strong>봉사활동 제목이 표시됩니다.</strong>
            <p><span>신청일</span>2024 - 09 -09</p>
            <p><span>봉사 시간</span>8시간</p>
          </div>
        </div>
      </div>
      <PaginationUi />
    </div>
  </div>

  <!-- 등록 팝업 -->
  <PopupView v-model="isPopups[0]" class="large">
    <template #title>개인참여 사회봉사 승인 신청(등록)</template>
    <template #footer>
      <button type="button" class="btn_round2 btn_white btn_xl" @click="popupHide(0)">닫기</button>
      <button type="button" class="btn_round2 btn_primary btn_xl" @click="onclickApply()">승인 요청</button>
    </template>
    <div class="tbl tbl_row scrollx_tbl_sm">
      <table>
        <caption>
          테이블제목
        </caption>
        <colgroup>
          <col style="width: 22%" />
          <col style="width: auto" />
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">봉사 유형</th>
            <td>
              <p class="radio_row">
                <input type="radio" v-model="radioValue1" value="1R" id="radio1" class="hidden" />
                <label for="radio1">교내외</label>
              </p>
              <p class="radio_row">
                <input type="radio" v-model="radioValue1" value="2R" id="radio2" class="hidden" />
                <label for="radio2">개인</label>
              </p>
            </td>
          </tr>
          <tr>
            <th scope="row">사회봉사명</th>
            <td>
              <span>사회봉사명ABCD</span>
            </td>
          </tr>
          <tr>
            <th scope="row">봉사 기간</th>
            <td>
              <div class="search_daywrap flex_fit wd_p100">
                <div class="wd_200">
                  <VDateInput v-model="date"></VDateInput>
                </div>
                <p class="input_tilde">~</p>
                <div class="wd_200">
                  <VDateInput v-model="date"></VDateInput>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <th scope="row">봉사 시간</th>
            <td>
              <span>8시간</span>
            </td>
          </tr>
          <tr>
            <th scope="row">증빙자료</th>
            <td>
              <div class="attach_filewrap">
                <label class="btn_round2 btn_white btn_sm"> 파일 선택 <input type="file" class="hidden" /></label>
                <div class="attach_file_list">
                  <div class="file_row dp_inline">
                    <div class="file_name">
                      <p>증빙자료.jpg</p>
                      <i>145KB</i><button type="button" class="btn_icon icon_only download">다운로드</button
                      ><button type="button" class="btn_icon icon_only delete">삭제</button>
                    </div>
                  </div>
                </div>
              </div>
              <p class="attach_file_info mg_t5">※ 10mb 이하의 파일 한 개 등록 가능합니다.</p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </PopupView>

  <!-- 상세 팝업 -->
  <PopupView v-model="isPopups[1]" class="large">
    <template #title>개인참여 사회봉사 승인 신청(조회)</template>
    <template #footer>
      <button type="button" class="btn_round2 btn_primary btn_xl" @click="popupHide(1)">닫기</button>
    </template>
    <div class="tbl tbl_row scrollx_tbl_sm">
      <table>
        <caption>
          테이블제목
        </caption>
        <colgroup>
          <col style="width: 22%" />
          <col style="width: auto" />
        </colgroup>
        <tbody>
          <tr>
            <th scope="row">상태</th>
            <td>
              <span>반려</span>
            </td>
          </tr>
          <tr>
            <th scope="row">봉사 유형</th>
            <td>
              <p class="radio_row">
                <input type="radio" v-model="radioValue1" value="1R" id="radio1" class="hidden" checked />
                <label for="radio1">교내외</label>
              </p>
              <p class="radio_row">
                <input type="radio" v-model="radioValue1" value="2R" id="radio2" class="hidden" disabled />
                <label for="radio2">개인</label>
              </p>
            </td>
          </tr>
          <tr>
            <th scope="row">사회봉사명</th>
            <td>
              <span>사회봉사명ABCD</span>
            </td>
          </tr>
          <tr>
            <th scope="row">봉사 기간</th>
            <td><span>2024-07-11 ~ 2024-07-12</span></td>
          </tr>
          <tr>
            <th scope="row">봉사 시간</th>
            <td>
              <span>8시간</span>
            </td>
          </tr>
          <tr>
            <th scope="row">증빙자료</th>
            <td>
              <div class="file_row">
                <div class="file_name">
                  <p>증빙자료.jpg</p>
                  <i>145KB</i>
                  <button type="button" class="btn_icon icon_only download">다운로드</button>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </PopupView>
</template>

<script lang="ts">
import PopupView from "@/components/common/PopupView.vue";
import VDateInput from "@/components/common/VDateInput.vue";
import PaginationUi from "@/components/common/PaginationUi.vue";

export default {
  components: {
    PopupView,
    VDateInput,
    PaginationUi,
  },
  data: () => ({
    radioTab: "r1",
    isPopups: [false],
    radioValue1: "",
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
