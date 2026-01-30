<script setup lang="ts">
import { Card } from "primevue";

interface Props {
  image: string;
  title: string;
  description: string;
}

defineProps<Props>();
</script>

<template>
  <Card class="custom-card">
    <template #header>
      <div class="custom-card_image">
        <img :src="image" :alt="title" />
        <div class="custom-card_overlay"></div>
      </div>
    </template>
    <template #title>
      <h3 class="custom-card_title">{{ title }}</h3>
    </template>
    <template #content>
      <p class="custom-card_description">{{ description }}</p>
    </template>
  </Card>
</template>

<style lang="scss" scoped>
.custom-card {
  position: relative;
  width: 100%;
  max-width: 350px;
  height: 400px;
  border-radius: var(--radius-lg);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  border: none;

  :deep(.p-card) {
    border-radius: var(--radius-lg);
  }

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);

    .custom-card_overlay {
      opacity: 0.8;
    }

    :deep(.p-card-body) {
      height: 80%;
    }

    .custom-card_description {
      -webkit-line-clamp: unset;
      overflow-y: auto;
    }
  }

  :deep(.p-card-header) {
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    z-index: 0;
  }

  :deep(.p-card-body) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30%;
    padding: var(--space-4);
    background: var(--color-primary-dark);
    backdrop-filter: blur(10px);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
    display: flex;
    flex-direction: column;
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
  }

  :deep(.p-card-title) {
    margin-bottom: var(--space-2);
    flex-shrink: 0;
  }

  :deep(.p-card-content) {
    padding: 0;
    flex: 1;
    overflow: hidden;
  }

  &_image {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }
  }

  &_overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
    opacity: 0.3;
    transition: opacity 0.3s ease;
  }

  &_title {
    font-size: var(--text-xl);
    font-weight: var(--weight-bold);
    color: var(--color-primary-light);
    margin: 0;
    transition: all 0.3s ease;
  }

  &_description {
    font-size: var(--text-sm);
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.6;
    margin: 0;
    transition: all 0.3s ease;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
