module.exports = {
  SESSION_TOKEN_KEY: 'SESSION_TOKEN_KEY',
  backend: {
    hapiRemote: true,
    hapiLocal: false
  },
  API: {
    Local: {
      url: 'http://192.168.5.14/TBS.Frontend.AppsAPI.SS'
    },
    Beta: {
      url: 'http://totalbettingsolutions.com.au/TBS.Frontend.AppsAPI.SS'
    },
    Dev: {
      url: 'http://casweb03-dev.azurewebsites.net'
    },
    Pre-Prod: {
      url: 'http://casweb03-preprod.azurewebsites.net'
    },
    Prod: {
      url: 'https://ios.betting.club'
    },
    NewAPI: {
      url: 'https://casweb03-newapi.azurewebsites.net'
    }
  }
}
