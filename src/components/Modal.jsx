/* eslint-disable react/prop-types */

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-white p-4 rounded-lg w-3/4 md:w-1/2 lg:w-1/3">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">X</button>
        <h2 className="text-2xl text-blue-500 text-center">{content.name}</h2>
        <img src={content.image} alt={content.name} className="w-full h-64 object-cover mt-4 rounded-lg" />
        <p className="mt-4 text-center">{content.story}</p>
      </div>
    </div>
  );
};

export default Modal;
