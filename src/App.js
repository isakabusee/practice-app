import './App.css';
import { ButtonWrapper, UseState, Wrapper } from './components/UseState/UseState';
import React, { useState } from 'react';


function App() {

  const [count, setCount] = useState(4)
   

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  }
  function increaseCount(){
    setCount(prevCount => prevCount + 1)
  }
  
  return (
    <Wrapper>
      <UseState />

      <ButtonWrapper onClick={decrementCount}>-</ButtonWrapper>
      <span>{count}</span>
      <ButtonWrapper onClick={increaseCount}>+</ButtonWrapper>
    </Wrapper>

  );
}

export default App;
