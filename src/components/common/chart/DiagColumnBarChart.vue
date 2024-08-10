<template>
  <VueApexCharts
    type="bar"
    :height="chartHeight"
    class="bar_chart"
    :options="chartOptions"
    :series="props.dataset"
  ></VueApexCharts>
</template>

<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";
import type { ColumnChartDataset } from "@/types/chart/ChartTypes";

interface Props {
  chartHeight?: number;
  dataset: ColumnChartDataset[];
  title: string;
  colorset: string[];
  labels: string[];
  stroke: string[];
  colunmWidth: string[];
}
const props = withDefaults(defineProps<Props>(), {
  chartHeight: 300,
});
const chartOptions = {
  chart: {
    type: "bar",
    toolbar: {
      show: false,
    },
    offsetX: -10,
  },
  fill: {
    opacity: 1,
  },
  plotOptions: {
    bar: {
      borderRadiusApplication: "end",
      borderRadius: 6,
      columnWidth: props.colunmWidth,
      dataLabels: {
        position: "bottom",
      },
    },
  },
  colors: props.colorset,
  legend: {
    position: "top",
    horizontalAlign: "right",
    fontSize: "14px",
    fontWeight: "500",
    fontFamily: "NotoSansKR",
    color: "#222",
    labels: {
      colors: "#222",
    },
    itemMargin: {
      horizontal: 10,
      vertical: 0,
    },
    markers: {
      width: 12,
      height: 12,
      radius: 2,
    },
  },
  xaxis: {
    categories: props.labels,
    labels: {
      style: {
        colors: "#585D72",
        fontFamily: "NotoSansKR",
        fontSize: "12px",
        fontWeight: 500,
      },
      offsetY: 3,
    },
  },
  yaxis: {
    min: 0,
    max: 100,
    labels: {
      style: {
        colors: "#898D9C",
        fontFamily: "NotoSansKR",
        fontSize: "12px",
        fontWeight: 500,
      },
      offsetY: 3,
    },
  },
  dataLabels: {
    formatter: (val) => {
      return val + "점";
    },
    offsetY: 15,
    textAnchor: "middle",
    style: {
      color: "#373d3f",
      fontSize: "13px",
      fontFamily: "NotoSansKR",
      fontWeight: 500,
    },
  },
  stroke: {
    colors: ["transparent"],
    width: props.stroke,
  },
  responsive: [
    {
      breakpoint: 768,
      options: {
        plotOptions: {
          bar: {
            columnWidth: "80%",
          },
        },
        title: {
          offsetY: 15,
          style: {
            fontSize: "1.8rem",
          },
        },
        xaxis: {
          labels: {
            style: {
              fontSize: "12px",
            },
            offsetY: 0,
          },
        },
        dataLabels: {
          style: {
            fontSize: "12px",
          },
        },
        stroke: {
          width: 6,
        },
      },
    },
    {
      breakpoint: 480,
      options: {
        title: {
          floating: false,
          margin: 20,
        },
        legend: {
          fontSize: "12px",
          itemMargin: {
            horizontal: 5,
            vertical: 0,
          },
          markers: {
            width: 10,
            height: 10,
          },
        },
        stroke: {
          width: 4,
        },
      },
    },
  ],
};
</script>
