### React - Day -4: React components

[x] Components - In-depth

#### What is a component?

A component is a reusable piece of code that can be used to build elements of a user interface. Components are the building blocks of any React application, and a single application can have any number of components. Components can be nested within other components to allow for complex user interfaces to be built out of simple building blocks.

#### Types of components

There are two types of components in React:

1. **Functional components** - These are the simplest form of a React component. They are just JavaScript functions that return a React element. They are also called stateless components because they do not manage state.

2. **Class components** - These are more complex than functional components. They are JavaScript classes that extend the `React.Component` class. They are also called stateful components because they can manage state.

[x] Component life cycle

The lifecycle of a component refers to the series of events that occur from the time the component is created to the time it is destroyed.

The lifecycle of a component can be broken down into three main phases:

1. **Mounting** - This is the phase in which the component is created and inserted into the DOM. The lifecycle methods that are called during this phase are:

   - `constructor()` - This is the first method that is called when a component is created. It is used to initialize the component's state and bind event handlers.
   - `render()` - This is the method that is called to render the component's UI. It returns a React element that represents the component's output.
   - `componentDidMount()` - This is the method that is called after the component has been inserted into the DOM. It is used to perform any initialization that requires DOM nodes.

2. **Updating** - This is the phase in which the component is updated in response to changes in its props or state. The lifecycle methods that are called during this phase are:

   - `shouldComponentUpdate()` - This is the method that is called to determine if the component should re-render. It returns a boolean value that indicates whether the component should update or not.
   - `render()` - This is the method that is called to render the component's UI. It returns a React element that represents the component's output.
   - `componentDidUpdate()` - This is the method that is called after the component has been updated. It is used to perform any side effects that require DOM nodes.

3. **Unmounting** - This is the phase in which the component is removed from the DOM. The lifecycle method that is called during this phase is:

   - `componentWillUnmount()` - This is the method that is called before the component is removed from the DOM. It is used to perform any cleanup that needs to be done before the component is destroyed.

[x] Stateful and stateless components

Stateful components are components that manage state. They are also called class components because they are implemented as JavaScript classes that extend the `React.Component` class. Stateful components can manage state and have access to lifecycle methods.

State:

- State refers to the data that a component manages. - It is an object that contains data that is used to render the component.
- State is mutable, which means that it can be changed over time.
- It allows a component to keep track of changes to its data and re-render itself when the data changes.

[x] Reusable components  
[x] Passing dynamic data to component  
[x] Introduction to Hook

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

Hooks are functions that let you “hook into” React state and lifecycle features from function components. They do not work inside classes.

Hooks starts with `use` keyword. Some of the hooks are:

- `useState` - This hook is used to add state to a functional component.
- `useEffect` - This hook is used to perform side effects in a functional component.
- `useContext` - This hook is used to access the context in a functional component.
- `useReducer` - This hook is used to manage state in a functional component.

[] props vs state
