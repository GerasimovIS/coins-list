import Vue from 'vue'
import Vuex from 'vuex'
import { getMultipleSymbolsPrice } from '../api/symbols-price'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    multipleSymbolsData: [],
    fromSymbols: [
      'BTC', 'ETH', 'DOGE',
      'XRP', 'TRX', 'XLM',
      'BCH', 'BSV', 'NEO',
      'ADA', 'AWC', 'GO',
      'XTZ', 'QTUM', 'SMART',
      'LTC', 'XMR', 'VET',
      'VTHO', 'DENT', 'EOS',
      'DCN', 'NEXO', 'TPAY',
      'ZRX', 'USDC', 'USDT',
      'BNB', 'TNT', 'REX',
      'REP', 'RCN', 'KIN'
    ],
    toSymbols: ['USD', 'EUR', 'RUB']
  },
  mutations: {
    SET_MULTYPLE_SYMBOLS_DATA (state, payload) {
      state.multipleSymbolsData = payload
    },
    CLEAR_MULTYPLE_SYMBOLS_DATA (state) {
      state.multipleSymbolsData = null
    }
  },
  actions: {
    async fetchSymbolsData ({ state, commit }) {
      const data = await getMultipleSymbolsPrice(state.fromSymbols, state.toSymbols)
        .catch(e => { commit('CLEAR_MULTYPLE_SYMBOLS_DATA') })

      const payload = Object.keys(data.DISPLAY)
        .map(name => ({ name, prices: data.DISPLAY[name] }))

      commit('SET_MULTYPLE_SYMBOLS_DATA', payload)
    }
  }
})
