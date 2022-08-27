<template>
  <div class="header">
    <h1 class="spartan-font-bold text-xl">yosrow</h1>

    <button class="spartan-font text-base">
      <img alt="picto calendar" src="@/assets/images/calendar.svg" />Study
      history
    </button>
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
  color: $cornflower;
  user-select: none;

  h1 {
    margin: 0;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: $cornflower;
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
      background-color: $uranian;
    }
  }
}
</style>
