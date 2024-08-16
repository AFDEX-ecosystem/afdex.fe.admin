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
    <div class="mt-10 text-center">
      <div class="text-3xl font-bold">HỘI ĐỒNG QUẢN TRỊ</div>
      <div class="text-1xl mt-2 font-semibold">CT. PHỐ CHỢ DV 56 TTNL HP16 <br/>(BQL.DV 152/364)</div>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style scoped>
.main__img {
  background-image: url("../../assets/images/ecosystem/ecosystem.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 300px;
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
</style>
