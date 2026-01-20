<script setup lang="ts"></script>

<template>
  <nav class="navbar">
    <!-- Logo -->
    <div class="navbar_logo">
      <router-link to="/" class="logo_link">
        <img src="/assets/logo_server.png" alt="NRGAME" class="logo_image" />
      </router-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 var(--space-10);
  position: relative;
}

// ===== LOGO =====
.navbar_logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;

  .logo_link {
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: var(--space-3);
    transition: all var(--transition-fast);

    &:hover {
      transform: scale(1.02);
    }
  }

  .logo_image {
    width: 90px;
    height: 90px;
    object-fit: contain;
  }
}
</style>
