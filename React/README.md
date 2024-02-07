# Creating and nesting components

* A component is a piece of the UI (user interface) that has its own logic and appearance. A component can be as small as a button, or as large as an entire page.

# Writing markup with JSX

* JSX is a syntax extension for JavaScript that allows you to write HTML directly in your JavaScript code. It is a syntax extension for JavaScript and comes with the full power of JavaScript. You can use JSX inside of React components to describe what the UI should look like.

* JSX is stricter than HTML, and it is not HTML. You'll have to close the tags, and you can't use HTML attributes like `class` and `for`. Instead, you'll use `className` and `htmlFor`.

* JSX is not required to write React applications, but it makes the code more readable and easier to write.

# Adding Styles

In React, you specify a CSS class with className. It works the same way as the HTML class attribute:

```jsx
function App() {
  return (
    <div className="App">
      <header className="App-header">
```

Then you write the CSS rules in a separate file:

```css
.App {
  text-align: center;
}
```

# Displaying data

* You can display data in a React component by using curly braces `{}`. You can use curly braces to embed any JavaScript expression in JSX.

```jsx
function App() {
  const name = 'React';
  return <h1>Hello, {name}</h1>;
}
```

# Conditional rendering

* You can use JavaScript expressions to embed any expression in JSX. You can use the `&&` operator to only render the element if the condition is true. You can also use the ternary operator `condition ? true : false` to conditionally render an element.

```jsx
let content;
if (isLoggedIn) {
  content = <AdminPanel />;
} else {
  content = <LoginForm />;
}
return (
  <div>
    {content}
  </div>
);
```

```jsx
return (
  <div>
    {isLoggedIn && <AdminPanel />}
    {!isLoggedIn && <LoginForm />}
  </div>
);
```

# Rendering lists

* You can use the `map` method to render a list of items in React. You can use the `map` method to transform an array into a new array of elements.

```jsx
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];
```

* Inside your component, you can use the `map` method to render a list of items:

```jsx
const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);
```

# Responding to user events

* You can use the `onClick` event to respond to user events in React. You can use the `onClick` event to run a function when the user clicks on an element.

# Updating the Screen

* React components automatically re-render whenever there is a change in their state or props. You can use the `useState` hook to add state to your components.

```jsx
import React, { useState } from 'react';
```

* You can use the `useState` hook to add state to your components. The `useState` hook returns an array with two elements. The first element is the current state, and the second element is a function that you can use to update the state.

```jsx
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
```

# Using Hooks

