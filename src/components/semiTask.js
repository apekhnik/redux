import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {completeSemiTask, reworkSemiTask} from '../redux/action'
import Button from './Button'

const SemiTask = ({index, item, parentId}) => {
    
    const dispatch = useDispatch()
    
    const complete = useSelector(state=>state.task.tasks[parentId].semiTask[index].isCompleted)
   
    console.log(useSelector(state=>state.task.tasks))
    console.log(parentId)

    const textDecor = complete ? 'line-through' : 'none'
    const completeBtn = complete ? <i className="fas fa-check-double"/>:<i className="fas fa-check"/>
    return(
        <div className='semi-task-item' >
            <p style={{textDecoration: textDecor}}>{index+1}. {item}</p>
                <div className='semiTask-complete'>
                    <Button
                                onClick={()=>dispatch(reworkSemiTask(index, parentId))}
                                disabled={!complete} 
                                className="semi-task-btn "
                                name={<i className="fas fa-history"/>}
                    />
                    <Button
                                onClick={()=>dispatch(completeSemiTask(index, parentId))}
                                disabled={complete} 
                                className="semi-task-btn "
                                name={completeBtn}
                    />
                </div>
        </div>
    )
}
export default SemiTask