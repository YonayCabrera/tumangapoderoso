import { FETCH_USER } from './actionTypes'
import {SET_USER} from '../mutations/mutationTypes'

export default {
    [FETCH_USER]: ({commit}, user) => {
        console.log('action', user)
        commit(SET_USER, user)
    }
}