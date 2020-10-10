import React from 'react';

const person = (props) => {
  return (React.createElement('div', {className: 'App'}, React.createElement('h1', null, `Hi, I'm  ${props.name} and ${props.age} years old.!`), React.createElement('p', null, `${props.children ? props.children : ''}`)))
}

export default person;
