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
@import './assets/styles/global.scss';

#app {
  padding: 30px 5vw;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}
</style>
