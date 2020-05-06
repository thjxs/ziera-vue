<template>
  <div class="relative">
    <div class="hover absolute">
      <div id="together" class="absolute">
        <p>{{ together }}</p>
      </div>
    </div>
    <div class="text-center text-white text-5xl">Goto</div>
    <div class="text-center text-white text-2xl">{{ countdown }}</div>
  </div>
</template>

<script>
import { getCountdown } from '../utils';
const targetDate = new Date('2020-06-20T00:00:00');
const startDate = new Date('2019-09-06T00:00:00');

export default {
  data: function() {
    return {
      countdown: getCountdown(targetDate),
      together: getCountdown(startDate),
      countdownTimer: null
    };
  },
  mounted: function() {
    this.countdownTimer = setInterval(() => {
      this.countdown = getCountdown(targetDate);
      this.together = getCountdown(startDate);
    }, 1000 * 60 * 60);
  },
  destroyed: function() {
    clearInterval(this.countdownTimer);
  }
};
</script>
