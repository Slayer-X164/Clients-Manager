import React from "react";

const Navbar = ({onOpen}) => {
  return (
    <div className="navbar bg-neutral-900 shadow-sm  flex justify-around text-neutral-200 items-center py-4">
      <div className="">
        <a className=" md:text-xl text-md font-semibold text-neutral-400"><span className="text-blue-500">C</span>lients-<span className="text-blue-500 p-0 m-0">M</span>anager</a>
      </div>
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Search client...🔍"
          className="border-1 text-xs py-3 px-2 rounded-md border-neutral-600 outline-none w-28 md:w-auto"
        />
      </div>
      <div>
        <button className="py-2 px-4 rounded-md border-none hover:bg-blue-500 bg-blue-700 cursor-pointer" onClick={onOpen}>+ client</button>
      </div>
    </div>
  );
};

export default Navbar;
