<!-- Tooltip.vue -->
<template>
  <div
    v-if="isVisible"
    class="tooltip-map-content"
    :style="{ left: `${position.x}px`, top: `${position.y}px` }"
  >
    <div class="tooltip-map-title">
      <img class="h-[75px] mr-5"
        src="https://media.discordapp.net/attachments/1267361301944995955/1274035629247697006/Logo_tinh_Cao_Bang.svg.png?ex=66c0c9a4&is=66bf7824&hm=c1da35a6dcfbda9a20d9f0993fe98b14fb7844bdedcdcd944ee773c4a6058092&=&format=webp&quality=lossless&width=1035&height=662"
      />
      <h1 class="text-3xl font-semibold">{{ title }}</h1>
    </div>
    <slot name="tooltipContent"></slot>
  </div>
</template>

<script>
export default {
  props: {
    position: {
      type: Object,
      required: true,
    },
    isVisible: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.tooltip-map-content {
  position: fixed;
  max-width: 700px;
  padding: 20px 30px;
  border-radius: 4px;
  white-space: normal;
  word-wrap: break-word;
  z-index: 1000;
  pointer-events: none;
  background-color: white;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
.tooltip-map-title {
    display: flex;
    align-items: center;
}
</style>
