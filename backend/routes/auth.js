const express = require('express');
const { body, validationResult } = require('express-validator');
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcryptjs')
const User = require('../models/User');
const fetchuser = require('../middleware/fetchuser')
const { Schema } = mongoose
const router = express.Router();
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'rahulwillbeFSDevelp@r'

//ROUT:1 Create a user using : POST "/api/auth/createuser". does,nt require login

router.post('/createuser', [
  body('name',"Name Must be min 3 charactor").isLength({ min: 3 }),
    body('email',"Email must be valid email farmate").isEmail(),
    body('password',"Password must be min 5 char").isLength({ min: 5 })
],async (req,res)=>{
  // If there are errors return the bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });}
      // Check whether email exist already
      let user = await User.findOne({email : req.body.email})

      try {
        if (user){
          // res.send(user)
          return res.status(400).json({error : "sorry an user with this email already exist"})
        }
        // else {
          // Create a New User
        const salt = await bcrypt.genSalt(10)
        const secPass = await bcrypt.hash(req.body.password,salt)
         user = await User.create({
          name: req.body.name,
          email: req.body.email,
          password: secPass
        }) 
        const data = {
          user : {
            id : user.id
          }
        }
        const authtoken = jwt.sign(data,JWT_SECRET)
        // console.log(jwtdata);
        // console.log(user);
        res.json({authtoken})
      // }
      } catch (error) {
        console.log(error.message);
        res.status(500).send("Internal Server Error")
      }
})

  //ROUT-2 Authenticate an user using /api/auth/login
  router.post('/login', [
      body('email',"Email must be valid email farmate").isEmail(),
      body('password','password can,nt be balnck').exists()
  ],async (req,res)=>{
    // If there are errors return the bad request and errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });}
    const {email,password} = req.body;
    try {
      let user = await User.findOne({email})
      if (!user) {
       return res.status(400).json({error : "Please Login with correct credentials "})
      }
      const passwordcompare = await bcrypt.compare(password,user.password);
      if (!passwordcompare) {
        return res.status(400).json({error : "Please Login with correct credentials "})
      }
      const data = {
        user : {
          id : user.id
        }
      }
      const authtoken = jwt.sign(data,JWT_SECRET)
      res.json({authtoken})
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error")
    }
  })

  // ROUT-3 : Get logged in user details using : POST "api/auth/getuser" . Login Required
  router.post('/getuser',fetchuser,async (req,res)=>{
  try {
    const userId = req.user.id
    const user = await User.findById(userId).select("-password")
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error")
  }
})

module.exports = router;