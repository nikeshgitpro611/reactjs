- for Icons - npm install react-icons --save
# Error boundaries
- introduce in react16
- It will be handle unexpected errors related 
- the entire application doesn't crash due to an error in a small part of the component.
- catch js error in child component tree and log thes error and display Fallback Ui.
- it was introduced in react-16
- mostely we have two type of method.
01. getDrivedStateFromError().
- This method updates the state to display a fallback UI when an error is encountered.
02. componentDidCatch().
- This method logs error details for debugging.


# Error Bondary will not work 
- Event Handling
- Async code like setime out
- server side rendring
- 
> # How to creat Error boundaries
- Create a new file named ErrorBoundary.js.
- Define a class component that implements the error boundary logic.
- 