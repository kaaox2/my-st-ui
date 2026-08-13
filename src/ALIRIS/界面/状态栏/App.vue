<template>
  <div class="status-card" :data-persona="persona" @click="expanded = !expanded">
    <div v-if="spreading" class="spread" :class="spreadDir" @animationend="spreading = false"></div>

    <header class="titlebar">
      <PersonalityBadge :persona="persona" />
      <AffectionHearts />
      <div class="region">
        <i class="fa-solid fa-location-dot"></i>
        <span>{{ store.data.系统.当前区域 }}</span>
      </div>
      <i class="fa-solid chevron" :class="expanded ? 'fa-chevron-up' : 'fa-chevron-down'"></i>
    </header>

    <section v-show="expanded" class="detail">
      <SystemSection />
      <AliceSection :persona="persona" />
      <HeroSection />
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useDataStore } from './store';
import PersonalityBadge from './components/PersonalityBadge.vue';
import AffectionHearts from './components/AffectionHearts.vue';
import SystemSection from './components/SystemSection.vue';
import AliceSection from './components/AliceSection.vue';
import HeroSection from './components/HeroSection.vue';

const store = useDataStore();
const expanded = ref(false);
const spreading = ref(false);
const spreadDir = ref<'to-eris' | 'to-alice'>('to-eris');

const persona = computed(() => (store.data.爱丽丝.当前人格 === 'Eris' ? 'Eris' : 'Alice'));

watch(persona, (nv, ov) => {
  if (nv !== ov) {
    spreadDir.value = nv === 'Eris' ? 'to-eris' : 'to-alice';
    spreading.value = true;
  }
});
</script>

<style lang="scss" scoped>
.status-card {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  background-color: var(--c-bg);
  border: 1.5px solid var(--c-border);
  border-radius: 14px;
  color: var(--c-text);
  font-size: 13px;
  line-height: 1.4;
  transition:
    background-color 0.6s ease,
    border-color 0.6s ease,
    color 0.6s ease;
  cursor: pointer;
  user-select: none;
}

.spread {
  position: absolute;
  inset: 0;
  z-index: 10;
  pointer-events: none;
  background: linear-gradient(90deg, transparent 0%, var(--c-sweep) 55%, var(--c-sweep) 100%);
  background-size: 220% 100%;
}

.spread.to-eris {
  background-position: 100% 0%;
  animation: sweep-eris 0.7s ease forwards;
}

.spread.to-alice {
  background-position: 0% 0%;
  animation: sweep-alice 0.7s ease forwards;
}

@keyframes sweep-eris {
  from {
    background-position: -120% 0%;
  }

  to {
    background-position: 100% 0%;
  }
}

@keyframes sweep-alice {
  from {
    background-position: 220% 0%;
  }

  to {
    background-position: 0% 0%;
  }
}

.titlebar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
}

.region {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-left: auto;
  color: var(--c-text-muted);
  font-size: 0.8rem;
  white-space: nowrap;
}

.chevron {
  color: var(--c-text-muted);
  font-size: 0.75rem;
  transition: transform 0.3s ease;
}

.detail {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0 12px 12px;
}
</style>
