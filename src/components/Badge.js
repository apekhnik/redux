import React from 'react'
import { useSelector } from 'react-redux'
import {filterTask} from './Tasklist'
const Badge = () => {
    const task = useSelector(state=>state.task.tasks)
    const active = filterTask(task, 'completed')
    const badgeColor = active.length == task.length ? 'green' : '#e74c3c'
    return (
        <div className='badge'>
            <p>Выполнено: <span style={{color: badgeColor}}>{active.length} из {task.length}</span></p>
        </div>
    )
}
export default Badge