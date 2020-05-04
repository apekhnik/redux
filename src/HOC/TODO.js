import React from 'react'
import Header from '../components/Header'
import Form from '../components/Form'
import Tasklist from '../components/Tasklist'
import ErrorBoundary from './ErrorBoundary'
import Footer from '../components/Footer'
const TODO = ({width}) =>{
    const currentWidth  = width < 1366 ? width*0.7 : width/2
    return(
        <div style={{width: currentWidth+'px'}} className='container todo'>
            <Header/>
            
            <ErrorBoundary>
                <Tasklist/>
            </ErrorBoundary>
        </div>
    )
}
export default TODO