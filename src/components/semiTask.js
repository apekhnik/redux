import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {completeSemiTask, reworkSemiTask, removeSemiTask} from '../redux/action'
import Button from './Button'

const SemiTask = ({index, item, parentId}) => {
    
    const dispatch = useDispatch()
    const massive = useSelector(state=>state.task.tasks[parentId].semiTask[index])
    
    
    if(massive===undefined){
        console.log('ПАЛАМАЛОСЬ', index)
        return null
    }
    let complete = massive.isCompleted
    
    const textColor = complete ? '#007bff': 'black'
    const textDecor = complete ? 'line-through' : 'none'
    const completeBtn = complete ? <i className="fas fa-check-double"/>:<i className="fas fa-check"/>
    return(
        <div className='semi-task-item' >
            <p style={{textDecoration: textDecor, color: textColor}}>{index+1}. {item}</p>
             
             {/* {item} */}
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
                {/* <i className="fas fa-times" onClick={()=>dispatch(removeSemiTask(index, parentId))}/> */}
        </div>
    )
}
export default SemiTask