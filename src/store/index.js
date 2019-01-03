import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    //路由组件存储器
    routers: {},
      invoice: {
          channelType: null,
          orderId: [],
          amount: 0,
      }
  },
  getters: {
    routers: state => {
      return state.data;
    }
  },
  mutations: {
    //动态增加路由
    addRouter: (state, data) => {
      state.routers = Object.assign({}, state.routers, {
        [data.name]: data.component
      });
    },
      // setChannelType: (state, invoice) => {
      //     state.invoice.channelType = invoice.channelType
      // },
      // setOrderId: function (state, orderId) {
      //     state.orderId = orderId
      // },
      // setAmount: function (state, amount) {
      //     state.amount = amount
      // }
      setTripInvoice: function (state, tripInvoice){
        state.invoice.channelType = tripInvoice.channelType
          state.invoice.orderId = tripInvoice.orderId
          state.invoice.amount = tripInvoice.amount
      },
      setChargeInvoice: function (state, tripInvoice){
          state.invoice.channelType = tripInvoice.channelType
          state.invoice.orderId = []
          state.invoice.amount = tripInvoice.amount
      },
  },
  actions: {
    acMethods({
      commit
    }) {

    },

  },
})

//根目录中注册路由组件
window.midea = {
  registerRouter(name, component) {
    Store.commit('addRouter', {
      name: name,
      component: component
    })
  }
}; //页面使用路由导航