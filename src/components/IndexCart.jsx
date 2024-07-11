/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
const IndexCart = ({data}) => {
 const {name, monthlyIndex}=data;
 
 return (
  <div className="bg-[#f3f3f3] flex justify-between items-center p-4 w-full md:w-1/4 rounded-xl ">
   <h1 className={`text-xl 
    ${name==="WPPOOL"? 'text-[#fb7957]':''}
    ${name==="Google"? 'text-[#7c79e6]':''}
    ${name==="Microsoft"? 'text-[#7ca63a]':''}
    ${name==="Twitter"? 'text-[#6f34a1]':''}
    `}>{monthlyIndex.January}</h1>
   <div className={`border-0 border-e-4 
   ${name==="WPPOOL"? 'border-[#fb7957]':''}
    ${name==="Google"? 'border-[#7c79e6]':''}
    ${name==="Microsoft"? 'border-[#7ca63a]':''}
    ${name==="Twitter"? 'border-[#6f34a1]':''} pe-2 text-xl`}>
    <h1>{name}</h1>
    <p>Index</p>
   </div>
  </div>
 );
};

export default IndexCart;