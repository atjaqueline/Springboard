### Conceptual Exercise

Answer the following questions below:

- What is PostgreSQL?
It is a database management system

- What is the difference between SQL and PostgreSQL?
PostgreSQL provides different functions of SQL, for example foreign keys, triggers, subqueries

- In `psql`, how do you connect to a database?
psql dbname
\c

- What is the difference between `HAVING` and `WHERE`?
 HAVING is like a WHERE, but applies only to groups as a whole, and the WHERE clause applies to individual rows

- What is the difference between an `INNER` and `OUTER` join?
Inner joins result in the intersection of two tables, and outer joins result in the union of two tables

- What is the difference between a `LEFT OUTER` and `RIGHT OUTER` join?
The left outer returns all the rows from the left table and matching results between both the tables, right is the same but from the right

- What is an ORM? What do they do?
ORM refers to Object-Relational Mapping. It lets you query and manipulate data using a object oriented paradigm

- What are some differences between making HTTP requests using AJAX 
  and from the server side using a library like `requests`?
Web pages are dynamically updated without a full page refresh

- What is CSRF? What is the purpose of the CSRF token?
It is a secure and random token to prevent CSRF attacks.
The purpose of the token is to make sure the requests are coming from the users of the site, and prevent attacks

- What is the purpose of `form.hidden_tag()`?
hidden_tag renders a csrf token for each field in a form 