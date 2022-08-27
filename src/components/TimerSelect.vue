<template>
  <div class="timer-select">
    <button class="spartan-font text-lg blue-button">Study time</button>
    <button class="spartan-font text-lg red-button">Rest time</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TimerSelect'
});
</script>

<style lang="scss" scoped>
.timer-select {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  gap: 8px;
  user-select: none;
  button {
    width: 240px;
    text-align: center;
    cursor: pointer;
    background-color: transparent;
    border: none;
    padding: 15px 40px;
    border-radius: 50px;
    transition: border-color 0.15s ease-in-out;
    border: solid 3px white;
    color: $white;
    &.blue-button {
      background-color: $cornflower;
      &:hover {
        border-color: $uranian;
      }
    }
    &.red-button {
      background-color: $coral;
      &:hover {
        border-color: $melon;
      }
    }
  }
}
</style>
