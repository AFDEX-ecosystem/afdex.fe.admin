<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">핵심역량 현황 조회</h2>
      </div>
      <div class="sub_section_md">
        <div class="box corestate_search">
          <div class="radio_tab_wrap sbjt_radio">
            <p class="radio_row">
              <input type="radio" v-model="sbjtRadio" value="sbjtAll" id="sbjtAll" class="hidden" checked />
              <label for="sbjtAll">전체</label>
            </p>
            <p class="radio_row">
              <input type="radio" v-model="sbjtRadio" value="liberal" id="liberal" class="hidden" />
              <label for="liberal">교양교육</label>
            </p>
            <p class="radio_row">
              <input type="radio" v-model="sbjtRadio" value="extra" id="extra" class="hidden" />
              <label for="extra">비교과</label>
            </p>
          </div>
          <div class="radio_tab_wrap term_radio">
            <p class="radio_row">
              <input type="radio" v-model="termRadio" value="termAll" id="termAll" class="hidden" checked />
              <label for="termAll">전체보기</label>
            </p>
            <p class="radio_row">
              <input type="radio" v-model="termRadio" value="semester" id="semester" class="hidden" />
              <label for="semester">년도학기</label>
            </p>
            <div class="search_daywrap">
              <div class="wd_220">
                <VDateInput v-model="date"></VDateInput>
              </div>
              <p class="input_tilde">~</p>
              <div class="wd_220">
                <VDateInput v-model="date"></VDateInput>
              </div>
            </div>
          </div>
          <div class="btn_area">
            <button type="button" class="btn_xl btn_round2 btn_primary">검색</button>
          </div>
        </div>
      </div>
      <div class="mycerti_chart box">
        <ColumnBarChart :dataset="barChartDatasets" :title="title" :colorset="colorset" :labels="labels" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VDateInput from "@/components/common/VDateInput.vue";

export default {
  components: {
    VDateInput,
  },
  data: () => ({
    sbjtRadio: "",
    termRadio: "",
  }),
};
</script>

<script setup lang="ts">
import { ref } from "vue";
import ColumnBarChart from "@/components/chart/ColumnBarChart.vue";
import type { ColumnChartDataset } from "@/types/chart/ChartTypes";

const title = "나의 핵심역량 기간별 검색";
const colorset = ["#FFF0BE", "#FFDDCF"];
const labels = ["지혜로움", "공감", "자기주도", "융합실무"];
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
