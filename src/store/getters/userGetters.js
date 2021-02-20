import {GET_USER} from 'getterTypes'
import { deepClone } from '../helper/cloneHelper'

export default {
    [GET_USER]: (state) => {
        return deepClone(state.user)
    }
}