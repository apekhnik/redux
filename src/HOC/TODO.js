import React from 'react'
import Header from '../components/Header'
import Form from '../components/Form'
import Tasklist from '../components/Tasklist'
import ErrorBoundary from './ErrorBoundary'
import Footer from '../components/Footer'
import AlertComponent from '../components/AlertComponent'
import { useSelector } from 'react-redux'
import {Animated} from "react-animated-css"

const TODO = ({width}) =>{
    const currentWidth  = width < 1366 ? width*0.7 : width/2
    const hasError = useSelector(state=>state.error)
    
    return(
        <div style={{width: currentWidth+'px'}} className='container todo'>
            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={hasError.error} >
                <AlertComponent text={hasError.text}/>
            </Animated>
            <Header/>
            <ErrorBoundary>
                <Tasklist/>
            </ErrorBoundary>
        </div>
    )
}
export default TODO