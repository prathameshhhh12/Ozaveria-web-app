import React from 'react';
import logo_1 from '../Features/ozaveria_logo_1-removebg-preview.png';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img 
        src={logo_1} 
        alt="Ozaveria Logo" 
        className="h-32 w-32 object-contain"  // Increased size to h-32 w-32
      />
      
    </div>
  );
};
