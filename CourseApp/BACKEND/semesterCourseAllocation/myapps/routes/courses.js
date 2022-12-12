const express = require('express')
const router = express.Router()
const jwt_decode = require('jwt-decode');
const jwt = require('jsonwebtoken')
const path = require('path')
const course = require('../modules/courseSchema');
const {userVerify} = require('./index')


router.get('/courses',userVerify, async function(req,res){
    await  course.find({})
    .then(data => {
      res.json({courseData : data})
    })
  })
  
  router.post('/registercourses', userVerify, async function (req, res) {
      await new course({
          coursename : req.body.coursename,
          coursenumber : req.body.coursenumber,
          semester : req.body.semester
      }).save().then(data => {
          console.log(data)
          res.json({courseData : data})
      })
  })
  
  router.get('/showcourses', async function(req,res){
      await  course.find({})
      .then(data => {
        res.json({courseData : data})
      })  
    })
  
  
  router.get('/showcourses/:id', userVerify, async function(req,res){
      var _id = req.params.id
      course.findById({_id})
      .then(data => {
          console.log(data)
          res.json({coursedata:data})
      })
    })  
  
  
  
  
  router.put('/updatecourse/:id',userVerify,  function(req,res){
      var id = req.params.id
      course.findByIdAndUpdate(id,{
          coursename : req.body.coursename,
          coursenumber : req.body.coursenumber,
          semester : req.body.semester
      })
      .then(data => {
          console.log(data)
          res.json({data:data})
      })
  })
  
  router.delete('/deletecourse/:id',userVerify, function(req,res){
      var id = req.params.id
      course.findByIdAndDelete(id)
      .then(data => {
        res.json({courseData : data , msg : "Course Delete Successfully"})
      })
      
  })


module.exports = router;