<template>
  <div class="timer">
    <div class="timer-information-update">
      <div class="timer-information">
        <p class="spartan-font text-xxl time">23:19</p>

        <!-- check si taille de l'écran en dessous de 420 alors on passe size a 300 -->
        <CircleProgress
          size="400"
          border-width="3"
          border-bg-width="3"
          percent="22"
          fill-color="#5C95FF"
          empty-color="#B9E6FF"
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
        class="blue-border"
        alt="play button"
        src="@/assets/images/play.svg"
      />
      <img
        class="red-border"
        alt="stop button"
        src="@/assets/images/stop.svg"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CircleProgress from 'vue3-circle-progress';

export default defineComponent({
  name: 'TimerCounter',
  components: { CircleProgress }
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
        color: $cornflower;
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
