import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      startPoint: null,
      endPoint:null,
    },
    mutations: {
      setStart (state, place) {
        state.startPoint = null
        state.startPoint = place
      },
      setEnd (state, place) {
        state.endPoint = null
        state.endPoint = place
      }
    }
  })
}

export default createStore