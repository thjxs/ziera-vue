<template>
  <div id="app">
    <clock />
    <countdown />
  </div>
</template>

<script>
import Clock from './components/Clock.vue';
import Countdown from './components/Countdown.vue';

export default {
  name: 'App',
  components: {
    Clock,
    Countdown
  }
};
</script>
