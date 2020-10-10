import React from 'react';

const person = (props) => {
  return (
    <div className="App">
      <h1 onClick={props.click}>Hi, I'm {props.name} and {props.age} years old.!</h1>
      <p>{props.children}</p>
    </div>
  )
}

export default person;
