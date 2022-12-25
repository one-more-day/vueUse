//用于创建store
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const actions = {
  increment(context, value) {
    context.commit("INCREAMENT", value);
  },
};
//操作state
const mutations = {
  INCREAMENT(state, value) {
    state.sum += value;
  },
};
const state = {
  sum: 0,
};
const getters = {
  bigSum(state) {
    return state.sum * 10;
  },
};

export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
});
