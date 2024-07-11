
/* eslint-disable react/prop-types */
import { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward, IoMdDownload } from 'react-icons/io';

const slideImg = [
  "https://i.ibb.co/x8n36FR/dehjtfgdt.png",
  "https://i.ibb.co/Fgwbfpn/rgegdg.png",
  "https://i.ibb.co/JdJ5JYj/rhrdgd.png",
  "https://i.ibb.co/JdJ5JYj/rhrdgd.png",
  "https://i.ibb.co/JdJ5JYj/rhrdgd.png",
  "https://i.ibb.co/JdJ5JYj/rhrdgd.png",
  "https://i.ibb.co/JdJ5JYj/rhrdgd.png",
  "https://i.ibb.co/JdJ5JYj/rhrdgd.png",
  "https://i.ibb.co/JdJ5JYj/rhrdgd.png",
];

const SampleNextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute bottom-6 md:bottom-2 left-16 bg-white rounded-full p-2 cursor-pointer z-10 shadow-2xl shadow-black"
      onClick={onClick}
    >
      <IoIosArrowRoundForward color='blue' size={24} />
    </div>
  );
};

const SamplePrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute bottom-6 md:bottom-2 left-5 bg-white rounded-full p-2 cursor-pointer z-10 shadow-2xl shadow-black"
      onClick={onClick}
    >
      <IoIosArrowRoundBack color='blue' size={24} />
    </div>
  );
};

const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    appendDots: dots => (
      <div style={{ position: 'absolute', bottom: '-30px', display: 'flex', justifyContent: 'center', width: '100%' }}>
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div style={{ color: 'black', padding: '5px' }}>{i + 1}</div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const totalPages = slideImg.length;
  const firstVisiblePage = currentSlide === 0 ? totalPages  : currentSlide;
  const lastVisiblePage = currentSlide + 1 ;
  const visiblePages = firstVisiblePage === lastVisiblePage ? `${firstVisiblePage}` : `${firstVisiblePage} and ${lastVisiblePage}`;

  return (
    <div className="relative w-[90%] mt-8">
      <Slider {...settings}>
        {slideImg.map((img, index) => (
          <div key={index} className="px-2">
            <img src={img} className="w-full h-[350px] rounded-lg" />
          </div>
        ))}
      </Slider>
      <div className="absolute bottom-4 left-[10%] hidden md:block text-black">
  Pages <span className='bg-white px-4 py-2 shadow-2xl shadow-black rounded-2xl'>{visiblePages}</span> of {totalPages} pages
</div>

      <button className="p-2 md:p-4 absolute bottom-6 md:bottom-0 right-2 md:right-[10%] bg-blue-700 text-white rounded-full"><span className="hidden md:block">Download the 2023 Report</span> <IoMdDownload  className="md:hidden"/> </button>
    </div>
  );
};

export default SliderComponent;