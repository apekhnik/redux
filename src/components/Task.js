import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { completeTask, reworkTask, removeTask, addSemiTask } from '../redux/action'
import classnames from 'classnames'
import Button from './Button'
import Input from './Input'
import SemiTasks from './semiTasks'

const Task =({text, onClick, index, isCompleted, id,semiTask})=>{
    const dispatch = useDispatch()
    const [showSemi, setSemiShow] = useState(false)
    const [inputValue, setInputValue] = useState('')
    

    
    const clname = isCompleted ? 'ready' : 'no-ready'
    const cl = classnames(
        "list-group-item",
        clname
    )
    const redo = <i className="fas fa-history"/>
    const complete =  isCompleted ? <i className="fas fa-check-double"/>:<i className="fas fa-check"/>
    const addTask = <i className="fas fa-plus-circle"/>
    const semiVisison = showSemi ? <i class="fas fa-caret-up"></i> : <i class="fas fa-caret-down"></i>
    const anim = semiTask.length > 0 ? true : false
    console.log(anim)
    return(
        
        <div className={cl} style={{background: showSemi ? '#dfe6e9': 'white'}} >
            
            <span className={clname}>{index+1}.{text}</span>
            {/* {showInput&&<Input onChange={(e)=>setInputValue(e.target.value)}/>} */}
                <div className='complete'>
                    <Button
                        name={semiVisison}
                        onClick={()=>setSemiShow(!showSemi)}
                        className='show-semi-task-caret'
                        semiTask={anim}
                    />
                    <Button
                        className='add-task'
                        name={addTask}
                        onClick={()=>{
                            dispatch(addSemiTask(id))
                            setSemiShow(true)
                        }}
                    />
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
                {showSemi && <SemiTasks tasks={semiTask}/>}
                <i className="fas fa-times" onClick={()=>dispatch(removeTask(id))}/>

            
        </div>
    )
}
export default Task