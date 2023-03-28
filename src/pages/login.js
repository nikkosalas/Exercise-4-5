import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
    console.log("Username: " + user);
    console.log("Password: " + pass);

  
  }

  return (
    <div className="bg-white">
      <h1 className="text-black text-center font-normal pt-20 text-3xl">Scrum Board</h1>
      <div className="flex bg-white place-items-center justify-center h-screen">
        <form onSubmit={handleSubmit}>
          <h1 className="text-black mb-5 font-bold">Log in</h1>
          <div className="mt-4">
            <p className="text-black font-bold">Email*</p>
            <input className="mt-1 w-96 text-sm p-4 rounded-sm bg-white border-gray-900 placeholder-gray-400 border-2 text-black flex"
              placeholder="Enter your Email"
              type="text"
              name="username"
              required
              value={user}
              onChange={(e) => setUser(e.target.value)} />
          </div>
          <div className="mt-4">
            <p className="text-black font-bold">Password*</p>
            <input className="mt-1 w-96 text-sm p-4 rounded-sm bg-white border-gray-900 placeholder-gray-400 border-2 text-black flex"
              placeholder="Password"
              type="password"
              name="password"
              required
              value={pass}
              onChange={(e) => setPass(e.target.value)} />
          </div>
          <button type="submit" className="bg-blue-500 w-96 mt-6 mb-6 p-2 rounded-md font-bold"> Login </button>
          <p className="text-black text-center">Don't have an account?<Link className="text-blue-500 ml-4" href="/register">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
