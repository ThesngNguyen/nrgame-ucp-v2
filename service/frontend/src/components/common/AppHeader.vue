<script setup lang="ts">
import AppSidebar from "./AppSidebar.vue";
</script>

<template>
  <header>
    <div class="header">
      <div class="header_welcome">
        <p class="header_welcome_text">
          Chào mừng đến với đại gia đình <span class="highlight">NRGAME.VN</span>
        </p>
      </div>
      <div class="header_bar">
        <div class="header_bar_wrapper">
          <AppSidebar />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  z-index: 1;
  background: linear-gradient(
    to bottom,
    #000000 0%,
    #000000 49.9%,
    #ffffff 50.1%,
    #ffffff 100%
  );
  height: 9rem;

  &_welcome {
    height: 2rem;
    display: flex;
    justify-content: center;
    color: var(--color-secondary);
    font-size: var(--text-sm);

    &_text {
      z-index: 1;
      position: absolute;
      top: 1.25%;
    }
  }

  &_bar {
    filter: drop-shadow(0 1px 10px var(--color-primary-light));
    width: 100%;

    &_wrapper {
      width: 100%;
      height: 100px;
      background: var(--color-primary-dark);
      position: relative;
      clip-path: polygon(
        0 0,
        15% 15%,
        85% 15%,
        100% 0,
        100% 100%,
        85% 85%,
        15% 85%,
        0 100%
      );
      display: flex;
      align-items: center;
      justify-content: space-between;

      &::after {
        content: "";
        position: absolute;
        inset: 0;
        background: var(--color-primary-light);
        clip-path: polygon(
          0 calc(100% - 1px),
          15% calc(85% - 1px),
          85% calc(85% - 1px),
          100% calc(100% - 1px),
          100% 100%,
          85% 85%,
          15% 85%,
          0 100%
        );
        pointer-events: none;
      }
    }
  }
}

.highlight {
  color: var(--color-primary-light);
  font-weight: var(--weight-bold);
}
</style>
