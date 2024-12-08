// Import necessary packages
import React from 'react';

const FeaturesSection = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Features of Our Product</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-4 border rounded-lg text-center">
          <img src="/fp-1.png" alt="Feature 1" className="w-full h-56 object-cover rounded-t-lg" />
          <p className="py-4">Detailed description of Feature 1.</p>
          <span className="block text-lg font-semibold mr-40">$100</span>
        </div>
        <div className="p-4 border rounded-lg text-center">
          <img src="/fp-2.png" alt="Feature 2" className="w-full h-56 object-cover rounded-t-lg" />
          <p className="py-4">Detailed description of Feature 2.</p>
          <span className="block text-lg font-semibold mr-40" >$150</span>
        </div>
        <div className="p-4 border rounded-lg text-center">
          <img src="/fp-3.png" alt="Feature 3" className="w-full h-56 object-cover rounded-t-lg" />
          <p className="py-4">Detailed description of Feature 3.</p>
          <span className="block text-lg font-semibold mr-40">$200</span>
        </div>
        <div className="p-4 border rounded-lg text-center">
          <img src="/fp-4.png" alt="Feature 4" className="w-full h-56 object-cover rounded-t-lg" />
          <p className="py-4">Detailed description of Feature 4.</p>
          <span className="block text-lg font-semibold mr-40">$250</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
