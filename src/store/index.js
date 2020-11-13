import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    wthInfo: {
      coord: { lon: '', lat: '' },
      weather: [{ id: '', main: '', description: '', icon: '' }],
      base: '',
      main: {
        temp: '',
        feels_like: '',
        temp_min: '',
        temp_max: '',
        pressure: '',
        humidity: '',
      },
      visibility: '',
      wind: { speed: '', deg: '' },
      clouds: { all: '' },
      dt: '',
      sys: {
        type: '',
        id: '',
        country: 'KR',
        sunrise: '',
        sunset: '',
      },
      timezone: '',
      id: '',
      name: '',
      cod: '',
    },
  },
  mutations: {
    setWthInfo(state, payload) {
      state.wthInfo = payload;
    },
  },
  actions: {},
  modules: {},
});
