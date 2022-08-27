<template>
  <div class="timer">
    <h2 class="spartan-font text-lg" :style="{ color: colors.primary }">
      {{ timerType }} time
    </h2>
    <div class="timer-information-update">
      <div class="timer-information">
        <p
          class="spartan-font text-xxl time"
          :style="{ color: colors.primary }"
        >
          {{ formattedDurationLeft }}
        </p>

        <CircleProgress
          :size="circleSize"
          :border-width="6"
          :border-bg-width="2"
          :percent="percentLeft"
          :fill-color="colors.primary"
          :empty-color="colors.secondary"
          :transition="1000"
        />
      </div>

      <div class="timer-update">
        <img class="blue-border" alt="up button" src="@/assets/images/up.svg" />
        <img
          class="red-border"
          alt="down button"
          src="@/assets/images/down.svg"
        />
      </div>
    </div>

    <div class="timer-action">
      <img
        v-if="isPlaying"
        class="blue-border"
        alt="pause button"
        src="@/assets/images/pause.svg"
        @click="pauseTimer"
      />

      <img
        v-else
        :style="[
          durationLeft > 0
            ? { opacity: 1, cursor: 'pointer' }
            : { opacity: 0.5, cursor: 'not-allowed' }
        ]"
        class="blue-border"
        alt="play button"
        src="@/assets/images/play.svg"
        @click="startTimer"
      />

      <img
        class="red-border"
        alt="stop button"
        src="@/assets/images/stop.svg"
        @click="endTimer"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CircleProgress from 'vue3-circle-progress';

export default defineComponent({
  name: 'TimerCounter',
  components: { CircleProgress },
  props: {
    colors: { type: Object, required: true },
    timerType: { type: String, required: true }
  },
  data: () => ({
    windowWidth: window.innerWidth as number,
    selectedDuration: 4 as number,
    durationLeft: 4 as number,
    timerInterval: 0 as number,
    isPlaying: false as boolean
  }),
  computed: {
    circleSize(): number {
      return this.windowWidth < 500 ? 250 : 400;
    },
    percentLeft(): number {
      return (this.durationLeft / this.selectedDuration) * 100;
    },
    formattedDurationLeft(): string {
      const date = new Date(0);
      date.setSeconds(this.durationLeft);
      if (this.durationLeft >= 3600)
        return date.toISOString().substring(11, 19);
      else return date.toISOString().substring(14, 19);
    }
  },
  methods: {
    startTimer() {
      if (this.durationLeft <= 0) return false;

      clearInterval(this.timerInterval);
      this.isPlaying = true;

      this.timerInterval = setInterval(() => {
        this.durationLeft--;

        if (this.durationLeft <= 0) this.endTimer();
      }, 1000);
    },
    pauseTimer() {
      clearInterval(this.timerInterval);
      this.isPlaying = false;
    },
    endTimer() {
      clearInterval(this.timerInterval);
      this.durationLeft = 0;
      this.isPlaying = false;
    }
  }
});
</script>

<style lang="scss" scoped>
.timer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  img {
    width: 60px;
    border-radius: 60px;
    -webkit-user-drag: none;
    transition: border-color 0.15s ease-in-out;
    border: solid 3px transparent;
    cursor: pointer;
    &.blue-border:hover {
      border-color: $uranian;
    }
    &.red-border:hover {
      border-color: $melon;
    }
  }
  .timer-information-update {
    display: flex;
    align-items: center;
    gap: 20px;
    .timer-information {
      display: flex;
      justify-content: center;
      align-items: center;
      .time {
        position: absolute;
        margin: 0;
      }
    }
    .timer-update {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  }
  .timer-action {
    display: flex;
    align-items: center;
    gap: 20px;
  }
}
</style>
