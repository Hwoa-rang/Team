<template>
  <v-card class="wth-card-df px-8 py-4">
    <div class="d-flex justify-space-between align-center">
      <div>
        <h2>weather card default</h2>
        <span>{{ wthInfo.weather[0].description }}</span>
      </div>
      <img
        :src="
          `http://openweathermap.org/img/wn/${wthInfo.weather[0].icon}@2x.png`
        "
        alt=""
      />
    </div>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import APP_KEY from '@/config/APP_KEY.json';
export default {
  name: 'WthCardDf',
  computed: {
    ...mapState(['wthInfo']),
  },
  methods: {},
  beforeMount() {
    if (navigator.geolocation) {
      // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let latLon = {
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          };
          console.log(latLon);
          this.$http
            .get(
              `//api.openweathermap.org/data/2.5/weather?lat=${latLon.lat}&lon=${latLon.lon}&appid=${APP_KEY.openWth}&lang=kr`
            )
            .then((wthSrc) => {
              console.log(wthSrc.data);
              this.$store.commit('setWthInfo', wthSrc.data);
            });
        },
        (error) => {
          console.error(error);
        },
        {
          enableHighAccuracy: false,
          maximumAge: 0,
          timeout: Infinity,
        }
      );
    } else {
      alert('GPS를 지원하지 않습니다');
    }
  },
};
</script>

<style lang="scss" scoped>
.wth-card-df {
  background: #fff;
  color: #222;
  border-radius: 8px;
}
</style>
