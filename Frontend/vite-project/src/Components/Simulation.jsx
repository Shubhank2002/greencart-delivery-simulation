import axios from "axios";
import React, { useContext, useState } from "react";
import { Context } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Simulation = () => {
  const Navigate = useNavigate();
  const { Profit, setProfit } = useContext(Context);
  const [Data, setData] = useState({
    available_drivers: "",
    start_time: "",
    max_hours: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...Data,
      available_drivers: Number(Data.available_drivers),
      Max_hours: Number(Data.max_hours),
    };
    try {
      const res = await axios.post(
        "http://localhost:8000/simulation/run",
        payload
      );
      setProfit(res.data);
      console.log(res.data);
      if (res.status == 200) {
        Navigate("/dashboard");
      }
    } catch (error) {}
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...Data,
      [name]: value,
    });
  };
  return (
    <div className="flex">
        <Sidebar/>
      <div className="flex flex-col w-[75vw] h-[100vh] justify-center items-center gap-10 ">
        <h1 className="text-3xl font-bold ">Simulation Parameters</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-20 border-1 rounded-2xl p-10 "
        >
          <input
            type="number"
            placeholder="Number of available drivers"
            name="available_drivers"
            value={Data.available_drivers}
            onChange={handleChange}
            className="border-1 rounded-lg p-3 text-center"
          />
          <input
            type="time"
            name="start_time"
            id=""
            placeholder="Route start time (HH:MM)"
            value={Data.Route_start_time}
            onChange={handleChange}
            className="border-1 rounded-lg p-3 text-center"
          />
          <input
            type="number"
            name="max_hours"
            id=""
            placeholder="Max hours per driver per day"
            value={Data.Max_hours}
            onChange={handleChange}
            className="border-1 rounded-lg p-3 text-center"
          />
          <button
            type="submit"
            className="cursor-pointer border-2 bg-[#00AC4F] rounded-lg text-white p-3 hover:scale-110 transition-transform delay-150 duration-300"
          >
            Run Simulation
          </button>
        </form>
      </div>
    </div>
  );
};

export default Simulation;
