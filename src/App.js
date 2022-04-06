import './App.css';
import { ButtonWrapper, UseState, Wrapper } from './components/UseState/UseState';
import React, { useState, useEffect } from 'react';


function App() {

  const [count, setCount] = useState(4);
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {response.json()})
    .then(data => {setUsers(data)})
  }

  useEffect(() => {
    fetchData()
  }, [])
   

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  }
  function increaseCount(){
    setCount(prevCount => prevCount + 1)
  }
  
  return (
    <>
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
    <Wrapper>
      <UseState />

      <ButtonWrapper onClick={decrementCount}>-</ButtonWrapper>
      <span>{count}</span>
      <ButtonWrapper onClick={increaseCount}>+</ButtonWrapper>
    </Wrapper>
    </>

  );
}

export default App;
