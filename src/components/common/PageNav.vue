<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { NTabs, NTabPane, NConfigProvider } from "naive-ui";
import { NAV_TABS } from "@/theme/index";

interface NavItem {
  name: string;
  tab: string;
}

const NavList: NavItem[] = [
  {
    name: "/index",
    tab: "首页",
  },
  {
    name: "/score",
    tab: "即时比分",
  },
  {
    name: "/match",
    tab: "赛事",
  },
  {
    name: "/recommend",
    tab: "比赛推荐",
  },
  {
    name: "/discount",
    tab: "平台优惠汇总",
  },
];
const route = useRoute();
const router = useRouter();
const onRoutes = computed(() => {
  return route.path;
});

const goPage = (e) => {
  router.push(e);
};
</script>

<template>
  <div class="nav">
    <NConfigProvider :theme-overrides="NAV_TABS">
      <n-tabs type="line" class="custom-tabs" :value="onRoutes" @update:value="goPage" animated>
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
:deep(.n-tabs.custom-tabs.n-tabs--line-type .n-tabs-tab:hover) {
  transition: 0.3s;
}
</style>
