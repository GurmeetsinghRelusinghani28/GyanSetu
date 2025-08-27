import React from 'react';
import { useNavigate } from 'react-router-dom';

const religions = [
  { id: 'hinduism', name: 'Hinduism', icon: '🕉️' }, 
  { id: 'christianity', name: 'Christianity', icon: '✝️' }, 
  { id: 'islam', name: 'Islam', icon: '☪️' }, 
  { id: 'buddhism', name: 'Buddhism', icon: '☸️' }, 
  { id: 'sikhism', name: 'Sikhism', icon: '🦁' }, 
  { id: 'judaism', name: 'Judaism', icon: '✡️' },
];

const ReligionSelector = () => {
  const navigate = useNavigate();

  const handleSelect = (religionId) => {
    navigate(`/${religionId}-dashboard`); // Redirect to the respective dashboard
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full max-w-4xl">
        {religions.map((religion) => (
          <button
            key={religion.id}
            onClick={() => handleSelect(religion.id)}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          >
            <div className="text-purple-600 text-5xl mb-4">{religion.icon}</div>
            <span className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 text-center">
              {religion.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ReligionSelector;
