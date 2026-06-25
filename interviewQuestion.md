# All Hook
| Hook                  | Definition                     | Why Use It                       | Benefits                               |
| --------------------- | ------------------------------ | -------------------------------- | -------------------------------------- |
| `useState`            | Manages local state            | Functional components need state | Easy state updates, triggers re-render |
| `useEffect`           | Handles side effects           | Data fetching, subscriptions     | Lifecycle management, cleanup support  |
| `useContext`          | Accesses shared data           | Avoids prop drilling             | Cleaner global state management        |
| `useReducer`          | Complex state logic            | Actions, multi-value state       | Organized, scalable state handling     |
| `useCallback`         | Memoizes functions             | Avoids re-render issues          | Performance improvements               |
| `useMemo`             | Memoizes computations          | Expensive calculations           | Optimizes -=    renders                      |
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
# REACT ROUTER

React Router is a popular library used for `client-side routing in React applications`. It enables navigation between components and manages URL paths `without refreshing the page`.

| Hook          | Definition                 | Why Use It                   | Benefits                                | Use Case                       |
| ------------- | -------------------------- | ---------------------------- | --------------------------------------- | ------------------------------ |
| `useNavigate` | Navigates programmatically | Move users after actions     | Controlled navigation without reload    | Redirect after form submission |
| `useParams`   | Reads URL params           | Access dynamic route data    | Simplifies data fetching and routing    | User or product detail pages   |
| `useLocation` | Accesses URL info          | Track pathname, search, hash | Helps with analytics and query handling | Show content based on query    |
| `useMatch`    | Matches route patterns     | Identify active links        | Improve navigation UI                   | Highlight current page link    |

# ✅ useNavigate

Definition:
A hook that returns a function to programmatically navigate between routes.

> Why use it:
It allows components to change routes without using <Link>, useful for redirects or after actions like form submission.

**Benefits**:

- Navigation can be triggered by logic (e.g., after a successful operation)

- Keeps navigation within React’s routing system

- Simplifies routing without page reloads

**Use case:**
`Navigate to another page after submitting a form or on button click.`

```
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import UserProfile from './UserProfile';
import UserDetails from './UserDetails';
import UserSettings from './UserSettings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Nested route for user profile */}
        <Route path="/user/:userId" element={<UserProfile />}>
          <Route path="details" element={<UserDetails />} />
          <Route path="settings" element={<UserSettings />} />
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
```
```
import { useParams, Outlet, Link } from 'react-router-dom';

function UserProfile() {
  const { userId } = useParams();

  return (
    <div>
      <h1>User Profile for ID: {userId}</h1>
      <nav>
        <Link to="details">Details</Link> |{' '}
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default UserProfile;
```
`<Outlet /> component to render child routes.`

```
function UserDetails() {
  return (
    <div>
      <h2>User Details Section</h2>
      <p>Here are more details about the user.</p>
    </div>
  );
}

export default UserDetails;
```
```
function UserSettings() {
  return (
    <div>
      <h2>User Settings Section</h2>
      <p>Configure user preferences here.</p>
    </div>
  );
}

export default UserSettings;
```
<Outlet />	Placeholder for rendering child routes

# useParams	Used to access dynamic segments like userId







# ::::::::::::::JS::::::::::::::::::: START 🍭

> Array.from 
 it creates a new, shallow-copied array from an array-like or iterable object.

 ```
 function demo() {
  console.log(arguments); // array-like object
  const arr = Array.from(arguments);
  console.log(arr); // [1, 2, 3]
}

demo(1, 2, 3);


**Use with Set or Map to convert into an array**

const set = new Set([1, 2, 3]);
const arr = Array.from(set);
console.log(arr); // [1, 2, 3]

const map = new Map([[1, 'a'], [2, 'b']]);
const arr2 = Array.from(map);
console.log(arr2); // [[1, 'a'], [2, 'b']]



Generate a range or sequence

const range = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(range); // [1, 2, 3, 4, 5]

Apply mapping function directly (like map)

const squares = Array.from([1, 2, 3, 4], x => x * x);
console.log(squares); // [1, 4, 9, 16]

Flatten objects with custom logic
const num = 12345;
const digits = Array.from(String(num), Number);
console.log(digits); // [1, 2, 3, 4, 5]

```
# react performance optimization Hook

Prevent expensive re-renders → useMemo, useCallback, React.memo.

