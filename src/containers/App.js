import React from 'react'
import PropTypes from 'prop-types'
import { hot } from 'react-hot-loader'

const App = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node,
}

export default hot(module)(App)
