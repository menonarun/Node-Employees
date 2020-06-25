const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    employeeNumber: { type: Number, required: true },
    name: { type: String, required: true },
    address: { type: String, default : 'Toronto' },
    department:[{
        departmentid :{ type: Number, required: true },
        departmentname: { type: String, required: true }
    }],
    salary: { type: Number, required: true }
});

module.exports = mongoose.model('Employee', employeeSchema);