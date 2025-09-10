import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Import your images
import mentees2 from "../../assets/images/mentees2.jpg";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.png";
import image5 from "../../assets/images/image5.png";

const images = [mentees2, image1, image2, image3, image4, image5];

const HeroSection = ({ role = "mentee" }) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAnimating) return; // Prevent animation stacking

      setIsAnimating(true);

      // Match this timeout with animation duration (1.2s)
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        setIsAnimating(false);
      }, 1200);
    }, 3000); // Change every 6s → gives 1.2s animation + 4.8s pause

    return () => clearInterval(interval);
  }, [isAnimating]);

  const nextImageIndex = (currentImageIndex + 1) % images.length;

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Current Image — Slides OUT to the left with slow ease */}
      <div className="absolute inset-0">
        <img
          src={images[currentImageIndex]}
          alt="Current background"
          className={`w-full h-full object-cover ${
            isAnimating ? "slide-out" : ""
          }`}
        />
      </div>

      {/* Next Image — Slides IN from the right (only rendered during transition) */}
      {isAnimating && (
        <div className="absolute inset-0 z-0">
          <img
            src={images[nextImageIndex]}
            alt="Next background"
            className="w-full h-full object-cover slide-in"
          />
        </div>
      )}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-none bg-opacity-40"></div>

      {/* Content — No animation on text or button */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 md:px-8">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          {role === "mentee" ? (
            <>
              Bridging Rwanda’s Youth with the <br />
              <span className="text-blue-300">Diaspora</span>
            </>
          ) : (
            <>
              Share Your Expertise with <br />
              <span className="text-blue-300">Rwanda’s Future</span>
            </>
          )}
        </h1>

        <p className="text-lg md:text-xl max-w-3xl mb-8">
          {role === "mentee"
            ? "Get mentorship, global insights, and real career opportunities from Rwandan professionals abroad."
            : "Give back by mentoring talented youth in Rwanda. Shape careers, share knowledge, and build the Rwanda we believe in."}
        </p>

        <HeroCTA role={role} navigate={navigate} />
      </div>
    </div>
  );
};

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
