<template>
  <div id="footer" class="footer_wrap">
    <p class="copyright">Copyright @2024 <strong>Youngsan University.</strong> All Right Reserved</p>
    <a href="javascript:void(0);" class="move_top" title="페이지 상단으로 이동">TOP</a>
  </div>
</template>

<script lang="ts">
import { moveTop } from "@/assets/js/common";
export default {
  mounted: function () {
    moveTop();
  },
};
</script>
