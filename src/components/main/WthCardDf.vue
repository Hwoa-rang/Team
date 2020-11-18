<template>
  <v-card class="wth-card-df px-8 py-4">
    <div class="d-flex justify-space-between align-center">
      <div>
        <h2>{{ locationFst }}</h2>
        <span class="mr-2">{{ locationScd }}</span>
        <span>{{ locationThd }}</span>
      </div>
      <img :src="wthIcon" :alt="description" />
      <div>
        {{}}
      </div>
    </div>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import APP_KEY from '@/config/APP_KEY.json';
export default {
  name: 'WthCardDf',
  computed: {
    ...mapState(['wthInfo', 'locations']),
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
          this.$http
            .get(
              `//api.openweathermap.org/data/2.5/weather?lat=${latLon.lat}&lon=${latLon.lon}&appid=${APP_KEY.openWth}&lang=kr`
            )
            .then((wthSrc) => {
              this.$store.commit('setWthInfo', wthSrc.data);
            });
          this.$http
            .get(
              `//dapi.kakao.com/v2/local/geo/coord2address.json?x=${latLon.lon}&y=${latLon.lat}`,
              { headers: { Authorization: `KakaoAK ${APP_KEY.KAKAO}` } }
            )
            .then((locationSrc) => {
              this.$store.commit('setLocation', {
                region1depth:
                  locationSrc.data.documents[0].address.region_1depth_name,
                region2depth:
                  locationSrc.data.documents[0].address.region_2depth_name,
                region3depth:
                  locationSrc.data.documents[0].address.region_3depth_name,
              });
            });
          this.$http
            .get(
              `https://api.openweathermap.org/data/2.5/onecall?lat=${latLon.lat}&lon=${latLon.lon}&exclude=minutely&appid=${APP_KEY.openWth}&lang=kr`
            )
            .then((wthDays) => {
              console.log(wthDays.data);
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
