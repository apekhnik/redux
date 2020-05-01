import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const SemiTasks = ({tasks}) => {
    if(tasks==[]&&tasks==undefined){
        return null
    }
    return(
        <TransitionGroup component='div' className='semi-task'>
            {tasks.map(item=>{
                return <CSSTransition
                    classNames='semi-task-item'
                    timeout={300}
                    appear
                >
                    <div>
                        <p>{item}</p>
                    </div>
                </CSSTransition>
                                    
                                
            })}
        </TransitionGroup>
    )
}
export default SemiTasks