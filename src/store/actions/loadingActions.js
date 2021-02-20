import { FETCH_LOADING } from './actionTypes'
import {SET_LOADING} from '../mutations/mutationTypes'

export default {
    [FETCH_LOADING]: ({commit}, loading) => {
        console.log('loading', loading)
        commit(SET_LOADING, loading)
    }
}