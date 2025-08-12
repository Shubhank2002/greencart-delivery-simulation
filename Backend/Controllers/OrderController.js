const OrderModel = require("../DB/Models/OrdersModel");

const CreateOrder=async(req,res)=>{
    const new_order=req.body
    try {
        const response=await OrderModel.create(new_order)
        res.status(201).json({message:'new order added successfully'})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

module.exports={CreateOrder}