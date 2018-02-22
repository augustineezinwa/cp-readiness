import React from 'react';
import logo from './logo.svg';
import './styles.css';

const Header = (props) => {
    return ( <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="App-title">Welcome to My React Todo App
      
      </div>
    </header>
  </div>);

}

export default Header;