<template>
  <div class="timer-component">
    <h2 class="spartan-font text-lg">Study time</h2>

    <TimerCounter />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TimerCounter from './TimerCounter.vue';

export default defineComponent({
  name: 'TimerComponent',
  components: { TimerCounter }
});
</script>

<style lang="scss" scoped>
.timer-component {
  h2 {
    text-align: center;
    color: $cornflower;
  }
}
</style>
