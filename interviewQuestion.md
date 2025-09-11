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

# ✅ 1. useState

> Definition:
A hook to manage local state in functional components.

> Why use it:
Allows components to track and update state values dynamically.

> Benefits:

- Makes functional components stateful

- Triggers re-render when state updates

> Use case:
A counter `app, toggling visibility, managing form inputs`.