<template>
  <div class="content_wrap">
    <div class="grid_content">
      <div class="page_toparea">
        <h2 class="page_title">Client UI 가이드</h2>
      </div>
    </div>
    <ClientGuide />
  </div>
</template>

<script lang="ts">
import ClientGuide from "@/components/guide/ClientGuide.vue";
export default {
  components: {
    ClientGuide,
  },
};
</script>
