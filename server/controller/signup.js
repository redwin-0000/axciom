const bcrypt = require("bcrypt")
const {isEmail} = require("validator")
const User = require("../models/User")

const saltRounds = 10

const validateSignupData = async(req, res) =>{
    const  {name, email, password} = req.body;
    if(name.trim().length === 0){
        res.status(400).json({message:"Please enter your name"})
        return fasle;
    } 
    if(!isEmail(email)){
        res.status(400).json({message:"please enter your valid email"})
        return fasle;
    }
    if(password.trim().length === 0){
        res.status(400).json({message:"Please enter your Password"})
        return fasle;
    } else if(password.trim().length <= 5){
        res.status(400).json({message:"minimun 6 length of Password is valid"})
        return fasle;
    }


   const existingUser = await User.findOne({email}).exec()
   if(existingUser){
    res.status(400).json({message:"Email is Already register"})
    return fasle;
   }
   return true;

};

module.exports = async (req, res) => {
    const  {name, email, password} = req.body;
    const isValid = await validateSignupData(res,req)
    if(isValid){
        try {
            const hashedPassword = await bcrypt.hash(password,saltRounds)
            const user = await user.create({name, email, password:hashedPassword})
            res.json({
                message:'Account Created Successfully',
                user:{_id: user._id, name:user.name, email:user.email}
            })
        } catch (error) {
            console.log(error)
        }
    }
}