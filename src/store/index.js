import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    wthInfo: {
      df: {
        current: {
          dt: 1605677818,
          sunrise: 1605651315,
          sunset: 1605687611,
          temp: 292.48,
          feels_like: 293.12,
          pressure: 1016,
          humidity: 77,
          dew_point: 288.35,
          uvi: 2.85,
          clouds: 90,
          visibility: 10000,
          wind_speed: 1.5,
          wind_deg: 60,
          weather: [
            { id: 500, main: 'Rain', description: '실 비', icon: '10d' },
          ],
          rain: { '1h': 0.34 },
        },
        daily: {},
      },
    },
    locations: {
      df: {},
    },
  },
  mutations: {
    setWthInfo(state, payload) {
      state.wthInfo.df = payload;
    },
    setLocation(state, payload) {
      state.locations.df = payload;
    },
  },
  actions: {},
  modules: {},
});
