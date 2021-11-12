import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'

import { logger } from './middlewares/logger'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default process.env.NODE_ENV === 'development'
  ? createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, logger)))
  : createStore(rootReducer, applyMiddleware(thunk))
