<template>
  <div class="timer-component">
    <TimerCounter v-if="false" :colors="colors" :timerType="timerType" />

    <TimerSelect />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TimerCounter from './TimerCounter.vue';
import TimerSelect from './TimerSelect.vue';

const STUDY = 'Study';
const REST = 'Rest';

export default defineComponent({
  name: 'TimerComponent',
  components: { TimerCounter, TimerSelect },
  data: () => ({
    timerType: STUDY as string,
    colors: { primary: '' as string, secondary: '' as string }
  }),
  created() {
    if (this.timerType === STUDY) {
      this.colors.primary = '#5C95FF';
      this.colors.secondary = '#B9E6FF';
    }

    if (this.timerType === REST) {
      this.colors.primary = '#F87575';
      this.colors.secondary = '#FFA9A3';
    }
  }
});
</script>

<style lang="scss" scoped>
.timer-component {
  h2 {
    text-align: center;
  }
}
</style>
