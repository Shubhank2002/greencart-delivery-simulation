const RoutesModel = require("../DB/Models/RoutesModel");

const CreateRoutes=async(req,res)=>{
    const new_route=req.body
    try {
        const response=await RoutesModel.create(new_route)
        res.status(201).json({message:"new route is created successfully"})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
module.exports={CreateRoutes}