import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/action'
import Filterbutton from './FilterButton'


const Form = () => {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()
    const submitTask = e =>{
        e.preventDefault()
        const newTask = {
            text: inputValue,
            id: Date.now(),
            isCompleted: false
        }
        dispatch(addTask(newTask))
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