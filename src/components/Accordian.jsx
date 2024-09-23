

function Accordian() {
    return (
        <div className="accordian_width mx-auto mt-10 text-center shadow-amber-300">
            <span className="text-2xl font-semibold text-orange-600 shadow-xl ">𝓕𝓻𝓮𝓺𝓾𝓮𝓷𝓽 𝓠𝓾𝓮𝓼𝓽𝓲𝓸𝓷𝓼!!</span>
            <div className="collapse collapse-arrow bg-red-200 mt-10">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">What is react.js and explain the concept of "components" in react.</div>
  <div className="collapse-content">
    <p>React.js is a popular JavaScript library used for building user interfaces, particularly for single-page applications. It allows developers to create reusable UI components that manage their own state.

Components are the building blocks of a React application. A component can be thought of as a self-contained piece of the UI that can be reused and composed with other components. There are two main types of components in React:

Class Components: Traditionally used before the introduction of Hooks, these components are ES6 classes that extend React.Component and must include a render() method to display UI.

Functional Components: Introduced with React Hooks, these are simpler functions that return JSX. They can now manage state and side effects, making them more powerful.

Components can accept props (properties) and manage their own state, making them dynamic and interactive.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-red-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">What is jsx in react, and how does it work?</div>
  <div className="collapse-content">
    <p>JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It allows developers to write UI elements in a declarative way. JSX makes it easier to create React elements by combining the power of JavaScript with a syntax that closely resembles HTML.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-red-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">What is the virtual dom, and how does react use it to optimize performance?</div>
  <div className="collapse-content">
    <p>The Virtual DOM is a lightweight representation of the actual DOM. Instead of directly manipulating the DOM (which is slow), React creates a Virtual DOM where it performs all its updates.

When a component's state changes, React:

Creates a new Virtual DOM representation of the UI.
Compares it with the previous Virtual DOM (a process called "reconciliation").
Identifies the differences (or "diffs") between the two.
Only updates the real DOM where changes occurred.
This efficient approach minimizes direct DOM manipulations, leading to improved performance and a smoother user experience.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-red-200">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">Explain the concept of "props" in react and how they are used</div>
  <div className="collapse-content">
    <p>Props (short for properties) are used to pass data from one component to another, usually from a parent component to a child component. They allow components to be dynamic and configurable.

Props are read-only and cannot be modified by the component that receives them, ensuring a unidirectional data flow.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-red-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">What is "state" in react, and how does it differ from props?</div>
  <div className="collapse-content">
    <p>State is a built-in object that allows components to manage their own data. Unlike props, which are passed down from parent to child, state is local and can be changed within the component.

State is used for data that changes over time or in response to user actions.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-red-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Usestate hook</div>
  <div className="collapse-content">
    <p>The useState hook in React is used to add state management to functional components. It allows you to declare a state variable and a function to update that variable. The useState hook takes the initial state as an argument and returns an array containing the current state and the state updater function.</p>
  </div>
</div>      <div className="collapse collapse-arrow bg-red-200">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">useEffect Hook</div>
  <div className="collapse-content">
    <p>The useEffect hook is used to perform side effects in functional components. Side effects can include data fetching, subscriptions, or manually changing the DOM. The useEffect hook runs after the render phase, and you can specify dependencies to control when it runs.

When to Use:

To fetch data when the component mounts or when dependencies change.
To subscribe to an event or API and clean up when the component unmounts or dependencies change.
To manipulate the DOM directly after rendering.</p>
  </div>
</div>

        </div>
    );
}

export default Accordian;