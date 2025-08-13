const UserModel = require("../DB/Models/UserModel");
const bcryptjs = require("bcryptjs");
const { CreateToken } = require("../Utils/Token");
const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isExists = await UserModel.findOne({ email });
    if (!isExists) {
      res.status(404).json({ message: "User do not exist,please sign up" });
    } else {
      const isValid = await bcryptjs.compare(password, isExists.password);
      if (!isValid) {
        res.status(404).json({
          message: "User credentials are invalid, please write it again",
        });
      } else {
        const token= CreateToken(email)
        res.cookie('token',token,{
            httpOnly:true,
            maxAge: 60 * 60 * 1000,
           
        })
        res.status(200).json({ message: "user logined successfully",token });
      }
    }
  } catch (error) {}
};

const Signup = async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const isExists = await UserModel.findOne({ email });
    if (isExists) {
      res.status(400).json({ message: "user already exist, please login" });
    }else{
        const salt=await bcryptjs.genSalt(10)
        const hash_password=await bcryptjs.hash(password,salt)
        const new_user=await UserModel.create({email,password:hash_password})
        const token= CreateToken(email)
        res.cookie('token',token,{
            httpOnly:true,
            maxAge: 60 * 60 * 1000,
            
        })
        const secret_key=process.env.JWT_SECRET
        res.status(200).json({ message: "user created successfully",token,secret_key });
    }
  } catch (error) {}
};

module.exports = { Login,Signup };
