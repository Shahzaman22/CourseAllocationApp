const mongoose = require('mongoose')
const semesterSchema = mongoose.Schema({
    semesternumber: { type: String, required: true },
    totalcourses: { type: String, required: true },
    students: { type: String, required: true },
    courses: { type: Array, required: false },
})

const semesterModel = mongoose.model('semester', semesterSchema)

module.exports = semesterModel;