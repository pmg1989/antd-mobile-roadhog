const Routes = [
  {
    path: '/',
    getComponent (location, cb) {
      require.ensure([], (require) => {
        cb(null, require('./containers/App'))
      }, 'home')
    },
  },
  {
    path: 'demo1',
    getComponent (location, cb) {
      require.ensure([], (require) => {
        cb(null, require('./containers/Demo'))
      }, 'demo1')
    },
  },
  {
    path: 'demo2',
    getComponent (location, cb) {
      require.ensure([], (require) => {
        cb(null, require('./containers/Demo2'))
      }, 'demo2')
    },
  },
  {
    path: 'demo3',
    getComponent (location, cb) {
      require.ensure([], (require) => {
        cb(null, require('./containers/Demo3'))
      }, 'demo3')
    },
  },
  {
    path: '*',
    name: 'error',
    getComponent (nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('./containers/Error'))
      }, 'error')
    },
  },
]

export default Routes
