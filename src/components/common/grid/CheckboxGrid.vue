<template>
  <input
      v-if="this.params.type === 'selectAll'"
      style="width: 18px !important"
      type="checkbox"
      @change="addEvent"
      id="selectAllGrid"
      :name="'checkAllData'"
  />
  <input
      v-else
      style="width: 18px !important"
      type="checkbox"
      v-model="value"
      @change="addEvent"
      :name="`checkChild`"
  />
 
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    params: {},
  },
  data() {
    return {
      value:false
    }
  },
  mounted() {
    this.value = this.params.value
  },
  watch(){
    this.value = this.params.value
  },
  methods: {
    addEvent() {
      if(this.params.type === 'selectAll'){
        if (typeof this.params.onCustomEvent === 'function') {
          const checkAll = document.querySelectorAll('input[type="checkbox"][name="checkAllData"]')
          this.params.onCustomEvent(checkAll[0].checked,this.params.data)
          const checkboxes = document.querySelectorAll('input[type="checkbox"][name="checkChild"]')
          checkboxes.forEach((checkbox) => {
            checkbox.checked  = checkAll[0].checked;
      })
          
        }
      } else {
        if (typeof this.params.onCustomEvent === 'function') {
          this.params.onCustomEvent(this.value,this.params.data)
          this.checkRowSelected(this.value)
        }
      }
    },
    checkRowSelected(value) {
      const checkboxes = document.querySelectorAll('input[type="checkbox"][name="checkChild"]')
      let count = 0
      checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
          count++
        }
      })
      const checkAll = document.querySelectorAll('input[type="checkbox"][name="checkAllData"]')
      if (!value) {
          checkAll[0].checked = false
      } else {
        if (count == checkboxes.length) {
          checkAll[0].checked = true
        } else {
          checkAll[0].checked = false
        }
      }
    }
  }
})
</script>
