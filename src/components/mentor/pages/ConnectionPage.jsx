import React, { useState, useEffect } from "react";
import {
  Search,
  User,
  MapPin,
  Star,
  MessageSquare,
  Calendar,
  Clock,
  Video,
  Circle,
  Plus,
} from "lucide-react";

// CSS for the animations
const animations = `
  @keyframes ping {
    75%, 100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-ping {
    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.3s ease-out forwards;
  }
`;

const mockSessions = [
  {
    id: 1,
    mentee: "Ishema Keza",
    topic: "React State Management",
    date: "Sep 15",
    time: "10:00 AM",
    duration: 60,
    status: "upcoming",
    avatar: "IK",
    notes: "Review Redux and Context API patterns.",
  },
  {
    id: 2,
    mentee: "Kwizera David",
    topic: "Career Advice",
    date: "Sep 16",
    time: "1:30 PM",
    duration: 30,
    status: "upcoming",
    avatar: "KD",
    notes: "Discuss resume tips and networking strategies.",
  },
  {
    id: 3,
    mentee: "Umuhoza Ben",
    topic: "Machine Learning Basics",
    date: "Sep 17",
    time: "4:00 PM",
    duration: 90,
    status: "upcoming",
    avatar: "UB",
    notes: "Introduction to supervised vs. unsupervised learning.",
  },
  {
    id: 4,
    mentee: "Irangira Hope",
    topic: "GraphQL APIs",
    date: "Sep 10",
    time: "11:00 AM",
    duration: 45,
    status: "completed",
    avatar: "IH",
    notes:
      "Discussed the benefits of GraphQL over REST. We also touched on setting up Apollo Client for a React application. She seemed to grasp the concepts well and asked great questions. Suggested resources for further reading.",
    feedback:
      "This was a great session. Irangira was very knowledgeable and explained complex topics clearly.",
    rating: 5,
  },
];

const mockConnections = {
  mentees: [
    {
      id: 1,
      name: "Ishema Keza",
      avatar: "IK",
      field: "UI Design",
      company: "Tech Solutions Inc.",
      level: "Junior",
      totalSessions: 3,
      joinDate: "Jan 2023",
      skills: ["Figma", "Sketch", "HTML/CSS"],
    },
    {
      id: 2,
      name: "Kwizera David",
      avatar: "KD",
      field: "Data Science",
      company: "Data Insights Co.",
      level: "Mid-Level",
      totalSessions: 5,
      joinDate: "Mar 2022",
      skills: ["Python", "Pandas", "Machine Learning"],
    },
    {
      id: 3,
      name: "Umuhoza Ben",
      avatar: "UB",
      field: "Software Development",
      company: "Innovate Hub",
      level: "Senior",
      totalSessions: 10,
      joinDate: "Feb 2021",
      skills: ["React", "Node.js", "AWS"],
    },
    {
      id: 4,
      name: "Irangira Hope",
      avatar: "IH",
      field: "Backend Development",
      company: "Global Systems",
      level: "Mid-Level",
      totalSessions: 2,
      joinDate: "Jun 2023",
      skills: ["Java", "Spring", "SQL"],
    },
  ],
  mentors: [
    {
      id: 1,
      name: "Kambanda John",
      avatar: "KJ",
      field: "UX Design",
      company: "Design Pro",
      rating: 4.8,
      totalMentees: 15,
      yearsExperience: 8,
      skills: ["UI/UX", "Figma", "Design Thinking"],
    },
    {
      id: 2,
      name: "Uwase Claire",
      avatar: "UC",
      field: "AI Research",
      company: "Future Labs",
      rating: 4.9,
      totalMentees: 8,
      yearsExperience: 12,
      skills: ["Machine Learning", "Neural Networks", "Python"],
    },
    {
      id: 3,
      name: "Mugabo Paul",
      avatar: "MP",
      field: "Product Management",
      company: "Innovate Hub",
      rating: 4.7,
      totalMentees: 20,
      yearsExperience: 10,
      skills: ["Agile", "Roadmapping", "UX Strategy"],
    },
  ],
};

