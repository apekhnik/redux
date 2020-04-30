import React from 'react'
import { useSelector } from 'react-redux'
import {filterTask} from './Tasklist'

const Footer = () => {
    const task = useSelector(state=>state.task.tasks)
    const active = filterTask(task, 'completed')
    return(
        <div className='footer'>
            <span>Выполнено: {active.length} из {task.length}</span>
        </div>
    )
}
export default Footer