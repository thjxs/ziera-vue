<template>
  <div id="app">
    <clock />
    <countdown />
    <drawer style="right: 223px; top: 120px;">
      <img src="./assets/dog_t.png" alt="" srcset="">
    </drawer>
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
    <div class="absolute" style="left: 210px;top: 353px;">
      <img style="width: 260px;" src="./assets/back.png" alt="">
    </div>
  </div>
</template>

<script>
import Clock from './components/Clock.vue';
import Countdown from './components/Countdown.vue';
import Drawer from './components/Drawer.vue'

export default {
  name: 'App',
  components: {
    Clock,
    Countdown,
    Drawer
  }
};
</script>
