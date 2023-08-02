import React from "react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-4 border-blue-500">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <span className="text-3xl font-bold tracking-tight">BRAND NAME</span>
      </div>
      <div className="flex items-center justify-around gap-20 font-medium text-slate-400">
        <span className="">Home</span>
        <span>Product</span>
        <span>Pricing</span>
        <span>Contact</span>
      </div>
      <div className="flex items-center justify-around gap-20 font-semibold text-xl h-14">
        <button className="h-14 text-green-400 shadow-md lg:px-12 rounded-lg">
          Login
        </button>
        <button className="h-14 text-white rounded-lg bg-green-400 w-30 lg:px-12 shadow-md">
          Join Us &#x2192;
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
