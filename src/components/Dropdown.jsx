/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsFillShareFill } from "react-icons/bs";
import { IoMdClose, IoMdDownload, IoMdMenu } from "react-icons/io";
import { HashLink  } from "react-router-hash-link";

const Dropdown = ({color}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex items-center space-x-4">
        <button className="border border-[#c9dbab] hidden md:block rounded-full p-4 text-white">
          <BsFillShareFill className={`${color?'text-black':'text-white'}`} />
        </button>
        <button className={`border border-[#115cd9] hidden md:block rounded-full px-4 py-[17px]  ${color?'text-black':'text-white'}`}>
          Download the 2023 Report
        </button>
        <div onClick={toggle} className="cursor-pointer">
          {isOpen ? <IoMdClose size={30} className="text-white hidden md:block" /> : <IoMdMenu size={30} className={`${color?'text-black':'text-white'}`} />}
        </div>
      </div>

      {isOpen && (
        <div className="absolute -right-9 md:-top-[22px] mt-6 md:mt-2 bg-white w-[200px] md:w-[400px] p-4 pt-[88px] rounded-2xl shadow-lg z-10">
          <div className="absolute top-4 left-4 right-4 flex items-center space-x-4 justify-center">
            <button className="flex items-center bg-green-400 text-white border border-green-500 rounded-full p-4">
              <BsFillShareFill className="text-white" />
            </button>
            <button className="bg-blue-600 text-white border border-blue-700 rounded-full p-4 md:py-[17px] md:w-56">
             <span className="hidden md:block">Download the 2023 Report</span> <IoMdDownload  className="md:hidden"/> 
            </button>
            <IoMdClose size={30} className="cursor-pointer" onClick={closeDropdown} />
          </div>
          <div className=" space-y-2">
            <h1><HashLink to='#index' smooth>The WPPOOL Index</HashLink></h1>
            <h1><HashLink to='#companies' smooth>All Companies</HashLink></h1>
            <h1><HashLink to='#listing' smooth>Potential Future Listings</HashLink></h1>
            <h1><HashLink to='#states' smooth>State of USA</HashLink></h1>
            <h1><HashLink to='#stories' smooth>Stories & Ideas</HashLink></h1>
            <h1><HashLink to='#about' smooth>About WPPOOL</HashLink></h1>
            <h1><HashLink to='#portfolio' smooth>WPPOOL Portfolio Companies</HashLink></h1>

          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
