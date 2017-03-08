import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export default (reducers) => createStore(reducers, applyMiddleware(thunk))
