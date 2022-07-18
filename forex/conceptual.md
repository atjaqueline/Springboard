### Conceptual Exercise

Answer the following questions below:

- What are important differences between Python and JavaScript?

JavaScript can be used to run on the frontend, and python is on server-side programming or backend.


- Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you
  can try to get a missing key (like "c") *without* your programming
  crashing.

  dictionary = {'a': 1, "b": 2} 
  dictionary.get('c', None)

  print(dictionary.get('c', 'Not Found'))

- What is a unit test?

It is the software development process of testing small parts of the application.

- What is an integration test?

It is the test where software modules are integrated logically and tested as a group. For example testing if the shopping cart works as expected

- What is the role of web application framework, like Flask?

Flask gives you tools and libraries to help you build web applications using Python.

- You can pass information to Flask either as a parameter in a route URL
  (like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better fit
  for an application?

do later

- How do you collect data from a URL placeholder parameter using Flask?

request.args.get

- How do you collect data from the query string using Flask?

request.args['<argument name>']

- How do you collect data from the body of the request using Flask?

request.data

- What is a cookie and what kinds of things are they commonly used for?

Cookies are a small piece of data that is stored on your computer when you visit a website. They are used to identify you when you visit the site again, set up preferences, history..

- What is the session object in Flask?

A Session object used to track the session data which is a dictionary object that contains a key-value pairs of the session

- What does Flask's `jsonify()` do?

It is a flask method to return JSON data
