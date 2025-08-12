const DriversModel = require("../DB/Models/DriversModel");

const CreateDriver=async(req,res)=>{
    const new_driver=req.body
    console.log(new_driver)
    try {
        const response=await DriversModel.create(new_driver)
        res.status(201).json({message:"new Driver added successsfully"})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
    
}

module.exports=({CreateDriver})