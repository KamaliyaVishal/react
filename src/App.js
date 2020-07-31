import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navbar dark color='info'>
        <div className='container'>
          <NavbarBrand href='/'>React Webapp</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
