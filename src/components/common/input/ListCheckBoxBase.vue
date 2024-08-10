<template>
  <div>
    <CheckboxBase v-if="hasCheckAll" v-model="checkBoxDataAll" :value="modelValue" :label="'전체'" :id="id"
                  :name="name" @change="checkAll" :is-disable="isDisable"></CheckboxBase>
    <CheckboxBase v-for="option in listData" :key="option.cdId" v-model="checkBoxData" :value="option.cdId"
                  :label="option.cdNm" :id="option.cdId" :name="option.id" @change="changOne" :is-disable="isDisable"
                  >
    </CheckboxBase>
  </div>
</template>
<script lang="ts">
import {ref} from 'vue';
import CodeMngModel from '../../../model/common/CodeMngModel'
import CheckboxBase from "@/components/common/input/CheckboxBase.vue";

export default {
  components: {CheckboxBase},
  props: {
    modelValue: [String, Number],
    className: String,
    mode: {
      type: String,
      default: 'show'
    },
    id: String,
    name: String,
    listData: Array as () => Array<CodeMngModel>,
    isDisable: {
      type: Boolean,
      default: false
    },
    hasCheckAll: {
      type: Boolean,
      default: false
    }
  },
  component: {
    CheckboxBase,
  },
  setup(props) {
    const checkBoxData = ref([]);
    const checkBoxDataAll = ref(false);

    return {
      checkBoxData,
      checkBoxDataAll
    };
  },
  methods: {
    checkAll() {
      if (this.checkBoxData.length < this.listData.length) {
        this.checkBoxData = [];
        this.listData?.forEach((element, index) => {
          this.checkBoxData.push(element.cdId);
        })
      } else {
        this.checkBoxData = [];
      }
      this.$emit('update:modelValue', this.checkBoxData)
      console.log(this.checkBoxData)
    },
    changOne() {
      if (this.checkBoxData.length < this.listData.length) {
        this.checkBoxDataAll = false;
      } else {
        this.checkBoxDataAll = true;
      }
      this.$emit('update:modelValue', this.checkBoxData)
    }
  }, mounted() {
    if (this.modelValue) {
      this.checkBoxData = [];
      this.checkBoxData = this.modelValue.split(',');
      if (this.checkBoxData.length == this.listData?.length) {
        this.checkBoxDataAll = true;
      }
    }
  }
};
</script>

  