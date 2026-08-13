<template>
  <div class="section">
    <div class="section-head"><i class="fa-solid fa-paw"></i>爱丽丝</div>
    <div class="grid">
      <div class="cell">
        <span class="label">当前人格</span>
        <span class="value persona-name" :class="{ eris: persona === 'Eris' }">
          {{ persona === 'Eris' ? '厄里丝' : '爱丽丝' }}
        </span>
      </div>
      <div class="cell">
        <span class="label">冒险者等级</span>
        <span class="value">{{ store.data.爱丽丝.冒险者等级 }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

defineProps<{ persona: 'Alice' | 'Eris' }>();

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
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
}

.cell {
  display: flex;
  flex-direction: column;
  gap: 2px;
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

.persona-name.eris {
  color: var(--c-accent);
}
</style>
