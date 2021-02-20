import Vue from 'vue'
import Vuex from 'vuex'
import Actions from './actions/indexAction.js'
import Mutations from './mutations/indexMutation.js'
import Getters from './getters/indexGetter.js'
import InitialState from './initialState.js'
import { FETCH_LOADING, FETCH_USER } from './actions/actionTypes.js'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: InitialState,
  mutations: Mutations,
  actions: Actions,
  getters: Getters
})

export default store

store.subscribeAction({
  before: (action, state) => {
    if(action.type == FETCH_USER){
      console.log('before', action.type)
      store.dispatch(FETCH_LOADING, true)
    }
  },
  after: (action, state) => {
    if(action.type == FETCH_USER){
      console.log('after', action.type)
      setTimeout(function(){ 
        store.dispatch(FETCH_LOADING, false)
      }, 3000);
    }
  },
  error: (action, state, error) => {
    console.log(`error action ${action.type}`)
    console.error(error)
  }
});
