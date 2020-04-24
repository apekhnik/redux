import {combineReducers} from 'redux'
import { taskReducer } from './taskReducer'
import { filterReducer } from './filterReducer'
export const rootReducer = combineReducers({
    task: taskReducer,
    filter: filterReducer
})