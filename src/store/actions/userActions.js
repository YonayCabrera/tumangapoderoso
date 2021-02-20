import { FETCH_USER } from "./actionTypes"

import {FETCH_USER} from './actionTypes'
import {SET_USER} from '../mutations/mutationTypes'

export default {
    [FETCH_USER]: ({commit, dispatch}, user) => {
        commit(SET_USER, user)
    }
}