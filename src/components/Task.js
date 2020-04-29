import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTask, reworkTask, removeTask } from '../redux/action'
import classnames from 'classnames'
import Button from './Button'
import { CSSTransition } from 'react-transition-group'

const Task =({text, onClick, index, isCompleted, id})=>{
    const dispatch = useDispatch()
    const clname = isCompleted ? 'ready' : 'no-ready'
    const cl = classnames(
        "list-group-item",
        clname
    )
    const redo = <i className="fas fa-history"/>
    const complete =  isCompleted ? <i className="fas fa-check-double"/>:<i className="fas fa-check"/>
    return(
        
        <div className={cl} >
            
            <span className={clname}>{index+1}.{text}</span>
                <div className='complete'>
                    <Button
                        disabled={!isCompleted}
                        onClick={()=>dispatch(reworkTask(id))}
                        className="btn btn-danger btn-sm btn-complete-group"
                        name={redo}
                    />
                    <Button
                        onClick={()=>dispatch(completeTask(id))}
                        disabled={isCompleted} 
                        className="btn btn-primary btn-sm btn-complete-group"
                        name={complete}
                    />

                </div>
                
                <i className="fas fa-times" onClick={()=>dispatch(removeTask(id))}/>

            
        </div>
    )
}
export default Task