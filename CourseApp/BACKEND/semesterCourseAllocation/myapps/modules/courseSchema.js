const mongoose = require('mongoose')
const courseSchema = mongoose.Schema({
    coursename : { type : String },
    coursenumber : { type : String },
    semester : { type : String}
})

const courseModel = mongoose.model('courses',courseSchema)

module.exports = courseModel;