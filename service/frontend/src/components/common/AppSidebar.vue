<script setup lang="ts">
import { ref } from "vue";

import Icon from "../Icon.vue";
import { Drawer } from "primevue";
import { storeToRefs } from "pinia";
import { useViewport } from "../../composables/useViewport";

const viewportStore = useViewport();
const { isTablet, isMobile, isDesktop } = storeToRefs(viewportStore);

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const navItems = [
  {
    name: "Hướng dẫn",
    href: "/",
  },
  {
    name: "Diễn đàn",
    href: "/",
  },
  {
    name: "Luật lệ",
    href: "/",
  },
  {
    name: "Tải game",
    href: "/",
  },
];
</script>

<template>
  <nav class="navbar">
    <!-- Desktop -->
    <div v-if="isDesktop" class="desktop_menu">
      <div class="navbar_logo">
        <router-link to="/" class="navbar_logo_link">
          <img src="/assets/logo_server.png" alt="NRGAME" class="navbar_logo_image" />
        </router-link>
      </div>
      <div class="navbar_links">
        <router-link
          v-for="item in navItems"
          :key="item.name"
          :to="item.href"
          class="navbar_link"
          active-class="navbar_link--active"
        >
          <span class="navbar_text">{{ item.name }}</span>
        </router-link>
      </div>
      <div class="navbar_actions">
        <router-link to="/" class="navbar_actions_register">
          <Icon name="PhUser" weigh="fill" />
          <span>Đăng nhập</span>
        </router-link>
      </div>
    </div>

    <!-- Tablet -->
    <div v-if="isTablet" class="tablet_menu">
      <div class="navbar_logo">
        <router-link to="/" class="navbar_logo_link">
          <img src="/assets/logo_server.png" alt="NRGAME" class="navbar_logo_image" />
        </router-link>
      </div>
      <div class="navbar_menu">
        <div class="navbar_actions">
          <router-link to="/" class="navbar_actions_register">
            <Icon name="PhUser" weigh="fill" />
            <span>Đăng nhập</span>
          </router-link>
        </div>
        <Icon
          name="PhList"
          :size="32"
          color="var(--color-primary-light)"
          @click="toggleMenu"
        />
      </div>
      <Drawer
        v-model:visible="isMenuOpen"
        position="right"
        :showCloseIcon="false"
        :pt="{
          root: {
            style: 'background-color: white',
          },
        }"
      />
    </div>

    <!-- Tablet -->
    <div v-if="isMobile" class="mobile_menu">
      <div class="navbar_logo">
        <router-link to="/" class="navbar_logo_link">
          <img src="/assets/logo_server.png" alt="NRGAME" class="navbar_logo_image" />
        </router-link>
      </div>
      <div class="navbar_menu">
        <Icon
          name="PhList"
          :size="32"
          color="var(--color-primary-light)"
          @click="toggleMenu"
        />
      </div>
      <Drawer
        v-model:visible="isMenuOpen"
        position="right"
        :showCloseIcon="false"
        :pt="{
          root: {
            style: 'background-color: var(--color-primary)',
          },
        }"
      />
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

  // ===== LOGO =====
  &_logo {
    display: flex;
    align-items: center;
    flex-shrink: 0;

    &_link {
      display: flex;
      align-items: center;
      text-decoration: none;
      gap: var(--space-3);
      transition: all var(--transition-fast);

      &:hover {
        transform: scale(1.02);
      }
    }

    &_image {
      width: 90px;
      height: 90px;
      object-fit: contain;
    }
  }
}

// ===== DESKTOP MENU =====
.desktop_menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  margin-left: var(--space-8);

  .navbar_links {
    display: flex;
    align-items: center;
    gap: var(--space-6);
  }

  .navbar_link {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    padding: var(--space-2) var(--space-3);
    text-decoration: none;
    font-weight: var(--weight-medium);
    font-size: var(--text-sm);
    transition: all var(--transition-fast);
    position: relative;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    &:hover {
      color: var(--color-primary-light);
      transform: translateY(-1px);
    }

    &--active {
      color: var(--color-primary-light);
    }

    .navbar_text {
      font-size: var(--text-sm);
    }
  }

  .navbar_actions {
    margin-left: var(--space-6);

    &_register {
      display: flex;
      gap: var(--space-2);
      align-items: center;
      color: var(--color-secondary-light);
      padding: var(--space-1) var(--space-3);
      text-decoration: none;
      font-size: var(--text-base);
      font-weight: var(--weight-semibold);
      letter-spacing: 0.5px;
    }
  }
}

// ===== TABLET MENU ====
.tablet_menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  margin-left: var(--space-6);

  .navbar_menu {
    display: flex;
    flex-direction: row;
    gap: var(--space-4);

    .navbar_actions {
      margin-left: var(--space-6);

      &_register {
        display: flex;
        gap: var(--space-2);
        align-items: center;
        color: var(--color-secondary-light);
        padding: var(--space-1) var(--space-3);
        text-decoration: none;
        font-size: var(--text-base);
        font-weight: var(--weight-semibold);
        letter-spacing: 0.5px;
      }
    }
  }
}

// ===== MOBILE MENU ====
.mobile_menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;

  .navbar_menu {
    display: flex;
    flex-direction: row;
    gap: var(--space-4);

    .navbar_actions {
      margin-left: var(--space-6);

      &_register {
        display: flex;
        gap: var(--space-2);
        align-items: center;
        color: var(--color-secondary-light);
        padding: var(--space-1) var(--space-3);
        text-decoration: none;
        font-size: var(--text-base);
        font-weight: var(--weight-semibold);
        letter-spacing: 0.5px;
      }
    }
  }
}
</style>
