/**
* @Author: Eric
* @Date:   25-Oct-2016
* @Project: React Native
* @Last modified by:   Eric
* @Last modified time: 25-Oct-2016
*/



/**
 * ## deviceActions.js
 *
 * - Platform are running on: ios or Android
 * - App version
 *
 */

'use strict'

/**
 * ## Imports
 *
 *The actions supported
 *
 */
const{
    SET_PLATFORM,
    SET_VERSION
}= require('../../lib/constants').default

/**
 * ## Set the platform state
 */
export function setPlatform(platform){
    return{
        type: SET_PLATFORM,
        payload: platform
    }
}

/**
 * ## Set the version
 */
export function setVersion(version){
    return{
        type: SET_VERSION,
        payload: version
    }
}
