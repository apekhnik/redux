import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, REWORK_TASK } from "./types";
const initialState = {
    tasks: [{text:'первый таск', id: 1, isCompleted: false},
            {text:'второй таск', id: 2, isCompleted: false},
            {text:'третий таск', id: 3, isCompleted: false}]
}
export const taskReducer = (state=initialState, action) =>{
    switch (action.type) {
        case ADD_TASK:
            return {...state, tasks: state.tasks.concat(action.payload)}
        case REMOVE_TASK:
            return {...state, tasks: state.tasks.filter(task => task.id !==action.payload)}
        case COMPLETE_TASK:
            return {...state, tasks: state.tasks.map(task=>{
                if(task.id == action.payload){
                    task.isCompleted = true
                }return task
            })}
        case REWORK_TASK:
            return {...state, tasks: state.tasks.map(task=>{
                if(task.id == action.payload){
                    task.isCompleted = false
                }return task
            })}
        default:return state
    }
}