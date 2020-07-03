<template>
  <div id="app">
    <clock />
    <countdown />
    <div class="fixed" style="left: 531px;top: 578px;">
      <img style="width: 120px;" src="./assets/dalao.png" alt="">
    </div>
    <div class="absolute">
      <img src="./assets/super_shiro.png" style="width: 145px;" alt="">
    </div>
    <div class="absolute" style="left: 645px;">
      <img src="./assets/rc.png" style="width: 600px;" alt="">
    </div>
    <div class="absolute" style="left: 1180px;">
      <img src="./assets/lc.png" style="width: 400px;" alt="">
    </div>
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
