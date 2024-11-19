import React from 'react';

interface CardProps {
  image: string;
  name: string;
  position: string;
}

const Card: React.FC<CardProps> = ({ image, name, position }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600 text-sm">{position}</p>
      </div>
    </div>
  );
};

export default Card;
