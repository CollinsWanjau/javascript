import ShoppingList from "./ShoppingList";
// import Profile from './MyDog'
import MyButton from "./MyButton";
import React, { useState } from 'react'

function App() {

  // Updating the Screen
    const [count, setCount] = useState(0)

    // Responding to events
    function handleClick() {
        setCount(count + 1);
    }
  return (
    <div >
      <h1>Welcome to my app</h1>
      {/* Use button component */}
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      {/* <Profile /> */}
      <ShoppingList />
    </div>
  );
}

export default App;
