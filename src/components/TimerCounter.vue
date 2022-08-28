<template>
  <div class="timer">
    <div class="back-button">
      <button class="spartan-font text-base" @click="returnToSelection">
        <img alt="picto back" src="@/assets/images/back.svg" />Return to
        selection history
      </button>
    </div>
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
        <img
          class="blue-border img-button"
          alt="up button"
          src="@/assets/images/up.svg"
          @click="increaseTime(300)"
        />
        <img
          class="red-border img-button"
          alt="down button"
          src="@/assets/images/down.svg"
          @click="decreaseTime(300)"
        />
      </div>
    </div>

    <div
      class="suggested-time"
      :class="[timerType === 'study' ? 'blue' : 'red']"
      v-if="durationIsOver"
    >
      <p class="spartan-font text-base">Suggested time</p>
      <div class="buttons">
        <button class="spartan-font text-base" @click="increaseTime(3600)">
          60:00
        </button>
        <button class="spartan-font text-base" @click="increaseTime(2400)">
          40:00
        </button>
        <button class="spartan-font text-base" @click="increaseTime(1800)">
          30:00
        </button>
        <button class="spartan-font text-base" @click="increaseTime(1200)">
          20:00
        </button>
      </div>
    </div>

    <div class="timer-action">
      <img
        v-if="isPlaying"
        class="blue-border img-button"
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
        class="blue-border img-button"
        alt="play button"
        src="@/assets/images/play.svg"
        @click="startTimer"
      />

      <img
        class="red-border img-button"
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
import moment from 'moment';
import { useHistoryStore } from '@/stores/history';
import { mapStores } from 'pinia';
import { Recap } from '@/types/historyTypes';

export default defineComponent({
  name: 'TimerCounter',
  components: { CircleProgress },
  props: {
    colors: { type: Object, required: true },
    timerType: { type: String, required: true }
  },
  data: () => ({
    windowWidth: window.innerWidth as number,
    duration: 0 as number,
    durationLeft: 0 as number,
    timerInterval: 0 as number,
    isPlaying: false as boolean
  }),
  computed: {
    ...mapStores(useHistoryStore),
    circleSize(): number {
      return this.windowWidth < 500 ? 250 : 400;
    },
    percentLeft(): number {
      return (this.durationLeft / this.duration) * 100;
    },
    formattedDurationLeft(): string {
      const formattedSeconds = moment.utc(this.durationLeft * 1000);

      if (this.durationLeft >= 3600) return formattedSeconds.format('HH:mm:ss');

      return formattedSeconds.format('mm:ss');
    },
    durationIsOver(): boolean {
      return this.durationLeft <= 0;
    }
  },
  methods: {
    startTimer() {
      if (this.durationIsOver) return false;

      clearInterval(this.timerInterval);
      this.isPlaying = true;

      this.timerInterval = setInterval(() => {
        this.durationLeft--;
        // envoyer un son !
        if (this.durationIsOver) this.endTimer();
      }, 1000);
    },
    pauseTimer() {
      clearInterval(this.timerInterval);
      this.isPlaying = false;
    },
    endTimer() {
      clearInterval(this.timerInterval);

      const duration = this.duration - this.durationLeft;

      this.duration = 0;
      this.durationLeft = 0;
      this.isPlaying = false;

      if (duration < 60) return false;

      this.saveRecap(duration);
      this.saveTotal(duration);
    },
    increaseTime(value: number) {
      this.duration += value;
      this.durationLeft += value;
    },
    decreaseTime(value: number) {
      this.duration -= value;
      this.durationLeft -= value;

      if (this.durationIsOver) this.endTimer();
    },
    saveRecap(duration) {
      const recap = {
        at: new Date(),
        for: duration,
        type: this.timerType
      } as Recap;

      this.historyStore.addRecap(recap);
    },
    saveTotal(duration) {
      this.historyStore.addToTotal(duration, this.timerType);
    },
    returnToSelection() {
      this.endTimer();
      this.$emit('selectedType', '');
    }
  }
});
</script>

<style lang="scss" scoped>
.timer {
  .back-button {
    width: 100%;
    button {
      cursor: pointer;
      background-color: transparent;
      border: none;
      color: $taupe;
      display: flex;
      align-items: center;
      padding: 10px 15px;
      border-radius: 50px;
      transition: 0.15s ease-in-out;

      img {
        width: 20px;
        margin-right: 8px;
      }

      &:hover {
        background-color: #eee;
      }
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  h2 {
    margin-top: 0;
    &::first-letter {
      text-transform: capitalize;
    }
  }
  img.img-button {
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
  .suggested-time {
    &.blue {
      p {
        color: $cornflower;
      }
      button {
        background-color: $cornflower;
        &:hover {
          border-color: $uranian;
        }
      }
    }
    &.red {
      p {
        color: $coral;
      }
      button {
        background-color: $coral;
        &:hover {
          border-color: $melon;
        }
      }
    }
    .buttons {
      display: flex;
      gap: 2px;
      button {
        text-align: center;
        cursor: pointer;
        border: none;
        padding: 10px 15px;
        border-radius: 50px;
        transition: border-color 0.15s ease-in-out;
        border: solid 3px white;
        color: $white;
      }
    }
  }
  .timer-action {
    display: flex;
    align-items: center;
    gap: 20px;
  }
}
</style>
