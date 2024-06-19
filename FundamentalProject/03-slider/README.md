- for Icons - npm install react-icons --save
# Error boundaries
- Definition - if your application throws an error during rendering, React will remove its UI from the screen. To prevent this, you can wrap a part of your UI into an error boundary. An error boundary is a special component that lets you display some fallback UI instead of the part that crashed—for example, an error message.
To implement an error boundary component, you need to provide static getDerivedStateFromError which lets you update state in response to an error and display an error message to the user.
You can also optionally implement componentDidCatch to add some extra logic, for example, to log the error to an analytics service.

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