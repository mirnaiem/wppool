import StoryCard from "./StoryCard";

const stories=[
 {name:"By: Sahabuddin Sagor",
  image:"https://i.ibb.co/FwpPF8M/image-97.png",
  story:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia."
 },
 {name:"By: Nayeem Khan",
  image:"https://i.ibb.co/25hZr86/image-98.png",
  story:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia."
 },
 {name:"By: Sahabuddin Sagor",
  image:"https://i.ibb.co/FwpPF8M/image-97.png",
  story:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia."
 },
 {name:"By: Nayeem Khan",
  image:"https://i.ibb.co/25hZr86/image-98.png",
  story:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia."
 },
 {name:"By: Nayeem Khan",
  image:"https://i.ibb.co/25hZr86/image-98.png",
  story:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia."
 },
 {name:"By: Sahabuddin Sagor",
  image:"https://i.ibb.co/FwpPF8M/image-97.png",
  story:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia."
 },
]
const Stories = () => {
 return (
  <div className="w-[90%] mx-auto pt-24" id="stories">
   <h1 className="text-2xl md:text-5xl">Stories and Ideas</h1>
   <p className="md:my-5 md:text-2xl">The latest news and updates</p>
   <div className="grid grid-cols-2 md:grid-cols-3 gap-5 ">  
     {stories.map((stor, i)=><StoryCard key={i} stor={stor}/>)}
</div>
  </div>
 );
};

export default Stories;