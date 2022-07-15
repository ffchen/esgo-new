<script setup lang="ts">
import { ref } from "vue";

const logo = ref("logo-txt");
</script>

<template>
  <div class="logo">
    <img src="@/assets/images/logo.png" :alt="logo" />
  </div>
</template>

<style scoped>
.logo {
  width: 100%;
  height: 60px;
  display: flex;
  background: #191a23;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: center;
  img {
    display: block;
    width: 149px;
    height: 40px;
  }
}
</style>
