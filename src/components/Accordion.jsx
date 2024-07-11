/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import IndexCart from './IndexCart';
import Chart from './Chart';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);  

  const [indexData, setIndexData] = useState([]);
  
  useEffect(() => {
    fetch('/indexData.json')
      .then((res) => res.json())
      .then((data) => setIndexData(data.companies));
  }, []);

  console.log(indexData);

  const handleClick = (index) => {
    setActiveIndex(index); 
  };

  return (
    <div className="flex flex-col md:flex-row w-[98%] mx-auto   mt-32 pt-28 bg-white p-4" id='index'>
      <div className="flex flex-row md:flex-col flex-wrap md:flex-nowrap gap-2  w-full md:w-1/6 md:bg-[#eff3f6]  rounded-xl">
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex justify-between items-center p-4 cursor-pointer  border-b   w-full  ${activeIndex === index ? 'bg-blue-700 text-white rounded-xl m-1' : ""}`}
            onClick={() => handleClick(index)}
          >
            <span className={`text-lg `}>{item.title}</span>
            <span>{activeIndex === index ? '-' : '+'}</span>
          </div>
        ))}
      </div>
      <div className="w-full md:w-5/6 p-4">
        {items.map((item, index) => (
          <div
            key={index}
            className={`transition-all duration-300 ${activeIndex === index ? 'block' : 'hidden'}`}
          >
            <div className='flex items-center'>
              <img
                className="w-16"
                src="https://i.ibb.co/WsgyJ60/Union.png"
                alt=""
              />
              <h1 className='text-3xl md:text-5xl'>The WPPOOL Index</h1>
            </div>
            <div className='flex flex-wrap md:flex-nowrap mt-4 gap-4 w-full'>
              {indexData?.map((data, index) => (
                <IndexCart key={index} data={data}></IndexCart>
              ))}
            </div>
            <Chart />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
