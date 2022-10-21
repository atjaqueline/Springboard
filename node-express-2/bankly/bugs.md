BUG #1:
routes/auth.js POST /register

 Created validation schema for route, helpers/register.json
 Implemented validation in route
 Add tests

BUG #2:
routes/users.js PATCH /:username


 Created validation schema for route, helpers/userUpdate.json
 Implemented validation in route
 Add tests

Fix for BUGS #1-2:
 Installed jsonschema

BUG #3:
routes/user.js GET / returns too much information about users; should only return basic info in this route


 Change SELECT statement in User.findAll to only return username, firstName, lastName
 Add testing to check response data

BUG #4:
routes/user.js PATCH/:username authorization is faulty. Currently denies access for correct user and only allows admin. This auth be moved into middleware that checks to ensure user is same user or is admin to improve scalability of code


 move auth logic from route to middleware/auth.js
 replace requireAdmin with requireAdminOrCorrectUser in route

BUG #5:
middleware/auth.js

authUser is decoding but not verifying JWT


 Verify token

BUG #6:
Token should be sent in request authorization header, not request body

 Update middleware/auth.js authUser to check for token in header rather than body or query string
 Update tests for affected routes
