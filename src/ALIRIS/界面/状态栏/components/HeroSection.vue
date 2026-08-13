<template>
  <div class="section">
    <div class="section-head"><i class="fa-solid fa-user"></i>主角</div>
    <div class="grid">
      <div class="cell">
        <span class="label">金钱</span>
        <span class="value">
          <span v-if="store.data.主角.金钱.金币" class="coin">{{ store.data.主角.金钱.金币 }} 金币</span>
          <span v-if="store.data.主角.金钱.银币" class="coin">{{ store.data.主角.金钱.银币 }} 银币</span>
          <span v-if="store.data.主角.金钱.铜币" class="coin">{{ store.data.主角.金钱.铜币 }} 铜币</span>
          <span v-if="!store.data.主角.金钱.金币 && !store.data.主角.金钱.银币 && !store.data.主角.金钱.铜币" class="empty">身无分文</span>
        </span>
      </div>
      <div class="cell">
        <span class="label">体力</span>
        <span class="value">
          <span class="bar-bg"><span class="bar" :style="{ width: store.data.主角.体力 + '%' }"></span></span>
          {{ store.data.主角.体力 }}
        </span>
      </div>
      <div class="cell">
        <span class="label">冒险者等级</span>
        <span class="value">{{ store.data.主角.冒险者等级 }}</span>
      </div>
      <div class="cell">
        <span class="label">房产</span>
        <span class="value">{{ store.data.主角.房产 }}</span>
      </div>
      <div class="cell wide">
        <span class="label">装备物资</span>
        <div v-if="_.isEmpty(store.data.主角.装备物资)" class="empty">暂无物资</div>
        <div v-else class="items">
          <span v-for="(count, name) in store.data.主角.装备物资" :key="name" class="item">
            {{ name }} × {{ count }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import _ from 'lodash';
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
  grid-template-columns: repeat(2, 1fr);
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
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.6s ease;
}

.bar-bg {
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background: var(--c-border);
  overflow: hidden;
  max-width: 90px;
}

.bar {
  display: block;
  height: 100%;
  border-radius: 3px;
  background: var(--c-primary);
  transition: width 0.4s ease;
}

.empty {
  font-size: 0.78rem;
  color: var(--c-text-muted);
}

.coin {
  white-space: nowrap;
}

.items {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.item {
  font-size: 0.78rem;
  color: var(--c-text);
  background: var(--c-bg);
  border: 1px solid var(--c-border);
  border-radius: 6px;
  padding: 2px 7px;
  transition:
    background-color 0.6s ease,
    border-color 0.6s ease,
    color 0.6s ease;
}
</style>
