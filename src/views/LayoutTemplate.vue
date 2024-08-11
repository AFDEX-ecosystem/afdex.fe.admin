<template>
  <THeader/>

  <div class="content bg-black h-[500px]"></div>
  
  <TFooter/>
</template>
<script lang="ts">
import THeader from '@/layouts/components/THeader.vue';
import TFooter from '@/layouts/components/TFooter.vue';

export default defineComponent({
  components: {
    THeader,
    TFooter
  }
});
</script>

<style>
</style>
