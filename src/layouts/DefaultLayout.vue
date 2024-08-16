<template>
  <!-- <Loading /> -->
  <div class="page_wrap">
    <!-- <div class="skip_nav">
      <a href="#gnb_skip">주요메뉴 바로가기</a>
      <a href="#container_skip">본문영역 바로가기</a>
    </div> -->
    <!-- header -->
    <THeader/>

    <!-- main -->
    <main id="main_content">
<!--      <transition-->
<!--          :enter-active-class="`animate__faster animate__animated animate__fadeInRight`"-->
<!--          :leave-active-class="`animate__faster animate__animated animate__fadeOutLeft`"-->
<!--          mode="out-in"-->
<!--      >-->
<!--        <router-view v-slot="{ Component, route }">-->
<!--          <component :is="Component" :key="route.name"></component>-->
<!--        </router-view>-->
<!--      </transition>-->
      <router-view v-slot="{ Component, route }">
        <transition
            :enter-active-class="`animate__faster animate__animated animate__fadeInRight`"
            :leave-active-class="`animate__faster animate__animated animate__fadeOutLeft`"
            mode="out-in"
        >
          <div :key="route.name">
            <component :is="Component"></component>
          </div>
        </transition>
      </router-view>
    </main>

    <!-- footer -->
    <TFooter/>
  </div>
  <LoadingComponent v-if="store.loading"></LoadingComponent>
</template>

<script setup lang="ts">
import THeader from "@/layouts/components/THeader.vue";
import TFooter from "@/layouts/components/TFooter.vue";
import LoadingComponent from "@/components/common/loading/LoaddingComponent.vue"
import {commonStore} from '@/stores/common';

const store = commonStore()
</script>

<style>
#main_content {
  background-color: #ffff;
}

</style>