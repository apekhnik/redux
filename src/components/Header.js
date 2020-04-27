import React from 'react'
import Filterbutton from './FilterButton'
import Title from './Title'

const Header = () => {
    return(
        <div style={{position: 'relative'}}>
            <Title text='TODO'/>
            <Filterbutton/>
        </div>
    )
}
export default Header