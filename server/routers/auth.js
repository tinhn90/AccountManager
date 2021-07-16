const express = require('express');
const router = express.Router();
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

const User = require('../models/users')
router.get('/', (req, res) => {
  res.send('user router')
})
//@route POST api/auth/register
//@desc Register user
//@access Public
router.post('/register',async(req,res)=>{
  console.log(req.body)
    const {username,password} = req.body
    if(!username || !password) 
    return res.status(400).json({success:false,message:'Missing username or password'})
    try {
        const user = await User.findOne({username});
     
        if(user != null) return res.status(400).json({success:false,message:'Username taken'})
        const hashpass = await argon2.hash(password)
        const newUser = new User({username,password:hashpass});
        await newUser.save();
        //Return token
        console.log(newUser);
        const acesstoken = jwt.sign({userId: newUser._id},process.env.ACCESS_TOKEN_SECRET)
      return   res.status(200).json({success:true,message:'create new user',acesstoken})
    } catch (error) {
        
    }
})
//@route POST api/auth/login
//@desc Login user
//@access Public
router.post('/login',async(req,res)=>{
  console.log(req.body)
  const {username,password} = req.body;
  if(!username || !password)
  {
    console.log(username + password + 'missing ')
    return res.status(400).json({success:false,message:'Missing username or password'})
}
    try {
      console.log(username + password+ 'find user ')
      const user = await User.findOne({username});
      
      if (!user)
			return res
				.status(400)
				.json({ success: false, message: 'Incorrect username or password' })
      else {
        const kq = await argon2.verify(user.password,password);
      
        if(kq) {
          const acesstoken = jwt.sign({userId: user._id},process.env.ACCESS_TOKEN_SECRET)
          return   res.status(200).json({success:true,message:'login user',acesstoken})
        }
         {
          console.log(`${kq}`);
           return res.status(400).status({success:false,message:'password doesnt match'});
          }
      }
    } catch (error) {
      console.log(error)
    }

})
module.exports = router