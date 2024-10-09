  import bcrypt from 'bcryptjs';
  import jwt from 'jsonwebtoken';
  import dotenv from 'dotenv';
  import User from '../models/UserModel.js';
 

  dotenv.config();
  let user

  const generateAuthToken = (user)=>{
    const token = jwt.sign(
        { _id: user._id },
         process.env.JWT_SECRET, 
          { expiresIn: '1h' })
        user.token = token
        user.password = undefined
        return user
  }

 export const registerUser = async (req, res)=>{
    // getting all datas from body
    const { email, name, password, mobile } = req.body
    // checking existing user
    const existingUser = await User.findOne({ email: email})
    if(existingUser){
      return res.status(400).json({
        message: 'User already exists'
      })
    }
    // hashing password
    const encryptedPassword = await bcrypt.hash(password,10)

    // saving user in DB
     user = new User({
          email: email,
          name: name,
          password: encryptedPassword,
          mobile: mobile
        })

        await user.save()
      
        // generating token
        const token = generateAuthToken(user)
              
      
        // sending token back to client
        res.status(201).json(user)
      
}




export const verifyUser = async(req,res) => {
  try {
    const { email, password} = req.body
    const user = await User.findOne({ email: email})

    if(!user){
      return res.status(404).json({ message:"User not found"})
    }

    if(!user.isVerified){
      return res.status(403).json({ message:"You are blocked by The Administrator"})
    } 

    const passwordMatch= await bcrypt.compare(password,user.password)

    if(!passwordMatch){
     return res.status(401).json({ message:"Invalid password"})
    }

    const token = generateAuthToken(user)

    res.status(200).json({token,user})
    
  } catch (error) {
    console.log(error.message);
  }
} 
