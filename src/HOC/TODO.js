import React from 'react'
import Header from '../components/Header'
import Form from '../components/Form'
import Tasklist from '../components/Tasklist'
import ErrorBoundary from './ErrorBoundary'
import Footer from '../components/Footer'
const TODO = ({width}) =>{
    return(
        <div style={{width: width/2+'px'}} className='container todo'>
            <Header/>
            <Form/>
            <ErrorBoundary>
                <Tasklist/>
            </ErrorBoundary>
            <Footer/>
        </div>
    )
}
export default TODO