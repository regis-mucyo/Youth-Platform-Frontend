import React, { useState, useEffect } from "react";
import {
  Search,
  User,
  MapPin,
  Star,
  MessageSquare,
  Calendar,
} from "lucide-react";
import TabNavigation from "../components/TabNavigation";
import { mockConnections } from "../data/mockData";

const ConnectionPage = ({ activeConnectionTab, setActiveConnectionTab }) => {
  const [connections, setConnections] = useState({ mentees: [], mentors: [] });
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredConnections, setFilteredConnections] = useState([]);

  useEffect(() => {
    setConnections(mockConnections);
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

  const handleConnect = (connectionId) => {
    console.log(`Connecting with ${connectionId}`);
  };

  const handleMessage = (connectionId) => {
    console.log(`Messaging ${connectionId}`);
    alert(`Opening message interface for connection ${connectionId}`);
  };

  const handleSchedule = (menteeId) => {
    console.log(`Scheduling session with mentee ${menteeId}`);
    alert(`Opening scheduling interface for mentee ${menteeId}`);
  };

  const handleViewProfile = (connectionId) => {
    console.log(`Viewing profile ${connectionId}`);
    alert(`Opening profile for connection ${connectionId}`);
  };

  const connectionTabs = [
    { id: "mentor", label: "Mentor" },
    { id: "mentee", label: "Mentee" },
  ];

  const renderTabContent = () => {
    switch (activeConnectionTab) {
      case "mentor":
        return filteredConnections.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredConnections.map((mentor) => (
              <div
                key={mentor.id}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {mentor.avatar}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{mentor.name}</h3>
                    <p className="text-sm text-gray-600">{mentor.field}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {mentor.company}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Star className="w-4 h-4 mr-2 text-yellow-500" />
                    {mentor.rating}/5 • {mentor.totalMentees} mentees
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="w-4 h-4 mr-2" />
                    {mentor.yearsExperience} years experience
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {mentor.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-2">
                  <button
                    onClick={() => handleConnect(mentor.id)}
                    className="flex-1 px-3 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Connect
                  </button>
                  <button
                    onClick={() => handleMessage(mentor.id)}
                    className="px-3 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <User className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">No mentors found</p>
            <p className="text-sm text-gray-400 mt-1">
              Try adjusting your search terms
            </p>
          </div>
        );

      case "mentee":
        return filteredConnections.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredConnections.map((mentee) => (
              <div
                key={mentee.id}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {mentee.avatar}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{mentee.name}</h3>
                    <p className="text-sm text-gray-600">{mentee.field}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {mentee.company} • {mentee.level}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {mentee.totalSessions} sessions completed
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="w-4 h-4 mr-2" />
                    Joined {mentee.joinDate}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {mentee.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${
                      mentee.status === "active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {mentee.status}
                  </span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleMessage(mentee.id)}
                      className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Message
                    </button>
                    <button className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors">
                      Schedule
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <User className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500">No mentees found</p>
            <p className="text-sm text-gray-400 mt-1">
              Try adjusting your search terms
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">My Connection</h1>
        <p className="text-gray-600">Connect with mentors and mentees</p>
      </div>

      <TabNavigation
        tabs={connectionTabs}
        activeTab={activeConnectionTab}
        onTabChange={setActiveConnectionTab}
      />

      {/* Search Bar */}
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={18}
        />
        <input
          type="text"
          placeholder="Search by field (e.g. UI Design, Data Science)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default ConnectionPage;
