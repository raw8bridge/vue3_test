import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      message: 'This is store data',
      counter: 0
    }
  },
  mutations: {
    count: (state) => {
      state.counter++
    },
    reset: (state) => {
      state.counter = 0
    }
  }
})
