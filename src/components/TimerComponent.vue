<template>
  <div class="timer"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TimerComponent'
});
</script>

<style lang="scss" scoped>
.timer {
  width: 400px;
  height: 400px;
  background-color: red;
}
</style>
