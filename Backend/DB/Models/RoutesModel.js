const mongoose = require("mongoose");

const routesSchema = mongoose.Schema({
  route_id: {
    type: Number,
  },

  distance_km: {
    type: Number,
  },
  traffic_level: {
    type: String,
  },

  base_time_min: {
    type: Number,
  },
});

const RoutesModel=mongoose.model('routes',routesSchema)

module.exports=RoutesModel
