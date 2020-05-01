import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, REWORK_TASK, ADD_SEMI_TASK } from "./types";
const initialState = {
    tasks: [{text:'первый таск', id: 0, isCompleted: false, semiTask : []},
            {text:'второй таск', id: 1, isCompleted: false, semiTask : []},
            {text:'третий таск', id: 2, isCompleted: false, semiTask : []}]
}
export const taskReducer = (state=initialState, action) =>{
    switch (action.type) {
        case ADD_TASK:
            return {...state, tasks: state.tasks.concat(action.payload)}
        case ADD_SEMI_TASK:
            return {...state, tasks: state.tasks.map(task=>{
                if(task.id == action.payload){
                    task.semiTask = task.semiTask.concat(prompt('semi task'))
                    
                }return task
            })}
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