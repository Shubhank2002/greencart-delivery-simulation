const jwt=require('jsonwebtoken')


const CreateToken=async(email)=>{
    const secret_key=process.env.JWT_SECRET
    try {
        const token= jwt.sign({email},secret_key,{expiresIn:'1h'})
        return token
    } catch (error) {
        
    }
}
module.exports={CreateToken}