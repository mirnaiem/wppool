/* eslint-disable react/prop-types */
import  { useState } from 'react';
import Modal from './Modal'; 
const StoryCard = ({ stor }) => {
  const { name, image, story } = stor;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const openModal = () => {
    setModalContent({ name, image, story });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent({});
  };

  return (
    <div className="relative bg-white px-4 h-[230px]  md:h-60 mt-20 rounded-xl">
      <img className="absolute left-0 -top-1/4" src={image} alt={name} />
      <div className="absolute bottom-10 space-y-1">
        <h1 className="text-[12px] md:text-2xl text-blue-500">{name}</h1>
        <p className="text-[10px] md:text-xl">{story}</p>
        <button onClick={openModal} className="p-2 bg-blue-700 text-white rounded-2xl">Read More</button>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
    </div>
  );
};

export default StoryCard;
