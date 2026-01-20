<script setup lang="ts">
import AppHeader from "../../components/common/AppHeader.vue";
</script>

<template>
  <div>
    <div class="header">
      <AppHeader />
    </div>
    <div class="image">Địt mẹ Ngọc Hải</div>
  </div>
</template>

<style lang="scss" scoped>
.image {
  position: relative;
  z-index: 1;
  margin-top: -63px;
  height: 100vh;
  width: 100%;
  background-image: url("./public/assets/landing_background.png");
  background-size: cover;
  clip-path: polygon(0 50px, 15% 35px, 85% 35px, 100% 50px, 100% 100%, 0 100%);
}
</style>
