import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Accelerate Your Career with{' '}
            <span className="text-green-600">Expert Mentorship</span>
          </h1>
          
          {/* Descriptive Text */}
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Connect with experienced professionals from Rwanda's global diaspora. 
            Get personalized guidance, industry insights, and the support you need 
            to achieve your career goals.
          </p>
          
          {/* Call-to-Action Button */}
          <div className="flex justify-center">
            <button className="bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Start Your Journey
            </button>
          </div>
          
          {/* Optional: Additional visual elements */}
          <div className="mt-16 flex justify-center items-center space-x-8 opacity-60">
            <div className="text-sm text-gray-500 font-medium">
              Join 1000+ professionals already growing their careers
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;