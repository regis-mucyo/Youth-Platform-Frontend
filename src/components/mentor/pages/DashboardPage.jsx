import React, { useState, useEffect } from "react";
import { Calendar, Clock, User, TrendingUp } from "lucide-react";

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
  },
];

const mockConnections = {
  mentees: [
    { id: 1, name: "Alice Johnson", status: "active" },
    { id: 2, name: "Bob Smith", status: "active" },
    { id: 3, name: "Sarah Chen", status: "active" },
  ],
};

// StatsCard Component
const StatsCard = ({ title, value, color, icon }) => {
  const colorMap = {
    blue: "bg-blue-100 text-blue-500",
    green: "bg-green-100 text-green-500",
    purple: "bg-purple-100 text-purple-500",
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5 flex items-center space-x-3 transition-transform duration-200 hover:scale-[1.02]">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center ${colorMap[color]}`}
      >
        {icon}
      </div>
      <div>
        <h3 className="text-xs font-medium text-gray-500">{title}</h3>
        <p className="text-xl font-semibold text-gray-900">{value}</p>
      </div>
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

const DashboardPage = () => {
  const [stats, setStats] = useState({
    totalSessions: 0,
    totalHours: 0,
    bookedSessions: 0,
    activeMentees: 0,
  });
  const [upcomingSessions, setUpcomingSessions] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const [toast, setToast] = useState({
    visible: false,
    message: "",
    type: "",
  });

  useEffect(() => {
    // Calculate stats from mock data
    const completedSessions = mockSessions.filter(
      (s) => s.status === "completed"
    );
    const upcomingSessionsData = mockSessions.filter(
      (s) => s.status === "upcoming"
    );
    const totalHours =
      completedSessions.reduce((sum, session) => sum + session.duration, 0) /
      60;

    setStats({
      totalSessions: completedSessions.length,
      totalHours: Math.round(totalHours * 10) / 10,
      bookedSessions: upcomingSessionsData.length,
      activeMentees: mockConnections.mentees.filter(
        (m) => m.status === "active"
      ).length,
    });

    setUpcomingSessions(upcomingSessionsData.slice(0, 3));

    // Create recent activity from sessions and connections
    const activities = [
      ...completedSessions.slice(-3).map((session) => ({
        id: session.id,
        type: "session_completed",
        message: `Completed session with ${session.mentee}`,
        time: "2 hours ago",
        icon: Calendar,
      })),
      {
        id: "new_mentee",
        type: "new_connection",
        message: "New mentee Sarah Chen joined",
        time: "1 day ago",
        icon: User,
      },
    ];
    setRecentActivity(activities);
  }, []);

  const handleJoinClick = (session) => {
    setSelectedSession(session);
  };

  const handleCloseModal = () => {
    setSelectedSession(null);
  };

  const showToast = (message, type) => {
    setToast({ visible: true, message, type });
    setTimeout(() => {
      setToast({ ...toast, visible: false });
    }, 3000);
  };

  const handleJoinSession = () => {
    handleCloseModal();
    showToast(`Joining session with ${selectedSession.mentee}...`, "info");
  };

  const handleCancelSession = () => {
    handleCloseModal();
    showToast(`Session with ${selectedSession.mentee} cancelled.`, "success");
  };

  return (
    <div className="space-y-5 p-4 pb-20 bg-gray-100 min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-2xl font-extrabold text-gray-900 mb-1">
          Dashboard
        </h1>
        <p className="text-gray-600 text-sm">
          Overview of your mentoring activities
        </p>
      </div>

      {/* Stats Cards */}
      <div className="container mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <StatsCard
          title="Total Sessions"
          value={stats.totalSessions}
          color="blue"
          icon={<Calendar className="w-4 h-4" />}
        />
        <StatsCard
          title="Total Hours Mentored"
          value={stats.totalHours}
          color="green"
          icon={<Clock className="w-4 h-4" />}
        />
        <StatsCard
          title="Active Mentees"
          value={stats.activeMentees}
          color="purple"
          icon={<User className="w-4 h-4" />}
        />
      </div>

      <div className="container mx-auto max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Upcoming Sessions */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold text-gray-900">
              Upcoming Sessions
            </h2>
            <span className="text-xs text-blue-500 font-medium">
              {stats.bookedSessions} scheduled
            </span>
          </div>

          {upcomingSessions.length > 0 ? (
            <div className="space-y-3">
              {upcomingSessions.map((session) => (
                <div
                  key={session.id}
                  className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-100"
                >
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">
                      {session.avatar}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">
                      {session.mentee}
                    </h3>
                    <p className="text-sm text-gray-600">{session.topic}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {session.date} at {session.time} • {session.duration}min
                    </p>
                  </div>
                  <button
                    className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full shadow-lg hover:bg-blue-700 transition-colors"
                    onClick={() => handleJoinClick(session)}
                  >
                    Join
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6">
              <Calendar className="w-10 h-10 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500 text-sm">
                No upcoming sessions scheduled
              </p>
            </div>
          )}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Recent Activity
          </h2>

          <div className="space-y-3">
            {recentActivity.map((activity) => {
              const Icon = activity.icon;
              return (
                <div key={activity.id} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex-shrink-0 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900 font-medium">
                      {activity.message}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="container mx-auto max-w-4xl bg-white rounded-xl shadow-md border border-gray-200 p-5">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Calendar className="w-6 h-6 text-blue-500 mb-2" />
            <h3 className="font-medium text-gray-900">Set Availability</h3>
            <p className="text-sm text-gray-600">Update your calendar</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <User className="w-6 h-6 text-green-500 mb-2" />
            <h3 className="font-medium text-gray-900">Find Mentees</h3>
            <p className="text-sm text-gray-600">Connect with learners</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <TrendingUp className="w-6 h-6 text-purple-500 mb-2" />
            <h3 className="font-medium text-gray-900">Share Resource</h3>
            <p className="text-sm text-gray-600">Upload learning materials</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Clock className="w-6 h-6 text-orange-500 mb-2" />
            <h3 className="font-medium text-gray-900">View Analytics</h3>
            <p className="text-sm text-gray-600">Track your impact</p>
          </button>
        </div>
      </div>

      {/* Session Modal */}
      {selectedSession && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/20 backdrop-blur-sm flex items-center justify-center p-4 m-auto">
          <div className="relative bg-white rounded-xl p-6 max-w-sm w-full mx-auto shadow-2xl">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-bold text-gray-900">
                Session Details
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
            <div className="space-y-3 text-sm">
              <p className="text-gray-700">
                <span className="font-semibold">Mentee:</span>{" "}
                {selectedSession.mentee}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Topic:</span>{" "}
                {selectedSession.topic}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Date:</span>{" "}
                {selectedSession.date}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Time:</span>{" "}
                {selectedSession.time}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Duration:</span>{" "}
                {selectedSession.duration} minutes
              </p>
            </div>
            <div className="mt-5 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <button
                className="flex-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold shadow-md text-sm"
                onClick={handleJoinSession}
              >
                Join Session
              </button>
              <button
                className="flex-1 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold shadow-md text-sm"
                onClick={handleCancelSession}
              >
                Cancel Session
              </button>
            </div>
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

export default DashboardPage;
