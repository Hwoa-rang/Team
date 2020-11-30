<template>
  <div class="wth-card-df">
    <div class="d-flex justify-center align-top py-10">
      <div
        class="current-wth d-flex align-center pr-12 mr-12"
        style="z-index:1;"
      >
        <div class="wth-desc-wrap mr-12">
          <div class="day-of-week mb-4">
            <span>오늘 - {{ dayOfWeek }}요일</span>
          </div>
          <div class="wth-desc mb-4">
            <h2 class="title">{{ locationFst }} {{ locationScd }}</h2>
            <span class="txt">{{ locationThd }}</span>
          </div>
          <div class="wth-temp mb-n2">{{ wthTemp }}ºC</div>
          <div class="wth-prec-prob d-flex align-center">
            <img class="ico" src="@/assets/umbrella.png" alt="강수확률" />
            <span class="txt">{{ wthPrecProb }}%</span>
          </div>
        </div>
        <div class="wth-img d-flex justify-center align-center pa-12">
          <img class="ico" :src="wthIcon" :alt="description" />
          <div class="wth-img-arc"></div>
        </div>
      </div>
      <div class="daily-wth" v-for="(item, i) in dailyWth" :key="i">
        <Daily class="mr-10" :wthInfo="item"></Daily>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import APP_KEY from '@/config/APP_KEY.json';
export default {
  name: 'WthCardDf',
  computed: {
    ...mapState(['wthInfo', 'locations']),
    dayOfWeek() {
      let week = ['일', '월', '화', '수', '목', '금', '토'];
      return week[new Date().getDay()];
    },
    locationFst() {
      return this.locations.df.region1depth;
    },
    locationScd() {
      return this.locations.df.region2depth;
    },
    locationThd() {
      return this.locations.df.region3depth;
    },
    wthTemp() {
      return this.wthInfo.df.current.temp;
    },
    wthPrecProb() {
      return this.wthInfo.df.daily[0].pop * 100;
    },
    wthIcon() {
      return `http://openweathermap.org/img/wn/${this.wthInfo.df.current.weather[0].icon}@2x.png`;
    },
    description() {
      return this.wthInfo.df.current.weather[0].description;
    },
    dailyWth() {
      let wthInfo = this.wthInfo.df.daily;
      return wthInfo.splice(1);
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {},
  components: {
    Daily: () => import('@/components/main/WthCardDf/Daily.vue'),
  },
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
              `https://api.openweathermap.org/data/2.5/onecall?lat=${latLon.lat}&lon=${latLon.lon}&exclude=hourly,minutely&units=metric&appid=${APP_KEY.openWth}&lang=kr`
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
  background: rgba($color: #000, $alpha: 0.2);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  .current-wth {
    border-right: 1px solid rgba($color: #fff, $alpha: 0.2);
    .wth-desc-wrap {
      .day-of-week {
        display: inline-block;
        padding: 2px 14px 1px;
        font-weight: bold;
        background: #ffa21c;
        border-radius: 24px;
      }
      .wth-desc {
        .title {
          font-size: 1.5rem;
          font-weight: bold;
        }
        .txt {
          font-size: 1rem;
        }
      }
      .wth-temp {
        font-size: 2.5rem;
      }
      .wth-prec-prob {
        .txt {
          padding: 2px 0 0 6px;
          font-size: 1rem;
        }
      }
    }
    .wth-img {
      position: relative;
      overflow: hidden;
      background: rgba($color: #000, $alpha: 0.6);
      border-radius: 50%;
      .ico {
      }
      .wth-img-arc {
        position: absolute;
        width: 150%;
        height: 100%;
        top: 50%;
        z-index: -1;
        border-radius: 50%;
        background: #000;
      }
    }
  }
  .daily-wth {
  }
}
</style>
