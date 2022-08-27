<template>
  <div class="timer-container">
    <HeaderBar />

    <div class="timer-app">
      <TimerComponent />
      <TimerHistory />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderBar from '@/components/HeaderBar.vue';
import TimerComponent from '../components/TimerComponent.vue';
import TimerHistory from '../components/TimerHistory.vue';

export default defineComponent({
  name: 'TimerContainer',
  components: { HeaderBar, TimerComponent, TimerHistory }
});
</script>

<style lang="scss" scoped>
.timer-container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100%;
  .timer-app {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    flex-flow: row wrap;
    align-content: center;
    gap: 60px;
  }
}
</style>
