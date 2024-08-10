<template>
    <button v-bind="attrs" type="button" class="button btn_xs btn_blue " @click="downloadExcel">{{btnName}}</button>
</template>
<script setup>
import ExcelJS from 'exceljs';
import { defineProps , useAttrs} from 'vue';
import { useI18n } from 'vue-i18n';
import Swal from 'sweetalert2';
import { format } from 'date-fns';

const attrs = useAttrs()
const {t} = useI18n()

const props = defineProps({
    data: {
        type: Array,
        required: true,
        
  },
  btnName : {
    type: String,
  },
  fileName: {
    type: String
  }
});

const downloadExcel = () => {
  Swal.fire({
        text: t('common.message.confirmDowloadExcel'),
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: '확인',
        cancelButtonText: "취소",
      }).then((result) => {
            if (result.isConfirmed) {
              executeDownloadExcel();
            } 
})
}

/**
 * 
 */
const executeDownloadExcel = () => {
  const workbook = new ExcelJS.Workbook();
  let sheet;
  props.data.forEach(element => {
    sheet = workbook.addWorksheet(element.sheetName);
    sheet.addRow(element.header);
    element.data.forEach(el => {
      sheet.addRow(el);
    })
  });

  workbook.xlsx.writeBuffer().then((buffer) => {
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    let newFileName = `${format(new Date(), 'yyyyMMddHHmmss')}_${props.fileName}.xlsx`;
    link.download = newFileName;
    link.click();
    link.remove();
  });
};

</script>
