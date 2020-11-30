<template>
  <div class="daily d-flex flex-column align-center">
    <div class="day-of-week">{{ dayDate }} {{ dayOfWeek }}</div>
    <div class="wth-img d-flex justify-center align-center">
      <img class="ico" :src="wthIcon" :alt="description" />
    </div>
    <div class="wth-temp">{{ wthTemp }}ºC</div>
    <div class="wth-prec-prob d-flex align-center">
      <img class="ico" src="@/assets/umbrella.png" alt="강수확률" />
      <span class="txt">{{ wthPrecProb }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Daily',
  props: ['wthInfo'],
  computed: {
    dayDate() {
      const unixTimestamp = this.wthInfo.dt * 1000;
      const month = new Date(unixTimestamp).getMonth();
      const date = new Date(unixTimestamp).getDate();
      return `${month + 1}-${date}`;
    },
    dayOfWeek() {
      let week = ['일', '월', '화', '수', '목', '금', '토'];
      const unixTimestamp = this.wthInfo.dt * 1000;
      const dateObject = new Date(unixTimestamp).getDay();
      return week[dateObject];
    },
    wthIcon() {
      return `http://openweathermap.org/img/wn/${this.wthInfo.weather[0].icon}@2x.png`;
    },
    description() {
      return this.wthInfo.weather[0].description;
    },
    wthTemp() {
      return this.wthInfo.temp.morn;
    },
    wthPrecProb() {
      return this.wthInfo.pop * 100;
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.daily {
  .day-of-week {
    display: inline-block;
    padding: 2px 14px 1px;
    font-weight: bold;
    background: #ffa21c;
    border-radius: 24px;
  }
  .wth-img {
    width: 20%;
    .ico {
    }
  }
  .wth-temp {
    font-size: 1.2rem;
  }
  .wth-prec-prob {
    .txt {
      padding: 2px 0 0 6px;
      font-size: 1rem;
    }
  }
}
</style>
