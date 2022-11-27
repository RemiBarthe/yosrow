<template>
  <div class="daily-message">
    <div class="text-lg spartan-font close-button" @click="closeDailyMessage">
      x
    </div>
    <h2 class="text-lg spartan-font">Daily Message</h2>
    <p class="text-base spartan-font">{{ dailyMessage }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useHistoryStore } from '@/stores/history';
import { mapStores } from 'pinia';
import dailyMessages from '@/assets/data/dailyMessages';

export default defineComponent({
  name: 'DailyMessage',
  data: () => ({
    dailyMessages: dailyMessages
  }),
  computed: {
    ...mapStores(useHistoryStore),
    dailyMessage() {
      return dailyMessages[this.historyStore.getTodayDate];
    }
  },
  methods: {
    closeDailyMessage() {
      this.historyStore.setMessageRead(true);
    }
  }
});
</script>

<style lang="scss" scoped>
.daily-message {
  padding: 20px;
  background-color: $uranian;
  border-radius: 10px;
  color: #444;
  position: relative;

  .close-button {
    position: absolute;
    right: 10px;
    top: 10px;
    cursor: pointer;
    padding: 10px;
  }
}
</style>
