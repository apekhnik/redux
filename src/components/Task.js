import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTask, reworkTask, removeTask } from '../redux/action'
import classnames from 'classnames'

const Task =({text, onClick, index, isCompleted, id})=>{
    console.log(isCompleted)
    const dispatch = useDispatch()
    const clname = isCompleted ? 'ready' : 'no-ready'
    const cl = classnames(
        "list-group-item",
        clname
    )
    return(
        <li className={cl}>
            {index+1}.{text}
            <div className='complete'>
                <button type="button"
                 disabled={!isCompleted}
                onClick={()=>dispatch(reworkTask(id))}
                className="btn btn-danger btn-sm">Rework</button>
                <button type="button"
                onClick={()=>dispatch(completeTask(id))}
                disabled={isCompleted} 
                className="btn btn-success btn-sm">Complete</button>
            </div>
            <i className="fas fa-times" onClick={()=>dispatch(removeTask(id))}/>
        </li>
    )
}
export default Task