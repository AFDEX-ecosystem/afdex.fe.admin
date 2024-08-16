<template>
<div class="h-screen flex">
    <div class="w-64 bg-gray-200 p-4">
        Menu
    </div>
    <div class="flex-1 p-4">
        Content
    </div>
</div>

  <svg
    baseprofile="tiny"
    fill="#6f9c76"
    height="1000"
    stroke="#ffffff"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width=".5"
    version="1.2"
    viewbox="0 0 1000 1000"
    width="1000"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="features">
      <template v-for="item in data">
        <g
          :id="item.id"
          :name="item.cityNm"
          :class="`hover_me ${item.bgColor}`"
        >
          <path
            :d="path.d"
            :transform="path?.transform"
            v-for="path in item.coordinates"
          ></path>
        </g>
      </template>
    </g>
    <g id="label_points">
      <template v-for="item in data">
          <text fill="black" :x="parseInt(text.x) - 5" :y="parseInt(text.y) + 5" v-for="text in item.fillText"
            font-weight="500"
            font-size="12"
            pointer-events="none" stroke="none" stroke-width="0">
            {{ item.cityCode }}
          </text>
          <image v-if="item.isAfdex" v-for="text in item.fillText"
            :href="logoMap"
            width="10" :x="parseInt(text.x) >= 10 ? (parseInt(text.x) + 10) : (parseInt(text.x) + 4)" :y="parseInt(text.y) - 5"
            pointer-events="none"
            height="10"
          />
      </template>
    </g>
  </svg>
</template>
<script lang="ts">
import { data } from "./data";
import logoMap from '@/assets/images/icon/logmap.png'

export default defineComponent({
  setup() {
    return {
      data,
      logoMap
    };
  },
  beforeMount() {
    console.log(data);
  },
});
</script>

<style></style>
