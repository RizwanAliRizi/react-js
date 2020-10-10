import React, { useState } from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import Person from './components/Person/Person';
import { Button } from '@material-ui/core'


const App = () => {


  const [persons, setPersons] = useState([
    { name: 'Max', age: 27 },
    { name: 'Manu', age: 24 }
  ])

  const switchNameHandler = (newName) => {
    setPersons([
      { name: newName, age: 27 },
      { name: 'Manu', age: 20 }
    ])
  }

  return (
    <div className="App">
      <h1>App Component</h1>
      <HomeContainer />
      <div style={{marginTop: '15px'}}>
        <Button variant="outlined" color="primary" onClick={switchNameHandler.bind(this, 'Maxmillian')}>Switch name </Button>
        <Person name={persons[0].name} age={persons[0].age} click={() =>  switchNameHandler('Max!')}> My hobbies are: Racing </Person>
        <Person name={persons[1].name} age={persons[1].age} />
      </div>
    </div>
  );
}

export default App;