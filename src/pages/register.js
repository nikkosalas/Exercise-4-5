import { useState, useEffect } from "react";
import Link from "next/link";

export default function Register() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  useEffect(() => {});

  function handleSubmit(e) {
    e.preventDefault();
    if (pass === confirmPass) {
      console.log("Submitted");
      console.log("Username: " + user);
      console.log("Password: " + pass);
    } else {
      console.log("Password not Matched");
    }
  }

  return (
    <div className="bg-white">
      <h1 className="text-black text-center font-normal pt-20 text-3xl">Scrum Board</h1>

      <div className="flex bg-white place-items-center justify-center h-screen">
        <form className="bg-white" onSubmit={handleSubmit}>
          <h1 className="text-black mb-5 font-bold">Sign up</h1>
          <div className="mt-4">
            <p className="text-black text-left font-bold">Name*</p>

            <input className="mt-1 bg-white border-2 border-gray-900 rounded-sm w-96 text-sm p-4 text-black placeholder-gray-400"
              placeholder="Enter your Name"
              type="text"
              name="username"
              required
              value={user}
              onChange={(e) => setUser(e.target.value)} />
          </div>
          {pass === confirmPass ? (
            true
          ) : (
            <p className="text-red-600 text-center">Password not Matched</p>
          )}
          <div className="mt-4">
            <p className="text-black text-left font-bold">Email*</p>
            <input className="mt-1  bg-white border-2 border-gray-900 rounded-sm w-96 text-sm p-4 text-black placeholder-gray-400"
              placeholder="Enter your Email"
              type="email"
              required
              value={pass}
              onChange={(e) => setPass(e.target.value)} />
          </div>
          <div className="mt-4">
            <p className="text-black text-left font-bold">Password*</p>
            <input className="mt-1 bg-white border-2 border-gray-900 rounded-sm w-96 text-sm p-4 text-black placeholder-gray-400"
              placeholder="Create Password"
              type="password"
              required
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)} />
            <p className="text-black text-left text-3x1"> Must be at least 8 characters </p>
          </div>
          <button type="submit" className="bg-blue-500 w-96 mt-6 mb-6 p-2 rounded-md font-bold" > Register</button>
          <p className="text-center text-black "> Already have an account?<Link className="text-blue-500 ml-5" href="/login">
             Log in </Link></p>
        </form>
      </div>
    </div>
  );
}
