import { useState } from 'react';
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import img1 from '@/assets/images/img1.jpeg';
import img3 from '@/assets/images/img3.jpeg';
import img4 from '@/assets/images/img4.jpeg';

const images = [
  '/s1.jpeg',
  '/s2.png',
  '/s3.png',
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className=" relative w-full overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((src, index) => (
          <div key={index} className="flex-none w-full">
            <img src={src} alt={`Slide ${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white px-4 py-2">
      <SlArrowLeft />
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 bg-opacity-50 text-white px-4 py-2">
      <SlArrowRight />
      </button>
    </div>
  );
};

export default ImageCarousel;
