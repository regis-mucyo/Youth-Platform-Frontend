import React, { useState, useEffect } from "react";
import TabNavigation from "../components/TabNavigation";
import { mockSessions } from "../data/mockData";
import { Calendar, Clock, Video, Star, MessageSquare } from "lucide-react";

const SessionsPage = ({ activeSessionTab, setActiveSessionTab }) => {
  const [sessions, setSessions] = useState([]);
  const [filteredSessions, setFilteredSessions] = useState([]);

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
          return session.status === "completed";
        default:
          return true;
      }
    });
    setFilteredSessions(filtered);
  }, [sessions, activeSessionTab]);

  const handleSessionAction = (sessionId, action) => {
    setSessions((prev) =>
      prev.map((session) =>
        session.id === sessionId
          ? {
              ...session,
              status: action === "approve" ? "upcoming" : "cancelled",
            }
          : session
      )
    );
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
                    <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors">
                      Join Session
                    </button>
                    <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors">
                      Reschedule
                    </button>
                  </div>
                </div>
                {session.notes && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Notes:</strong> {session.notes}
                    </p>
                  </div>
                )}
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
                    <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors">
                      View Notes
                    </button>
                    <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors">
                      <MessageSquare className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                {session.feedback && (
                  <div className="mt-3 p-3 bg-green-50 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>Mentee feedback:</strong> {session.feedback}
                    </p>
                  </div>
                )}
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

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Sessions</h1>
        <p className="text-gray-600">Manage your mentoring sessions</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="border-b border-gray-200 px-6 pt-4">
          <TabNavigation
            tabs={sessionTabs}
            activeTab={activeSessionTab}
            onTabChange={setActiveSessionTab}
          />
        </div>

        <div className="p-6">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default SessionsPage;
