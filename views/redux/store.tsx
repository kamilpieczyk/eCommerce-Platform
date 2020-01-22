import {createStore} from 'redux'
import reducers from './combineReducers'

export default createStore( reducers )