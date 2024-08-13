import { createStore, applyMiddleware } from 'redux'
// import { configureStore, applyMiddleware, createSlice } from '@reduxjs/toolkit'
import rootReducers from './Reducers/rootReducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
