<template>
  <HeaderBar />

  <div class="timer-app">
    <TimerComponent />
    <TimerHistory />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderBar from '@/components/HeaderBar.vue';
import TimerComponent from '../components/TimerComponent.vue';
import TimerHistory from '../components/TimerHistory.vue';

export default defineComponent({
  name: 'TimerContainer',
  components: { HeaderBar, TimerComponent, TimerHistory },
  data: () => ({
    timer: 0
  }),
  mounted() {
    setInterval(() => {
      this.timer++;
    }, 1000);
  }
});
</script>

<style lang="scss" scoped>
.timer-app {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  align-content: center;
}
</style>
