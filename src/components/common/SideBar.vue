<script setup lang="ts">
import Logo from "@/components/common/Logo.vue";
</script>

<template>
  <div class="sidebar">
    <logo></logo>
  </div>
</template>

<style scoped>
.sidebar {
  width: 170px;
  height: 100vh;
  overflow-y: scroll;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
</style>
