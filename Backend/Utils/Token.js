const jwt=require('jsonwebtoken')


const CreateToken=(email)=>{
    
    
    try {
        const token= jwt.sign({email},secret_key,{expiresIn:'1h'})
        console.log(secret_key)
        return token
    } catch (error) {
        return error
    }
}
module.exports={CreateToken}