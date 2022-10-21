### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JWT specifies a compact and self-contained method for communicating information as a JSON object between two parties.

- What is the signature portion of the JWT?  What does it do?
Its the third part of the standart. The signature is used to verify that the sender of the JWT is who it says it is and to ensure that the message wasn't changed along the way.

- If a JWT is intercepted, can the attacker see what's inside the payload?
Yes

- How can you implement authentication with a JWT?  Describe how it works at a high level.
Client send a request with username and password to server. Server receive the username and password and authenticate the user. If authentication is sucessful server creates a JWT token that stores user information and sends back to the client

- Compare and contrast unit, integration and end-to-end tests.
 End to End: A helper robot that behaves like a user to click around the app and verify that it functions correctly..Integration: Verify that several units work together in harmony. Unit: Verify that individual, isolated parts work as expected.

- What is a mock? What are some things you would mock?
A mock is a fake function with pre-programmed behavior as well as pre-programmed expectations. We can use a mock to: Verify the contract between the code under test and the external methods that it calls. Verify that an external method is called the correct number of times.

- What is continuous integration?
Continuous integration is focused on automatically building and testing code

- What is an environment variable and what are they used for?
Environment variables help programs know what directory to install files in, where to store temporary files, and where to find user profile settings.

- What is TDD? What are some benefits and drawbacks?
Test-driven development (TDD), also called test-driven design, is a method of implementing software programming that interlaces unit testing, programming and refactoring on source code.

benefits: Developers have less debugging to do, Fewer bugs and errors

drawbacks: Forget to run tests frequently. Write too many tests at once. Write tests that are too large. Write tests that are overly trivial.

- What is the value of using JSONSchema for validation?
it generates clear, human- and machine-readable documentation. It's easy to accurately describe the structure of data in a way that developers can use for automated validation.

- What are some ways to decide which code to test?
Coverage 

- What does `RETURNING` do in SQL? When would you use it?
RETURNING clause allows you to retrieve values of columns (and expressions based on columns) that were modified by an insert, delete or update. 

- What are some differences between Web Sockets and HTTP?
HTTP you have to constantly request updates, with websockets, updates are sent immediately when they are available. 

- Did you prefer using Flask over Express? Why or why not
 I prefered using Express because I was more familiar with javaScript
