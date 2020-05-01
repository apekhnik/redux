import { ADD_TASK, REMOVE_TASK, CHANGE_FILTER, COMPLETE_TASK, REWORK_TASK, ADD_SEMI_TASK } from "./types";

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