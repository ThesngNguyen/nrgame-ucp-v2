<script setup lang="ts">
import AppHeader from "../../components/common/AppHeader.vue";
</script>

<template>
  <div class="landing_page_wrapper">
    <AppHeader />
    <div class="landing_page_wrapper_background">
      <div class="landing_page_wrapper_background_overlay">
        <div class="landing_page_wrapper_background_overlay_text"># Back to 2014</div>
        <div class="landing_page_wrapper_background_overlay_title">
          TÌM LẠI TUỔI THƠ CỦA BẠN TẠI
        </div>
        <div class="landing_page_wrapper_background_overlay_brand">NRGAME.VN</div>
        <div class="landing_page_wrapper_background_overlay_button">Tham gia ngay</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.landing_page_wrapper {
  height: 100vh;
  width: 100vw;

  &_background {
    margin-top: -63px;
    height: 500px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    z-index: 1;
    background-image: url("../../../public/assets/landing_background.webp");
    background-position: center;
    background-size: cover;
    clip-path: polygon(0 50px, 15% 35px, 85% 35px, 100% 50px, 100% 100%, 0 100%);

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to bottom,
        transparent 0%,
        transparent 60%,
        rgba(0, 0, 0, 0.1) 80%,
        rgba(0, 0, 0, 0.2) 100%
      );
      backdrop-filter: blur(0px) blur(0px) blur(0px) blur(0px) blur(0px) blur(0px)
        blur(0px) blur(0px) blur(8px);
      mask-image: linear-gradient(to bottom, transparent 0%, transparent 70%, black 100%);
      z-index: 0;
    }

    &_overlay {
      width: 100%;
      height: 100%;
      backdrop-filter: blur(4px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 4px;
      padding: 20px;

      &_text {
        font-size: var(--text-xl);
        color: var(--color-primary-light);
        font-weight: var(--weight-semibold);
      }

      &_title {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: var(--space-2) var(--space-8);
        color: var(--color-secondary);
        font-size: var(--text-xl);
        font-weight: var(--weight-bold);
        text-transform: uppercase;
        white-space: nowrap;

        &::before {
          content: "";
          position: absolute;
          inset: 0;
          border: 2px solid white;
          border-radius: 100px;
          clip-path: polygon(
            0% 0%,
            30% 0%,
            30% 3px,
            70% 3px,
            70% 0%,
            100% 0%,
            100% 100%,
            70% 100%,
            70% calc(100% - 3px),
            30% calc(100% - 3px),
            30% 100%,
            0% 100%,
            0% 0%,
            30% 0%,
            30% 100%,
            0% 100%,
            100% 0%,
            calc(100% - 2px) 0%,
            calc(100% - 2px) 100%,
            100% 100%
          );
        }
      }

      &_brand {
        font-size: var(--text-4xl);
        color: var(--color-primary-light);
        font-weight: var(--weight-bold);
      }

      &_button {
        margin-top: var(--space-4);
        padding: var(--space-2) var(--space-4);
        background-color: var(--color-primary-light);
        border-radius: var(--radius-md);
        font-size: var(--text-base);
        font-weight: var(--weight-semibold);
      }
    }
  }
}
</style>
