import React, { Component } from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import Person from './components/Person/Person';
import { Button } from '@material-ui/core'


class App extends Component {

  state = {
    persons: [
     { name: 'Max', age: 27 },
     { name: 'Manu', age: 24 }
    ]
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
       { name: "Maxmillian", age: 27 },
       { name: 'Manu', age: 20 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>App Component</h1>
        <HomeContainer />
        <div style={{marginTop: '15px'}}>
          <Button variant="outlined" color="primary" onClick={this.switchNameHandler}>Switch name </Button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> My hobbies are: Racing </Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        </div>
      </div>
    );
  }
}

export default (App);
