import React from 'react'
import {useSelector} from 'react-redux'
import classnames from 'classnames'
const Button = ({name,onClick}) => {
    const filter = useSelector(state=>state.filter.filter)
    const active = filter==name?'active':null
    const cl = classnames(
        'btn btn-secondary',
        active

    )
    
    return(
    <button onClick={onClick} className={cl}>{name}</button>
    )
}
export default Button
