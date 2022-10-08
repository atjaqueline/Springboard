### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
callbacks, promisses and async/await

- What is a Promise?
it is an object or a placeholder for a asynchronous task that will be completed 

- What are the differences between an async function and a regular function?
async functions will always return a promise

- What is the difference between Node.js and Express.js?
express is a framework based on Node

- What is the error-first callback pattern?
it means that in the function the first argument will be the error, meaning that the function will either return an error obj or the data returned by the function

- What is middleware?
is a function to have acess to the request obj, the response obj and the next middleware

- What does the `next` function do?
its the third parameterin the callback, go to the next middleware

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

In my opinion an await is not needed because each return doesn't need or depend on the previous one, it would make more sense to do a promise.all and resolve all promises