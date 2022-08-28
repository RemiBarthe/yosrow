<template>
  <div class="timer-component">
    <TimerCounter
      v-if="timerType"
      :colors="typeColors"
      :timerType="timerType"
    />

    <TimerSelect v-else @selectedType="selectType" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TimerCounter from './TimerCounter.vue';
import TimerSelect from './TimerSelect.vue';

const STUDY = 'study';
const REST = 'rest';

type colorsType = { primary: string; secondary: string };
type timerType = '' | 'study' | 'rest';

export default defineComponent({
  name: 'TimerComponent',
  components: { TimerCounter, TimerSelect },
  data: () => ({
    timerType: '' as timerType
  }),
  computed: {
    typeColors(): colorsType {
      let colors = {} as colorsType;

      if (this.timerType === STUDY)
        colors = { primary: '#5C95FF', secondary: '#B9E6FF' };

      if (this.timerType === REST)
        colors = { primary: '#F87575', secondary: '#FFA9A3' };

      return colors;
    }
  },
  methods: {
    selectType(type: timerType) {
      this.timerType = type;
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
