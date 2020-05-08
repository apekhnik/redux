import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/action'
import {useSelector} from 'react-redux'


const Form = () => {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()
    const position = useSelector(state=>state.task.tasks.length)
    const submitTask = e =>{
        e.preventDefault()
        if(inputValue===''||inputValue===null){
            console.log('помылка')
            return
        }
        const newTask = {
            text: inputValue,
            id: position,
            isCompleted: false,
            semiTask:[]
        }
        dispatch(addTask(newTask))
        
        setInputValue('')
    }
    
    return (
        <div className='form'>
            <form onSubmit={submitTask} >
            <div className="form-group">
                <input type="text" 
                className="form-control" 
                id="exampleInputPassword1"
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}
                placeholder='Enter new task'
                />
            </div>
        </form>
        </div>
    )
}
export default Form