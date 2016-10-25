/**
* @Author: Eric
* @Date:   25-Oct-2016
* @Project: React Native
* @Last modified by:   Eric
* @Last modified time: 25-Oct-2016
*/



/**
 * ## globalInitialState.js
 *
 * This is a immutable class working with Redux
 *
 */
'use strict'

/**
 * ## Import
 */
import {Record} from 'immutable'

/**
 * ## InitialState
 *
 */

var InitialState = Record{
    currentUser: null,
    showState: false,
    currentState: null,
    store: null
}

export default InitialState
