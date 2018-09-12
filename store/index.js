import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      startPoint: null,
      endPoint:null,
      orderStep: 1,
      firstStep: true
    },
    mutations: {
      nextStep (state) {
        state.orderStep++;
      },
      prevStep (state) {
        state.orderStep--;
      },
      nextFirstStep(state){
        state.firstStep = false;
      },
      prevFirstStep(state){
        state.firstStep = true;
      },
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