import { combineReducers } from '@reduxjs/toolkit'
import todos from './Todos '
import counter from './counter'

export default combineReducers({
  todos,
  counter
})