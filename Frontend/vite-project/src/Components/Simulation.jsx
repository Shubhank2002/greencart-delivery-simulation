import axios from "axios";
import React, { useContext, useState } from "react";
import { Context } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";

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
      console.log((res.data))
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Number of available drivers"
          name="available_drivers"
          value={Data.available_drivers}
          onChange={handleChange}
        />
        <input
          type="time"
          name="start_time"
          id=""
          placeholder="Route start time (HH:MM)"
          value={Data.Route_start_time}
          onChange={handleChange}
        />
        <input
          type="number"
          name="max_hours"
          id=""
          placeholder="Max hours per driver per day"
          value={Data.Max_hours}
          onChange={handleChange}
        />
        <button type="submit" className="cursor-pointer">Run Simulation</button>
      </form>
    </div>
  );
};

export default Simulation;
