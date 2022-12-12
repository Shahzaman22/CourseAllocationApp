
const express = require('express')
const router = express.Router()
const jwt_decode = require('jwt-decode');
const jwt = require('jsonwebtoken')
const path = require('path')
const std = require('../modules/stdSchema');



router.get('/registeruser', async function (req, res) {
    await std.find({})
        .then(data => {
            console.log(data)
            res.json({ mydata: data })
        })
})


router.post('/registeruser', async function (req, res) {
    await new std({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
    }).save()
        .then(data => {
            console.log(data)   
            res.json({ stdData: data })
        })
})


router.post('/loginuser', async function (req, res) {
    await std.find({
        email: req.body.email,
        password: req.body.password
    }, {
        password: 0, 
    }).then(data => {
        console.log(data)
        if (data.length > 0) {
            jwt.sign(JSON.stringify(data[0]), "hello", function (err, token) {
                console.log(" TOKEN =>", token);
                res.json({ data:data, token, msg: "found" })
                // res.json[{data:data.email}]

            });
        } else {
            res.json({ data: [], msg: "not found" })
        }
    })
})

router.get('/showstudents',  async function(req,res){
    await  std.find({})
    .then(data => {
      res.json({courseData : data})
    })  
  })



  
module.exports = router;