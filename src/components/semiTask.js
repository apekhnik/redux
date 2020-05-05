import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {completeSemiTask, reworkSemiTask} from '../redux/action'


const SemiTask = ({index, item, isComplete, parentId}) => {
    
    const dispatch = useDispatch()
    const complete = useSelector(state=>state.task.tasks[parentId].semiTask[index].isCompleted)
    console.log(complete)
    const textDecor = complete ? 'line-through' : 'none'
    return(
        <div className='semi-task-item'>
            <p style={{textDecoration: textDecor}}>{index+1}. {item}</p>
            <button onClick={()=>dispatch(completeSemiTask(index, parentId))}>+</button>
            <button onClick={()=>dispatch(reworkSemiTask(index, parentId))}>-</button>
            <button onClick={()=>console.log(item, complete)}>===</button>
        </div>
    )
}
export default SemiTask