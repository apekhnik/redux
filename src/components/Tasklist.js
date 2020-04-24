import React from 'react'
import Task from './Task'
import { useSelector, useDispatch } from 'react-redux'
import { removeTask, completeTask } from '../redux/action'
const Tasklist =()=>{
    
    const tasks = useSelector(state=>state.task.tasks)
    const filter = useSelector(state=>state.filter.filter)
    const dispatch = useDispatch()
    
    const filterTask = (tasks, filter) => {
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
    const filteredTask = filterTask(tasks, filter)
    console.log(filter,'currentFilter')
    
    return(
        <ul className="list-group">
            {filteredTask.map((item, index)=><Task 
                text={item.text}
                key={item.id}
                id={item.id}
                index={index}
                isCompleted={item.isCompleted}
            />)
            }
        </ul>
    )
}
export default Tasklist