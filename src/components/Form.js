import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/action'



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
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="text" 
                className="form-control" 
                id="exampleInputPassword1"
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}
                />
            </div>
  
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}
export default Form