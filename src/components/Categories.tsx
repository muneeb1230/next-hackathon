import React from 'react';

const TopCategories = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      {/* Centered Heading */}
      <h2 className="text-3xl font-bold text-center mb-12">Top Categories</h2>

      {/* Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Box 1 */}
        <div className="relative w-full h-[424px]">
          <img
            src="/top-1.png"
            alt="Category 1"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-end p-4">
            <h3 className="text-white text-xl font-bold">Wing Chair</h3>
            <p className="text-white">3584</p>
          </div>
        </div>

        {/* Box 2 */}
        <div className="relative w-full h-[424px]">
          <img
            src="/top-2.png"
            alt="Category 2"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-end p-4">
            <h3 className="text-white text-xl font-bold">Wooden Chair</h3>
            <p className="text-white">157 products</p>
          </div>
        </div>

        {/* Box 3 */}
        <div className="relative w-full h-[424px]">
          <img
            src="/top-3.png"
            alt="Category 3"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex flex-col justify-end p-4">
            <h3 className="text-white text-xl font-bold"></h3>
            <p className="text-white"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
