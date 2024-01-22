import axios from "axios";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { USER_LOGIN } from "../../Api/EndPoints";
import { useAuth } from "../../Context/AuthContext";

export const Login = () => {
  const navigate = useNavigate();
  const {login} = useAuth();

  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(USER_LOGIN, {
        email: email,
        password: password
      });
      console.log('Login successful:', response.data.payload);

      const { _id, username, token } = response.data.payload;

      localStorage.setItem("_id", _id);
      localStorage.setItem("username", username);
      localStorage.setItem("token", token);

      login({username});
      navigate(`/${username}`);

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
        Email
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
