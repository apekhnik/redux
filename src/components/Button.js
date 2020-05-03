import React from 'react'
import {useSelector} from 'react-redux'
import classnames from 'classnames'
const Button = ({name,onClick, className, disabled, semiTask}) => {
    const filter = useSelector(state=>state.filter.filter)
    const active = filter==name?'active':null
    let anim = semiTask ? 'animCaret': ''
    const cl = classnames(
        className,
        active,
        anim
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
