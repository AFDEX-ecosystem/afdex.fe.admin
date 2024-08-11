<template>
  <header>
    <div
      class="top_header h-[43px] bg-[--base-color-1] flex items-center justify-around"
    >
      <div class="left_header w-[90%]">
        <div class="flex justify-between items-center mx-[60px]">
          <div class="text-white">
            <span class="flex items-center"> <img class="h-[18px] mr-2" :src="phongIcon"/> 032.884.3156 </span>
          </div>
          <div class="flex justify-around items-center">
            <div class="icon_custom flex">
              <img class="icon_infor h-[28px]" :src="faIcon"/>
              <img class="icon_infor h-[28px]" :src="insIcon"/>
              <img class="icon_infor h-[28px]" :src="tikIcon"/>
              <img class="icon_infor h-[28px]" :src="youIcon"/>
            </div>
            <div class="search relative">
              <input
                id="input_search"
                class="input_search pl-6"
                placeholder="Tìm kiếm"
              />
              <label for="input_search" class="btn_search_input">
                <svg
                  enable-background="new 0 0 32 32"
                  id="Glyph"
                  version="1.1"
                  viewBox="0 0 32 32"
                  xml:space="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="20"
                  height="20"
                >
                  <path
                    d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
                    id="XMLID_223_"
                    fill="white"
                  />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="right_head">Việt nam</div>
    </div>
    <div
      class="bottom_header h-[110px] flex items-center bg-white justify-around"
    >
      <div class="h-[80%] flex items-center">
        <div class="h-[80%] mr-5">
          <img
            class="h-[100%]"
            src="https://vspace-media-prod-use1.s3.amazonaws.com/image/eddc6410-a027-4f05-a57d-e4f04867ecd0.jpg"
          />
        </div>
        <nav>
          <ul class="flex justify-center space-x-8">
            <li>
              <a
                href="#"
                class="text-menu text-black font-semibold text-3xl hover:!text-[--base-color-3] active:!text-[--base-color-3] transition duration-300 ease-in-out on"
                >Trang Chủ</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-menu text-black font-semibold text-3xl hover:!text-[--base-color-3] active:!text-[--base-color-3] transition duration-300 ease-in-out"
                >Dịch Vụ</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-menu text-black font-semibold text-3xl hover:!text-[--base-color-3] active:!text-[--base-color-3] transition duration-300 ease-in-out"
                >Sản Phẩm</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-menu text-black font-semibold text-3xl hover:!text-[--base-color-3] active:!text-[--base-color-3] transition duration-300 ease-in-out"
                >Giới Thiệu</a
              >
            </li>
            <li>
              <a
                href="#"
                class="text-menu text-black font-semibold text-3xl hover:!text-[--base-color-3] active:!text-[--base-color-3] transition duration-300 ease-in-out"
                >Liên Hệ</a
              >
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <button
          class="button btn_md bg-[--base-color-3] !rounded-full text-white mx-2"
        >
          Download
        </button>
        <button class="button btn_md btn_white bo_rd6 mx-2">Đăng ký</button>
        <button class="btn_round bg-[--base-color-2] btn_md text-white">
          Đăng nhập
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import facebookIcon from '@/assets/images/icon/facebook.png'
import instaIcon from '@/assets/images/icon/insta.png'
import youtubeIcon from '@/assets/images/icon/youtube.png'
import tiktokIcon from '@/assets/images/icon/tiktok.png'
import callIcon from '@/assets/images/icon/call.png'


export default {
  setup(){
    const faIcon = facebookIcon;
    const insIcon = instaIcon;
    const youIcon = youtubeIcon;
    const tikIcon = tiktokIcon;
    const phongIcon = callIcon;
    // const route = useRoute()
    // const router = useRouter()

    // const isLoading = ref(false)

    // const logout = () => {
    //   isLoading.value = true
    //   commonService
    //       .logout()
    //       .then(async (response) => {
    //         if (response.status == 200) {
    //           await removeUserInfo()
    //           await router.push({name: "Login"})
    //         }
    //       })
    //       .catch((e) => {
    //         console.log(e)
    //       })
    //       .finally(() => {
    //         isLoading.value = false
    //       })
    // }
    return {
      faIcon,
      insIcon,
      phongIcon,
      tikIcon,
      youIcon
    }
  }
};
</script>
<style>
.input_search {
  background-color: rgb(127, 167, 158);
  height: 27px;
  border-radius: 9999px !important;
}
.btn_search_input {
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  margin-right: 9px;
}
.icon_infor {
  margin: 0 7px;
}
.text-menu.on {
    color: var(--base-color-3) !important;
}</style>
