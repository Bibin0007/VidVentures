import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import User from '../models/UserModel.js';


dotenv.config();


const generateAuthToken = (user)=>{
    const token = jwt.sign(
        { _id: user._id },
         process.env.JWT_SECRET, 
          { expiresIn: '1h' })
        user.token = token
        user.password = undefined
        return user
  }

  export const verifyAdmin = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email:email});

        if(!user){
            return res.status(401).json({message:"User not found"})
        }
        if(!user.isAdmin){
            return res.status(401).json({message:"You are not admin"})
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            return res.status(401).json({message:"Incorrect password"})
        }
        
        const token = generateAuthToken(user)
        res.status(200).json({token:token})

    } catch (error) {
        console.log(error.message);
    }
  }