/**
* @Author: Eric
* @Date:   25-Oct-2016
* @Project: React Native
* @Last modified by:   Eric
* @Last modified time: 25-Oct-2016
*/



/**
 * ## globalActions.js
 *
 * Actions that are global in nature
 *
 */
'use strict'

/**
 * # Imports
 *
 * The actions supported
 *
 */
const{
    SET_SESSION_TOKEN,
    SET_STORE,
    SET_STATE,
    GET_STATE
} = require('../../lib/constants').default

/**
 * # Set the sessionToken
 */
export function setSessionToken(sessionToken){
    return{
        type: SET_SESSION_TOKEN,
        payload: sessionToken
    }
}

/**
 * # Set the store
 */
export function setStore(store){
    return{
        type: SET_STORE,
        payload: store
    }
}

/**
 * Set the state
 */
 export function setState (newState) {
   return {
     type: SET_STATE,
     payload: newState
   }
 }

 /**
  * Get the state
  */
  export function getState (toggle) {
    return {
      type: GET_STATE,
      payload: toggle
    }
  }
