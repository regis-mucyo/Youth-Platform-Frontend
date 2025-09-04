import React, { useState } from "react";
import { Briefcase, Building2, Star, Layers } from "lucide-react";
import Header from "./Header";
import Sidebar from "./SiderBar";

const data = {
  Mentor: [
    {
      photo: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Dr. Sarah Chen",
      title: "Senior Software Engineer",
      company: "Google",
      expertise: "Full-Stack Development",
      experience: 8,
      rating: 4.8,
      reviews: 42,
      description:
        "Helps devs transition into tech. Specializes in React, Node.js, and system design.",
    },
    {
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Michael Rodriguez",
      title: "Tech Lead",
      company: "Microsoft",
      expertise: "Software Engineering",
      experience: 10,
      rating: 4.8,
      reviews: 35,
      description:
        "Guides devs on interviews and career growth. Loves mentoring engineers.",
    },
        {
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Michael Rodriguez",
      title: "Tech Lead",
      company: "Microsoft",
      expertise: "Software Engineering",
      experience: 10,
      rating: 4.8,
      reviews: 35,
      description:
        "Guides devs on interviews and career growth. Loves mentoring engineers.",
    },
  ],
  Mentee: [
    {
      photo: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Amina Yusuf",
      title: "Junior Developer",
      company: "Freelance",
      expertise: "Frontend Development",
      description:
        "Learning React and UI/UX. Wants help with career and portfolio.",
    },
    {
      photo: "https://randomuser.me/api/portraits/men/76.jpg",
      name: "Jean-Paul Niyonkuru",
      title: "CS Student",
      company: "University of Rwanda",
      expertise: "Web Fundamentals",
      description:
        "Building mentorship platforms. Needs help with JS and system design.",
    },
  ],
};

const Myconnection = () => {
  const [activeTab, setActiveTab] = useState("Mentor");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 font-[Poppins]">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} activeItem="My Connections" />
      <div className="flex flex-col flex-1">
        <Header setSidebarOpen={setSidebarOpen} dashboard={'My Connection'}  description={'View and manage your mentor and mentee relationship.'}/>
        <main className="p-4 sm:p-6 overflow-y-auto">
          <section className="py-10 px-4">
            {/* Tabs */}
            <div className="flex justify-center mb-6">
              {["Mentor", "Mentee"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`mx-1 px-2 py-1 rounded-xl w-10/12 font-medium ${
                    activeTab === tab
                      ? "bg-white shadow text-black"
                      : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Cards */}
            <div className="flex flex-wrap justify-center gap-4">
              {data[activeTab].map((person, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg p-6 w-full max-w-80"
                >
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-center">
                    {person.name}
                  </h3>
                  <p className="text-sm text-gray-600 text-center mb-2">
                    {person.title}
                  </p>

                  <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-green-500" />
                      <span>{person.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-green-500" />
                      <span>{person.expertise}</span>
                    </div>

                    {activeTab === "Mentor" && (
                      <>
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-green-500" />
                          <span>{person.experience} yrs experience</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span>
                            {person.rating} ({person.reviews} reviews)
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  <p className="mt-3 text-gray-600 text-sm">
                    {person.description}
                  </p>

                  <button className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                    {activeTab === "Mentor"
                      ? "Book Session"
                      : "Request Mentorship"}
                  </button>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Myconnection;
