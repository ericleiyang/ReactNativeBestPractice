/*
* @flow
*/
'use strict'

export class AuthAPIServices extends RNHTTPSessionManager{
    async login (data) {
      return await this._fetch({
        method: 'POST',
        url: 'https://ios.betting.club/json/reply/LMarketTypeRequest',
        body: data
      })
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            return res.json
          } else {
            throw (res.json)
          }
        })
        .catch((error) => {
          throw (error)
        })
    }
}

export let authAPIServices = new AuthAPIServices()
