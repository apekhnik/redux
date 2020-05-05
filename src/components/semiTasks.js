import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import SemiTask from './semiTask'
import { useSelector } from 'react-redux'
const SemiTasks = ({tasks, parentId}) => {
    
    if(tasks==[]&&tasks==undefined){
        return null
    }
    return(
        <TransitionGroup component='div' className='semi-task'>
            {tasks.map((item, index)=>{
                
                return <CSSTransition
                    classNames='semi-task-item'
                    timeout={300}
                    appear
                >
                    <SemiTask 
                        index={item.id} 
                        item={item.text} 
                        parentId={parentId}    
                    />
                </CSSTransition>
                    
                                
            })}
        </TransitionGroup>
    )
}
export default SemiTasks