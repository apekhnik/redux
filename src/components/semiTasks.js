import React from 'react'

const SemiTasks = ({tasks}) => {
    return(
        <div>
            {tasks.map(item=><p>{item}</p>)}
        </div>
    )
}
export default SemiTasks