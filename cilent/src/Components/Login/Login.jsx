import { dbhost } from "../../Api/EndPoints";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const URL = "https://zepto-backend-qvno.onrender.com";

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${URL}/auth/login`, {
        email: email,
        password: password
      });
      console.log('Login successful:', response.data.payload);

      const { _id, username, token } = response.data.payload;

      localStorage.setItem("_id", _id);
      localStorage.setItem("username", username);
      localStorage.setItem("token", token);

      navigate("/");

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <form className="space-y-6" onSubmit={handleLogin} >
      <div >
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email address/ Username
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Suresh@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}

        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          autoComplete="current-password"
          required
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <button
          type="submit"
          className="bg-[#EC525E]  hover:bg-[#FB3A68] text-white font-bold py-2 px-4 rounded-full w-full"
        >
          Login
        </button>
      </div>

    </form>
  );
};
