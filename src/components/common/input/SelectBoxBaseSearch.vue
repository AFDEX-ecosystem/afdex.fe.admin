<template>
  <span class="is_disabled" v-if="isDisable">{{ searchQuery }}</span>
  <div v-else class="group_checkbox">
    <input v-model="searchQuery" @keyup="changData($event)" @click="focus" class="select_component_custom" ref="checkboxInput">
    <teleport to="#app" v-show="showList">
      <ul
          class="list_select_custom"
          :class="{on:showList}"
          :style="{ width: `${widthUl}px` }"
          ref="ulPosition"
      >
        <li v-for="option in filteredOptions" :class="{'selected' : option.cdNm == showValue}" :key="option.cdId"
            @click="selectOption(option)">
          {{ option.cdNm }}
        </li>
        <li v-if="filteredOptions.length === 0" class="disabled" @click="hideList">
          No Result
        </li>
      </ul>
    </teleport>
  </div>
</template>
<script lang="ts">
import {ref, computed, defineProps, defineEmits, onMounted, onUpdated, onBeforeUnmount} from 'vue';
import CodeMngModel from '../../../model/common/CodeMngModel'

export default {
  props: {
    modelValue: [String, Number],
    className: String,
    mode: {
      type: String,
      default: ''
    },
    id: String,
    name: String,
    valueDefault: {
      type: String,
      default: ''
    },
    nameDefault: {
      type: String,
      default: ''
    },
    data: Array as () => Array<CodeMngModel>,
    isDisable: {
      type: Boolean,
      default: false
    },
    valueSelect: String
  },
  emits: [
    'update:modelValue',
    'focusout',
    'change'
  ],
  beforeMount() {
    this.showValue = this.valueSelect
  }
  ,
  setup(props, {emit}) {
    const searchQuery = ref('');
    const showDropdown = ref(false);
    const showList = ref(false)
    const checkboxInput = ref<HTMLInputElement | null>(null)
    const ulPosition = ref<HTMLUListElement | null>(null)
    const widthUl = ref<number>(0)

    const filteredOptions = computed(() => {
      const query = searchQuery.value.toLowerCase();
      return props.data.filter(option =>
          option.cdNm.toLowerCase().includes(query)
      );
    });

    const toggleDropdown = () => {
      showDropdown.value = !showDropdown.value;
    };

    onMounted(() => {
      if (props.data?.length && props.modelValue !== undefined) {
        searchQuery.value = props.data.find(item => item.cdId == props.modelValue)?.cdNm || ""
      }
    })

    onBeforeUnmount(() => {
      document.removeEventListener('mousedown', handleClickOutside)
    })

    const focus = () => {
      showList.value = true
      positionSelectbox()
      document.addEventListener('mousedown', handleClickOutside)
    }

    const handleClickOutside = (event: MouseEvent) => {
      const ul = ulPosition.value
      const input = checkboxInput.value
      if (ul && !ul.contains(event.target as Node) && input && !input.contains(event.target as Node)) {
        showList.value = false
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }

    const positionSelectbox = () => {
      if (checkboxInput.value && ulPosition.value) {
        const inputRect = checkboxInput.value.getBoundingClientRect()
        widthUl.value = inputRect.width
        const inputTop = inputRect.top + window.scrollY
        const inputLeft = inputRect.left + window.scrollX
        ulPosition.value.style.top = `${inputTop + 40}px`
        ulPosition.value.style.left = `${inputLeft}px`
        ulPosition.value.style.right = 'auto'
      }
    }

    const hideList = () => {
      showList.value = false
    }
    return {
      searchQuery,
      showDropdown,
      filteredOptions,
      toggleDropdown,
      showList,
      checkboxInput,
      ulPosition,
      widthUl,
      focus,
      hideList
    };
  }, data() {
    return {
      selectedOption: '',
      showValue: ''
    }

  },
  methods: {
    selectOption(option: any) {
      this.selectedOption = option.cdId;
      this.searchQuery = option.cdNm;
      this.showValue = option.cdNm;
      this.showDropdown = false;
      this.$emit('update:modelValue', this.selectedOption);
      this.showList = false
    },
    changData(event: any) {
      this.showDropdown = true;
      let value = event.target.value;
      this.filteredOptions = this.data.filter(option =>
          option.cdNm.toLowerCase().includes(value.toggleDropdown)
      )
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
