<script setup lang="ts">
import { useRoute } from "vue-router";
import { NConfigProvider, zhCN, dateZhCN } from "naive-ui";
import { BASE_THEME } from "@/theme/index";
import SideBar from "@/components/common/SideBar.vue";
import PageNav from "@/components/common/PageNav.vue";

const route = useRoute();
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme-overrides="BASE_THEME">
    <div class="container">
      <side-bar></side-bar>
      <div class="main">
        <page-nav></page-nav>
        <!--- 页面主体 -->
        <router-view></router-view>
      </div>
    </div>
  </n-config-provider>
</template>

<style scoped>
.container {
  width: 1200px;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: space-between;
}

.main {
  width: 1020px;
}
</style>
