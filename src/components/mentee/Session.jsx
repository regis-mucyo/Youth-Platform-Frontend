import { useState } from "react";
import { Calendar as CalendarIcon, Clock } from "lucide-react";

const Sessions = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  // Example sessions data
  const sessions = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      topic: "Career Development & Goal Setting",
      date: "Dec 15, 2024",
      time: "2:00 PM - 3:00 PM",
      status: "upcoming",
    },
    {
      id: 2,
      name: "John Doe",
      topic: "Leadership & Communication",
      date: "Dec 18, 2024",
      time: "4:00 PM - 5:00 PM",
      status: "upcoming",
    },
    {
      id: 3,
      name: "Jane Smith",
      topic: "Entrepreneurship Basics",
      date: "Dec 20, 2024",
      time: "1:00 PM - 2:00 PM",
      status: "pending",
    },
    {
      id: 4,
      name: "Dr. Sarah Chen",
      topic: "Career Development & Goal Setting",
      date: "Dec 15, 2024",
      time: "2:00 PM - 3:00 PM",
      status: "upcoming",
    },
  ];

  const filteredSessions = sessions.filter((s) => s.status === activeTab);

  return (
    <div>
      {/* Tabs */}
      <div className="flex space-x-4 mb-6">
        {["Upcoming", "Pending", "History"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`px-6 py-2 rounded-lg ${
              activeTab === tab.toLowerCase()
                ? "bg-white shadow text-black"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Session Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSessions.length > 0 ? (
          filteredSessions.map((session) => (
            <div key={session.id} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">{session.name}</h3>
                  <p className="text-gray-500 text-sm">{session.topic}</p>
                  <div className="flex items-center mt-2 text-gray-500 text-sm">
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    {session.date}
                    <Clock className="w-4 h-4 ml-4 mr-2" />
                    {session.time}
                  </div>
                </div>
                <span
                  className={`text-white text-xs px-3 py-1 rounded-full ${
                    session.status === "upcoming"
                      ? "bg-green-500"
                      : session.status === "pending"
                      ? "bg-yellow-500"
                      : "bg-gray-400"
                  }`}
                >
                  {session.status}
                </span>
              </div>

              <div className="flex space-x-4 mt-4">
                <button
                  className={`text-white text-xs px-3 py-1 rounded-full ${
                    session.status === "upcoming"
                      ? "bg-green-500"
                      : session.status === "pending"
                      ? "bg-yellow-500"
                      : "bg-gray-400"
                  }`}
                >
                  Join Session
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No {activeTab} sessions found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Sessions;
