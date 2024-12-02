import React from 'react';

const Hero: React.FC = () => {
  
  return (
    <div className="bg-black py-16 text-white w-full h-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center h-full">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Discover the Ultimate Kitten Mittens Experience: Stylish, Comfortable, and Perfect for Your Furry Friend</h1>
          <p className="text-xl mb-6">Keep your feline friend's toes cozy and your furniture scratch-free with our revolutionary Kitten Mittens</p>
        </div>
      </div>
    </div>
  );
};

export { Hero as component }