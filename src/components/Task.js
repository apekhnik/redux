import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTask, reworkTask, removeTask } from '../redux/action'
import classnames from 'classnames'
import Button from './Button'
import { CSSTransition } from 'react-transition-group'

const Task =({text, onClick, index, isCompleted, id})=>{
    console.log(isCompleted)
    const dispatch = useDispatch()
    const clname = isCompleted ? 'ready' : 'no-ready'
    const cl = classnames(
        "list-group-item",
        'card',
        clname
    )
    return(
        
        <div className={cl} style={{width: '25rem'}}>
            <div class="card-body" >
            <span className={clname}>{index+1}.{text}</span>
                <div className='complete'>
                    <Button
                        disabled={!isCompleted}
                        onClick={()=>dispatch(reworkTask(id))}
                        className="btn btn-danger btn-sm"
                        name='Rework'
                    />
                    <Button
                        onClick={()=>dispatch(completeTask(id))}
                        disabled={isCompleted} 
                        className="btn btn-success btn-sm"
                        name='Complete'
                    />

                </div>
                <i className="fas fa-times" onClick={()=>dispatch(removeTask(id))}/>

            </div>
        </div>
    )
}
export default Task