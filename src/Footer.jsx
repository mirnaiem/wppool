import Offices from "./components/Offices";

const Footer = () => {
  return (
    <div className="w-[95%] mt-24 bg-[#e6e6e6] p-6 md:p-20">
      <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
        <h1 className="text-3xl w-full md:w-[31%]">
          Experience remarkable WordPress products with a new level of power, beauty, and human-centered designs.
        </h1>

        <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-around space-y-6 md:space-y-0">
          <div className="space-y-3 text-xl text-blue-600">
            <h1 className="text-[#9fa0a1]">Jump to</h1>
            <h1>About Us</h1>
            <h1>Portfolio</h1>
            <h1>News</h1>
            <h1>Stories</h1>
            <h1>Jobs</h1>
            <h1>About Us</h1>
          </div>
          <Offices />
        </div>
      </div>

      <div className="w-full md:w-1/2 mt-14 md:mt-8 ">
        <p className="text-[#9fa0a1] mb-2">
          &copy;2024 <span className="mx-6">Terms of Use</span>Privacy Policy
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum 
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium 
          optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis 
          obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam 
          nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaera.
        </p>
      </div>
    </div>
  );
};

export default Footer;