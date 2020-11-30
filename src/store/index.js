import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    wthInfo: {
      df: {
        current: {
          dt: undefined,
          sunrise: undefined,
          sunset: undefined,
          temp: undefined,
          feels_like: undefined,
          pressure: undefined,
          humidity: undefined,
          dew_point: undefined,
          uvi: undefined,
          clouds: undefined,
          visibility: undefined,
          wind_speed: undefined,
          wind_deg: undefined,
          weather: [
            {
              id: undefined,
              main: undefined,
              description: undefined,
              icon: undefined,
            },
          ],
          rain: { '1h': undefined },
        },
        daily: [
          {
            dt: undefined,
            temp: {
              min: undefined,
            },
            weather: [
              {
                id: undefined,
                main: undefined,
                description: undefined,
                icon: undefined,
              },
            ],
            pop: undefined,
          },
        ],
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
