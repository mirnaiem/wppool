import About from "../components/About";
import Accordion from "../components/Accordion";
import Banner from "../components/Banner";
import Company from "../components/Company";
import FutureList from "../components/FutureList";
import Portfolio from "../components/Portfolio";
import StateUsa from "../components/StateUsa";
import Stories from "../components/Stories";

const Home = () => {
 const items = [
  {
    title: 'The Index Tab',
  },
  {
    title: 'The Index Tab 2',
  },
  {
    title: 'The Index Tab 3',
  },
  {
    title: 'The Index Tab 4'
  },
  {
    title: 'The Index Tab 5'
  },
];
 return (
  <div className=" font-serif">
   <Banner/>
  
      <Accordion items={items} />
    
    <Company/>
    <FutureList/>
    <StateUsa/>
   <Stories/>
   <About/>
   <Portfolio/>
  </div>
 );
};

export default Home;