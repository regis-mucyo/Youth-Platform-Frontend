import React from "react";
import {
  Building2,
  GraduationCap,
  Globe,
  Users,
  Award,
  Briefcase,
} from "lucide-react";

const Trust = () => {
  const partners = [
    {
      name: "University of Rwanda",
      icon: <GraduationCap className="w-12 h-12 text-gray-600" />,
      description: "Leading Higher Education",
    },
    {
      name: "Rwanda Development Board",
      icon: <Building2 className="w-12 h-12 text-gray-600" />,
      description: "National Development Agency",
    },
    {
      name: "UNICEF Rwanda",
      icon: <Globe className="w-12 h-12 text-gray-600" />,
      description: "International Organization",
    },
    {
      name: "Kigali Tech Hub",
      icon: <Award className="w-12 h-12 text-gray-600" />,
      description: "Technology Innovation Center",
    },
    {
      name: "Carnegie Mellon Africa",
      icon: <Users className="w-12 h-12 text-gray-600" />,
      description: "Global University Campus",
    },
    {
      name: "Rwanda Chamber of Commerce",
      icon: <Briefcase className="w-12 h-12 text-gray-600" />,
      description: "Business Community Leader",
    },
  ];

  return (
    <section id="trusted-by" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted By Leading Organizations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We partner with Rwanda's most respected institutions to create
            meaningful career opportunities
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {partner.icon}
              </div>

              {/* Organization Name */}
              <h3 className="font-semibold text-gray-900 text-sm mb-2 leading-tight">
                {partner.name}
              </h3>

              {/* Description */}
              <p className="text-xs text-gray-500 leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16 bg-white rounded-xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Organizations Choose ElevateLink
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Talent Development
              </h4>
              <p className="text-gray-600 text-sm">
                Help develop the next generation of skilled professionals in
                Rwanda
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Global Network
              </h4>
              <p className="text-gray-600 text-sm">
                Connect with Rwanda's global diaspora for international
                opportunities
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Proven Results
              </h4>
              <p className="text-gray-600 text-sm">
                Track record of successful mentorship outcomes and career
                advancement
              </p>
            </div>
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="text-center mt-12">
          <div className="mb-4">
            <p className="text-gray-600">Interested in partnering with us?</p>
          </div>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
};

export default Trust;
