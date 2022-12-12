// const express = require('express')
// const router = express.Router()
const jwt_decode = require('jwt-decode');
const jwt = require('jsonwebtoken')
const path = require('path')
const { findByIdAndDelete } = require('../modules/stdSchema');



module.exports = {
    userVerify: async function (req, res, next) {
        console.log("----------------------xyz");
        console.log(req.headers);
        if (req.headers.authorization) {
            console.log("----------------------ABCD");
            token = req.headers.authorization
            console.log("USER TOKEN => ", token)    
            var decoded = jwt_decode(token);
            console.log(decoded)
          
    
            // next()
    
            if(decoded.role == 'Admin') {
                next()
    
            } else  {
                res.send("Only admin can Access")
                console.log("Only admin can accesss");
            }
            
        } else {
            return res.send("NO TOKEN FOUND")
        }            
    }
}