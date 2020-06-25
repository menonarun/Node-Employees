const Employee = require('../models/employee');

exports.getAllEmployees = (req, res, next) => {
  Employee.find().then((employees) => {
    res.status(200).json({
      message: 'Employees fetched suceessfully!!!',
      data: employees
    });
  })
    .catch(error => {
      res.status(500).json({
        message: 'Fetching Employees Failed!'
      })
    });
};

exports.getEmployeeById = (req, res, next) => {
  Employee.findOne({ employeeNumber: req.params.id })
    .then((employee) => {
      if (employee) {
        res.status(200).json(employee);
      }
      else {
        res.status(404).json({
          message: 'Employee Not Found!!!'
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: 'Fetching Employee Failed!',
        error: error
      })
    });
};

exports.getEmployeesByDepartment = (req, res, next) => {
  let departmentid = req.params.id;
  Employee.find({ "department.departmentid": +departmentid })
    .then((employee) => {
      if (employee.length > 0) {
        res.status(200).json(employee);
      }
      else {
        res.status(404).json({
          message: 'Employee Not Found!!!'
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: 'Fetching Employee Failed!',
        error: error
      })
    });
};

exports.getEmployeesBySalaryRange = (req, res, next) => {
  let r1 = +req.params.r1;
  let r2 = +req.params.r2;

  Employee.find({ "salary": { $lte: r2, $gte: r1 } })
    .then((employee) => {
      if (employee.length > 0) {
        res.status(200).json(employee);
      }
      else {
        res.status(404).json({
          message: 'Employees Not Found!!!'
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: 'Fetching Employee Failed!',
        error: error
      })
    });


};

exports.createEmployee = (req, res, next) => {
  let deptdetails = [];
  for (let i = 0; i < req.body.department.length; i++) {
    deptdetails.push({
      departmentid: req.body.department[i].departmentid,
      departmentname: req.body.department[i].departmentname
    })
  };
  
  const employee = new Employee({
    employeeNumber: req.body.employeeNumber,
    name: req.body.name,
    address: req.body.address,
    department: deptdetails,
    salary: req.body.salary
  });

  employee.save().then((createdEmployee) => {
    res.status(201).json({
      message: 'Employee Inserted sucessfully!!! ',
      post: {
        ...createdEmployee,
        id: createdEmployee._id
      }
    })
  })
    .catch(error => {
      res.status(500).json({
        message: 'Employee Creation failed!',
        error: error
      });
    });
};

exports.updateEmployee = (req, res, next) => {
  let deptdetails = [];
  for (let i = 0; i < req.body.department.length; i++) {
    deptdetails.push({
      departmentid: req.body.department[i].departmentid,
      departmentname: req.body.department[i].departmentname
    })
  };
  const employee = new Employee({
    _id: req.body.id,
    employeeNumber: req.body.employeeNumber,
    name: req.body.name,
    address: req.body.address,
    department: deptdetails,
    salary: req.body.salary
  });

  Employee.updateOne({ _id: req.params.id }, employee)
    .then((result) => {
      if (result.n > 0) {
        res.status(200).json({
          message: 'Employee updated successfully!!!'
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: 'Employee Updation Failed!',
        error: error
      });
    });
};

exports.deleteEmployee = (req, res, next) => {
  Employee.deleteOne({ _id: req.params.id })
    .then((result) => {
      if (result.n > 0) {
        res.status(200).json({
          message: 'Employee Deleted successfully!!!'
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: 'Deleting Employee Failed!'
      })
    });
};


