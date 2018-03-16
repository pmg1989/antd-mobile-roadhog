import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunk from 'redux-thunk'
import Immutable from 'immutable'
import reducers from './reducers'

export default function configureStore (initialState = {}) {
  const store = createStore(reducers,
    Immutable.Map(initialState),
    compose(
      applyMiddleware(
        routerMiddleware(browserHistory),
        thunk,
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
