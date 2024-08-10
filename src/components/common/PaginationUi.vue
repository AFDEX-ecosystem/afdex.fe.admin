<template>
  <div class="paging_wrap">
    <button
      class="page_con prev_page"
      :disabled="targetPage === 1"
      @click="gotoPrePage"
    >
      이전페이지
    </button>
    <button
      v-for="(item, index) in pagesSizeGroup"
      :key="index"
      :class="{ active: item === targetPage }"
      @click="gotoPage(item)"
    >
      <p>{{ item }}</p>
    </button>
    <button
      class="page_con next_page"
      :disabled="targetPage === totalPageGroup"
      @click="gotoNextPage"
    >
      다음페이지
    </button>
  </div>
</template>
<script lang="ts">
export default {
  props: {
    totalRecord: {
      type: Number,
      required: true,
    },
    paginationPageSize: {
      type: Number,
      required: true,
    },
    pageInGroup: {
      type: Number,
      default: 5,
    },
    initialPage: {  
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      targetPage: 1,
      currentGroupPage: 1,
      totalGroup: 1,
      totalPageGroup: 0,
    };
  },
  computed: {
    totalPageGroup() {
      return Math.ceil(this.totalRecord / this.paginationPageSize);
    },
    pagesSizeGroup() {
      const startPage = (this.currentGroupPage - 1) * this.pageInGroup + 1;
      const endPage = Math.min(startPage + this.pageInGroup - 1, this.totalPageGroup);
      return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    },
  },
  methods: {
    gotoPage(pageNumber: number) {
      if (pageNumber < 1 || pageNumber > this.totalPageGroup) return;
      this.targetPage = pageNumber;
      this.$emit('updatePage', pageNumber);
      this.updateCurrentGroupPage();
    },
    gotoPrePage() {
      if (this.targetPage > 1) this.gotoPage(this.targetPage - 1);
    },
    gotoNextPage() {
      if (this.targetPage < this.totalPageGroup) this.gotoPage(this.targetPage + 1);
    },
    updateCurrentGroupPage() {
      this.currentGroupPage = Math.ceil(this.targetPage / this.pageInGroup);
    },
  },
  watch: {
    totalRecord(newValue) {
      this.totalGroup = Math.ceil(newValue / this.paginationPageSize / this.pageInGroup);
      this.totalPageGroup = Math.ceil(newValue / this.paginationPageSize);
      this.updateCurrentGroupPage();
    },
    initialPage(newVal) {
      this.targetPage = newVal; 
      this.updateCurrentGroupPage();
    },
  },
  mounted() {
    this.totalPageGroup = Math.ceil(this.totalRecord / this.paginationPageSize);
    this.totalGroup = Math.ceil(this.totalPageGroup / this.pageInGroup);
    this.updateCurrentGroupPage();
  },
};
</script>
<style scoped>
.paging_wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
.page_con {
  margin: 0 5px;
  cursor: pointer;
}
.page_con.active p {
  font-weight: bold;
}
button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>

