<template>
  <v-card class="wth-card-add px-8 py-4">
    <div class="d-flex justify-space-between align-center">
      <div>
        <h2>{{ locationFst }}</h2>
        <span class="mr-2">{{ locationScd }}</span>
        <span>{{ locationThd }}</span>
      </div>
      <img :src="wthIcon" :alt="description" />
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'WthCardAdd',
  locationFst() {
    return this.locations.df.region1depth;
  },
  locationScd() {
    return this.locations.df.region2depth;
  },
  locationThd() {
    return this.locations.df.region3depth;
  },
  wthIcon() {
    return `http://openweathermap.org/img/wn/${this.wthInfo.df.weather[0].icon}@2x.png`;
  },
  description() {
    return this.wthInfo.df.weather[0].description;
  },
};
</script>

<style lang="scss" scoped>
.wth-card-add {
  background: #fff;
  color: #222;
  border-radius: 8px;
}
</style>
