import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { completeTask, reworkTask, removeTask, addSemiTask } from '../redux/action'
import classnames from 'classnames'
import Button from './Button'
import Input from './Input'
import SemiTasks from './semiTasks'

const Task =({text, onClick, index, isCompleted, id,semiTask})=>{
    const dispatch = useDispatch()
    const [showSemi, setSemiShow] = useState(true)
    const [inputValue, setInputValue] = useState('')
    

    
    const clname = isCompleted ? 'ready' : 'no-ready'
    const cl = classnames(
        "list-group-item",
        clname
    )
    const redo = <i className="fas fa-history"/>
    const complete =  isCompleted ? <i className="fas fa-check-double"/>:<i className="fas fa-check"/>
    const addTask = <i className="fas fa-plus-circle"/>
    const semiVisison = <i class="fas fa-caret-up"></i>

    
    return(
        
        <div className={cl} >
            
            <span className={clname}>{index+1}.{text}</span>
            {/* {showInput&&<Input onChange={(e)=>setInputValue(e.target.value)}/>} */}
                <div className='complete'>
                    <Button
                        name={semiVisison}
                        onClick={()=>setSemiShow(!showSemi)}
                    />
                    <Button
                        className='add-task'
                        name={addTask}
                        onClick={()=>dispatch(addSemiTask(id))}
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
                {showSemi != ''&& <SemiTasks tasks={semiTask}/>}
                <i className="fas fa-times" onClick={()=>dispatch(removeTask(id))}/>

            
        </div>
    )
}
export default Task