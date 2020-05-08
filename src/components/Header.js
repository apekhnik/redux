import React from 'react'
import Filterbutton from './FilterButton'
import Title from './Title'
import Form from './Form'
import Badge from './Badge'

const Header = () => {
    return(
        <div className='header'>
            <Badge/>
            <Title text='TODO list'/>
            <Filterbutton/>
            <Form/>
        </div>
    )
}
export default Header