const API_ENV = process.env.API_ENV

export default {
  API_ENV,
  PROXY_HOST: {
    development: 'https://api.myjson.com/bins',
    staging: 'https://staging.api.com',
    production: 'https://production.api.com',
  }[API_ENV],
  zhugeAppKey: {
    development: '123',
    staging: '456',
    production: '789',
  }[API_ENV],
}
