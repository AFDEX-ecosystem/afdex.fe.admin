<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">나의 전공능력 현황</h2>
      </div>
      <div class="sub_section">
        <div class="box majorstate_search">
          <div class="radio_tab_wrap">
            <p class="radio_row">
              <input type="radio" v-model="termRadio" value="termAll" id="termAll" class="hidden" checked />
              <label for="termAll">전체보기</label>
            </p>
            <p class="radio_row">
              <input type="radio" v-model="termRadio" value="semester" id="semester" class="hidden" />
              <label for="semester">년도학기</label>
            </p>
          </div>
          <div class="search_daywrap">
            <div class="wd_220">
              <VDateInput v-model="date"></VDateInput>
            </div>
            <p class="input_tilde">~</p>
            <div class="wd_220">
              <VDateInput v-model="date"></VDateInput>
            </div>
          </div>
          <div class="btn_area">
            <button type="button" class="btn_xl btn_round2 btn_primary">검색</button>
          </div>
        </div>
      </div>
      <div class="mycerti_chart box sub_section_md">
        <ColumnBarChart :dataset="barChartDatasets" :title="title" :colorset="colorset" :labels="labels" />
      </div>
      <div class="sub_section_md">
        <div class="section_tit_wrap hg_40 m_hg_auto">
          <h4 class="section_tit">나의 전공능력점수 획득 내역</h4>
          <div class="title_function m_title_function">
            <button class="btn_round btn_lg btn_bo_offwhite" @click="$router.push('/majorState/detail')">
              나의 전공능력 정의 상세보기
            </button>
          </div>
        </div>
        <div class="box major_score">
          <div class="tbl tbl_col tbl_bn scrollx_tbl_md">
            <table>
              <caption>
                나의 전공능력점수 획득 내역
              </caption>
              <colgroup>
                <col style="width: 18%" />
                <col style="width: 18%" />
                <col style="width: 18%" />
                <col style="width: 11.5%" />
                <col style="width: 11.5%" />
                <col style="width: 11.5%" />
                <col style="width: 11.5%" />
              </colgroup>
              <thead>
                <tr>
                  <th scope="row">획득일</th>
                  <th scope="row">구분</th>
                  <th scope="row">과목</th>
                  <th scope="row">전공능력1</th>
                  <th scope="row">전공능력2</th>
                  <th scope="row">전공능력3</th>
                  <th scope="row">전공능력4</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">YYYY-MM-DD</th>
                  <td>전공필수/전공선택</td>
                  <td>교과목명</td>
                  <td>N점</td>
                  <td>N점</td>
                  <td>N점</td>
                  <td>N점</td>
                </tr>
                <tr>
                  <th scope="row">YYYY-MM-DD</th>
                  <td>전공필수</td>
                  <td>교과목명</td>
                  <td>N점</td>
                  <td>N점</td>
                  <td>N점</td>
                  <td>N점</td>
                </tr>
                <tr>
                  <th scope="row">YYYY-MM-DD</th>
                  <td>전공선택</td>
                  <td>교과목명</td>
                  <td>N점</td>
                  <td>N점</td>
                  <td>N점</td>
                  <td>N점</td>
                </tr>
                <tr>
                  <th scope="row">YYYY-MM-DD</th>
                  <td>전공필수</td>
                  <td>교과목명</td>
                  <td>N점</td>
                  <td>N점</td>
                  <td>N점</td>
                  <td>N점</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <PaginationUi />
      </div>
      <div class="mycerti_chart box sub_section">
        <ColumnBarChart :dataset="barChartDatasets" :title="title2" :colorset="colorset" :labels="labels" />
      </div>
      <div class="major_desc">
        <div>
          <strong>전공능력1</strong>
          <p>
            전공에 대한 설명글입니다. 전공에 대한 설명글입니다. 전공에 대한 설명글입니다. 전공에 대한 설명글입니다.
            전공에 대한 설명글입니다. 전공에 대한 설명글입니다.
          </p>
        </div>
        <div>
          <strong>전공능력2</strong>
          <p>전공에 대한 설명글입니다. 전공에 대한 설명글입니다. 전공에 대한 설명글입니다.</p>
        </div>
        <div>
          <strong>전공능력3</strong>
          <p>전공에 대한 설명글입니다. 전공에 대한 설명글입니다. 전공에 대한 설명글입니다. 전공에 대한 설명글입니다.</p>
        </div>
        <div>
          <strong>전공능력4</strong>
          <p>전공에 대한 설명글입니다. 전공에 대한 설명글입니다. 전공에 대한 설명글입니다. 전공에 대한 설명글입니다.</p>
        </div>
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
  },
  data: () => ({
    sbjtRadio: "",
    termRadio: "",
  }),
  PaginationUi,
};
</script>

<script setup lang="ts">
import { ref } from "vue";
import ColumnBarChart from "@/components/chart/ColumnBarChart.vue";
import type { ColumnChartDataset } from "@/types/chart/ChartTypes";

const title = "나의 전공능력 조회 및 동일학년 비교";
const title2 = "나의 전공능력 현황";

const colorset = ["#A1DEFB", "#D8F2B3"];
const labels = ["전공능력1", "전공능력2", "전공능력3", "전공능력4"];
const barChartDatasets = ref<ColumnChartDataset[]>([
  {
    name: "나의점수",
    data: [80, 60, 90, 40],
  },
  {
    name: "동일학년평균",
    data: [50, 60, 30, 70],
  },
]);
</script>
