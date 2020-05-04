import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import SemiTask from './semiTask'
const SemiTasks = ({tasks}) => {
    if(tasks==[]&&tasks==undefined){
        return null
    }
    return(
        <TransitionGroup component='div' className='semi-task jello'>
            {tasks.map((item, index)=>{
                return <CSSTransition
                    classNames='semi-task-item'
                    timeout={300}
                    appear
                >
                    <SemiTask index={index} item={item}/>
                </CSSTransition>
                                    
                                
            })}
        </TransitionGroup>
    )
}
export default SemiTasks