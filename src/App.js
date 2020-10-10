import React, { useState } from 'react';
import './App.css';
import HomeContainer from './containers/HomeContainer';
import Person from './components/Person/Person';
import { Button } from '@material-ui/core'


const App = () => {


  const [persons, setPersons] = useState([
    { id: 1, name: 'Max', age: 27 },
    { id: 2, name: 'Manu', age: 24 }
  ])

  const [showPersons, setShowPersons] = useState(false)

  const switchNameHandler = (newName) => {
    setPersons([
      { id: 1, name: newName, age: 27 },
      { id: 2, name: 'Manu', age: 20 }
    ])
  }

  const nameChangeHandler = (event, id) => {
    let personIndex = persons.findIndex(p => {
      return p.id === id
    })
    let person = persons[personIndex]
    person.name = event.target.value
    let Persons = [...persons]
    Persons[personIndex] = person
    setPersons(Persons)
  }

  const deletePersonHandler = (personIndex) => {
    const Persons = persons.slice()
    Persons.splice(personIndex, 1)
    setPersons(Persons)
  }

  let displayPersons = null

  if(showPersons) {
    displayPersons = (
      <div>
      { persons.map((person, index) => {
         return(
            <Person 
              key={person.id}
              name={person.name}
              age={person.age}
              click={(event) =>  deletePersonHandler(index)} 
              changed={(event) => nameChangeHandler(event, person.id)}
            > My hobbies are: Racing </Person>
          )
        })
      }
      </div>
    )
  }

  const togglePersons = () => {
    setShowPersons(!showPersons)
  }

  const style = {
    marginRight: '5px'
  }

  return (
    <div className="App">
      <h1>App Component</h1>
      <HomeContainer />
      <div style={{marginTop: '15px'}}>
        <Button variant="outlined" color="secondary" onClick={togglePersons} style={style}>Toggle Persons</Button>
        <Button variant="outlined" color="primary" onClick={switchNameHandler.bind(this, 'Maxmillian')}>Switch name </Button>
        {displayPersons}
      </div>
    </div>
  );
}

export default App;