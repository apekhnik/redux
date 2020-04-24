import React from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import {changeFilter} from '../redux/action'
const buttons = [
    {filter: 'all'},{filter: 'completed'},{filter: 'active'},
]
const Filterbutton = () => {
    const dispatch = useDispatch()
    
    return(
        <div className='btn-group'>
            {buttons.map(btn=><Button name={btn.filter} onClick={()=>dispatch(changeFilter(btn.filter))}/>)}
        </div>
    )
}
export default Filterbutton