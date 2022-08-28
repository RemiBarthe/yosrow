<template>
  <div class="timer">
    <div class="recap">
      <h2 class="spartan-font text-lg">Today's recap</h2>
      <p
        class="spartan-font text-base"
        v-for="(recap, index) in historyStore.recaps"
        :key="index"
      >
        <span :class="recap.type"
          >{{ formatDate(recap.at) }}
          {{ recap.type === ('study' as string) ? 'Studied' : 'Rested' }}</span
        >
        for
        {{ formatDuration(recap.for) }}
      </p>

      <p v-if="!historyStore.recaps[0]" class="spartan-font text-base">
        Let's get started
      </p>
    </div>

    <div class="total">
      <h2 class="spartan-font text-lg">Today's total</h2>
      <p v-if="historyStore.total.study" class="spartan-font text-base">
        <span class="study">Studied</span> for
        {{ formatDuration(historyStore.total.study) }}
      </p>
      <p v-else class="spartan-font text-base">You should work you know ?</p>

      <p v-if="historyStore.total.rest" class="spartan-font text-base">
        <span class="rest">Rested</span> for
        {{ formatDuration(historyStore.total.rest) }}
      </p>
      <p v-else class="spartan-font text-base">You may need a break !</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useHistoryStore } from '@/stores/history';
import { mapStores } from 'pinia';
import moment from 'moment';

export default defineComponent({
  name: 'TimerHistory',
  computed: {
    ...mapStores(useHistoryStore)
  },
  methods: {
    formatDuration(seconds: number): string {
      const formattedSeconds = moment.utc(seconds * 1000);
      let formattedTime = '';
      if (seconds < 3600)
        formattedTime = formattedSeconds.format('m [minutes]');
      if (seconds >= 3600 && seconds < 7200)
        formattedTime = formattedSeconds.format('H [hour] m [minutes]');
      if (seconds >= 7200)
        formattedTime = formattedSeconds.format('H [hours] m [minutes]');
      formattedTime = formattedTime.split(' 0 minutes')[0];
      return formattedTime;
    },
    formatDate(date: Date) {
      return moment(date).format('HH:mm');
    }
  }
});
</script>

<style lang="scss" scoped>
.timer {
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: $taupe;
  .study {
    color: $cornflower;
  }
  .rest {
    color: $melon;
  }
}
</style>
