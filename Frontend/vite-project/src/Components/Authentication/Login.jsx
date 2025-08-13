import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Context/UserContext";

const Login = () => {
  const [form, seform] = useState({ email: "", password: "" });
  const { setIsAuthenticated, isAuthenticated } = useContext(Context);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      alert("Please fill in both fields");
      return;
    }

    try {
      const res = await axios.post(
        "https://greencart-delivery-simulation.onrender.com/auth/login",
        form,
        { withCredentials: true }
      );
      if (res.status == 200) {
        setIsAuthenticated(true);
        navigate("/simulation");
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        setIsAuthenticated(false);
        navigate("/signup");
      } else {
        console.error("Login error:", error);
      }
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    seform({ ...form, [name]: value });
  };
  return (
    <div className="flex flex-col w-[75vw] h-[100vh] justify-center items-center gap-10">
      <h1 className="text-3xl font-bold">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-20 border-1 rounded-2xl p-10"
      >
        <input
          type="text"
          placeholder="email.."
          name="email"
          value={form.email}
          onChange={handleChange}
          className="border-1 rounded-lg p-3 text-center"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="border-1 rounded-lg p-3 text-center"
        />
        <button
          type="submit"
          className="cursor-pointer border-2 bg-[#00AC4F] rounded-lg text-white p-3 hover:scale-110 transition-transform delay-150 duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
