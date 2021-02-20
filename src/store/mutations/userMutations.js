import {SET_USER} from './mutationTypes'

export default {
    [SET_USER]: (state, user) => {
        console.log('mutation', user)
        state.user = user
    }
}