# Node-Employees

Please note : This code only will work in a local repo since its not pushed to the cloud and also we need to add a whitelist url for the server in MongoDb Config

# It has 4 GET Methods,1 POST Method,1 PUT Method and a DELETE Method

# GET Methods:

1. Method to fetch all employees
# eg: http://localhost:3000/api/employees

2. Method to fetch an employee by employee number
# eg: http://localhost:3000/api/employees/1000
Note: Ideally we pass unique id for this but for readability and easiness I passed employeenumber here

3. Method to fetch all employees in a department
# eg: http://localhost:3000/api/employees/department/2
Note: Since an employee can belong to multiple departments,we can use multiple departmentids but here for readability and easiness Im passing only one.

4. Method to fetch all employees in a salary range
# eg: http://localhost:3000/api/employees/salary/750/1000
Note: We can pass the params in body if we have lot of params but here again for readability and easiness,I have passed like this

# POST Methods
1. Method to insert a new employee
# eg: http://localhost:3000/api/employees

# PUT Methods
1. Method to update an existing employee passing the unique object id
# eg: http://localhost:3000/api/employees/5ef461e4fb40473dbc9fd1f2

# DELETE Methods
1. Method to delete an employee
# eg: http://localhost:3000/api/employees/5ef4625ffb40473dbc9fd1f6
