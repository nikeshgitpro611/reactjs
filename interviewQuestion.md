# All Hook
| Hook                  | Definition                     | Why Use It                       | Benefits                               |
| --------------------- | ------------------------------ | -------------------------------- | -------------------------------------- |
| `useState`            | Manages local state            | Functional components need state | Easy state updates, triggers re-render |
| `useEffect`           | Handles side effects           | Data fetching, subscriptions     | Lifecycle management, cleanup support  |
| `useContext`          | Accesses shared data           | Avoids prop drilling             | Cleaner global state management        |
| `useReducer`          | Complex state logic            | Actions, multi-value state       | Organized, scalable state handling     |
| `useCallback`         | Memoizes functions             | Avoids re-render issues          | Performance improvements               |
| `useMemo`             | Memoizes computations          | Expensive calculations           | Optimizes renders                      |
| `useRef`              | Persistent values and DOM refs | Store values across renders      | DOM access without re-rendering        |
| `useImperativeHandle` | Customizes ref API             | Expose limited functionalities   | Secure, encapsulated access            |
| `useLayoutEffect`     | Sync effect after DOM updates  | Measure layout                   | Avoid flickering, ensure timing        |
| `useDebugValue`       | Displays debug info            | Help during development          | Easier debugging in DevTools           |
| Custom hooks          | Combines multiple hooks        | Reuse logic                      | Cleaner, maintainable code             |

# ✅ useState

> Definition:
A hook to manage local state in functional components.

> Why use it:
Allows components to track and update state values dynamically.

> Benefits:

- Makes functional components stateful

- Triggers re-render when state updates

> Use case:
A counter `app, toggling visibility, managing form inputs`.

# ✅ useContext (Context API Hook)

 > **Definition**:
A hook that allows you to consume values from React's context without prop drilling.

> **Why use it:**
To access shared data like themes, user authentication, or settings across the component tree.

> **Benefits:**

- Simplifies state sharing between components

- Avoids passing props multiple levels deep

> **Use case:**
Providing and consuming theme settings across a UI.

> **Interview relevance:**
Used to test if you understand global state management without prop drilling.
```
import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function ThemedComponent() {
  const theme = useContext(ThemeContext);
  return <div>Current theme: {theme}</div>;
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <ThemedComponent />
    </ThemeContext.Provider>
  );
}
```
# ✅ useReducer
> **Definition:**
A hook for managing complex state updates via a reducer function.

> **Why use it:**
Helps structure state logic when state changes are based on multiple actions.

**Benefits:**

- Predictable state updates

- Similar pattern to Redux, improving scalability

> **Use case:**
`Form management, state with multiple fields, toggle states`.
```
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch(action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}
```
# useCallback

> **Definition**:
A hook to memoize functions and prevent unnecessary re-creations.

>**Why use it:**
Used to optimize performance by preventing new function instances on every render.

**Benefits:**

- Reduces unnecessary renders when functions are passed as props

- Improves performance in complex UIs

**Use case:**
Passing a function to child components that depends on state.
> **Interview relevance:**
Demonstrates understanding of how to optimize functional components.

```
import React, { useState, useCallback } from 'react';

function Button({ onClick }) {
  console.log('Button rendered');
  return <button onClick={onClick}>Click me</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <Button onClick={handleClick} />
    </div>
  );
}
```
# useMemo
> **Definition:**
A hook to memoize the result of a computation.

> **Why use it:**
Avoids recalculating values on each render if dependencies haven't changed.

**Benefits:**

- Optimizes performance for expensive calculations

- Prevents unnecessary updates

**Use case:**
Caching derived state like filtered or sorted lists.
```
import React, { useState, useMemo } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const double = useMemo(() => {
    console.log('Calculating...');
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Double: {double}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```
# useImperativeHandle

> **Definition:**
A hook to expose custom methods when using ref in child components.

> **Why use it:**
Encapsulates internal logic and exposes only necessary functions.

**Benefits**:

Protects component's internal details

Provides controlled interaction between parent and child

**Use case:**
Building a custom input component that exposes only specific methods.

```
import React, { useRef, forwardRef, useImperativeHandle } from 'react';

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus()
  }));

  return <input ref={inputRef} />;
});

function App() {
  const inputRef = useRef();

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  );
}
```
# useLayoutEffect
> **Definition:**
A hook that runs synchronously after DOM updates but before the browser paints.

> **Why use it:**
Ensures layout-related code executes at the right time, preventing visual glitches.

> **Benefits:**

Helps in measuring and updating layout

Avoids flicker between renders

> **Use case:**
Getting width or height of a component after it's rendered.
> **Interview relevance:**
Tests if you understand lifecycle timings and how layout can be manipulated.
```
import React, { useLayoutEffect, useRef, useState } from 'react';

function App() {
  const divRef = useRef();
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(divRef.current.offsetWidth);
  }, []);

  return (
    <div>
      <div ref={divRef} style={{ width: '300px', background: 'lightblue' }}>Resize Me</div>
      <p>Width: {width}px</p>
    </div>
  );
}
```