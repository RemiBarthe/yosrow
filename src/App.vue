<template>
  <TimerContainer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TimerContainer from './containers/TimerContainer.vue';

export default defineComponent({
  name: 'App',
  components: {
    TimerContainer
  }
});
</script>

<style lang="scss">
#app {
  background-color: lightblue;
}
</style>
