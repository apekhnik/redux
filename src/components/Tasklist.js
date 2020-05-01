import React from 'react'
import Task from './Task'
import { useSelector, useDispatch } from 'react-redux'
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

    
   
    const filteredTask = filterTask(tasks, filter)
    
    
    return(
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