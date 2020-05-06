import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK, REWORK_TASK, ADD_SEMI_TASK, COMPLETE_SEMI_TASK, 
    REWORK_SEMI_TASK } from "./types";
<<<<<<< HEAD

=======
import {load} from 'redux-localstorage-simple'
>>>>>>> refs/remotes/origin/master
const initialState = {
    tasks: [{text:'Подготовить 3 реакт проекта на гитхаб',
             id: 0, isCompleted: false, 
             semiTask : [{text:'Coctail project', isCompleted: false, id: 0},
                        {text:'NASA project', isCompleted: true, id: 1},
                        {text:'TODO project', isCompleted: false, id: 2}]},
            {text:'Освоить теорию на learnjs', 
            id: 1, isCompleted: false, 
            semiTask : [{text:'Прототивы и наследование', isCompleted: true, id: 0},
                        {text:'Промисы async/await', isCompleted: false, id: 1},
                        {text:'Генераторы', isCompleted: true, id: 2},
                        {text:'модули', isCompleted: false, id: 3}]},
            {text:'тестовый таск', id: 2, isCompleted: false, semiTask : []}]
}



<<<<<<< HEAD
// axios.get('https://todo-3de33.firebaseio.com/tasks.json', initialState.tasks)
//                     .then(response=>{
//                         console.log(response.data)
//                     })
                    
export const taskReducer = (state=initialState, action) =>{
=======

let TASKS = load({namespace: 'todo-list'});
console.log(TASKS)
export const taskReducer = (state=TASKS.task, action) =>{
>>>>>>> refs/remotes/origin/master
    switch (action.type) {
        case ADD_TASK:
            return {...state, tasks: state.tasks.concat(action.payload)}
        case ADD_SEMI_TASK:
            return {...state, tasks: state.tasks.map(task=>{
                if(task.id == action.payload){
                    const text = prompt('Enter your semi-task')
                    if(text!=null&&text!=''){  
                        const semi = {text, isCompleted: false, id: task.semiTask.length}
                        task.semiTask = task.semiTask.concat(semi)
                    }
                    return task
                    
                }return task
            })}
        case COMPLETE_SEMI_TASK:
            return {...state, tasks: state.tasks.map(task=>{
                if(task.id == action.parentId){
                    
                    task.semiTask[action.payload].isCompleted = true;
                    
                }return task
            })}
        case REWORK_SEMI_TASK:
            return {...state, tasks: state.tasks.map(task=>{
                if(task.id == action.parentId){
                    task.semiTask[action.payload].isCompleted = false;
                    
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