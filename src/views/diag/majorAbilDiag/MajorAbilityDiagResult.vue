<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">전공능력진단</h2>
      </div>
    </div>
    <div class="grid_content">
      <div class="section_tit_wrap">
        <h3 class="section_tit">전공능력진단 결과</h3>
      </div>
      <div class="diag_desc box">
        <div class="top">
          <div><strong>진단명</strong>진단명1</div>
          <div><strong>문항 수</strong>15</div>
          <div><strong>응시일</strong>2024-01-11</div>
        </div>
        <div class="bottom editor_area">진단 안내사항입니다.</div>
      </div>
      <div class="diag_result_wrap">
        <div class="box">
          <h4 class="section_tit">전공능력진단</h4>
          <div class="chart_box">
            <DiagColumnBarChart
              :dataset="chartDatasets"
              :colorset="chartColorSets"
              :labels="chartLabels"
              :stroke="10"
              :colunmWidth="'50%'"
            ></DiagColumnBarChart>
          </div>
        </div>
      </div>

      <div class="btn_area">
        <button type="button" class="btn_xl btn_round2 btn_white">목록</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import DiagColumnBarChart from "@/components/chart/DiagColumnBarChart.vue";

export default {
  components: {
    DiagColumnBarChart,
  },
  data: () => ({
    chartDatasets: [
      {
        name: "나",
        data: [60, 30, 40, 13],
      },
      {
        name: "학과",
        data: [40, 20, 30, 23],
      },
      {
        name: "학년",
        data: [30, 40, 10, 33],
      },
    ],
    chartLabels: ["핵심역량1", "핵심역량2", "핵심역량3", "핵심역량4"],
    chartColorSets: ["#C29EFE", "#A1DEFB", "#C4EF82"],
  }),
};
</script>
