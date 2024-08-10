<template>
  <Transition
      enter-active-class="transition ease-out duration-200 transform"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200 transform"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
  >
    <div class="overlay_popup" v-if="isOpen" >
      <div class="overlay_bg" :class="isOpen ? 'on' : ''" @click="closeModal"></div>
      <Transition
          enter-active-class="transition ease-out duration-200 transform"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition ease-in duration-200 transform"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
      >
        <div class="popup_wrap" v-if="isOpen" ref="modalContentRef">
          <h3 class="popup_title" v-if="isShowHeader">
            <slot name="title"></slot>
            <button
                type="button"
                class="btn_popupclose popup_close"
                title="Close Popup"
                @click="closeModal"
            >
              Close
            </button>
          </h3>
          <div class="popup_content">
            <slot :modal-id="modalId"></slot>
          </div>
          <div class="btn_area_responsive" v-if="isShowFooter">
            <slot name="footer"></slot>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<script lang="ts">
export default {
  props: {
    isOpen: Boolean,
    isShowHeader: {
      type: Boolean,
      default: true
    },
    isShowFooter: {
      type: Boolean,
      default: true
    },
    modalId: String
  },
  methods: {
    closeModal() {
      this.$emit('close-modal')
    }
  }
}
</script>

<style lang="scss">
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition:
      opacity 0.5s,
      transform 0.5s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>