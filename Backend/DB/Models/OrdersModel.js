const mongoose=require('mongoose')

const ordersSchema=mongoose.Schema({
    order_id:{
        type:Number,
        required:true
    },
    value_rs:{
        type:Number
    },
    route_id:{
        type:Number
    },
    delivery_time:{
        type:String
    }
})

const OrderModel=mongoose.model('orders',ordersSchema)

module.exports=OrderModel