const About = () => {
 return (
   <div className="w-[90%] mx-auto my-24 px-4 rounded-xl bg-white flex flex-col md:flex-row items-center" id="about">
     <div className="w-full md:w-1/2 md:ps-20 space-y-4 md:space-y-6">
       <h1 className="text-2xl md:text-5xl">About WPPOOL</h1>
       <h2 className="md:text-2xl text-gray-400">Investing in WPPOOL for over 50 years</h2>
       <p>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
         molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum 
         numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium 
         optio, eaque rerum! Provident similique accusantium nemo autem.
       </p>
       <button className="p-4 bg-blue-700 text-white rounded-full mt-8 shadow-2xl shadow-gray-700">
         WPPOOL Contact
       </button>
     </div>
     <img className="w-full md:w-1/2 mt-8 md:mt-0" src="https://i.ibb.co/GMmSBc5/Mask-group.png" alt="WPPOOL Image" />
   </div>
 );
};

export default About;
