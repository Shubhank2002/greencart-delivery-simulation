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
      <div className="bg-white flex flex-col gap-20 w-[75vw] p-8">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <div className="flex w-full gap-15 justify-center">
          <div className="flex flex-col items-center border-2 rounded-lg hover:scale-115 cursor-pointer p-3 bg-[#00AC4F] w-[400px] transition-transform delay-200 duration-200 h-[200px] justify-center gap-5">
            <h1 className="font-bold text-2xl">Total Profit</h1>
            <h1>Rs {Profit.profit}</h1>
          </div>
          <div className="flex flex-col items-center border-2 rounded-lg hover:scale-115 cursor-pointer transition-transform delay-200 duration-200 p-3 gap-5 w-[400px] h-[200px] justify-center bg-[#D0004B]">
            <h1 className="font-bold text-2xl">Efficiency Score</h1>
            <h1>{Profit.efficiency} %</h1>
          </div>
        </div>
        <div className="flex justify-center gap-15 w-full">
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
