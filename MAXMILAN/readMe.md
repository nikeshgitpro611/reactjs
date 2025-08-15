**NOTE**

> REPO : https://github.com/academind/react-complete-guide-course-resources/tree/main/code/05%20Essentials%20Practice/01-starting-project

1.  Investment Project
2.  # reff and portal

- accessing dom element by reff
- enabling actions like focusing an input field, managing media playback, or triggering imperative animations.
- Refs can hold mutable values that persist across component re-renders without causing a re-render themselves.

- **Do not overuse refs —** direct DOM manipulation breaks React’s declarative approach.

**Types of refs**

- useRef() → for function components (most common)

- createRef() → for class components

- Callback refs → when you want more control over ref assignment



```
Refs vs State in React
Feature	State	Ref
Purpose	Stores reactive data that affects the UI.	Stores non-reactive data or DOM references.
Triggers re-render?	✅ Yes, changing state re-renders the component.	❌ No, changing ref.current does not cause a re-render.
Usage	Used for anything that needs to show on the screen or affect rendering logic.	Used for:
• Accessing DOM elements
• Storing values between renders
• Holding instance variables.
Persistence across renders	✅ State persists until changed, but requires setState or setX to update.	✅ Ref persists across renders without causing them.
Updating value	Done with setState function, asynchronous in nature.	Directly assign: myRef.current = newValue.
React control	React tracks changes for reconciliation.	React ignores changes (no reconciliation).
```
