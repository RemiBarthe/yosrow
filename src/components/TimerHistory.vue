<template>
  <div class="timer">
    <div class="recap">
      <h2 class="spartan-font text-lg">Today's recap</h2>
      <p class="spartan-font text-base">
        <span class="study">08:23 Studied</span> for 40 minutes
      </p>
      <p class="spartan-font text-base">
        <span class="rest">09:03 Rested</span> for 5 minutes
      </p>
      <p class="spartan-font text-base">
        <span class="study">09:08 Studied</span> for 30 minutes
      </p>
      <p class="spartan-font text-base">
        <span class="study">10:19 Studied</span> for 40 minutes
      </p>
      <p class="spartan-font text-base">
        <span class="rest">11:00 Rested</span> for 15 minutes
      </p>
      <p class="spartan-font text-base">
        <span class="study">11:15 Studied</span> for 1 hour
      </p>
    </div>

    <div class="total">
      <h2 class="spartan-font text-lg">Today's total</h2>
      <p class="spartan-font text-base">
        <span class="study">Studied</span> for 2 hours and 25 minutes
      </p>
      <p class="spartan-font text-base">
        <span class="rest">Rested</span> for 20 minutes
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TimerHistory'
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
