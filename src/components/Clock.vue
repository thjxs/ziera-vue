<template>
  <div class="text-center text-white text-5xl">{{ clock }}</div>
</template>

<script>
import { getTime, reachMinTimeout } from '../utils';
export default {
  data: function() {
    return {
      clock: getTime(),
      clockTimer: null
    };
  },
  mounted: function() {
    setTimeout(() => {
      this.clock = getTime();
      this.clockTimer = setInterval(() => {
        this.clock = getTime();
      }, 1000 * 60);
    }, reachMinTimeout());
  },
  destroyed: function() {
    clearInterval(this.clockTimer);
  }
};
</script>
