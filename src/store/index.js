import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    imgBUI:"https://xuezi.xin88.top/",
    uname:null
  },
  getters: {
  },
  mutations: {
    updataUname(state,uname){
      state.uname=uname
    }
  },
  actions: {
  },
  modules: {
  }
})
