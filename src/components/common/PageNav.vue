<script setup lang="ts">
import { NTabs, NTabPane, NConfigProvider } from "naive-ui";
import { NAV_TABS } from "../../theme/index";

interface NavItem {
  name: string;
  tab: string;
}

const NavList: NavItem[] = [
  {
    name: "index",
    tab: "首页",
  },
  {
    name: "score",
    tab: "即时比分",
  },
  {
    name: "match",
    tab: "赛事",
  },
  {
    name: "recommend",
    tab: "比赛推荐",
  },
  {
    name: "discount",
    tab: "平台优惠汇总",
  },
];


</script>

<template>
  <div class="nav">
    <NConfigProvider :theme-overrides="NAV_TABS">
      <n-tabs type="line" class="custom-tabs" animated>
        <n-tab-pane
          v-for="item in NavList"
          :key="item.name"
          :name="item.name"
          :tab="item.tab"
          type="line"
        ></n-tab-pane>
      </n-tabs>
    </NConfigProvider>
  </div>
</template>

<style lang="less" scoped>
.nav {
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  padding: 0 100px;
  background-color: var(--box-background-color);
}
</style>
