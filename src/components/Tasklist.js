import React from 'react'
import Task from './Task'
import { useSelector, useDispatch } from 'react-redux'
import { removeTask, completeTask } from '../redux/action'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
export const filterTask = (tasks, filter) => {
    switch (filter) {
        case 'all':
            return tasks;
        case 'completed':
            return tasks.filter(task=>task.isCompleted)
        case 'active':
            return tasks.filter(task=>!task.isCompleted)
        default: return tasks
    }
}
const Tasklist =()=>{
    
    const tasks = useSelector(state=>state.task.tasks)
    const filter = useSelector(state=>state.filter.filter)
    const dispatch = useDispatch()
    
   
    const filteredTask = filterTask(tasks, filter)
    console.log(filteredTask,'currentFilter')
    
    return(
        // <ul className="list-group">
                
        //             {filteredTask.map((item, index)=>{
        //                 return <Task 
        //                     text={item.text}
        //                     key={item.id}
        //                     id={item.id}
        //                     index={index}
        //                     isCompleted={item.isCompleted}
        //                     />
        //             })
        //             }
                
        // </ul>
        <TransitionGroup component='ul' className='list-group'>
                
                {filteredTask.map((item, index)=>{
                    
                    return    <CSSTransition
                                    timeout={500}
                                    classNames="list-group-item"
                                    key={index}
                                >
                                    <Task 
                                        text={item.text}
                                        key={item.id}
                                        id={item.id}
                                        index={index}
                                        isCompleted={item.isCompleted}
                                        />
                            </CSSTransition>
                    })
                    }
        </TransitionGroup>
    )
}
export default Tasklist