import React, { Component } from 'react';
import Form from './components/Form'
import Tasklist from './components/Tasklist';
import Filterbutton from './components/FilterButton';
import './App.css'
const App = () => {
  
  return (
    <div className='container'>
      
      <Filterbutton/>
      <Form/>
      <Tasklist/>
    </div>
  )
}

export default App;
