<template>
  <div class="timer-container">
    <HeaderBar />

    <DailyMessage v-if="!historyStore.messageRead" />

    <div class="timer-app">
      <TimerComponent />
      <TimerHistory />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderBar from '@/components/HeaderBar.vue';
import DailyMessage from '@/components/DailyMessage.vue';
import TimerComponent from '@/components/TimerComponent.vue';
import TimerHistory from '@/components/TimerHistory.vue';
import { useHistoryStore } from '@/stores/history';
import { mapStores } from 'pinia';
import moment from 'moment';

export default defineComponent({
  name: 'TimerContainer',
  components: { HeaderBar, TimerComponent, TimerHistory, DailyMessage },
  mounted() {
    if (this.historyStore.getTodayDate !== this.todayDate) {
      this.historyStore.setTodayDate(this.todayDate);
      this.historyStore.clearRecap();
      this.historyStore.clearTotal();
      this.historyStore.setMessageRead(false);
    }
  },
  computed: {
    ...mapStores(useHistoryStore),
    todayDate(): string {
      return moment(new Date()).format('DD/MM/YY');
    }
  }
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
