import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    test: {},
    steinAktuell: {},
    steine: [
      {
        steinID: 1,
        index: 0,
        name: 'Stein 1',
        kommentar: 'Hier steht ein erläuternder Text zu dem gezeigten Stein, ID=001',
        imgSrc: '../../static/Ziegel_01.jpg',
      },
      {
        steinID: 2,
        index: 1,
        name: 'Stein 1',
        kommentar: 'Hier steht ein erläuternder Text zu dem gezeigten Stein, ID=002',
        imgSrc: '../../static/Ziegel_01.jpg',
      },
      {
        steinID: 3,
        index: 2,
        name: 'Stein 1',
        kommentar: 'Hier steht ein erläuternder Text zu dem gezeigten Stein, ID=003',
        imgSrc: '../../static/Ziegel_01.jpg',
      },
    ],
  },
  getters: {
    getStein(state) {
      return state.steinAktuell;
    },
  },
  mutations: {
    setStein(state, payload) {
      store.state.steinAktuell = state.steine[payload];
    },
    switchStein(state, payload) {
      let index = state.steinAktuell.index + payload;
      if (index >= state.steine.length) {
        index = 0;
      }
      if (index < 0) {
        index = state.steine.length - 1;
      }
      store.state.steinAktuell = state.steine[index];
    },
  },
  actions: {
    setStein(context, payload) {
      context.commit('setStein', payload);
    },
    switchStein(context, payload) {
      context.commit('switchStein', payload);
    },
  },
});

export default store;
