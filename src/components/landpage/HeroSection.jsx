import React from "react";

const HeroSection = ({ role = "mentee" }) => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Dynamic Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          {role === "mentee" ? (
            <>
              Bridging Rwanda’s Youth with the{" "}
              <span className="text-green-600">Diaspora</span>
            </>
          ) : (
            <>
              Share Your Expertise with{" "}
              <span className="text-green-600">Rwanda’s Future</span>
            </>
          )}
        </h1>

        {/* Descriptive Text */}
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
          {role === "mentee"
            ? "Get mentorship, global insights, and real career opportunities from Rwandan professionals abroad."
            : "Give back by mentoring talented youth in Rwanda. Shape careers, share knowledge, and build the Rwanda we believe in."}
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="bg-green-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
            {role === "mentee" ? "Start Your Journey" : "Become a Mentor"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
