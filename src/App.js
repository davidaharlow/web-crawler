import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Search from './Components/Search/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Web Crawler</h1>
        </header>
        <div className="App-search">
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
