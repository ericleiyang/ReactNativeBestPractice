/**
 * # RNHTTPSessionManager.js
 *
 * This class interfaces with is a http session Singleton using the rest api
 *
 * Singleton module see: https://k94n.com/es6-modules-single-instance-pattern
 *
 * @flow
 */
'use strict'

/**
 * ## Imports
 *
 * Config for defaults and underscore for a couple of features
 */
import _ from 'underscore'

/**
 * ## Async support
 *
 */
require('regenerator-runtime/runtime')

export class RNHTTPSessionManager{
  /**
   * ## Session manager instance
   *
   *
   * @throws baseURL missing if baseURL is undefined
   */
  init (baseURL) {
    if (!_.isNull(baseURL)) {
      throw new Error('baseURL missing')
    }
    this._baseURL = baseURL
  }

  /**
   * ### _fetch
   * A generic function that prepares the request
   *
   * @returns object:
   *  {code: response.code,
   *   status: response.status,
   *   json: response.json()
   */
  async _fetch (opts) {
    opts = _.extend({
      method: 'GET',
      url: null,
      body: null,
      callback: null
    }, opts)

    var reqOpts = {
      method: opts.method,
      headers: {
      }
    }

    if (this._sessionToken) {
      reqOpts.headers['Authorization'] = 'Bearer ' + this._sessionToken
    }

    if (opts.method === 'POST' || opts.method === 'PUT') {
      reqOpts.headers['Accept'] = 'application/json'
      reqOpts.headers['Content-Type'] = 'application/json'
    }

    if (opts.body) {
      reqOpts.body = JSON.stringify(opts.body)
    }

    let url = this.API_BASE_URL + opts.url
    let res = {}

    let response = await fetch(url, reqOpts)
    res.status = response.status
    res.code = response.code

    return response.json()
      .then((json) => {
        res.json = json
        return res
      })
  }
}
// The singleton variable
export let RNHTTPSessionManager = new RNHTTPSessionManager()
