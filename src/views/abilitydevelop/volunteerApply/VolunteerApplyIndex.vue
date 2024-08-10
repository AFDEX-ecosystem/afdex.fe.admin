<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="sub_section_md">
        <h2 class="page_title">학생 사회봉사 신청</h2>
      </div>
      <div class="box volntr_search">
        <div class="table_search">
          <div class="cate_name">상태</div>
          <div class="cate_inner">
            <div class="table_input_row check_row_wrap">
              <p class="check_row">
                <input type="checkbox" v-model="checkValue1" value="대기" id="checkrow1" class="hidden" checked />
                <label for="checkrow1">대기</label>
              </p>
              <p class="check_row">
                <input type="checkbox" v-model="checkValue1" value="모집중" id="checkrow2" class="hidden" />
                <label for="checkrow2">모집중</label>
              </p>
              <p class="check_row">
                <input type="checkbox" v-model="checkValue1" value="활동중" id="checkrow3" class="hidden" />
                <label for="checkrow3">활동중</label>
              </p>
              <p class="check_row">
                <input type="checkbox" v-model="checkValue1" value="종료" id="checkrow4" class="hidden" />
                <label for="checkrow4">종료</label>
              </p>
            </div>
          </div>
          <div class="cate_name">봉사 제목</div>
          <div class="cate_inner">
            <input type="text" class="form_style wd_p100" placeholder="Text Input" />
          </div>

          <div class="cate_name">봉사 유형</div>
          <div class="cate_inner">
            <div class="table_input_row radio_row_wrap">
              <p class="radio_row">
                <input type="radio" v-model="radioValue1" value="전체" id="radio1" class="hidden" />
                <label for="radio1">전체</label>
              </p>
              <p class="radio_row">
                <input type="radio" v-model="radioValue1" value="교내외" id="radio2" class="hidden" />
                <label for="radio2">교내외</label>
              </p>
              <p class="radio_row">
                <input type="radio" v-model="radioValue1" value="개인" id="radio3" class="hidden" />
                <label for="radio3">개인</label>
              </p>
            </div>
          </div>
          <div class="cate_name">봉사 기간</div>
          <div class="cate_inner">
            <div class="search_daywrap flex_fit wd_p100">
              <div>
                <VDateInput v-model="date"></VDateInput>
              </div>
              <p class="input_tilde">~</p>
              <div>
                <VDateInput v-model="date"></VDateInput>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sub_section_md btn_area ta_r">
        <button type="button" class="btn_xl btn_round2 btn_white">초기화</button>
        <button type="button" class="btn_xl btn_round2 btn_primary">조회</button>
      </div>
      <div class="volntr_srch_list">
        <div class="section_tit_wrap">
          <h3 class="section_tit_md">목록</h3>
        </div>
        <div class="box">
          <div class="tbl tbl_col scrollx_tbl_lg">
            <table>
              <caption>
                학생 사회봉사 신청 목록
              </caption>
              <colgroup>
                <col style="width: 5%" />
                <col style="width: 10%" />
                <col style="width: auto" />
                <col style="width: 13%" />
                <col style="width: 13%" />
                <col style="width: 8%" />
                <col style="width: 11%" />
                <col style="width: 11%" />
                <col style="width: 8%" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="row">번호</th>
                  <th scope="row">봉사유형</th>
                  <th scope="row">봉사제목</th>
                  <th scope="row">봉사기간</th>
                  <th scope="row">모집기간</th>
                  <th scope="row">상태</th>
                  <th scope="row">모집인원</th>
                  <th scope="row">인정봉사시간</th>
                  <th scope="row">신청여부</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10</td>
                  <td>교내외</td>
                  <td>
                    <div class="title_row">
                      <router-link to="/volunteerApply/detail">
                        <p>봉사제목입니다.</p>
                      </router-link>
                    </div>
                  </td>
                  <td>
                    <div class="tbl_date_row">
                      <span>2024-07-23</span>
                      <span>2024-07-31</span>
                    </div>
                  </td>
                  <td>
                    <div class="tbl_date_row">
                      <span>2024-10-01</span>
                      <span>2024-10-10</span>
                    </div>
                  </td>
                  <td>모집중</td>
                  <td>100명</td>
                  <td>100시간</td>
                  <td>신청</td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>개인</td>
                  <td>
                    <div class="title_row">
                      <router-link to="/volunteerApply/detail">
                        <p>봉사제목입니다.</p>
                      </router-link>
                    </div>
                  </td>
                  <td>
                    <div class="tbl_date_row">
                      <span>YYYY-MM-DD</span>
                      <span>YYYY-MM-DD</span>
                    </div>
                  </td>
                  <td>
                    <div class="tbl_date_row">
                      <span>YYYY-MM-DD</span>
                      <span>YYYY-MM-DD</span>
                    </div>
                  </td>
                  <td>활동중</td>
                  <td>100명</td>
                  <td>100시간</td>
                  <td>미신청</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>교내외</td>
                  <td>
                    <div class="title_row">
                      <router-link to="/volunteerApply/detail">
                        <p>봉사제목입니다.</p>
                      </router-link>
                    </div>
                  </td>
                  <td>
                    <div class="tbl_date_row">
                      <span>YYYY-MM-DD</span>
                      <span>YYYY-MM-DD</span>
                    </div>
                  </td>
                  <td>
                    <div class="tbl_date_row">
                      <span>YYYY-MM-DD</span>
                      <span>YYYY-MM-DD</span>
                    </div>
                  </td>
                  <td>종료</td>
                  <td>100명</td>
                  <td>100시간</td>
                  <td>미신청</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>교내외</td>
                  <td>
                    <div class="title_row">
                      <router-link to="/volunteerApply/detail">
                        <p>봉사제목입니다.</p>
                      </router-link>
                    </div>
                  </td>
                  <td>
                    <div class="tbl_date_row">
                      <span>YYYY-MM-DD</span>
                      <span>YYYY-MM-DD</span>
                    </div>
                  </td>
                  <td>
                    <div class="tbl_date_row">
                      <span>YYYY-MM-DD</span>
                      <span>YYYY-MM-DD</span>
                    </div>
                  </td>
                  <td>대기</td>
                  <td>100명</td>
                  <td>100시간</td>
                  <td>미신청</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <PaginationUi />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VDateInput from "@/components/common/VDateInput.vue";
import PaginationUi from "@/components/common/PaginationUi.vue";

export default {
  components: {
    VDateInput,
    PaginationUi,
  },
  data: () => ({
    checkValue1: ["대기"],
    radioValue1: "전체",
  }),
};
</script>