const mockRecommendedMentors = [
  {
    id: 4,
    name: "Mukamana Grace",
    avatar: "MG",
    field: "Frontend Development",
    company: "Web Wizards",
    rating: 4.6,
    totalMentees: 10,
    yearsExperience: 7,
    skills: ["React", "Vue.js", "Tailwind CSS"],
  },
  {
    id: 5,
    name: "Mugisha Benon",
    avatar: "MB",
    field: "Mobile Development",
    company: "App Innovators",
    rating: 4.9,
    totalMentees: 18,
    yearsExperience: 9,
    skills: ["Swift", "Kotlin", "React Native"],
  },
  {
    id: 6,
    name: "Kamana Eric",
    avatar: "KE",
    field: "Cybersecurity",
    company: "SecureTech Solutions",
    rating: 4.5,
    totalMentees: 6,
    yearsExperience: 5,
    skills: ["Network Security", "Penetration Testing", "Ethical Hacking"],
  },
];

// Component to handle tab navigation
const TabNavigation = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex space-x-4 border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`py-2 px-4 text-sm font-medium transition-colors duration-200 focus:outline-none ${
            activeTab === tab.id
              ? "border-b-2 border-blue-500 text-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => onTabChange(tab.id)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

const ConnectionPage = ({ activeConnectionTab, setActiveConnectionTab }) => {
  const [connections, setConnections] = useState({ mentees: [], mentors: [] });
  const [recommendedMentors, setRecommendedMentors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredConnections, setFilteredConnections] = useState([]);
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [selectedMenteeSessions, setSelectedMenteeSessions] = useState([]);
  const [selectedMenteeName, setSelectedMenteeName] = useState("");
  const [toast, setToast] = useState({ message: "", visible: false });
  const [connectStatus, setConnectStatus] = useState({});

  useEffect(() => {
    // Map the mock data to include hasUpcomingSession for mentees
    setConnections({
      mentees: mockConnections.mentees.map((mentee) => {
        const hasUpcoming = mockSessions.some(
          (session) =>
            session.mentee === mentee.name && session.status === "upcoming"
        );
        return { ...mentee, hasUpcomingSession: hasUpcoming };
      }),
      mentors: mockConnections.mentors || [],
    });
    setRecommendedMentors(mockRecommendedMentors);
  }, []);

  useEffect(() => {
    const currentConnections =
      activeConnectionTab === "mentee"
        ? connections.mentees
        : connections.mentors;

    const filtered = currentConnections.filter(
      (connection) =>
        connection.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        connection.field.toLowerCase().includes(searchTerm.toLowerCase()) ||
        connection.skills.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    setFilteredConnections(filtered);
  }, [connections, activeConnectionTab, searchTerm]);

  useEffect(() => {
    if (toast.visible) {
      const timer = setTimeout(() => {
        setToast({ ...toast, visible: false });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const showToast = (message) => {
    setToast({ message, visible: true });
  };

  const handleConnect = (mentorId) => {
    setConnectStatus((prevStatus) => ({
      ...prevStatus,
      [mentorId]: "loading",
    }));

    // Simulate an API call
    setTimeout(() => {
      setConnectStatus((prevStatus) => ({
        ...prevStatus,
        [mentorId]: "pending",
      }));
      showToast("Connection request sent!");
    }, 2000);
  };

  const handleMessage = (connectionId) => {
    console.log(`Messaging ${connectionId}`);
    showToast("Opening chat...");
  };

  const handleSchedule = (menteeName) => {
    const menteeSessions = mockSessions.filter(
      (session) => session.mentee === menteeName
    );
    setSelectedMenteeSessions(menteeSessions);
    setSelectedMenteeName(menteeName);
    setShowScheduleModal(true);
  };

  const handleScheduleNewMeeting = () => {
    showToast("Opening calendar to schedule a new meeting...");
    // Placeholder for actual scheduling logic
    console.log(
      "Navigating to scheduling page or opening a new scheduling modal."
    );
  };

  const connectionTabs = [
    { id: "mentor", label: "Mentors" },
    { id: "mentee", label: "Mentees" },
  ];

  const renderTabContent = () => {
    switch (activeConnectionTab) {
      case "mentor":
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gray-800">My Mentors</h2>
            {filteredConnections.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredConnections.map((mentor) => (
                  <div
                    key={mentor.id}
                    className="bg-white rounded-xl shadow-md p-4 flex flex-col transition-transform transform hover:scale-105"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                        {mentor.avatar}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900">
                          {mentor.name}
                        </h3>
                        <p className="text-xs text-gray-500">{mentor.field}</p>
                      </div>
                    </div>

                    <div className="flex-grow space-y-1.5 text-gray-700 text-sm mb-3">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                        {mentor.company}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-2 text-yellow-500" />
                        <span className="font-semibold">{mentor.rating}</span>/5
                        • {mentor.totalMentees} mentees
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-gray-400" />
                        {mentor.yearsExperience} years experience
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {mentor.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-2 mt-auto pt-3 border-t border-gray-100 justify-end">
                      <button
                        onClick={() => handleMessage(mentor.id)}
                        className="px-3 py-2 border border-gray-300 text-gray-700 text-xs rounded-lg hover:bg-gray-50 transition-colors shadow-sm flex items-center"
                      >
                        <svg
                          className="w-4 h-4 mr-2 text-gray-500"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 8H17C17.5523 8 18 8.44772 18 9V17L21 20V9C21 7.34315 19.6569 6 18 6H7C6.44772 6 6 6.44772 6 7V17C6 17.5523 6.44772 18 7 18H15M17 21H7C5.34315 21 4 19.6569 4 18V7C4 5.34315 5.34315 4 7 4H17C18.6569 4 20 5.34315 20 7V17C20 18.6569 18.6569 20 17 20V21Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Message
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <User className="w-10 h-10 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500 font-medium">No mentors found</p>
                <p className="text-sm text-gray-400 mt-1">
                  You haven't connected with any mentors yet.
                </p>
              </div>
            )}

            <h2 className="text-xl font-bold text-gray-800 pt-6">
              Recommended Mentors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockRecommendedMentors.map((mentor) => (
                <div
                  key={mentor.id}
                  className="bg-white rounded-xl shadow-md p-4 flex flex-col transition-transform transform hover:scale-105"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                      {mentor.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">
                        {mentor.name}
                      </h3>
                      <p className="text-xs text-gray-500">{mentor.field}</p>
                    </div>
                  </div>

                  <div className="flex-grow space-y-1.5 text-gray-700 text-sm mb-3">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      {mentor.company}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-2 text-yellow-500" />
                      <span className="font-semibold">{mentor.rating}</span>/5 •{" "}
                      {mentor.totalMentees} mentees
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-gray-400" />
                      {mentor.yearsExperience} years experience
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {mentor.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-end mt-auto pt-3 border-t border-gray-100">
                    <button
                      onClick={() => handleConnect(mentor.id)}
                      disabled={
                        connectStatus[mentor.id] === "loading" ||
                        connectStatus[mentor.id] === "pending"
                      }
                      className={`flex-1 px-3 py-2 text-white text-xs rounded-lg transition-colors shadow-sm flex items-center justify-center
                        ${
                          connectStatus[mentor.id] === "pending"
                            ? "bg-gray-500 cursor-not-allowed"
                            : "bg-blue-600 hover:bg-blue-700"
                        }
                        ${
                          connectStatus[mentor.id] === "loading" &&
                          "bg-blue-400 cursor-wait"
                        }
                      `}
                    >
                      {connectStatus[mentor.id] === "loading" ? (
                        "Loading..."
                      ) : connectStatus[mentor.id] === "pending" ? (
                        "Request Pending"
                      ) : (
                        <>
                          <Plus className="w-3 h-3 mr-1" /> Connect
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case "mentee":
        return filteredConnections.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredConnections.map((mentee) => (
              <div
                key={mentee.id}
                className="bg-white rounded-xl shadow-md p-4 flex flex-col transition-transform transform hover:scale-105"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-lg">
                    {mentee.avatar}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900">
                      {mentee.name}
                    </h3>
                    <p className="text-xs text-gray-500">{mentee.field}</p>
                  </div>
                </div>

                <div className="flex-grow space-y-1.5 text-gray-700 text-sm mb-3">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                    {mentee.company} • {mentee.level}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                    {mentee.totalSessions} sessions completed
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-2 text-gray-400" />
                    Joined {mentee.joinDate}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {mentee.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 bg-green-100 text-green-800 text-xs font-medium rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex justify-end mt-auto pt-3 border-t border-gray-100">
                  <button
                    onClick={() => handleSchedule(mentee.name)}
                    className="relative px-4 py-2 bg-blue-600 text-white text-xs rounded-lg hover:bg-blue-700 transition-colors shadow-sm font-semibold flex items-center"
                  >
                    Schedule
                    {mentee.hasUpcomingSession && (
                      <>
                        {/* Ping animation effect */}
                        <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-400 opacity-75 animate-ping"></span>
                        {/* Solid notification badge */}
                        <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <User className="w-10 h-10 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-500 font-medium">
              No mentees found
            </p>
            <p className="text-xs text-gray-400 mt-1">
              You haven't connected with any mentees yet.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen font-sans">
      <style>{animations}</style>
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          My Connections
        </h1>
        <p className="text-gray-600 text-sm">Manage your mentees and mentors</p>

        <div className="mt-6 bg-white p-4 rounded-xl shadow-md border border-gray-200">
          <TabNavigation
            tabs={connectionTabs}
            activeTab={activeConnectionTab}
            onTabChange={setActiveConnectionTab}
          />
        </div>

        {/* Search Bar */}
        <div className="relative mt-4">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by name, field or skills"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          />
        </div>

        {/* Content Area */}
        <div className="mt-4">{renderTabContent()}</div>
      </div>

      {/* Schedule Modal */}
      {showScheduleModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-600/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-white rounded-xl p-6 max-w-lg w-full mx-auto shadow-2xl">
            <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-3">
              <h2 className="text-xl font-bold text-gray-900">
                Sessions with {selectedMenteeName}
              </h2>
              <button
                onClick={() => setShowScheduleModal(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {selectedMenteeSessions.length > 0 ? (
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {selectedMenteeSessions.map((session) => (
                  <div
                    key={session.id}
                    className={`border rounded-lg p-3 transition-all duration-300 ${
                      session.status === "upcoming"
                        ? "bg-blue-50 border-blue-200 shadow-sm"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div
                        className={`p-1.5 rounded-full ${
                          session.status === "upcoming"
                            ? "bg-blue-100"
                            : "bg-gray-200"
                        }`}
                      >
                        <Calendar
                          className={`w-4 h-4 ${
                            session.status === "upcoming"
                              ? "text-blue-600"
                              : "text-gray-500"
                          }`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 text-sm">
                          {session.topic}
                        </h3>
                        <p className="text-xs text-gray-600">
                          {session.date} at {session.time} • {session.duration}
                          min
                        </p>
                        <p
                          className={`text-xs font-medium mt-1 ${
                            session.status === "upcoming"
                              ? "text-blue-500"
                              : session.status === "completed"
                              ? "text-green-500"
                              : "text-yellow-500"
                          }`}
                        >
                          Status:{" "}
                          {session.status.charAt(0).toUpperCase() +
                            session.status.slice(1)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6">
                <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500 font-medium">
                  No sessions recorded with this mentee yet.
                </p>
              </div>
            )}
            <div className="mt-6 flex justify-between items-center">
              <button
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold shadow-sm"
                onClick={handleScheduleNewMeeting}
              >
                Schedule another meeting
              </button>
              <button
                className="px-5 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm font-semibold shadow-sm"
                onClick={() => setShowScheduleModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast Notification */}
      {toast.visible && (
        <div className="fixed bottom-6 right-6 p-4 rounded-lg shadow-xl bg-gray-800 text-white text-sm z-[100] transition-transform transform duration-300 ease-out animate-fade-in-up">
          {toast.message}
        </div>
      )}
    </div>
  );
};

export default ConnectionPage;
