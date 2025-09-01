import React from "react";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "My mentor helped me navigate the tech industry and land my dream job at a startup. The guidance was invaluable.",
      name: "Sarah Mukamana",
      role: "Software Developer",
      type: "Mentee",
      avatar: "SM",
      bgColor: "bg-green-500",
    },
    {
      quote:
        "Being a mentor has been incredibly rewarding. Watching young professionals grow and succeed fills me with pride.",
      name: "Jean Claude Nzeyimana",
      role: "Business Consultant",
      type: "Mentor",
      avatar: "JN",
      bgColor: "bg-blue-500",
    },
    {
      quote:
        "The international perspective my mentor provided was exactly what I needed to expand my business globally.",
      name: "Grace Uwimana",
      role: "Entrepreneur",
      type: "Mentee",
      avatar: "GU",
      bgColor: "bg-purple-500",
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Community Says
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real stories from mentees and mentors who've transformed their
            careers
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 hover:bg-green-50 hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 bg-green-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Quote Text */}
              <div className="mb-6 pt-4">
                <p className="text-gray-700 italic leading-relaxed text-lg">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center">
                {/* Avatar */}
                <div
                  className={`${testimonial.bgColor} rounded-full w-12 h-12 flex items-center justify-center mr-4 text-white font-bold text-sm shadow-md`}
                >
                  {testimonial.avatar}
                </div>

                {/* Name and Role */}
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <div className="mt-1">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        testimonial.type === "Mentor"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {testimonial.type}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-green-50 rounded-lg p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600">Active Mentors</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
            <div className="text-gray-600">Success Stories</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6">
            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-600">Countries Connected</div>
          </div>
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200">
            Join Our Community
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
