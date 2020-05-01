import React from 'react'
import {useSelector} from 'react-redux'
import classnames from 'classnames'
const Button = ({name,onClick, className, disabled}) => {
    const filter = useSelector(state=>state.filter.filter)
    const active = filter==name?'active':null
    const cl = classnames(
        className,
        active
    )
    
    return(
            <button 
                onClick={onClick} 
                className={cl} 
                disabled={disabled}>
                {name}
            </button>
    )
}
export default Button
