import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./SiderBar";
const Resource = () => {
  const [activeTab, setActiveTab] = useState("Article");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const articles = [
    {
      topic: "Career Growth",
      title: "How to Prepare for Your First Tech Interview",
      author: "Dr. Sarah Uwase",
      date: "Aug 12, 2025",
      level: "Beginner",
      link: "#",
    },
    {
      topic: "Mentorship Strategy",
      title: "Building Long-Term Mentor Relationships",
      author: "Prof. Jean Bosco",
      date: "Jul 28, 2025",
      level: "Intermediate",
      link: "#",
    },
  ];

  const videos = [
    {
      topic: "Mentorship Fundamentals",
      title: "The Art of Mentorship: Creating Meaningful Connections",
      author: "UConn Mentorship Team",
      date: "Apr 10, 2023",
      level: "Beginner",
      image: "https://img.youtube.com/vi/cIiIKPcIth4/hqdefault.jpg",
      link: "https://www.youtube.com/watch?v=cIiIKPcIth4",
    },
    {
      topic: "Mentorship Tools",
      title: "Mentoring Program Toolkit: Mentor Mentee Resources",
      author: "HR Education Edge",
      date: "Feb 11, 2024",
      level: "Intermediate",
      image: "https://img.youtube.com/vi/aY54gMB6SNI/hqdefault.jpg",
      link: "https://www.youtube.com/watch?v=aY54gMB6SNI",
    },
  ];

  return (
    <>
      <div className="flex h-screen bg-gray-50">
        <Sidebar
          open={sidebarOpen}
          setOpen={setSidebarOpen}
          activeItem="Resources"
        />
        <div className="flex flex-col flex-1">
          <Header
            setSidebarOpen={setSidebarOpen}
            dashboard={"Resources"}
            description={
              "Explore new skills through curated resources from your mentors."
            }
          />
          <main className="p-4 sm:p-6 overflow-y-auto">
            <div className="max-w-5xl mx-auto p-4">
              {/* Tabs */}
              <div className="flex space-x-4 mb-6">
                {["Article", "Video"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                      activeTab === tab
                        ? "bg-green-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeTab === "Article" &&
                  articles.map((item, index) => (
                    <div key={index} className="bg-white shadow rounded-lg p-6">
                      <p className="text-sm text-gray-500 mb-1">{item.topic}</p>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-2">
                        By <span className="font-medium">{item.author}</span> •{" "}
                        {item.date}
                      </p>
                      <span className="inline-block mt-3 px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                        {item.level}
                      </span>
                      <div className="mt-4">
                        <a
                          href={item.link}
                          className="inline-block bg-green-500 text-white text-sm px-4 py-2 rounded hover:bg-green-600 transition"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  ))}

                {activeTab === "Video" &&
                  videos.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white shadow rounded-lg overflow-hidden"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <p className="text-sm text-gray-500 mb-1">
                          {item.topic}
                        </p>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-600 mt-2">
                          By <span className="font-medium">{item.author}</span>{" "}
                          • {item.date}
                        </p>
                        <span className="inline-block mt-3 px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full">
                          {item.level}
                        </span>
                        <div className="mt-4">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-green-500 text-white text-sm px-4 py-2 rounded hover:bg-green-600 transition"
                          >
                            Watch
                          </a>
                        </div>
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

export default Resource;
