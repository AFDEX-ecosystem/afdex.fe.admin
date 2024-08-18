<template>
  <div class="dp_block">
    <div class="main__img"></div>
    <div>
      <div class="box_tab_ecosystem">
        <div class="tab_ecosystem">HỘI ĐỒNG QUẢN TRỊ</div>
        <div class="tab_ecosystem">VĂN PHÒNG HỘI ĐỒNG</div>
        <div class="tab_ecosystem">PHỐ CHỢ AFDEX/HUYỆN</div>
      </div>
    </div>
    <div class="mt-20 text-center">
      <div class="text-5xl font-bold text-red-500">HỘI ĐỒNG QUẢN TRỊ</div>
      <div class="text-3xl font-bold text-red-500 mt-10">
        CT. PHỐ CHỢ DV 56 TTNL HP16 <br />(BQL.DV 152/364)
      </div>
    </div>
    <div class="mt-20">
      <div class="title-body text-3xl font-bold text-purple-500">
        <div class="ml-20">
          <span class="border-b-2 border-purple-500">+ CT.HĐKH & CỐ VẤN CHIẾN LƯỢC</span>
        </div>
      </div>
      <div class="content-ecosystem mt-10">
        <v-row>
          <!-- Cột đầu tiên - Danh sách Tổng Mục -->
          <v-col cols="3">
            <v-card class="card-custom">
              <v-list>
                <v-list-item
                  v-for="parent in parents"
                  :key="parent.id"
                  @click="selectParent(parent)"
                  class="list-item"
                >
                  {{ parent.name }}
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>

          <!-- Cột thứ hai - Danh sách Con của Tổng Mục với danh sách lồng nhau -->
          <v-col cols="3" v-if="selectedParent">
            <v-card class="card-col-2-custom">
              <v-list dense class="nested-list">
                <ul class="parent-list">
                  <li
                    v-for="child in selectedParent.children"
                    :key="child.id"
                    :class="'parent-item'"
                  >
                    <span
                      :class="
                        child.type === 1 ? 'color-green-custom' : 'color-purple-custom'
                      "
                      >{{ child.name }}</span
                    >
                    <ul class="child-list">
                      <!-- Danh sách các mục nhỏ hơn (depth 3) -->
                      <li
                        v-for="grandchild in child.children"
                        :key="grandchild.id"
                        class="grandchild-item"
                        @click="selectGrandchild(grandchild)"
                      >
                        <span
                          :class="
                            child.type === 1
                              ? 'color-green-custom'
                              : 'color-purple-custom'
                          "
                        >
                          {{ " - " + grandchild.name }}</span
                        >
                      </li>
                    </ul>
                  </li>
                </ul>
              </v-list>
            </v-card>
          </v-col>

          <!-- Cột thứ ba - Chi tiết của Grandchild -->
          <v-col cols="6" v-if="selectedGrandchild">
            <v-card class="card-6-custom">
              <v-card-title style="text-align: center"
                >Chi tiết của {{ selectedGrandchild.name }}</v-card-title
              >
              <v-card-subtitle v-if="selectedGrandchild.description">
                <div class="description-text">
                  {{ selectedGrandchild.description }}
                </div>
              </v-card-subtitle>
              <v-card-subtitle v-else> Không có mô tả cho mục này. </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      parents: [
        {
          id: 1,
          name: "+ TỔNG CT.QLC NN12. CÂY TRỒNG",
          children: [
            {
              id: 11,
              name: "+ TỔNG QTSP NN12.CÂY TRỒNG",
              type: 0,
              children: [
                {
                  id: 111,
                  name: "BAN ĐP SP/MH/PK56",
                  description:
                    "Trước nhu cầu số hóa toàn cầu, việc mã hóa sản phẩm, mã hóa ơn hàng, mã hóa khách hàng, mã hóa chuyên gia, mã hóa vùng nguyên liệu… là yếu tố quan trọng nhất trong công cuộc “chuyển ổi số nông nghiệp”. Trước nhu cầu số hóa toàn cầu, việc mã hóa sản phẩm, mã hóa ơn hàng, mã hóa khách hàng, mã hóa chuyên gia, mã hóa vùng nguyên liệu… là yếu tố quan trọng nhất trong công cuộc “chuyển ổi số nông nghiệp”.Trước nhu cầu số hóa toàn cầu, việc mã hóa sản phẩm, mã hóa ơn hàng, mã hóa khách hàng, mã hóa. Trước nhu cầu số hóa toàn cầu, việc mã hóa sản phẩm, mã hóa ơn hàng, mã hóa khách hàng, mã hóa chuyên gia, mã hóa vùng nguyên liệu… là yếu tố quan trọng nhất trong công cuộc “chuyển ổi số nông nghiệp”.",
                },
                {
                  id: 112,
                  name: "BAN ĐP SP/MH/PK17",
                  description:
                    "Trước nhu cầu số hóa toàn cầu, việc mã hóa sản phẩm, mã hóa ơn hàng, mã hóa khách hàng, mã hóa chuyên gia, mã hóa vùng nguyên liệu… là yếu tố quan trọng nhất trong công cuộc “chuyển ổi số nông nghiệp”. Trước nhu cầu số hóa toàn cầu, việc mã hóa sản phẩm, mã hóa ơn hàng, mã hóa khách hàng, mã hóa chuyên gia, mã hóa vùng nguyên liệu… là yếu tố quan trọng nhất trong công cuộc “chuyển ổi số nông nghiệp”.Trước nhu cầu số hóa toàn cầu, việc mã hóa sản phẩm, mã hóa ơn hàng. Trước nhu cầu số hóa toàn cầu, việc mã hóa sản phẩm, mã hóa ơn hàng, mã hóa khách hàng, mã hóa chuyên gia, mã hóa vùng nguyên liệu… là yếu tố quan trọng nhất trong công cuộc “chuyển ổi số nông nghiệp”. Trước nhu cầu số hóa toàn cầu, việc mã hóa sản phẩm, mã hóa ơn hàng, mã hóa khách hàng.",
                },
                {
                  id: 113,
                  name: "BAN ĐP SP/MH/PK23",
                  description:
                    "Trước nhu cầu số hóa toàn cầu, việc mã hóa sản phẩm, mã hóa ơn hàng, mã hóa khách hàng, mã hóa chuyên gia, mã hóa vùng nguyên liệu… là yếu tố quan trọng nhất trong công cuộc “chuyển ổi số nông nghiệp”. Trước nhu cầu số hóa toàn cầu, việc mã hóa sản phẩm, mã hóa ơn hàng, mã hóa khách hàng, mã hóa chuyên gia, mã hóa vùng nguyên liệu… là yếu tố quan trọng nhất trong công cuộc “chuyển ổi số nông nghiệp”.Trước nhu cầu số hóa toàn cầu, việc mã hóa sản phẩm, mã hóa ơn hàng. Trước nhu cầu số hóa toàn cầu, việc mã hóa sản phẩm, mã hóa ơn hàng, mã hóa khách hàng, mã hóa chuyên gia, mã hóa vùng nguyên liệu… là yếu tố quan trọng nhất trong công cuộc “chuyển ổi số nông nghiệp”. Trước nhu cầu số hóa toàn cầu, việc mã hóa sản phẩm, mã hóa ơn hàng, mã hóa khách hàng.",
                },
              ],
            },
            {
              id: 12,
              name: "+ LIÊN DOANH (DV1 - TCBH)",
              type: 1,
              children: [
                {
                  id: 121,
                  name: "BQL.DV 524/631 CBBQ",
                  description: "Mô tả của BQL.DV 524/631 CBBQ",
                },
                {
                  id: 122,
                  name: "BQL.DV 524/631 TMDV",
                  description: "Mô tả của BQL.DV 524/631 TMDV",
                },
                {
                  id: 123,
                  name: "BQL.DV 524/631 NNST",
                  description: "Mô tả của BQL.DV 524/631 NNST",
                },
              ],
            },
            {
              id: 13,
              name: "+ LIÊN DOANH (DV2 - ĐTTH)",
              type: 1,
              children: [
                {
                  id: 121,
                  name: "BQL.DV 524/631 CBBQ",
                  description: "Mô tả của BQL.DV 524/631 CBBQ",
                },
                {
                  id: 122,
                  name: "BQL.DV 524/631 TMDV",
                  description: "Mô tả của BQL.DV 524/631 TMDV",
                },
                {
                  id: 123,
                  name: "BQL.DV 524/631 NNST",
                  description: "Mô tả của BQL.DV 524/631 NNST",
                },
              ],
            },
            {
              id: 14,
              name: "+ LIÊN DOANH (DV1 - TCBH)",
              type: 1,
              children: [
                {
                  id: 121,
                  name: "BQL.DV 524/631 CBBQ",
                  description: "Mô tả của BQL.DV 524/631 CBBQ",
                },
                {
                  id: 122,
                  name: "BQL.DV 524/631 TMDV",
                  description: "Mô tả của BQL.DV 524/631 TMDV",
                },
                {
                  id: 123,
                  name: "BQL.DV 524/631 NNST",
                  description: "Mô tả của BQL.DV 524/631 NNST",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          name: "+ TỔNG CT.QLC NN34. VẬT NUÔI",
          children: [],
        },
        {
          id: 3,
          name: "+ TỔNG CT.QLC NN5. LÀNG NGHỀ",
          children: [],
        },
        {
          id: 4,
          name: "+ TỔNG CT.QLC NN6. NAM DƯỢC",
          children: [],
        },
      ],
      selectedParent: null,
      selectedGrandchild: null,
    };
  },
  methods: {
    selectParent(parent) {
      this.selectedParent = parent;
      this.selectedGrandchild = null;
    },
    selectGrandchild(grandchild) {
      this.selectedGrandchild = grandchild;
    },
  },
};
</script>

<style scoped>
.main__img {
  background-image: url("../../assets/images/ecosystem/ecosystem.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 350px;
}

.box_tab_ecosystem {
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  justify-content: center;
  gap: 15px;
}

.tab_ecosystem {
  font-size: 30px;
  font-weight: bold;
  padding: 15px;
  background-color: red;
  color: white;
}

.tab_ecosystem:hover {
  cursor: pointer;
}

.dp_block {
  background-color: rgb(251, 240, 255);
  margin-bottom: 30px;
}

.content-ecosystem {
  padding-left: 2%;
  padding-right: 2%;
}

v-list {
  padding: 0 !important;
  height: 500px !important;
}

.list-item {
  cursor: pointer;
  transition: background-color 0.3s;
  display: flex;
  background-color: rgb(151, 4, 151);
  align-items: center;
  justify-content: right;
  font-weight: bold;
  font-size: 18px;
  color: white;
  margin-bottom: 10px;
  margin-top: 10px;
}

.card-custom {
  background-color: rgb(255, 255, 255);
  font-weight: bold;
  color: white;
  min-height: 650px;
}

.list-item:hover {
}

.parent-list {
  padding-left: 0;
  list-style: none;
}

.parent-item {
  position: relative;
  padding: 5px 20px;
  border-radius: 4px;
  margin-bottom: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  font-weight: bold;
}

.parent-item:hover {
}

.child-list {
  padding-left: 20px;
  margin: 0;
  list-style: none;
}

.grandchild-item {
  padding: 5px 15px;
  border-radius: 4px;
  margin-bottom: 5px;
  transition: background-color 0.3s;
}

.grandchild-item:hover {
}

li {
  position: relative;
  padding-left: 20px;
}

.description-text {
  white-space: pre-wrap;
  word-break: break-word;
  padding: 10px;
  background-color: rgb(227, 206, 248);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  color: black;
  font-weight: 500;
}

.card-col-2-custom {
  background-color: rgb(227, 206, 248);
}

.nested-list {
  background-color: rgb(227, 206, 248);
  padding: 0 !important;
}

.color-green-custom {
  color: rgba(3, 202, 3, 0.968) !important;
}

.color-purple-custom {
  color: blueviolet !important;
}

.card-6-custom {
  background-color: rgb(227, 206, 248);
}
</style>
