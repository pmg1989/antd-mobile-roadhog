import { connect } from 'react-redux'
import { hot } from 'react-hot-loader'
import { compose } from 'redux'

const myConnect = (state, dispatch) => myModule => (WrappedComponent) => {
  return compose(connect(state, dispatch), hot(myModule))(WrappedComponent)
}

export default myConnect
