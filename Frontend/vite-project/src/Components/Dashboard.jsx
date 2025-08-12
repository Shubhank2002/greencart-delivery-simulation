import React, { useContext, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import BarChart from "./BarChart";
import { Context } from "../Context/UserContext";
import { data } from "react-router-dom";

const Dashboard = () => {
  const { Profit } = useContext(Context);
  const [datalist1, setdatalist1] = useState([]);
  const [datalist2, setdatalist2] = useState([]);

  useEffect(() => {
    console.log(Profit);
    if (Profit) {
      const array = [Profit.onTimeDeliveries, Profit.lateDeliveries];
      setdatalist1(array);
      const new_array = [
        Profit.high_fuel_deliveries,
        Profit.low_fuel_deliveries,
      ];
      setdatalist2(new_array);
    }
  }, [Profit]);
  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-white">
        <h1>Dashboard</h1>
        <div className="flex">
          <div className="flex flex-col items-center ">
            <h1>Total Profit</h1>
            <h1>{Profit.profit}</h1>
          </div>
          <div className="flex flex-col items-center">
            <h1>Efficiency Score</h1>
            <h1>{Profit.efficiency}</h1>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-[300px] h-[200px]">
            <BarChart
              value={{
                labels: ["Ontime Deliveries", "Late Deliveries"],
                label: "No. of deliveries",
                text: "On-time vs Late Deliveries",
                data_list: datalist1,
              }}
            />
          </div>
          <div className="w-[300px] h-[200px]">
            <BarChart
              value={{
                labels: ["Fuel-Cost (7 Rs)", "Fuel-Cost (5 Rs)"],
                label: "Fuel-Cost",
                text: "Fuel-Cost in high traffic vs low traffic",
                data_list: datalist2,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
