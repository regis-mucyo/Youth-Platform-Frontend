import React, { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Rocket,
  Video,
  DollarSign,
  Clock,
  ArrowRightCircle,
} from "lucide-react";
import Header from "./Header";
import Sidebar from "./SiderBar";
const Market = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Jobs");
  const tabs = [
    { name: "Jobs", icon: <Briefcase size={16} className="mr-2" /> },
    { name: "Internships", icon: <GraduationCap size={16} className="mr-2" /> },
    { name: "Bootcamps", icon: <Rocket size={16} className="mr-2" /> },
    { name: "Webinars", icon: <Video size={16} className="mr-2" /> },
  ];
  const content = {
    Jobs: {
      title: "Senior React Developer",
      company: "Innovate Tech Solutions",
      level: "Advanced",
      description:
        "Build scalable web applications using React, TypeScript, and Node.js. Join a fast-growing startup with excellent growth opportunities.",
      type: "Full-time",
      salary: "$120k - $150k",
      button: "Apply",
    },
    Internships: {
      title: "Frontend Intern",
      company: "PixelForge Labs",
      level: "Entry",
      description:
        "Assist in building UI components using HTML, CSS, and React. Great mentorship and learning environment.",
      type: "Part-time",
      salary: "Stipend: $800/month",
      button: "Apply",
    },
    Bootcamps: {
      title: "Fullstack Bootcamp",
      company: "CodeSprint Academy",
      level: "Intermediate",
      description:
        "12-week immersive program covering React, Node.js, and MongoDB. Includes career coaching and project portfolio.",
      type: "Online",
      salary: "Tuition: $2,500",
      button: "Enroll",
    },
    Webinars: {
      title: "Design Systems in Practice",
      company: "UXFlow Collective",
      level: "Open",
      description:
        "Live webinar on building scalable design systems with Figma and Tailwind. Includes Q&A and resource pack.",
      type: "Live Event",
      salary: "Free",
      button: "Register",
    },
  };
  const card = content[activeTab];
  return (
    <>
      <div className="flex h-screen bg-gray-50">
        <Sidebar
          open={sidebarOpen}
          setOpen={setSidebarOpen}
          activeItem="Market Linkage"
        />
        <div className="flex flex-col flex-1">
          <Header
            setSidebarOpen={setSidebarOpen}
            dashboard={"Market Linkage"}
            description={"Discover new opponutinities for the jobs,internships, bootcamps and webinars"}
          />
          <main className="p-4 sm:p-6 overflow-y-auto">
            <div className="max-w-2xl mx-auto p-4">
              {/* Tabs */}
              <div className="flex space-x-2 mb-6">
                {tabs.map(({ name, icon }) => (
                  <button
                    key={name}
                    onClick={() => setActiveTab(name)}
                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition ${
                      activeTab === name
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {icon}
                    {name}
                  </button>
                ))}
              </div>

              {/* Card */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-4">
                  <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    {card.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">{card.company}</p>
                  <span className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                    {card.level}
                  </span>
                  <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                    {card.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <DollarSign size={16} className="text-blue-600" />
                      <span className="font-semibold text-blue-600">
                        {card.salary}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={16} />
                      <span>{card.type}</span>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-50">
                  <button className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition duration-200">
                    {card.button}
                    <ArrowRightCircle size={18} />
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Market;
