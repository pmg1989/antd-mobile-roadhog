import { connect } from 'react-redux'
import { CLIENT_ENV } from 'utils/config'

const myConnect = (state, dispatch) => myModule => (WrappedComponent) => {
  if (CLIENT_ENV === 'development') {
    const { hot } = require('react-hot-loader')
    const { compose } = require('redux')
    return compose(connect(state, dispatch), hot(myModule))(WrappedComponent)
  }
  return connect(state, dispatch)(WrappedComponent)
}

export default myConnect
