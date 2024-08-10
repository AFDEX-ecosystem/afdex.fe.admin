<template>
  <textarea
      v-bind="attrs"
      :value="props.modelValue"
      @input="onInput"
      rows="5"
      class="custom-input"
      @focus="checkError"
      @keyup="checkError"
  />
</template>

<script setup lang="ts">
import { defineProps, defineEmits, onMounted, onBeforeUnmount, onUpdated ,useAttrs} from 'vue'
import { commonStore } from '@/stores/common'

const attrs = useAttrs()
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const store = commonStore()
let timeout: NodeJS.Timeout | null = null

const onInput = (event) => {
  if (timeout) {
    clearTimeout(timeout)
    timeout = null
  }

  timeout = setTimeout(() => {
    emit('update:modelValue', event.target.value)
  }, 50)
}

onMounted(()=>{
  if(attrs.id && attrs.required !== undefined) {
    store.setRequired(attrs.id)
  }
})

onBeforeUnmount(()=>{
  if(attrs.id && attrs.required !== undefined) {
    store.removeRequired(attrs.id)
  }
  clearTimeout(timeout)
})

onUpdated(()=>{
  store.checkRequired()
})

const checkError = () => {
  if (attrs.id) {
    const input = document.getElementById(attrs.id)
    if (input && !input.value) {
      input.classList.add('error_validate')
    } else if (input) {
      input.classList.remove('error_validate')
    }
  }
}
</script>

<style scoped>
</style>
