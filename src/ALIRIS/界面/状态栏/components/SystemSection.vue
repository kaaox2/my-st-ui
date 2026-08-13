<template>
  <div class="section">
    <div class="section-head"><i class="fa-solid fa-compass"></i>系统</div>
    <div class="grid">
      <div class="cell">
        <span class="label">日期季节</span>
        <span class="value">{{ store.data.系统.日期季节 }}</span>
      </div>
      <div class="cell">
        <span class="label">时段</span>
        <span class="value">{{ store.data.系统.时段 }}</span>
      </div>
      <div class="cell">
        <span class="label">天气</span>
        <span class="value">{{ store.data.系统.天气 }}</span>
      </div>
      <div class="cell wide">
        <span class="label">剧情进度</span>
        <span class="value">{{ store.data.系统.剧情进度 }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();
</script>

<style lang="scss" scoped>
.section {
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: 10px;
  padding: 10px;
  transition:
    background-color 0.6s ease,
    border-color 0.6s ease;
}

.section-head {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--c-primary);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.6s ease;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
}

.cell {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.cell.wide {
  grid-column: 1 / -1;
}

.label {
  font-size: 0.68rem;
  color: var(--c-text-muted);
}

.value {
  font-size: 0.82rem;
  color: var(--c-text);
  transition: color 0.6s ease;
}
</style>
