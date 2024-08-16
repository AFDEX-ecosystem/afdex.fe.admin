<template>
  <div
    class="accordion"
    :class="{ acd_active: isShow }"
  >
    <p v-if="mode === MODE_SHOW()" class="acd_tit" @click.prevent="onClick">
      {{ title }}
      <span class="arrow-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </p>
    <p v-else class="acd_tit" :class="(isCheck ? 'on' : 'off')" @click.prevent="onClick">
      {{ title }}
      <span class="arrow-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </span>
    </p>

    <div class="transition_group" :style="{ maxHeight: isShow ? heightSlot : '0px' }">
      <div ref="transitionRef" class="transition_card">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {onUpdated} from "vue";
import {MODE_SHOW} from "@/constants/screen.const";

export default {
  methods: {
    MODE_SHOW() {
      return MODE_SHOW
    }
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function,
    },
    title: {
      type: String,
      default: ''
    },
    isCheck: {
      type: Boolean,
      default: false
    },
    mode:{
      type: Boolean,
      default: MODE_SHOW
    }
  },
  setup(props, ctx) {
    const transitionRef = ref<HTMLElement | null>(null)
    const heightSlot = ref('')

    onUpdated(async () => {
      await nextTick();
      heightSlot.value = `${transitionRef.value.offsetHeight}px`
    })
    return {
      transitionRef,
      heightSlot
    }
  },
}
</script>

<style>
.arrow-icon svg {
  transition: transform 0.3s ease-in-out; /* Thêm hiệu ứng chuyển đổi */
}

.arrow-icon svg {
  transform-origin: center;
}

.arrow-icon svg {
  transition: transform 0.3s ease-in-out; /* Thêm hiệu ứng chuyển đổi */
  transform-origin: center; /* Xoay quanh trung tâm */
  transform: rotate(-90deg); /* Quay sang phải khi ở trạng thái bình thường */
}

.acd_active .arrow-icon svg {
  transform: rotate(0); /* Quay xuống dưới khi accordion mở */
}
.acd_tit {
    position: relative;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.transition_group {
  max-height: 0;
  transition: max-height .3s ease-in-out;
}

.transition_card {
  padding: 24px 32px;
}

.acd_tit.on {
  background-color: #6EC5FF !important;
}

.acd_tit.off {
  background-color: #B9B9B9 !important;
}
</style>