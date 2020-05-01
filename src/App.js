import React, { Component } from 'react';
import './App.css'
import TODO from './HOC/TODO'
import Layout from './HOC/Layout';


const App = ({width}) => {
  
  return (
    <Layout>
      <TODO width={width}/>
    </Layout>
  )
}

export default App;
