import React from 'react';
import { User, Globe, Briefcase, Users } from 'lucide-react';

const WhyJoinUs = () => {
  const benefits = [
    {
      icon: <User className="w-8 h-8 text-green-600" />,
      title: "Personalized Guidance",
      description: "Get one-on-one mentorship tailored to your unique goals and challenges"
    },
    {
      icon: <Globe className="w-8 h-8 text-green-600" />,
      title: "Global Insights",
      description: "Access international perspectives from Rwanda's diaspora professionals"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-green-600" />,
      title: "Job Readiness Skills",
      description: "Develop practical skills and knowledge for today's competitive job market"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Stronger Network",
      description: "Build meaningful connections that last throughout your career"
    }
  ];

  return (
    <section id="why-join-us" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Join Us
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the benefits of being part of Rwanda's premier mentorship community
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 text-center hover:bg-green-50 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Icon Container */}
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-lg transition-shadow duration-300">
                {benefit.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200">
            Learn More About Our Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;