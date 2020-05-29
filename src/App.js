import React, { useState } from 'react';
import './App.css';
import Form from './Form';
import Result from './Result';

const App = () => {
  
  
  const spade = ['S', 'H', 'D', 'C'];
  const number = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'X', 'J', 'Q', 'K'];

  // generate all posible cards's combination
  const cards = []
  spade.forEach(S => {
    number.forEach(N => {
      cards.push(S+"-"+N)
    });
  });
  cards.sort( (a, b) => {
    return ( 0.5 - Math.random() )
  })
  

  const [ shuffled , setShuffled ] = useState([]);
  const [ noPlayer, setNoPlayer ] = useState(0);
  const [ noCard, setNoCard ] = useState(0);
  const handleSubmit = noPlayer => {

    // TODO: input validation

    setNoPlayer(noPlayer)
    if (noPlayer > 26)
      setNoCard(1)
    else
      setNoCard(52 / noPlayer)

    // shuffle cards
    setShuffled(
        cards.sort( (a, b) => {
          return ( 0.5 - Math.random() )
        })
    )
    
  }

  const getShuffled = () => {
    return shuffled
  }

  const getNoCard = () => {
    return noCard
  }

  const getNoPlayer = () => {
    return noPlayer
  }

  return (
    <>
    <div>
      <h1>Play Cards</h1>

      <Form handleSubmit={handleSubmit}/>

      <Result shuffled={getShuffled} noCard={getNoCard} noPlayer={getNoPlayer}/>
    </div>

  {/* debug */}
  {/* <div>{cards}</div>
  <div>{noPlayer}</div>
  <div>{noCard}</div>
  <div>{shuffled}</div> */}
    </>
  )
 
}

export default App;
