/* eslint-disable react/no-unescaped-entities */
import { BiSearch } from "react-icons/bi";
import { useState } from "react";
import Table from "./Table";

const Company = () => {
 const [search, setSearch]=useState("")
 return (
  <div className="my-16 md:mt-32" id="companies">
  <div className="w-[98%] mx-auto pt-24 md:pt-32 pb-8 px-8  rounded-xl bg-white" >
   <div className="flex justify-between">
    <h1 className="text-2xl md:text-5xl">All Companies</h1>
    <div className="bg-gray-200 p-4 relative w-1/4 rounded-2xl">
     <input
      type="text"
      placeholder="Search Your Companies"
      className="w-full bg-gray-200 ps-4 outline-none focus:border-gray-300"
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
     />
     <span className="absolute inset-y-0 left-2 flex  items-center pr-3 pointer-events-none">
      <BiSearch className="h-5 w-5 text-gray-400" aria-hidden="true" />
     </span>

    </div>
   </div>
   <Table search={search}/>
  </div>
  <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
   <button className="p-4 bg-blue-700 text-white rounded-full">Download All 'Companies' Data</button>
   <button className="p-4 bg-blue-700 text-white rounded-full "> View Methodology</button>
  </div>
  </div>
 );
};

export default Company;