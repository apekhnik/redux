import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/action'
import Filterbutton from './FilterButton'
import {useSelector} from 'react-redux'
import Axios from 'axios'

const Form = () => {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()
    const position = useSelector(state=>state.task.tasks.length)
    const submitTask = e =>{
        e.preventDefault()
        const newTask = {
            text: inputValue,
            id: position,
            isCompleted: false,
            semiTask:[]
        }
        dispatch(addTask(newTask))
        // Axios.post('https://todo-3de33.firebaseio.com/tasks/task.json',newTask)
        //         .then(response=>{
        //             console.log(response)
        //         })
        setInputValue('')
    }
    
    return (
        <form onSubmit={submitTask}>
            <div className="form-group">
                <input type="text" 
                className="form-control" 
                id="exampleInputPassword1"
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}
                />
            </div>
            
        </form>
    )
}
export default Form