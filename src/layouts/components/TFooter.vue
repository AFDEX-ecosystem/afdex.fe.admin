<template>
  <div id="footer" class="footer_wrap bg-black">
    <div class="grid_content portfolio_wrap">
      <div class="grid grid-flow-col auto-cols-max grid-cols-3 gap-x-36">
        <div>
          <div class="flex justify-center">
            <img class="w-[200px]" :src="logo" alt="" />
          </div>
          <div class="title py-6">
            <span>CÔNG TY CỔ PHẦN HỆ SINH THÁI AFDEX</span>
          </div>
          <div class="title_info grid grid-rows-7">
            <div>
              <span class="footer_info_left">Tên giao dịch: </span>
              <span>AFDEX - ONLINE., JSC</span>
            </div>
            <div>
              <span class="footer_info_left">Mã số thuế: </span>
              <span>0108839344</span>
            </div>
            <div>
              <span class="footer_info_left">Địa chỉ: </span>
              <span
                >Số 6C, Dương Khuê, Phường Mai Dịch, Quận Cầu Giấy, Hà Nội</span
              >
            </div>
            <div>
              <span class="footer_info_left">Đại diện pháp luật: </span>
              <span>Phạm Văn Tiến</span>
            </div>
            <div>
              <span class="footer_info_left">Điện thoại: </span>
              <span>0929009799</span>
            </div>
            <div>
              <span class="footer_info_left">Ngày cấp giấy phép: </span>
              <span>25/07/2019</span>
            </div>
            <div>
              <span class="footer_info_left">Ngày hoạt động: </span>
              <span>25/07/2019</span>
            </div>
          </div>
        </div>
        <div class="ml-[80px]">
          <div class="title py-6">
            <span>CHÍNH SÁCH</span>
          </div>
          <div>
            <ul class="title_info list-disc list-inside">
              <li><span>Quy chế hoạt động</span></li>
              <li><span>Chính sách chung</span></li>
              <li><span>Hỗ trợ khách hàng</span></li>
              <li><span>Hợp tác - liên kết</span></li>
              <li><span>Phương thức thanh toán</span></li>
              <li><span>Thông báo chung</span></li>
              <li><span>Thanh toán</span></li>
              <li><span>Đơn vị vận chuyển</span></li>
              <li><span>Câu hỏi thường gặp</span></li>
              <li><span>Liên kết tiếp thị</span></li>
              <li><span>Vận chuyển</span></li>
            </ul>
          </div>
        </div>
        <div>
          <div class="title py-6 text-center">
            <span>TƯ VẤN MIỄN PHÍ</span>
          </div>
          <div>
            <input
              class="bg-white h-[46px] !rounded-full pl-6 my-2"
              placeholder="Họ và tên"
            />
            <input
              class="bg-white h-[46px] !rounded-full pl-6 my-2"
              placeholder="Số điện thoại"
            />
            <input
              class="bg-white h-[46px] !rounded-full pl-6 my-2"
              placeholder="Chọn dịch vụ"
            />
            <div class="text-center py-6">
              <button
                class="button btn_md bg-[--base-color-8] !rounded-full text-white mx-2"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// import { moveTop } from "@/assets/js/common";
import icon from "@/assets/images/icon/logo white.png";
export default {
  setup() {
    const logo = icon;

    return {
      logo,
    };
  },
  // mounted: function () {
  // moveTop();
  // },
};
</script>
<style>
#footer li {
  list-style: inside;
}
.grid_content>[class*=col] {
  border: none;
}
</style>
