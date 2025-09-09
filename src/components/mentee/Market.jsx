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
  const content = {
    Jobs: [
      {
        title: "Junior Software Engineer",
        company: "Andela Rwanda",
        level: "Intermediate",
        description:
          "Work on global client projects using React and Node.js. Remote-first with mentorship and career growth.",
        type: "Full-time",
        salary: "RWF 1,200,000/month",
        button: "Apply",
        link: "https://amalitech.com/rwanda-training/",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "IT Support Technician",
        company: "BK Tech House",
        level: "Entry",
        description:
          "Provide technical support and maintain systems across departments. Strong troubleshooting skills required.",
        type: "Full-time",
        salary: "RWF 800,000/month",
        button: "Apply",
        link: "https://www.jobinrwanda.com",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80", 
      },
      {
        title: "DevOps Engineer",
        company: "One Acre Fund",
        level: "Advanced",
        description:
          "Manage CI/CD pipelines and cloud infrastructure for scalable systems. Experience with Docker and AWS preferred.",
        type: "Full-time",
        salary: "RWF 1,500,000/month",
        button: "Apply",
        link: "https://www.jobwebrwanda.com",
        image:
          "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80", // DevOps setup
      },
    ],

    Internships: [
      {
        title: "Frontend Intern",
        company: "AC Group",
        level: "Entry",
        description:
          "Assist in building UI components for mobility platforms. Learn React and Tailwind in a real-world setting.",
        type: "Part-time",
        salary: "Stipend: RWF 150,000/month",
        button: "Apply",
        link: "https://internship.rw/",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80", 
      },
      {
        title: "Finance & Admin Intern",
        company: "GIZ Rwanda",
        level: "Entry",
        description:
          "Support administrative tasks and financial reporting. Ideal for business and accounting students.",
        type: "Full-time",
        salary: "Stipend: RWF 200,000/month",
        button: "Apply",
        link: "https://www.jobwebrwanda.com",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Junior Support Engineer Intern",
        company: "One Acre Fund",
        level: "Entry",
        description:
          "Gain hands-on experience in IT support and system maintenance. Great for recent graduates.",
        type: "Full-time",
        salary: "Stipend: RWF 180,000/month",
        button: "Apply",
        link: "https://www.jobinrwanda.com",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80", 
      },
    ],

    Bootcamps: [
      {
        title: "Fullstack Developer Bootcamp",
        company: "AmaliTech Rwanda",
        level: "Intermediate",
        description:
          "12-week immersive training in React, Node.js, and PostgreSQL. Includes mentorship and job placement.",
        type: "Online",
        salary: "Free (Sponsored)",
        button: "Enroll",
        link: "https://amalitech.com/rwanda-training/",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Tech Up Bootcamp",
        company: "KLab Rwanda",
        level: "Beginner",
        description:
          "Intro to web development, mobile apps, and digital entrepreneurship. Ideal for youth and students.",
        type: "In-person",
        salary: "Free",
        button: "Enroll",
        link: "https://klab.rw",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Data Science Bootcamp",
        company: "Rwanda Coding Academy",
        level: "Advanced",
        description:
          "Learn Python, machine learning, and data visualization. Includes capstone project and certification.",
        type: "Hybrid",
        salary: "Tuition: RWF 250,000",
        button: "Enroll",
        link: "https://www.rca.gov.rw",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      },
    ],

    Webinars: [
      {
        title: "Building Scalable APIs with Node.js",
        company: "Rwanda Developers Community",
        level: "Open",
        description:
          "Live webinar on RESTful API design, performance, and security. Includes Q&A and code samples.",
        type: "Live Event",
        salary: "Free",
        button: "Register",
        link: "https://www.meetup.com/rwandadev",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "UI/UX Design with Figma",
        company: "UX Rwanda",
        level: "Open",
        description:
          "Interactive session on design systems, prototyping, and accessibility. Includes resource pack.",
        type: "Live Event",
        salary: "Free",
        button: "Register",
        link: "https://www.eventbrite.com/e/uiux-design-rwanda",
        image:
          "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      },
      {
        title: "Career Growth in Tech",
        company: "AmaliTech Rwanda",
        level: "Open",
        description:
          "Panel discussion with industry leaders on navigating tech careers in Rwanda and beyond.",
        type: "Live Event",
        salary: "Free",
        button: "Register",
        link: "https://amalitech.com/rwanda-training/",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      },
    ],
  };

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
            dashboard="Market Linkage"
            description="Discover new opportunities for jobs, internships, bootcamps, and webinars"
          />
          <main className="p-4 sm:p-6 overflow-y-auto">
            <div className="max-w-7xl mx-auto">
              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {Object.keys(content).map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveTab(category)}
                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition ${
                      activeTab === category
                        ? "bg-blue-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {content[activeTab]?.map((card, index) => (
                  <div
                    key={index}
                    className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col"
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="px-6 py-4 flex-1">
                      <h2 className="text-lg font-semibold text-gray-800">
                        {card.title}
                      </h2>
                      <p className="text-sm text-gray-500 mt-1">
                        {card.company}
                      </p>
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
                      <a
                        href={card.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition duration-200"
                      >
                        {card.button}
                        <ArrowRightCircle size={18} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Market;
