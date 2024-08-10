<template>
    <button type="button" :class="className" @click="addEvent">{{ value }}</button>
    <div v-if="id">
      <InputFileRegSelection
        :referKey="id"
        :mode="'detail'"
        :id="'fileUpload'"
        :name="'fileUpload'"
        :type="fileTypeOffice"
        :ref="childRef"
        :orgName="orgName"
        :category="category"
        :sectionName="sectionName"
      ></InputFileRegSelection>
    </div>
  </template>
  <script>
  import { TYPE_BUTTON_GO, TYPE_BUTTON_DOWLOAD, ACCEPTTYPE_OFICE } from '../../../constants/screen.const'
  export default {
      props: {
          params: {},
          onCustomEvent: null
      },
      mounted() {
          if (this.params) {
              this.value = this.params.value
              if (this.params.className) {
                  this.className = this.params.className;
              }
              this.id = this.params.data[this.params.id];
              this.type = this.params.type;
              this.orgName = this.params.orgName;
              this.category = this.params.category;
              this.sectionName = this.params.sectionName;
          }
      },
      data() {
          return {
              value: '',
              customParam: '',
              sendParam: '',
              listParams: [],
              colorFlag: false,
              className: '',
              type: '',
              typeDowload: TYPE_BUTTON_DOWLOAD,
              typeGotoPage: TYPE_BUTTON_GO,
              fileTypeOffice : ACCEPTTYPE_OFICE,
              childRef : 'childRef',
              orgName : '',
              category: '',
              sectionName: '',
          }
      },
      methods: {
          addEvent() {
              if (typeof this.params.onCustomEvent === 'function') {
                  this.params.onCustomEvent(this.params.data)
              }
              if(this.type == TYPE_BUTTON_DOWLOAD) {
                  const refFile = this.$refs[this.childRef];
                  const fileInfo = refFile.fileUploadedInfo;
                  fileInfo?.forEach(item => {
                      refFile.dowload(item.fileName,item.uploadDirectory);
                  })
              }
          }
      }
  }
  </script>
  