Avoid unnecessary recalculations → useMemo.

Persist values without re-rendering → useRef.

Handle heavy updates smoothly → useTransition, useDeferredValue.

**useMemo →** avoid recalculating filtered list.

**useCallback →** prevent re-creating event handlers.

**React.memo →** prevent child re-renders if props didn’t change.

**useDeferredValue →** smooth typing experience.


```
import React, { useState, useMemo, useCallback, useDeferredValue } from "react";

// ✅ Child Component (memoized)
const ProductRow = React.memo(({ product }) => {
  console.log("Rendering:", product.name); // Check re-renders
  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>${product.price}</td>
    </tr>
  );
});

export default function ProductTable() {
  const [search, setSearch] = useState("");

  const products = [
    { id: 1, name: "Dell Laptop", price: 800 },
    { id: 2, name: "Lenovo Laptop", price: 700 },
    { id: 3, name: "HP Laptop", price: 600 },
    { id: 4, name: "Apple MacBook", price: 1200 },
  ];

  // ✅ useDeferredValue → delay applying search (smooth typing)
  const deferredSearch = useDeferredValue(search);

  // ✅ useMemo → avoid recalculating filter every render
  const filteredProducts = useMemo(() => {
    console.log("Filtering...");
    return products.filter((p) =>
      p.name.toLowerCase().includes(deferredSearch.toLowerCase())
    );
  }, [deferredSearch, products]);

  // ✅ useCallback → memoize handler
  const handleChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  return (
    <div>
      <h2>Product Search</h2>
      <input
        type="text"
        value={search}
        placeholder="Search laptops..."
        onChange={handleChange}
      />
      <table border="1" style={{ marginTop: "10px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((p) => (
            <ProductRow key={p.id} product={p} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

---

## Section 1: Introduction

### Pros and Cons of React

#### Q1: What are the pros and cons of React?

**Pros of React:**

1. **Component-Based Architecture**
   - Reusable components promote DRY principles
   - Easier to maintain and scale applications
   - Encapsulated logic and UI in single units

2. **Virtual DOM**
   - Efficient rendering and updates
   - Better performance compared to direct DOM manipulation
   - Minimizes expensive DOM operations

3. **Strong Community & Ecosystem**
   - Extensive third-party libraries and tools
   - Large community support and resources
   - Regular updates and improvements

4. **JSX Syntax**
   - Combines JavaScript and HTML-like syntax
   - Better code readability
   - Compile-time error checking

5. **Unidirectional Data Flow**
   - Predictable state management
   - Easier debugging and testing
   - Better control over application state

6. **React Hooks**
   - Simplified state management in functional components
   - Better code reusability with custom hooks
   - Cleaner code without class components

7. **SEO Friendly**
   - Server-side rendering (SSR) with Next.js
   - Better initial page load performance
   - Improved search engine indexing

8. **Developer Tools**
   - Excellent React DevTools for debugging
   - Hot Module Replacement (HMR)
   - Time-travel debugging with Redux DevTools

**Cons of React:**

1. **Steep Learning Curve**
   - JSX syntax can be confusing initially
   - Understanding concepts like hooks, context, and lifecycle
   - Need to learn additional libraries for routing, state management

2. **Rapid Development Pace**
   - Frequent updates and changes
   - Documentation may become outdated quickly
   - Need to constantly update skills

3. **Just a View Library**
   - Not a complete framework
   - Requires additional libraries for routing, state management, HTTP calls
   - More decisions to make about architecture

4. **JSX as a Barrier**
   - Some developers find mixing HTML with JavaScript confusing
   - Additional build step required
   - Learning curve for new developers

5. **Poor Documentation**
   - Official documentation sometimes lacks depth
   - Rapid changes make tutorials outdated
   - Community-driven documentation quality varies

6. **SEO Challenges**
   - Client-side rendering can hurt SEO (without SSR)
   - Requires additional setup for SEO optimization
   - Initial page load may be slower

---

#### Q2: How you can compare it to Angular?

**React vs Angular Comparison:**

| Aspect | React | Angular |
|--------|-------|---------|
| **Type** | JavaScript library | Full-fledged framework |
| **Language** | JavaScript/JSX | TypeScript (mandatory) |
| **Learning Curve** | Moderate | Steep |
| **Architecture** | Component-based | MVC/MVVM |
| **Data Binding** | Unidirectional | Two-way binding |
| **DOM** | Virtual DOM | Real DOM |
| **Performance** | Faster (Virtual DOM) | Slower (Real DOM) |
| **State Management** | Redux, Context API, Zustand | RxJS, NgRx |
| **Routing** | React Router (external) | Built-in (@angular/router) |
| **Dependency Injection** | Not built-in | Built-in |
| **Mobile Development** | React Native | Ionic, NativeScript |
| **Bundle Size** | Smaller | Larger |
| **Flexibility** | High (choose your tools) | Low (opinionated) |
| **Testing** | Jest, React Testing Library | Jasmine, Karma (built-in) |
| **Community** | Larger | Large but smaller than React |
| **Backed By** | Meta (Facebook) | Google |

**Key Differences:**

1. **Framework vs Library**
   - Angular is a complete framework with everything built-in
   - React is a library focused on UI, requiring additional libraries

2. **Learning Complexity**
   - React: Easier to start, learn JSX and components
   - Angular: Steeper curve, must learn TypeScript, decorators, modules, services

3. **Flexibility**
   - React: More flexible, choose your own tools
   - Angular: Opinionated, follows specific patterns

4. **Performance**
   - React: Virtual DOM provides better performance
   - Angular: Change detection can be slower in large apps

5. **Use Cases**
   - React: Better for dynamic, interactive UIs and SPAs
   - Angular: Better for large enterprise applications with complex requirements

**When to Choose React:**
- Need flexibility in choosing libraries
- Prefer lightweight solution
- Building dynamic, interactive UIs
- Want faster development with reusable components
- Team comfortable with JavaScript

**When to Choose Angular:**
- Building large enterprise applications
- Need complete framework with everything built-in
- Team prefers TypeScript
- Want strong opinions and structure
- Need built-in features like dependency injection

---

### How to create React application?

#### Q1: How do you prefer to generate your React application?

**My Preferred Method: Vite**

I prefer using **Vite** for creating React applications because:

1. **Lightning Fast**
   - Instant server start
   - Hot Module Replacement (HMR) is extremely fast
   - Optimized build times

2. **Modern Tooling**
   - Uses native ES modules
   - Built on esbuild for fast bundling
   - Better developer experience

3. **Simple Configuration**
   - Minimal configuration required
   - Easy to customize
   - Clean project structure

4. **Better Performance**
   - Faster than Create React App
   - Smaller bundle sizes
   - Optimized production builds

**Command:**
```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
```

---

#### Q2: What are the ways to create a React application?

**1. Create React App (CRA)**
```bash
npx create-react-app my-app
cd my-app
npm start
```

**Pros:**
- Official React tool
- Zero configuration
- Good for beginners
- Includes testing setup

**Cons:**
- Slower build times
- Larger bundle size
- Less flexible configuration
- Maintenance mode (not actively developed)

---

**2. Vite**
```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

