import React, { useState, useEffect } from "react";
import { Calendar, Clock, Video, Star, MessageSquare } from "lucide-react";

// Mock Data
const mockSessions = [
  {
    id: 1,
    mentee: "Alice Johnson",
    topic: "React State Management",
    date: "Sep 15",
    time: "10:00 AM",
    duration: 60,
    status: "upcoming",
    avatar: "AJ",
    notes: "Review Redux and Context API patterns.",
  },
  {
    id: 2,
    mentee: "Bob Smith",
    topic: "Career Advice",
    date: "Sep 16",
    time: "1:30 PM",
    duration: 30,
    status: "upcoming",
    avatar: "BS",
    notes: "Discuss resume tips and networking strategies.",
  },
  {
    id: 3,
    mentee: "Charlie Brown",
    topic: "Machine Learning Basics",
    date: "Sep 17",
    time: "4:00 PM",
    duration: 90,
    status: "upcoming",
    avatar: "CB",
    notes: "Introduction to supervised vs. unsupervised learning.",
  },
  {
    id: 4,
    mentee: "Diana Prince",
    topic: "GraphQL APIs",
    date: "Sep 10",
    time: "11:00 AM",
    duration: 45,
    status: "completed",
    avatar: "DP",
    notes:
      "Discussed the benefits of GraphQL over REST. We also touched on setting up Apollo Client for a React application. She seemed to grasp the concepts well and asked great questions. Suggested resources for further reading.",
    feedback:
      "This was a great session. Diana was very knowledgeable and explained complex topics clearly.",
    rating: 5,
  },
  {
    id: 5,
    mentee: "Ethan Hunt",
    topic: "DevOps Best Practices",
    date: "Sep 8",
    time: "9:00 AM",
    duration: 60,
    status: "completed",
    avatar: "EH",
    notes:
      "Covered CI/CD pipelines and containerization basics. Went over the key phases of a CI/CD pipeline and the role of tools like Docker and Kubernetes. Ethan was keen on understanding the practical applications and seemed very engaged. He'll follow up after trying a basic Docker setup.",
    feedback:
      "Very helpful session, learned a lot about setting up a basic pipeline.",
    rating: 4,
  },
  {
    id: 6,
    mentee: "Fiona Glenn",
    topic: "JavaScript Fundamentals",
    date: "Sep 18",
    time: "2:00 PM",
    duration: 60,
    status: "pending",
    avatar: "FG",
    notes: "I'd like to review closures and async/await.",
  },
  {
    id: 7,
    mentee: "Joe Bloggs",
    topic: "Database Design",
    date: "Sep 20",
    time: "11:00 AM",
    duration: 60,
    status: "pending",
    avatar: "JB",
    notes:
      "I need help with normalization and schema design for a new project.",
  },
];

