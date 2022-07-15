<script setup lang="ts">
import SideBar from "@/components/common/SideBar.vue";
</script>

<template>
  <div class="container">
    <side-bar></side-bar>
    <div class="main">1111</div>
  </div>
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
  border: 1px solid #ff0;
}
</style>
