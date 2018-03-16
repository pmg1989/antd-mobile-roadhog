const NODE_ENV = process.env.NODE_ENV
const CLIENT_ENV = process.env.CLIENT_ENV

export default {
  NODE_ENV,
  CLIENT_ENV,
  PROXY_HOST: {
    dev: 'https://api.myjson.com/bins',
    beta: 'https://beta.api.com',
    release: 'https://release.api.com',
  }[NODE_ENV],
}
