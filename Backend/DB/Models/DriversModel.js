const mongoose=require('mongoose')

const DriversSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    shift_hours:{
        type:Number,
        
    },
    past_week_hours:{
        type:String,
        default:[]
    }
},{timestamps:true})

const DriversModel= mongoose.model('drivers',DriversSchema)

module.exports=DriversModel