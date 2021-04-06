import React, { useState } from "react";

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
