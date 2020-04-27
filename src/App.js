import React, { Component } from 'react';
import Form from './components/Form'
import Tasklist from './components/Tasklist';
import Filterbutton from './components/FilterButton';
import './App.css'
import Header from './components/Header';
const App = ({width}) => {
  
  return (
    <div className='container' style={{width: width/2+'px'}}>
      <Header/>
      {/* <Filterbutton/> */}
      <Form/>
      <Tasklist/>
    </div>
  )
}

export default App;
