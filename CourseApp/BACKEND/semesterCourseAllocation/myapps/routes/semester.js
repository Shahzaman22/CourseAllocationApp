const express = require('express')
const router = express.Router()
const jwt_decode = require('jwt-decode');
const jwt = require('jsonwebtoken')
const path = require('path')
const semester = require('../modules/semesterSchema');
const {userVerify} = require('./index')



router.get('/semester', async function(req,res){
    await  semester.find({})
    .then(data => {
      res.json({semesterData : data})
    })
  })

  router.get('/showsemester/:id',userVerify,  async function(req,res){
    var _id = req.params.id
    semester.findById({_id})
    .then(data => {
        console.log(data)
        res.json({semesterdata:data})
    })
  })  

router.post('/registersemester',userVerify,async function (req, res) {
    await new semester({
        semesternumber : req.body.semesternumber,
        totalcourses : req.body.totalcourses,
        students : req.body.students
    }).save().then(data => {
        console.log(data)
        res.json({semesterData : data})
    })
})


router.delete('/deletesemester/:id',userVerify,function(req,res){
    var id = req.params.id
    semester.findByIdAndDelete(id)
    .then(data => {
      res.json({semesterData : data , msg : "Semester Delete Successfully"})
    })
    
})

router.put('/updatesemester/:id',userVerify, function(req,res){
    var id = req.params.id
    semester.findByIdAndUpdate(id,{
        semesternumber : req.body.semesternumber,
        totalcourses : req.body.totalcourses,
        students : req.body.students
    })
    .then(data => {
        console.log(data)
        res.json({data:data , msg: "Update Semester Successfully"})
    })
})

router.put('/updatesemesterof/:id', userVerify,function(req,res){
    var id = req.params.id
    semester.findByIdAndUpdate(id,{$push: {courses: id}},{
        semesternumber : req.body.semesternumber,
        totalcourses : req.body.totalcourses,
        students : req.body.students,
        courses : req.body.courses
    })
    .then(data => {
        console.log(data)
        res.json({data:data , msg: "PUSH ID Successfully"})
    })
})


module.exports = router;