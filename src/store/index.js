import Vuex from 'vuex';
import Vue from 'vue';
import employees from './modules/employees'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    employees
  }
});
