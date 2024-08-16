<template>
<div class="content">
  <div class="slider">
    <div class="h-[800px] w-full relative flex items-center justify-center">
      <img
        class="w-full h-full"
        :src="bg"
        alt=""
      />
      <div class="content_page z-30 absolute text-white text-center">
        <h1 class="text-9xl font-black">BẢN ĐỒ AFDEX</h1>
      </div>
    </div>
  </div>
</div>
    <div class="max-w-[1700px] m-auto flex justify-center my-10">
        <div>
            <SelectBoxBaseSearch :is-form-search="true" v-model="selectSearch" :data="listSelectBox"></SelectBoxBaseSearch>
        </div>
    </div>
  <div class="max-w-[1700px] flex shadow shadow-gray-500/40 m-auto">
    <div class="w-1/5 p-4">
        
      <CollapseBase :isShow="type.isShow" :title="type.title" :isCheck="false" v-for="(type) in dataType"
                    :onClick="() => {type.isShow = !type.isShow}">
        <p>{{ type.data }}</p>
      </CollapseBase>
    </div>
    <div class="flex-1 p-4">
      <div class="relative">
        <div class="absolute w-[auto] bottom-[240px] left-[75px]">
          <ul>
            <li class="flex items-center mt-5">
              <div class="w-[30px] h-[30px] mr-2 bg_map_orange"></div>
              North Mountains & Midlands
            </li>
            <li class="flex items-center mt-5">
              <div class="w-[30px] h-[30px] mr-2 bg_map_red"></div>
              Red River Delta
            </li>
            <li class="flex items-center mt-5">
              <div class="w-[30px] h-[30px] mr-2 bg_map_gree"></div>
              Nort Central Coast
            </li>
            <li class="flex items-center mt-5">
              <div class="w-[30px] h-[30px] mr-2 bg_map_blue"></div>
              South Central
            </li>
            <li class="flex items-center mt-5">
              <div class="w-[30px] h-[30px] mr-2 bg_map_pink"></div>
              Central Highlands
            </li>
            <li class="flex items-center mt-5">
              <div class="w-[30px] h-[30px] mr-2 bg_map_yellow"></div>
              South East
            </li>
            <li class="flex items-center mt-5">
              <div class="w-[30px] h-[30px] mr-2 bg_map_grass_gree"></div>
              Mekong Delta
            </li>
          </ul>
        </div>
        <div class="absolute w-[auto] top-0 right-0">
          <ul class="column-count-2 gap-29">
            <li class="flex items-center" v-for="item in listCity">
              <span class="text-sm">{{item.cityCode}}. {{ item.cityNm }}</span>
            </li>
          </ul>
        </div>
        <svg
          baseprofile="tiny"
          fill="#6f9c76"
          height="1000"
          stroke="#ffffff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".5"
          version="1.2"
          viewbox="0 0 1000 1000"
          width="1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="features">
            <template v-for="item in data">
              <g
                :id="item.id"
                :name="item.cityNm"
                :class="`hover_me ${item.bgColor}`"
              >
                <path
                  :d="path.d"
                  :transform="path?.transform"
                  @mouseover="showTooltip($event, item)"
                  @mouseleave="hideTooltip"
                  v-for="path in item.coordinates"
                ></path>
              </g>
            </template>
          </g>
          <g id="label_points">
            <template v-for="item in data">
              <text
                fill="black"
                :x="parseFloat(text.x) - 5"
                :y="parseFloat(text.y) + 5"
                v-for="text in item.fillText"
                font-weight="500"
                font-size="12"
                pointer-events="none"
                stroke="none"
                stroke-width="0"
              >
                {{ item.cityCode }}
              </text>
              <image
                v-if="item.isAfdex"
                v-for="text in item.fillText"
                :href="logoMap"
                width="10"
                :x="`${
                  parseFloat(item.cityCode) >= 10
                    ? (parseFloat(text.x) + 10).toString()
                    : (parseFloat(text.x) + 4).toString()
                }`"
                :y="parseInt(text.y) - 5"
                pointer-events="none"
                height="10"
              />
            </template>
          </g>
        </svg>
      </div>
    </div>
  </div>
  <TooltipMapCompent
    :position="tooltipPosition"
    :isVisible="tooltipVisible"
    :title="dataDetail.title"
  >
    <template #tooltipContent>
      <div>
        <ul>
          <li>- Vùng: thuộc Đông Bắc Bộ, Việt Nam</li>
          <li>- Diện tích: 6.700,39 km²</li>
          <li>- Phân chia chính: 1 thành phố, 9 huyện</li>
          <li>- Thành lập: 1499 29/12/1978: tái lập</li>
          <li>- Tọa ộ: 22°41’08’B 106°15’47’Đ</li>
        </ul>
      </div>
    </template>
  </TooltipMapCompent>
</template>
<script lang="ts">
import TooltipMapCompent from "@/components/common/tooltip/TooltipMapCompent.vue";
import { data } from "./data";
import logoMap from "@/assets/images/icon/logmap.png";
import CollapseBase from "@/components/common/collapse/CollapseBase.vue";
import type { CodeMngModel } from "@/stores/common/codeMng/codeMng.type";
import bg from '@/assets/images/background/high-detail-vector-political-world-map-illustration-cleverly-organized-with-layers.jpg'

export default defineComponent({
  components: {
    TooltipMapCompent,
    CollapseBase
  },
  setup() {
    return {
      data,
      logoMap,
      bg
    };
  },
  data() {
    return {
        selectSearch: "",
        listSelectBox: [] as Array<CodeMngModel>,
      dataDetail: {
        title: "Tỉnh Cao Bằng",
      },
      tooltipVisible: false,
      tooltipPosition: { x: 0, y: 0 },
      listCity: [],
      openCollapse: false,
      dataType: [
        {
            title: "Diện tích",
            isShow: false,
            data: `Đa số diện tích Cao Bằng ược che 
                    phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm thành 
                    phố. Đa số diện tích Cao Bằng ược 
                    che phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm.`
        },
        {
            title: "Dân số",
            isShow: false,
            data: `Đa số diện tích Cao Bằng ược che 
                    phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm thành 
                    phố. Đa số diện tích Cao Bằng ược 
                    che phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm.`
        },
        {
            title: "Tổng cộng",
            isShow: false,
            data: `Đa số diện tích Cao Bằng ược che 
                    phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm thành 
                    phố. Đa số diện tích Cao Bằng ược 
                    che phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm.`
        },
        {
            title: "Thành thị",
            isShow: false,
            data: `Đa số diện tích Cao Bằng ược che 
                    phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm thành 
                    phố. Đa số diện tích Cao Bằng ược 
                    che phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm.`
        },
        {
            title: "Nông thông",
            isShow: false,
            data: `Đa số diện tích Cao Bằng ược che 
                    phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm thành 
                    phố. Đa số diện tích Cao Bằng ược 
                    che phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm.`
        },
        {
            title: "Mật độ",
            isShow: false,
            data: `Đa số diện tích Cao Bằng ược che 
                    phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm thành 
                    phố. Đa số diện tích Cao Bằng ược 
                    che phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm.`
        },
        {
            title: "Dân tộc",
            isShow: false,
            data: `Đa số diện tích Cao Bằng ược che 
                    phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm thành 
                    phố. Đa số diện tích Cao Bằng ược 
                    che phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm.`
        },
        {
            title: "GRDP",
            isShow: false,
            data: `Đa số diện tích Cao Bằng ược che 
                    phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm thành 
                    phố. Đa số diện tích Cao Bằng ược 
                    che phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm.`
        },
        {
            title: "GRDP đầu người",
            isShow: false,
            data: `Đa số diện tích Cao Bằng ược che 
                    phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm thành 
                    phố. Đa số diện tích Cao Bằng ược 
                    che phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm.`
        },
        {
            title: "Mã địa lý",
            isShow: false,
            data: `Đa số diện tích Cao Bằng ược che 
                    phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm thành 
                    phố. Đa số diện tích Cao Bằng ược 
                    che phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm.`
        },
        {
            title: "Mã hành chính",
            isShow: false,
            data: `Đa số diện tích Cao Bằng ược che 
                    phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm thành 
                    phố. Đa số diện tích Cao Bằng ược 
                    che phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm.`
        },
        {
            title: "Mã bưu chính",
            isShow: false,
            data: `Đa số diện tích Cao Bằng ược che 
                    phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm thành 
                    phố. Đa số diện tích Cao Bằng ược 
                    che phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm.`
        },
        {
            title: "Mã điện thoại",
            isShow: false,
            data: `Đa số diện tích Cao Bằng ược che 
                    phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm thành 
                    phố. Đa số diện tích Cao Bằng ược 
                    che phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm.`
        },
        {
            title: "Biển số xe",
            isShow: false,
            data: `Đa số diện tích Cao Bằng ược che 
                    phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm thành 
                    phố. Đa số diện tích Cao Bằng ược 
                    che phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm.`
        },
        {
            title: "Bất động sản",
            isShow: false,
            data: `Đa số diện tích Cao Bằng ược che 
                    phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm thành 
                    phố. Đa số diện tích Cao Bằng ược 
                    che phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm.`
        },
        {
            title: "Khí hậu",
            isShow: false,
            data: `Đa số diện tích Cao Bằng ược che 
                    phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm thành 
                    phố. Đa số diện tích Cao Bằng ược 
                    che phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm.`
        },
        {
            title: "Giao thông",
            isShow: false,
            data: `Đa số diện tích Cao Bằng ược che 
                    phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm thành 
                    phố. Đa số diện tích Cao Bằng ược 
                    che phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm.`
        },
        {
            title: "Điều kiện tự nhiên",
            isShow: false,
            data: `Đa số diện tích Cao Bằng ược che 
                    phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm thành 
                    phố. Đa số diện tích Cao Bằng ược 
                    che phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm.`
        },
        {
            title: "Afdex",
            isShow: false,
            data: `Đa số diện tích Cao Bằng ược che 
                    phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm thành 
                    phố. Đa số diện tích Cao Bằng ược 
                    che phủ bởi rừng vì thế không khí khá 
                    trong sạch ở các vùng nông thôn, 
                    các khu dân cư và ở trung tâm.`
        },
      ]
    };
  },
  beforeMount() {
    this.listCity = data
    .filter((el) => !isNaN(parseInt(el.cityCode))) 
    .map((el) => {
        return {
            cityCode: parseInt(el.cityCode),
            cityNm: el.cityNm,
        };
    })
    .sort((a, b) => {
        if (a.cityCode < b.cityCode) {
            return -1;
        }
        if (a.cityCode > b.cityCode) {
            return 1;
        }
        return 0;
    });

    this.listSelectBox = data.map(el => {
        return {
            cdId : el.id,
            cdNm : el.cityNm,
            upCdId: 'city',
        }
    })

console.log(this.listCity);
  },
  methods: {
    showTooltip(event: any, data: any) {
      this.tooltipVisible = true;
      // Đặt vị trí của tooltip dựa trên tọa độ chuột
      this.tooltipPosition = {
        x: event.clientX + 10, // Thay đổi khoảng cách nếu cần
        y: event.clientY + 10,
      };
      this.dataDetail.title = `${data.isCity ? 'Thành Phố': 'Tỉnh'} ${data.cityNm}`;
    },
    hideTooltip() {
      this.tooltipVisible = false;
    },
    updatePosition(event) {
      // Cập nhật vị trí của tooltip nếu cần
    },
  },
});
</script>

<style>
.column-count-2 {
  column-count: 2;
  column-gap: 1rem;
}
.transition_card {
    padding: 24px 0;
}
.accordion {
    padding: 12px;
    border: #ccc solid 1px;
}
.select_component_custom {
    background: url('/src/assets/images/icon_arrow_down.png') no-repeat left 15px center !important;
    border-radius: 9999999px !important;
    overflow: hidden !important;
    padding-left: 50px !important;
}
.select_component_custom:focus {
    border: 1px solid var(--light-blue-gray) !important;
    border-radius: 9999999px !important;
}
.group_checkbox {
    position: relative;
    width: 600px;
}
.group_checkbox .btn_search_input {
    background-color: var(--base-color-2);
    margin: 0;
    padding: 20px;
    border-bottom-right-radius: 9999999px;
    border-top-right-radius: 9999999px;
}
</style>
