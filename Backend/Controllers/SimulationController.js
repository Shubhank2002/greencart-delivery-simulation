const DriversModel = require("../DB/Models/DriversModel");
const OrderModel = require("../DB/Models/OrdersModel");
const RoutesModel = require("../DB/Models/RoutesModel");

const fatigueArray = async () => {
  const all_drivers = await DriversModel.find();
  let fatigue_array = [];

  all_drivers.forEach((value, index) => {
    const item = value.past_week_hours
      .split("|")
      .map((hour) => parseFloat(hour));

    let fatigueScore = 0;
    item.forEach((v, i) => {
      if (v > value.shift_hours) {
        fatigueScore += 1;
      }
    });
    fatigue_array.push({ name: value.name, fatigueScore: fatigueScore });
  });
  return fatigue_array;
};

const TimetoMin = (str) => {
  const [hours, min] = str.split(":").map(Number);
  return hours * 60 + min;
};

const orderstoroutes = async () => {
  const allroutes = await RoutesModel.find();
  let orderarray = await Promise.all(
    allroutes.map(async (route) => {
      const RouteOrders = await OrderModel.find({ route_id: route.route_id });
      RouteOrders.sort((a, b) => {
        if (b.value_rs !== a.value_rs) {
          return b.value_rs - a.value_rs;
        }
        return TimetoMin(a.delivery_time) - TimetoMin(b.delivery_time);
      });

      return { route: route, orders: RouteOrders };
    })
  );

  return orderarray;
};
const orderstoDrivers = (selectedDriverArray, order_array, max_hours) => {
  selectedDriverArray.forEach((driver, index) => {
    let n = 0;
    let selected_orders = [];
    let total_delivery_time = 0;
    let selected_routes;
    while (
      n < order_array[index].orders.length &&
      total_delivery_time <= max_hours * 60
    ) {
      const order = order_array[index].orders[n];
      selected_orders.push(order);
      total_delivery_time += TimetoMin(order.delivery_time);
      selected_routes = order_array[index].route;
      n++;
    }

    driver.orders = selected_orders;
    driver.total_delivery_time = total_delivery_time;
    driver.selected_routes = selected_routes;
  });

  return selectedDriverArray;
};

const kpiCalculation = (selectedDriverArray) => {
  let penalty = 0;
  let onTimeDeliveries = 0;
  let total_deliveries = 0;
  let bonus = 0;
  let base_cost = 0;
  let order_value = 0;
  let high_fuel_deliveries=0
  let low_fuel_deliveries=0
  selectedDriverArray.forEach((item) => {
    item.orders.forEach((i) => {
      if (
        TimetoMin(i.delivery_time) >
        item.selected_routes.base_time_min + 10
      ) {
        penalty += 50;
      }
      if (
        i.value_rs > 1000 &&
        TimetoMin(i.delivery_time) < item.selected_routes.base_time_min
      ) {
        bonus += 0.1 * i.value_rs;
      }
      if (TimetoMin(i.delivery_time) <= item.selected_routes.base_time_min) {
        onTimeDeliveries += 1;
        // console.log(onTimeDeliveries);
      }
      order_value += i.value_rs;
      total_deliveries += 1;
      if (item.selected_routes.traffic_level === "High") {
        base_cost += item.selected_routes.distance_km * 7;
        high_fuel_deliveries+=1
      } else {
        base_cost += item.selected_routes.distance_km * 5;
        low_fuel_deliveries+=1
      }
    });
  });
  const profit = order_value + bonus - base_cost - penalty;
  const lateDeliveries=total_deliveries-onTimeDeliveries
  const efficiency = (onTimeDeliveries / total_deliveries) * 100;
  return { profit, order_value, bonus, base_cost, penalty, efficiency,onTimeDeliveries, lateDeliveries,high_fuel_deliveries,low_fuel_deliveries};
};

const SimulationRun = async (req, res) => {
  const { available_drivers, max_hours, start_time } = req.body;
  const fatigue_array = await fatigueArray();
  fatigue_array.sort((a, b) => a.fatigueScore - b.fatigueScore);
  const selectedDriverArray = fatigue_array.slice(0, available_drivers);
  const order_array = await orderstoroutes();
  orderstoDrivers(selectedDriverArray, order_array, max_hours);
  console.log(selectedDriverArray);
  const profit = kpiCalculation(selectedDriverArray);
  res.status(200).json(profit);
};

module.exports = { SimulationRun };
