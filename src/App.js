import React, { Component } from 'react';
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
