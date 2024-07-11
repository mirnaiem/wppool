import { GoArrowDown } from "react-icons/go";

const Banner = () => {
  return (
    <div
      className="bg-[url('https://i.ibb.co/R06jKS4/Asset-1-4x-1-removebg-preview-removebg-preview.png')] bg-no-repeat bg-contain bg-center w-[98%] mx-auto md:h-screen flex flex-col md:flex-row justify-between p-8 items-center bg-[#2042b6] rounded-2xl text-white"
      style={{ backgroundSize: '35%' }}
    >
      <div className="space-y-4 md:space-y-10 mb-4 md:mb-8 md:self-end grid grid-cols-2 md:grid-cols-1 items-center ">
        <div>
          <h1 className="text-2xl md:text-4xl">60</h1>
          <p className="text-[#cdcdcd]">Companies</p>
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl">$100B</h1>
          <p className="text-[#cdcdcd]">Market cap</p>
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl">3.5x</h1>
          <p className="text-[#cdcdcd]">Revenue multiple</p>
        </div>
        <div>
          <h1 className="text-2xl md:text-4xl">60%</h1>
          <p className="text-[#cdcdcd]">LTM avg. revenue growth rate</p>
        </div>
      </div>
      <div
        className="text-center bg-[url('https://i.ibb.co/VQ0YcTv/Rectangle-1.png')] bg-no-repeat bg-contain bg-center h-3/4 flex justify-center items-center flex-col"
        style={{ backgroundSize: '70%' }}
      >
        <h1 className="text-2xl md:text-7xl">The WPPOOL Index</h1>
        <p className="text-xl">
          Monitor the performance of emerging, publicly traded, financial technology companies
        </p>
      </div>
      <div className="md:self-end  w-[10%] text-right mt-8 md:mt-0 mb-8">
        <button className="bg-white p-6 rounded-full text-[#4a66c4]">
          <GoArrowDown size={20}/>
        </button>
      </div>
    </div>
  );
};

export default Banner;
