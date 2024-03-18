### React- Day -5: React Hooks

#### Contents:

[x] What is the hook?

Hooks are functions that let you “hook into” React state and lifecycle features from function components.

Why we need hooks?

Hooks essentially enable you to write stateful functional components, which means you can write components in a more functional style and avoid using class components.

Normal Variable Vs State Variable

- normal variable is used to store the data which will not cause the re-render of the component.
- state variable is used to store the data which will cause the re-render of the component.

[x] Lifecycle of Hooks

- Hooks doesn't have lifecycle methods like class components. But instead they have a set of rules that govern when they are called.

Rules of hooks:

- Only call hooks at the top level
- Only call hooks from React function components
- Do not use hooks inside loops, conditions or nested functions

[x] useState, useEffect

useEffect:

- It is used to perform side effects in your functional components.
- For example: data fetching, subscriptions, or manually changing the DOM in React components.

[x] Props drilling
[x] Passing data from child to parent component
[x] lifting the state up  
[] props vs state
[] fontawesome and bootstrap - react installation
[] email otp api
[] closure

Task:

https://docs.google.com/document/d/1frCM6keoI6YKQqxm0XbgEP2CCZjDH5Zi8wEp_NXtk2g/edit

Virtual DOM:

- The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.
- This will update the real DOM only if there is any change in the virtual DOM.
- This will make the application faster.
