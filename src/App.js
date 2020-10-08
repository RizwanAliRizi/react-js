import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomeContainer from './containers/HomeContainer'
class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>App Component</h1>
        <HomeContainer />
      </div>
    );
  }
}

export default App;
