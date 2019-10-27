import React from 'react';
import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.css';
import Navbar from "./Navbar";

const Index = () => {
  return(
    <div className='container'>
      <h1 className='text-center'> Gokul Resume </h1>
      <h4 className='text-center'>Full stack web application developer(Ruby on Rails)</h4>
      <div className='sub-element align center'>
        <Navbar />
      </div>
    </div>
  )
};

render(<Index />, document.getElementById('root'));
