# useImperativeHandle
- useImperativeHandle is a React Hook that customizes the instance value that is exposed when using React.**forwardRef**. It allows a parent component to imperatively interact with specific functionalities or methods of a child component through a ref.
- This is particularly useful when direct DOM manipulation or exposure of internal methods is necessary, and passing props .

> When to use it:

1. focus / blur an input

2. scroll to a position

3. measure dimensions (getBoundingClientRect)

4. play / pause a video
