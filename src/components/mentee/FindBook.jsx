import React, { useState } from "react";
import { Briefcase, Building2, Star, Layers } from "lucide-react";
import Header from "./Header";
import Sidebar from "./SiderBar";
import BookModal from "./BookModal"; 
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
      name: "Michael Buban",
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
      name: "Mugisha Thicien",
      title: "System analyist",
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
      name: "Mucyo Regis",
      title: "Tech Lead",
      company: "Africa Hub",
      expertise: "Software Engineering",
      experience: 10,
      rating: 4.8,
      reviews: 35,
      description:
        "Guides devs on interviews and career growth. Loves mentoring engineers.",
    },
    
    {
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Byukusenge Kubana Baraka",
      title: "Entrepreneur",
      company: "XTZ Soft",
      expertise: "Software Engineering",
      experience: 18,
      rating: 4.9,
      reviews: 39,
      description:
        "Guides devs on interviews and career growth. Loves mentoring engineers.",
    },
  ],
};

const FindBook = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
const [selectedMentor, setSelectedMentor] = useState(null);


return (
  <>
    {selectedMentor && (
      <BookModal
        mentor={selectedMentor}
        onClose={() => setSelectedMentor(null)}
      />
    )}

    <div className="flex h-screen bg-gray-50">
      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        activeItem="Book Session"
      />
      <div className="flex flex-col flex-1">
        <Header
          setSidebarOpen={setSidebarOpen}
          dashboard={"Book Session"}
          description={"View your mentor and book session with them."}
        />
        <main className="p-4 sm:p-6 overflow-y-auto">
          <section className="py-10 px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {data.Mentor.map((person, index) => (
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
                      <Building2 className="w-4 h-4 text-blue-500" />
                      <span>{person.company}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-blue-500" />
                      <span>{person.expertise}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-blue-500" />
                      <span>{person.experience} yrs experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>
                        {person.rating} ({person.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  <p className="mt-3 text-gray-600 text-sm">
                    {person.description}
                  </p>

                  <button
                    className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    onClick={() => setSelectedMentor(person)}
                  >
                    Book Session
                  </button>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  </>
);

};

export default FindBook;
