### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a javaScript library, developed by Facebook.
It is used to create fast users interfaces for websites and aplications.

- What is Babel?
It is a transpiler that converts the last version of javaScript code into one that the browser understands

- What is JSX?
JSX is a syntax extension to javaScript.It produces React elements and looks like html.

- How is a Component created in React?
function Banner(){
  return <div> Hello World </div>;
}

- What are some difference between state and props?
Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.

- What does "downward data flow" refer to in React?
Refers to the passing of data and/or functions via props from parent to child components. 

- What is a controlled component?
Those in which form's data is handled by the component's state. It takes its current value through props and makes changes through callbacks like onClick, onChange etc

- What is an uncontrolled component?
Uncontrolled Components are the components that are not controlled by the React state and are handled by the DOM

- What is the purpose of the `key` prop when rendering a list of components?
A key is a special string attribute you should include when creating arrays of elements. Key prop helps React identify which items have changed, are added, or are removed

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
Because you are not passing an unique key for each child element in the list. Without a unique key, React couldn't differentiate if the element was removed or just the content is changed.

- Describe useEffect.  What use cases is it used for in React components?
By using useEffect, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
Allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. 

- When would you use a ref? When wouldn't you use one?
You would use ref for accessing and manipulating DOM elements directly.

- What is a custom hook in React? When would you want to write one?
Custom hooks are reusable functions. You would want to write them if you want to reuse the same functionallity.