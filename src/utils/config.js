const NODE_ENV = process.env.NODE_ENV
const CLIENT_ENV = process.env.CLIENT_ENV

export default {
  NODE_ENV,
  CLIENT_ENV,
  APIHOST: 'https://api.myjson.com/bins',
  PROXY_HOST: {
    dev: 'dev.api.com',
    beta: 'beta.api.com',
    release: 'release.api.com',
  }[NODE_ENV],
}
