<template>
  <div class="relative">
    <div class="absolute right-0 mr-1">
      <div class="hover w-4">
        <div id="together" class="absolute content opacity-0 w-4">
          <p>{{ together }}</p>
        </div>
      </div>
      <div class="hover w-4">
        <div id="meet" class="absolute content opacity-0 w-4">
          <p>{{ meet }}</p>
        </div>
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
const meetDate = new Date('2019-05-27T00:00:00');

export default {
  data: function() {
    return {
      countdown: getCountdown(targetDate),
      together: getCountdown(startDate),
      meet: getCountdown(meetDate),
      countdownTimer: null
    };
  },
  mounted: function() {
    this.countdownTimer = setInterval(() => {
      this.countdown = getCountdown(targetDate);
      this.together = getCountdown(startDate);
      this.meet = getCountdown(meetDate);
    }, 1000 * 60 * 60);
  },
  destroyed: function() {
    clearInterval(this.countdownTimer);
  }
};
</script>
