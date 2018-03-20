import { connect } from 'react-redux'

const NODE_ENV = process.env.NODE_ENV

const myConnect = (state, dispatch) => myModule => (WrappedComponent) => {
  if (NODE_ENV === 'development') {
    const { hot } = require('react-hot-loader')
    const { compose } = require('redux')
    return compose(connect(state, dispatch), hot(myModule))(WrappedComponent)
  }
  return connect(state, dispatch)(WrappedComponent)
}

export default myConnect