**Pros:**
- Extremely fast
- Modern tooling
- Smaller bundle sizes
- Easy configuration

**Cons:**
- Relatively newer
- Smaller community compared to CRA

---

**3. Next.js (React Framework)**
```bash
npx create-next-app@latest my-app
cd my-app
npm run dev
```

**Pros:**
- Server-side rendering (SSR)
- Static site generation (SSG)
- Built-in routing
- API routes
- SEO friendly
- Image optimization

**Cons:**
- More complex
- Opinionated structure
- Larger learning curve

---

**4. Manual Setup with Webpack**
```bash
mkdir my-app
cd my-app
npm init -y
npm install react react-dom
npm install --save-dev webpack webpack-cli webpack-dev-server
npm install --save-dev @babel/core @babel/preset-react babel-loader
npm install --save-dev html-webpack-plugin
```

**Pros:**
- Complete control
- Custom configuration
- Learn build tools deeply

**Cons:**
- Time-consuming
- Complex setup
- Need to configure everything manually

---

**5. Parcel**
```bash
mkdir my-app
cd my-app
npm init -y
npm install react react-dom
npm install --save-dev parcel
```

**Pros:**
- Zero configuration
- Fast bundling
- Simple setup

**Cons:**
- Less popular
- Smaller ecosystem

---

**6. Remix**
```bash
npx create-remix@latest my-app
cd my-app
npm run dev
```

**Pros:**
- Modern React framework
- Excellent routing
- Built-in data loading
- Progressive enhancement

**Cons:**
- Newer framework
- Smaller community

---

**Comparison Table:**

