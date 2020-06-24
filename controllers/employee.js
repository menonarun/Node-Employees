const Employee = require('../models/employee');

exports.getAllEmployees = (req,res,next) =>{
Employee.find().then((employees)=>{
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