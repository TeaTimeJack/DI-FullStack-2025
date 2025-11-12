import { registerUser, getUserByEmail } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await registerUser(email, password);
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    if(error.code === "23505"){
        res.status(404).json({message:`Email ${email} already exists...`})
    }
    res.status(500).json({ message: "internall error" });
  }
};


export const login = async (req,res) =>{
    const {email,password} = req.body;

    try {
        const user = await getUserByEmail(email);
        if(!user){
            res.status(404).json({message:`User not found`})
            return
        }

        const match = await bcrypt.compare(password+"", user.password);
        if(!match){
            res.status(404).json({message:`Wrong password`})
            return
        }
        
        const SECRET = process.env.ACCESS_TOKEN_SECRET;

        // generate accsess token for 60s
        const accessToken = jwt.sign(
            {userid:user.id, email:user.email},
            SECRET,
            {expiresIn: "60s"}
        );

        res.cookie('appToken', accessToken, {
            httpOnly:true,
            maxAge: 60 * 1000  //same as 60 seconds
        })


        res.status(200).json(
            {
            message:"login succesfulllly",
            user:{userid:user.id, email:user.email}, 
            token: accessToken
        })

    } catch (error) {
        console.log("error=>", error);
        res.status(500).json({ message: "internall error" });
        
    }
}