// TabNavigation Component - This was the missing piece!
const TabNavigation = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex space-x-4">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`
            px-3 py-2 text-sm font-medium rounded-t-lg transition-colors
            ${
              activeTab === tab.id
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

// Toast Component
const Toast = ({ message, type, onClose }) => {
  const colorMap = {
    success: "bg-green-500",
    info: "bg-blue-500",
  };

  return (
    <div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full text-white shadow-lg transition-transform duration-300 transform scale-100 ${colorMap[type]}`}
      role="alert"
    >
      <div className="flex items-center space-x-2">
        <span>{message}</span>
        <button
          onClick={onClose}
          className="text-white opacity-70 hover:opacity-100 transition-opacity"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

const SessionsPage = ({ activeSessionTab, setActiveSessionTab }) => {
  const [sessions, setSessions] = useState([]);
  const [filteredSessions, setFilteredSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const [toast, setToast] = useState({ visible: false, message: "", type: "" });
  const [declineReason, setDeclineReason] = useState("");

  useEffect(() => {
    setSessions(mockSessions);
  }, []);

  useEffect(() => {
    const filtered = sessions.filter((session) => {
      switch (activeSessionTab) {
        case "upcoming":
          return session.status === "upcoming";
        case "pending":
          return session.status === "pending";
        case "history":
          return (
            session.status === "completed" || session.status === "cancelled"
          );
        default:
          return true;
      }
    });
    setFilteredSessions(filtered);
  }, [sessions, activeSessionTab]);

  const showToast = (message, type) => {
    setToast({ visible: true, message, type });
    setTimeout(() => {
      setToast({ ...toast, visible: false });
    }, 3000);
  };

  const handleDeclineConfirm = (sessionId) => {
    setSessions((prev) =>
      prev.map((session) =>
        session.id === sessionId
          ? {
              ...session,
              status: "completed", // We'll treat declined as completed with a cancellation reason
              cancellationReason: declineReason,
            }
          : session
      )
    );
    setSelectedSession(null);
    setDeclineReason("");
    showToast("Session declined successfully!", "success");
  };

  const handleSessionAction = (sessionId, action) => {
    if (action === "approve") {
      setSessions((prev) =>
        prev.map((session) =>
          session.id === sessionId
            ? {
                ...session,
                status: "upcoming",
              }
            : session
        )
      );
      showToast("Session approved successfully!", "success");
    } else if (action === "decline") {
      const sessionToDecline = sessions.find((s) => s.id === sessionId);
      setSelectedSession({ ...sessionToDecline, action: "decline" });
    }
  };

  const handleViewNotesClick = (session) => {
    setSelectedSession({ ...session, action: "notes" });
  };

  const handleJoinClick = (session) => {
    setSelectedSession({ ...session, action: "join" });
  };

  const handleRescheduleClick = (session) => {
    setSelectedSession({ ...session, action: "reschedule" });
  };

  const handleCloseModal = () => {
    setSelectedSession(null);
    setDeclineReason(""); // Reset decline reason on close
  };

  const sessionTabs = [
    { id: "upcoming", label: "Upcoming" },
    { id: "pending", label: "Pending" },
    { id: "history", label: "History" },
  ];

  const renderTabContent = () => {
    switch (activeSessionTab) {
      case "upcoming":
        return filteredSessions.length > 0 ? (
          <div className="space-y-4">
            {filteredSessions.map((session) => (
              <div
                key={session.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        {session.avatar}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {session.mentee}
                      </h3>
                      <p className="text-sm text-gray-600">{session.topic}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="flex items-center text-xs text-gray-500">
                          <Calendar className="w-3 h-3 mr-1" /> {session.date}
                        </span>
                        <span className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1" /> {session.time} (
                          {session.duration}min)
                        </span>
                        <span className="flex items-center text-xs text-gray-500">
                          <Video className="w-3 h-3 mr-1" /> {session.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleJoinClick(session)}
                      className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Join Session
                    </button>
                    <button
                      onClick={() => handleRescheduleClick(session)}
                      className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Reschedule
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">No upcoming sessions found</p>
          </div>
        );
      case "pending":
        return filteredSessions.length > 0 ? (
          <div className="space-y-4">
            {filteredSessions.map((session) => (
              <div
                key={session.id}
                className="border border-yellow-200 bg-yellow-50 rounded-lg p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        {session.avatar}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {session.mentee}
                      </h3>
                      <p className="text-sm text-gray-600">{session.topic}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="flex items-center text-xs text-gray-500">
                          <Calendar className="w-3 h-3 mr-1" /> {session.date}
                        </span>
                        <span className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1" /> {session.time} (
                          {session.duration}min)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleSessionAction(session.id, "approve")}
                      className="px-3 py-1 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600 transition-colors"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleSessionAction(session.id, "decline")}
                      className="px-3 py-1 bg-red-500 text-white text-sm rounded-lg hover:bg-red-600 transition-colors"
                    >
                      Decline
                    </button>
                  </div>
                </div>
                {session.notes && (
                  <div className="mt-3 p-3 bg-white rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Requested topic:</strong> {session.notes}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Clock className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">No pending sessions found</p>
            <p className="text-sm text-gray-400 mt-1">
              Session requests from mentees will appear here
            </p>
          </div>
        );
      case "history":
        return filteredSessions.length > 0 ? (
          <div className="space-y-4">
            {filteredSessions.map((session) => (
              <div
                key={session.id}
                className="border border-gray-200 rounded-lg p-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">
                        {session.avatar}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {session.mentee}
                      </h3>
                      <p className="text-sm text-gray-600">{session.topic}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="flex items-center text-xs text-gray-500">
                          <Calendar className="w-3 h-3 mr-1" /> {session.date}
                        </span>
                        <span className="flex items-center text-xs text-gray-500">
                          <Clock className="w-3 h-3 mr-1" /> {session.duration}
                          min session
                        </span>
                        {session.rating && (
                          <div className="flex items-center text-xs text-yellow-500">
                            <Star className="w-3 h-3 mr-1 fill-current" />{" "}
                            {session.rating}/5
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleViewNotesClick(session)}
                      className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      View Notes
                    </button>
                    <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors">
                      <MessageSquare className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Clock className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">No session history found</p>
          </div>
        );
      default:
        return null;
    }
  };

  const renderModalContent = () => {
    if (!selectedSession) return null;

    const { mentee, topic, date, time, duration, notes, action } =
      selectedSession;

    switch (action) {
      case "join":
        return (
          <>
            <div className="space-y-3 text-sm">
              <p className="text-gray-700">
                <span className="font-semibold">Mentee:</span> {mentee}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Topic:</span> {topic}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Date:</span> {date}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Time:</span> {time}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Duration:</span> {duration}{" "}
                minutes
              </p>
            </div>
            <div className="mt-5 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <button
                className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md text-sm"
                onClick={() => {
                  handleCloseModal();
                  showToast(`Joining session with ${mentee}...`, "info");
                }}
              >
                Join Now
              </button>
              <button
                className="flex-1 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold shadow-md text-sm"
                onClick={() => {
                  handleCloseModal();
                  showToast(`Session with ${mentee} cancelled.`, "success");
                }}
              >
                Cancel Session
              </button>
            </div>
          </>
        );
      case "reschedule":
        return (
          <>
            <p className="text-sm text-gray-700 mb-4">
              Please propose a new time to {mentee}.
            </p>
            <textarea
              className="w-full h-24 p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Suggest a new date and time..."
            ></textarea>
            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md text-sm"
                onClick={() => {
                  handleCloseModal();
                  showToast(`Reschedule request sent to ${mentee}.`, "info");
                }}
              >
                Send Request
              </button>
            </div>
          </>
        );
      case "notes":
        return (
          <div className="space-y-3 text-sm">
            <p className="text-gray-700">
              <span className="font-semibold">Topic:</span> {topic}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Date:</span> {date}
            </p>
            <p className="text-gray-700 whitespace-pre-line">
              <span className="font-semibold">Notes:</span>{" "}
              {notes || "No notes available."}
            </p>
          </div>
        );
      case "decline":
        return (
          <>
            <p className="text-sm text-gray-700 mb-4">
              Please provide a reason for declining the session with {mentee}.
            </p>
            <textarea
              className="w-full h-24 p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., I'm unavailable at that time, topic is outside my expertise, etc."
              value={declineReason}
              onChange={(e) => setDeclineReason(e.target.value)}
            ></textarea>
            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold shadow-md text-sm"
                onClick={() => handleDeclineConfirm(selectedSession.id)}
              >
                Confirm Decline
              </button>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 p-4 pb-20 bg-gray-100 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-1">Sessions</h1>
        <p className="text-gray-600 text-sm">Manage your mentoring sessions</p>
      </div>

      <div className="container mx-auto max-w-4xl bg-white rounded-xl shadow-md border border-gray-200">
        <div className="border-b border-gray-200 px-6 pt-4">
          <TabNavigation
            tabs={sessionTabs}
            activeTab={activeSessionTab}
            onTabChange={setActiveSessionTab}
          />
        </div>
        <div className="p-6">{renderTabContent()}</div>
      </div>

      {/* Session Modal */}
      {selectedSession && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-600/50 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative bg-white rounded-xl p-6 max-w-sm w-full mx-auto shadow-2xl">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-bold text-gray-900">
                {selectedSession.action === "notes"
                  ? "Session Notes"
                  : "Session Details"}
              </h2>
              <button
                onClick={handleCloseModal}
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
            {renderModalContent()}
          </div>
        </div>
      )}

      {/* Conditionally render toast */}
      {toast.visible && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, visible: false })}
        />
      )}
    </div>
  );
};

export default SessionsPage;
