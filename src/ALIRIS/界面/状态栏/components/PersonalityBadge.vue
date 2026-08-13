<template>
  <div class="badge">
    <i class="fa-solid fa-cat cat-icon"></i>
    <div class="names">
      <span class="name">{{ persona === 'Eris' ? '厄里丝' : '爱丽丝' }}</span>
      <span class="sub">{{ persona === 'Eris' ? '本小姐' : '你的女仆' }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ persona: 'Alice' | 'Eris' }>();
</script>

<style lang="scss" scoped>
.badge {
  display: flex;
  align-items: center;
  gap: 8px;
}

.cat-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--c-primary);
  color: var(--c-bg);
  font-size: 0.9rem;
  transition:
    background-color 0.6s ease,
    color 0.6s ease;
}

.names {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.name {
  font-weight: 700;
  font-size: 0.95rem;
  color: var(--c-text);
  transition: color 0.6s ease;
}

.sub {
  font-size: 0.7rem;
  color: var(--c-text-muted);
}
</style>
