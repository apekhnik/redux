import React, { useState } from 'react'


const SemiTask = ({index, item}) => {
    const [complete, setComplete] = useState(false)
    const textDecor = complete ? 'line-through' : 'null'
    return(
        <div className='semi-task-item' onClick={()=>setComplete(!complete)}>
            <p style={{textDecoration: textDecor}}>{index+1}. {item}</p>
        </div>
    )
}
export default SemiTask