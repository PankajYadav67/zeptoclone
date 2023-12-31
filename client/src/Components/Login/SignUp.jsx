import { useState } from "react";
import { dbhost } from "../../Api/EndPoints";
import axios from "axios";
import Snackbar from '@mui/joy/Snackbar';



export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] =useState("");
  const [open, setOpen] = useState(false);

  const handleClose = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    axios.post(`${dbhost}/login`, {
      email,
      password,
      name,
      phoneNumber
    })
      .then((response) => {
        // Handle the successful signup response here
        console.log('Signup successful:', response.data);
        setOpen(true);

      })
      .catch((error) => { console.error('Signup error:', error.response?.data || error.message) });
  }


  return (
    <form className="space-y-6" onSubmit={handleSignup}>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <input
          id="name"
          type="text"
          required
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Suresh Yadav"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700"
        >
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          required
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="9967917448"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email address
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          required
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="suresh@gmail.com"
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
          placeholder="Suresh@123"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <button
          type="submit"
          className="bg-[#EC525E]  hover:bg-[#FB3A68] text-white font-bold py-2 px-4 rounded-full w-full"
        >
          Sign-Up
        </button>
      </div>
      {/* Snackbar for displaying success message */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        color="success"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        "Congratulations! 🎉 You've successfully signed up!"
      </Snackbar>


    </form>

  )
}


