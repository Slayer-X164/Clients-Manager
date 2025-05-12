import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-neutral-900 shadow-sm  flex justify-around text-neutral-200 items-center py-4">
      <div className="">
        <a className="btn btn-ghost text-xl font-semibold text-neutral-400">Clients-Manager</a>
      </div>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Search"
          className="border-1 p-2 rounded-md border-neutral-600 outline-none w-28 md:w-auto"
        />
        <button className="py-2 px-6 rounded-md bg-blue-600 cursor-pointer">Find</button>
      </div>
    </div>
  );
};

export default Navbar;
