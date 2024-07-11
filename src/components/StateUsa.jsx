import { BiDownArrow } from "react-icons/bi";
import SliderComponent from './SliderComponent';

const StateUsa = () => {
  return (
    <div className="w-[90%] mx-auto pt-24 bg-[url('https://i.ibb.co/cb1dtvq/Group-364.png')] bg-no-repeat bg-right bg-contain h-[650px] md:h-screen" id="states"
    style={{ backgroundSize: '50%' }}
    >
      <h1 className="text-2xl md:text-5xl">State of USA</h1>
      <button className="p-2 bg-blue-700 text-white rounded-full flex items-center text-2xl gap-10 my-4">
        2024 <BiDownArrow size={15} className="fill-white" />
      </button>
      <p>Click through the slides or download the report to view natively on your device.</p>
      <SliderComponent />
    </div>
  );
};

export default StateUsa;
