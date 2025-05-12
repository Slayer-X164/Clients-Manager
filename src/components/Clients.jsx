import React from "react";

function App() {
  const clients = [
    {
      id: 1,
      name: "john",
      email: "john@gmail.com",
      role: "frontend development",
      rate: "85",
      isActive: false,
    },
    {
      id: 2,
      name: "john2323",
      email: "john32@gmail.com",
      role: "frontend design",
      rate: "45",
      isActive: true,
    },
  ];
  return (
    <div className="min-h-auto w-full flex justify-center bg-neutral-950  text-white p-4 md:px-20">
      <div className="overflow-x-auto ">
        <table className="min-w-auto table-auto border-separate border-spacing-y-3">
          <thead>
            <tr className="text-slate-400 text-sm uppercase">
              <th className="px-6 py-2 text-center ">ID</th>
              <th className="px-6 py-2 text-center ">Name</th>
              <th className="px-6 py-2 text-center ">Email</th>
              <th className="px-6 py-2 text-center ">Role</th>
              <th className="px-6 py-2 text-center ">Rate</th>
              <th className="px-6 py-2 text-center ">Status</th>
              <th className="px-6 py-2 text-center" colSpan={2}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {clients.map(({id,name,email,role,rate,isActive}, index) => (
              <tr key={index} className="bg-neutral-900   shadow-md">
                <td className="px-6 py-3">{id}</td>
                <td className="px-6 py-3">{name}</td>
                <td className="px-6 py-3">{email}</td>
                <td className="px-6 py-3">{role}</td>
                <td className="px-6 py-3">{rate}</td>
                <td className="px-6 py-3">
                  <button className={`text-cyan-400 w-20 border-dashed border-2 border-cyan-700 px-3 py-2 rounded-full text-sm cursor-pointer ${isActive?"bg-cyan-700/30 border-none ":"bg-transparent text-cyan-400"}`} >
                    {isActive?'active':'inactive'}
                  </button>
                </td>
                <div className="flex items-center pt-1  justify-center">
                  <td className="px-4 py-3">
                    <button className="bg-purple-800  cursor-pointer hover:bg-purple-400 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform">
                      Update
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <button className="bg-pink-600 hover:bg-pink-400 cursor-pointer text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform">
                      Delete
                    </button>
                  </td>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
