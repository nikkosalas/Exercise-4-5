import Board from "./components/board";
import AddBoard from "./components/addboard";
import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    console.log("Mounted");
  });

  return (
    <div className="bg-white w-screen h-screen">
      <div className="grid grid-cols-2">
        <div className="ml-5">
          <h1 className="text-left text-semibold text-black text-lg p-4"> Scrum Board </h1>
        </div>
        <div className="grid place-content-end p-5 mr-5">
          <Link href="/login"className="border-2  border-gray-900 p-1 rounded-md text-gray-900 " >
            Logout
          </Link>
        </div>
      </div>
      {<Board />}
    </div>
  );
}
