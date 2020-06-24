const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "Department", required: true }
});

module.exports = mongoose.model('Employee', employeeSchema);