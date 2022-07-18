<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import logoUrl from "@/assets/images/logo.png";

const router = useRouter();
const logoTxT = ref("logo-txt");

function goHome() {
  router.push("/");
}
</script>

<template>
  <div class="logo">
    <img :src="logoUrl" :alt="logoTxT" @click="goHome" />
  </div>
</template>

<style lang="less" scoped>
.logo {
  width: 100%;
  height: 60px;
  display: flex;
  background-color: var(--box-background-color);
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: center;
  img {
    display: block;
    width: 149px;
    height: 40px;
    cursor: pointer;
  }
}
</style>
