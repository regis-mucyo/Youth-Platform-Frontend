import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import mentees2 from "../../assets/images/mentees2.jpg";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";

// The array of all images to cycle through
const images = [mentees2, image1, image2, image3, image4, image5];

const HeroSection = ({ role = "mentee" }) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Use useEffect to change the background image every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  const heroStyle = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    transition: "background-image 1s ease-in-out", // Smooth transition
    backgroundImage: `url(${images[currentImageIndex]})`,
  };

  return (
    <section
      style={heroStyle}
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Semi-transparent black overlay for text readability */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Dynamic Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          {role === "mentee" ? (
            <>
              Bridging Rwanda’s Youth with the{" "}
              <span className="text-blue-400">Diaspora</span>
            </>
          ) : (
            <>
              Share Your Expertise with{" "}
              <span className="text-blue-400">Rwanda’s Future</span>
            </>
          )}
        </h1>

        {/* Descriptive Text */}
        <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
          {role === "mentee"
            ? "Get mentorship, global insights, and real career opportunities from Rwandan professionals abroad."
            : "Give back by mentoring talented youth in Rwanda. Shape careers, share knowledge, and build the Rwanda we believe in."}
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          {/* Pass the navigate function as a prop */}
          <HeroCTA role={role} navigate={navigate} />
        </div>
      </div>
    </section>
  );
};

// HeroCTA now receives 'navigate' as a prop
function HeroCTA({ role, navigate }) {
  if (role === "mentee") {
    return (
      <button
        onClick={() => navigate("/register")}
        className="bg-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
      >
        Start Your Journey
      </button>
    );
  }
  return (
    <button
      onClick={() => navigate("/mentor")}
      className="bg-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
    >
      Become a Mentor
    </button>
  );
}

export default HeroSection;
