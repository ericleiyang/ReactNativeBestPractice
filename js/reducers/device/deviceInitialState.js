/**
* @Author: Eric
* @Date:   25-Oct-2016
* @Project: React Native
* @Last modified by:   Eric
* @Last modified time: 25-Oct-2016
*/



/**
 * ## deviceInitialState.js
 *
 * This is a immutable object, working with Redux, requires state that is immutable
 *
 *
 */
'use strict'

/**
 * ## Import immutable record
 */
import {Record} from 'immutable'

/**
 * ## initialState
 *
 */
var InitialState = Record({
    isMobile: false,
    platform: '',
    version: null
})

export default InitialState
