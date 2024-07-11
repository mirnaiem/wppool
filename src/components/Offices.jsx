import { GrLinkedin, GrTwitter } from "react-icons/gr";

const Offices = () => {
  return (
    <div className="relative">
      <div className="text-xl border-0 border-b pb-6 border-b-[#9fa0a1]">
        <h1 className="font-bold mb-2">Cambridge</h1>
        <p>
          70728 Yost Burg, <br />
          North Magdaleneview, <br />
          UT 97952-2814
        </p>
      </div>
      <div className="text-xl pb-6 my-4 border-0 border-b border-b-[#9fa0a1]">
        <h1 className="font-bold mb-2">London</h1>
        <p>
          Suite 292 903 Stehr Streets,
          <br />
          Langworthtown, SC 94577-9465
        </p>
      </div>
      <div className="text-xl border-0 border-b pb-6 border-b-[#9fa0a1]">
        <h1 className="font-bold mb-2">San Francisco</h1>
        <p>
          19837 Gilberto Lodge,
          <br />
          Lake Kendallville, <br />
          Colorado - 97392, Bhutan
        </p>
      </div>
      <div className="absolute mt-4 md:mt-8 flex gap-4">
        <GrLinkedin color="#9fa0a1" size={30} />
        <GrTwitter color="#9fa0a1" size={30} />
      </div>
    </div>
  );
};

export default Offices;