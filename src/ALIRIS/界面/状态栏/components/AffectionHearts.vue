<template>
  <div class="hearts">
    <div class="heart-box">
      <i class="fa-solid fa-heart heart alice-heart"></i>
      <div class="heart-info">
        <span class="heart-name">Alice</span>
        <span class="heart-val">{{ store.data.爱丽丝.Alice人格好感度 }}</span>
      </div>
    </div>
    <div class="heart-box">
      <i class="fa-solid fa-heart heart eris-heart"></i>
      <div class="heart-info">
        <span class="heart-name">Eris</span>
        <span class="heart-val">{{ store.data.爱丽丝.Eris人格好感度 }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();
</script>

<style lang="scss" scoped>
.hearts {
  display: flex;
  gap: 12px;
}

.heart-box {
  display: flex;
  align-items: center;
  gap: 5px;
}

.heart {
  font-size: 0.85rem;
}

.alice-heart {
  color: var(--c-heart-alice);
  transition: color 0.6s ease;
}

.eris-heart {
  color: var(--c-heart-eris);
  transition: color 0.6s ease;
}

.heart-info {
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.heart-name {
  font-size: 0.68rem;
  color: var(--c-text-muted);
}

.heart-val {
  font-weight: 700;
  font-size: 0.9rem;
  color: var(--c-text);
  transition: color 0.6s ease;
}
</style>
