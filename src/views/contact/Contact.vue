<template>
  <div class="box dp_block">
    <div class="box_section">
      <div class="search_box">
        <div class="row">
          <!-- Cột chứa các đoạn văn bản -->
          <div class="col text_col">
            <p class="font_20">Liên hệ</p>
            <p class="bolder">CÔNG TY CỔ PHẦN HỆ SINH THÁI AFDEX</p>
            <p>Tên giao dịch: AFDEX - ONLINE., JSC</p>
            <p>Địa chỉ:</p>
            <p>Đại diện pháp luật: Phạm Văn Tiến</p>
            <p>Điện thoại: 0929009799</p>
          </div>
          <!-- Cột chứa các ô nhập liệu -->
          <div class="col input_col">
            <p class="font_20">Gửi thông tin</p>
            <InputBase id="input_constitutiveFactor" placeholder="Họ & tên" />
            <InputBase
              id="input_constitutiveFactor"
              placeholder="Số điện thoại"
            />
            <InputBase id="input_constitutiveFactor" placeholder="Email" />
            <InputBase id="input_constitutiveFactor" placeholder="Mã bảo vệ" />
            <textarea
              id="input_constitutiveFactor"
              placeholder="Nội dung kiên hệ"
              class="size"
            />
          </div>
        </div>
      </div>
      <div class="btn_group btn_end mg_r40">
        <button class="button btn_md btn_red">Gửi</button>
        <button class="button btn_md btn_red">Làm lại</button>
      </div>
    </div>
    <div class="map_section">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.918282472723!2d105.77041897530124!3d21.035955480615275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b7b2486ba5%3A0xe465168b807bc556!2zNiBQLiBExrDGoW5nIEtodcOqLCBNYWkgROG7i2NoLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSAxMzExNywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1723824838716!5m2!1svi!2s"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
.search_box {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
}

.col {
  flex: 1;
  padding: 10px;
}

.text_col {
  /* Tùy chỉnh khoảng cách, font chữ hoặc màu sắc nếu cần */
}

.input_col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.bolder {
  font-weight: bold;
}

.size {
  height: 150px;
}
</style>
