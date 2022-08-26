<template>
  <div class="hello">
    <h1>Hello</h1>
    <p>{{ timer }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TimerContainer',
  data: () => ({
    timer: 0
  }),
  mounted() {
    setInterval(() => {
      this.timer++;
    }, 1000);
  }
});
</script>

<style lang="scss" scoped></style>
