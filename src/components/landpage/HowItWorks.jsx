import React from 'react';
import { UserPlus, Users, TrendingUp } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <UserPlus className="w-10 h-10 text-white" />,
      title: "Sign Up",
      description: "Create your profile and tell us about your goals",
      stepNumber: "01"
    },
    {
      icon: <Users className="w-10 h-10 text-white" />,
      title: "Get Matched",
      description: "We connect you with the perfect mentor based on your needs",
      stepNumber: "02"
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-white" />,
      title: "Grow",
      description: "Learn, develop, and achieve your potential with expert guidance",
      stepNumber: "03"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in just three simple steps
          </p>
        </div>

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300 relative z-10">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.stepNumber}
                </div>
                
                {/* Icon Container */}
                <div className="bg-green-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {step.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connection Arrow (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                  <div className="w-12 h-0.5 bg-green-300">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-green-300 border-t-2 border-b-2 border-t-transparent border-b-transparent"></div>
                  </div>
                </div>
              )}

              {/* Connection Line (Mobile only) */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center py-4">
                  <div className="w-0.5 h-8 bg-green-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-16">
          <button className="bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;