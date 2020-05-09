import { ADD_TASK, 
    REMOVE_TASK, 
    CHANGE_FILTER, 
    COMPLETE_TASK, 
    REWORK_TASK, 
    ADD_SEMI_TASK, 
    COMPLETE_SEMI_TASK, 
    REWORK_SEMI_TASK,
    REMOVE_SEMI_TASK,
    ERROR_IS_ON,
    ERROR_IS_OFF } from "./types";

export function addTask(task){
    return{
        type: ADD_TASK,
        payload: task
    }
}
export function removeTask(id){
    return {
        type: REMOVE_TASK,
        payload: id
    }
}
export function changeFilter(filter){
    return {
        type: CHANGE_FILTER,
        payload: filter
    }
}
export function completeTask(id){
    return{
        type: COMPLETE_TASK,
        payload: id
    }
}
export function reworkTask(id){
    return{
        type: REWORK_TASK,
        payload: id
    }
}
export function addSemiTask(id, text){
    return {
        type: ADD_SEMI_TASK,
        payload: id,
        text
    }
}
export function completeSemiTask(id, parentId){
    return {
        type: COMPLETE_SEMI_TASK,
        payload: id,
        parentId
    }
}
export function reworkSemiTask(id, parentId){
    return {
        type: REWORK_SEMI_TASK,
        payload: id,
        parentId
    }
}
export function removeSemiTask(id, parentId){
    return{
        type: REMOVE_SEMI_TASK,
        id,
        parentId
    }
}
export function errorIsOn(text){
    return{
        type: ERROR_IS_ON,
        text
    }
}
export function errorIsOff(text){
    return{
        type: ERROR_IS_OFF,
        text
    }
}
export function errorToggle(text){
    return (dispatch) => {
        dispatch(errorIsOn(text))
        setTimeout(()=>{
            dispatch(errorIsOff(text))
        }, 2000)
    }
}