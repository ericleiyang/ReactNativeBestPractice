/**
* @Author: Eric
* @Date:   25-Oct-2016
* @Project: React Native
* @Last modified by:   Eric
* @Last modified time: 25-Oct-2016
*/



/**
 * ## deviceReducer.js
 *
 * The reducer for all the actions from the various log states
 *
 */
import InitialState from './deviceInitialState'

/**
 * Device actions to test
 */
const{
    SET_PLATFORM,
    SET_VERSION
} = require('../../lib/constants').default

const initialState = new InitialState()

/**
 * # deviceReducer function
 * @param  {[type]} [state=initialState] [description]
 * @param  {[type]} action               [description]
 * @return {[type]} state                [description]
 */
export default function deviceReducer(state = initialState, action){
    if (!(state instanceof.InitialState)) {
        return initialState.merge(state)
    }

    switch (action.type) {
        case SET_PLATFORM:
            const platform = action.payload
            return state.set('platform', platform)
        case SET_VERSION:
            const version = action.payload
            return state.set('version', version)
        default:

    }
    return state
}
