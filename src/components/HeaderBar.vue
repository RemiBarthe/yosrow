<template>
  <div class="header">
    <h1 class="spartan-font-bold text-xl">yosrow</h1>

    <button>Study history</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderBar'
});
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: green;
  color: $cornflower;

  h1 {
    margin: 0;
  }
}
</style>
