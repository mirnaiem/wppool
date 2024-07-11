const imgs=[
 "https://i.ibb.co/0Dh8RLX/Group-219.png",
 "https://i.ibb.co/3BktTf2/Group-220.png",
 "https://i.ibb.co/Y3VMYYF/Group-221.png",
" https://i.ibb.co/SBjT8rp/Group-222.png",
"https://i.ibb.co/944n5pr/Group-223.png",
"https://i.ibb.co/fCrHXjg/Group-224.png",
"https://i.ibb.co/3hrck6s/Group-225.png",
"https://i.ibb.co/4Mvmjdb/Group-226.png",
"https://i.ibb.co/zPZCvVY/Group-227.png",
"https://i.ibb.co/KFys6hB/Group.png",
]

const FutureList = () => {
 return (
  <div className="w-[90%] mx-auto space-y-6 pt-24" id="listing">
   <h1 className="text-2xl md:text-5xl">Potential Future Listings</h1>
   <p >Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. <br /> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>
   
      <div className="flex gap-5 flex-wrap ">
        {imgs.map((img, i) => (
          <div key={i} className="bg-white p-2 w-full md:w-1/6 h-[120px] rounded-xl">
            <img  src={img} alt={`img-${i}`} className="w-2/3 mx-auto h-full object-contain" />
          </div>
        ))}
      </div>
    
  </div>
 );
};

export default FutureList;