| Tool | Speed | Configuration | Best For | Learning Curve |
|------|-------|---------------|----------|----------------|
| **CRA** | Slow | Zero | Beginners | Easy |
| **Vite** | Very Fast | Minimal | Modern apps | Easy |
| **Next.js** | Fast | Minimal | SSR/SSG apps | Moderate |
| **Webpack** | Moderate | Full control | Custom needs | Hard |
| **Parcel** | Fast | Zero | Simple projects | Easy |
| **Remix** | Fast | Minimal | Full-stack apps | Moderate |

---

**My Recommendation:**

- **For Learning:** Start with **Vite** or **Create React App**
- **For Production:** Use **Vite** for SPAs, **Next.js** for SSR/SSG
- **For Enterprise:** **Next.js** or **Remix**
- **For Custom Needs:** Manual setup with **Webpack**

**Current Best Practice (2026):**
```bash
# Vite is the modern standard
npm create vite@latest my-react-app -- --template react

# For TypeScript
npm create vite@latest my-react-app -- --template react-ts

# For Next.js (SSR/SSG)
npx create-next-app@latest my-app
```
## What is DOM?

We know that the DOM (Document Object Model) is an interface for HTML. When a browser loads an HTML file, it converts the HTML elements into a tree-like structure of objects. This process is called DOM creation. The DOM allows JavaScript to access, modify, and manipulate the content, structure, and styles of a web page dynamically.

## What is Virtual DOM?

The Virtual DOM (VDOM) is a programming concept that represents the structure of a user interface as a tree of objects. It is used to efficiently update the user interface when changes occur. Unlike the traditional DOM, which directly manipulates the actual DOM, the VDOM is an in-memory representation of the DOM.

### What is Event?

 **Definition** An event is an action or occurrence in the browser, such as a mouse click, key press, form submission, or page load, that can be detected and handled by JavaScript.

 **Example** When the button is clicked, the browser generates a Click Event and JavaScript executes the callback function.

 ## Browser Follow Three Event Phase:

  1. Capturing Phase(Top → Bottom) - The event starts at the window object and travels down to the target element.such as Document, body, and so on.

  2. Target Phase - The event is triggered at the target element. such as a click event.

  3. Bubbling Phase(Bottom → Top) - The event starts at the target element and travels up to the window object.

  ## What is Reconciliation?

  **React uses a comparison algorithm called Reconciliation.** It compares the current VDOM with the previous VDOM and updates the actual DOM only when there are differences. This makes the rendering process efficient and prevents unnecessary updates to the actual DOM.

  ## Why do we use className instead of class in React?

  **In React, we use className instead of class because class is a reserved keyword in JavaScript.** It is used to define a class of an object, but in HTML, we use the class attribute to define a class for an element. Therefore, React uses className to avoid conflicts with the reserved keyword.

### Why is Props?
  
  **Props** are used to pass data from a parent component to a child component in React. Props are immutable and follow one-way data flow. Passing props through multiple nested components is called prop drilling.

  ***Cross Question:***

  Q - What is the difference between controlled and uncontrolled components in React?

  **Answer:** Controlled components are components where the value of the input is controlled by the React component. In other words, the value of the input is stored in the state of the component. On the other hand, uncontrolled components are components where the value of the input is not controlled by the React component. Instead, the value of the input is stored in the DOM.

  <u>**useReff Hook is Uncontrolled Component.**</u>

  This reference such as reff ={} can be used to access the DOM element and manipulate it directly.

   
  **Uncontrolled Component** An uncontrolled component stores data inside the DOM itself.React does not control the input value.

  **Cross Question:** How do you handle form submission in React?

  **Answer:** In React, form submission is handled using the onSubmit event handler. The event handler is called when the form is submitted, and it prevents the default form submission behavior. Instead, the event handler calls a function that handles the form submission, such as sending the form data to a server.

  **Cross Question:** What is the purpose of the key prop in React?

  **Answer:** The key prop in React is used to uniquely identify each element in a list. It is used by React to efficiently update and re-render the list when the data changes. Without the key prop, React would have to re-render the entire list every time the data changes, which can be inefficient and lead to performance issues.

  **Cross Question:** What is the purpose of the ref prop in React?

  **Answer:** The ref prop in React is used to create a reference to a DOM element or a React component. It is used to access the DOM element or component and perform operations on it, such as focusing on an input field or calling a method on a component.


  

