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
}
const props = withDefaults(defineProps<Props>(), {
  chartHeight: 400,
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
  title: {
    margin: 40,
    text: props.title,
    align: "left",
    floating: true,
    style: {
      fontSize: "2.2rem",
      fontWeight: "600",
      fontFamily: "NotoSansKR",
      color: "#000",
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 6,
      borderRadiusApplication: "end",
      columnWidth: "50%",
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
    offsetY: -10,
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
        colors: "#222",
        fontFamily: "NotoSansKR",
        fontSize: "16px",
        fontWeight: 600,
      },
      offsetY: 5,
    },
  },
  yaxis: {
    min: 0,
    max: 100,
    labels: {
      show: false,
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
    width: 8,
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
