import React from 'react'


const AlertComponent = ({text}) =>{
    return(
        <div className="alert alert-danger alert-component" role="alert">
             {text}
        </div>
    )
}
export default AlertComponent