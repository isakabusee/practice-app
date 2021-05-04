import React, { useState } from "react";
import styled from 'styled-components'

export const UseState = () => {
  const [count, seCount] = useState(0);

  console.log("UseState Render");
  return (
    <div>
      <button onClick={() => seCount((c) => c + 1)}>Count - {count}</button>
      {/* <button onClick={() => setTimeout((myFunction, 3000))}>MyButton</button> */}
    </div>
  );
};
 export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  flex-direction: column;
  align-items:center;
  
 `
 export const ButtonWrapper = styled.button`
 display:flex;
 align-self:center;
 background-color: gray;
 color: white;
 width: 50px;
 border-radius: 50px;
 `
