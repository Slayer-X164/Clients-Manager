import React from "react";
import axios from 'axios'
import { useState,useEffect } from "react";

function Clients({ handleOpen, tableData, searchTerm,error,deleteData,status}) {

  const filteredData  = tableData.filter(client=>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.job.toLowerCase().includes(searchTerm.toLowerCase())
  )
  console.log(filteredData);


  return (
    <div className="min-h-auto  w-full flex justify-center  bg-neutral-950  text-white p-4 md:px-20">
      <div className="overflow-x-auto mt-6 ">
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

            {filteredData.map((client, index) => (
              <tr key={index} className="bg-neutral-900   shadow-md">
                <td className="px-6 py-3">{index + 1}</td>
                <td className="px-6 py-3">{client.name}</td>
                <td className="px-6 py-3">{client.email}</td>
                <td className="px-6 py-3">{client.job}</td>
                <td className="px-6 py-3">{client.rate}</td>
                <td className="px-6 py-3">
                  <button
                    className={`text-cyan-400 w-20 border-dashed border-2 border-cyan-700 px-3 py-2 rounded-full text-sm cursor-pointer ${
                      client.isactive
                      ?"bg-cyan-700/30 border-none "
                        :  "bg-transparent text-cyan-400"


                    }`}
                  >
                    {client.isactive ? "active" : "inactive"}
                    {console.log('status: ',client.status)}
                  </button>
                </td>
                <div className="flex items-center pt-1  justify-center">
                  <td className="px-4 py-3">
                    <button
                      className="bg-purple-800  cursor-pointer hover:bg-purple-400 active:scale-95 text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform"
                      onClick={() => handleOpen("edit",client)}

                    >
                      Update
                    </button>
                  </td>
                  <td className="px-4 py-3">
                    <button className="bg-pink-600 active:scale-95 hover:bg-pink-400 cursor-pointer text-white px-4 py-2 rounded-lg hover:scale-105 transition-transform"
                    onClick={()=>deleteData(client.id)}>
                      Delete
                    </button>
                  </td>
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
       {error && <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-red-600 bg-red-500/20 p-6 rounded-lg text-center">{error}</div>}
    </div>
  );
}

export default Clients;
