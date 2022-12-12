const mongoose = require('mongoose')
const studentSchema = mongoose.Schema({
    name : { type : String, required : true},
    email : { type : String, required : true},
    password : { type : String, required : true},
    role : { type : String, default : 'Students'}
})

const studentModel = mongoose.model('students',studentSchema)

module.exports = studentModel;