import {combineReducers} from 'redux'
import { taskReducer } from './taskReducer'
import { filterReducer } from './filterReducer'
import {errorReducer} from './errorReducer'
export const rootReducer = combineReducers({
    task: taskReducer,
    filter: filterReducer,
    error: errorReducer
})