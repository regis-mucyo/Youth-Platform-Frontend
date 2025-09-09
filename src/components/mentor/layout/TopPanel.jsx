import React, { useState } from "react";
import {
  Search,
  Bell,
  User,
  X,
  Edit2,
  Save,
  CheckCircle,
  Zap,
} from "lucide-react";

// Custom Toast Component for notifications
const Toast = ({ message, type, onClose }) => {
  const bgColor =
    type === "success"
      ? "bg-green-600"
      : type === "error"
      ? "bg-red-600"
      : "bg-blue-600";
  const icon = type === "success" ? <CheckCircle /> : <Zap />;

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 text-white px-6 py-3 rounded-full shadow-xl flex items-center transition-all duration-300 ease-in-out ${bgColor} opacity-95 z-50`}
    >
      <div className="mr-2">{icon}</div>
      <span>{message}</span>
    </div>
  );
};

const TopPanel = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [mentorProfile, setMentorProfile] = useState({
    name: "Dr. Sarah Johnson",
    title: "Senior Software Engineer",
    bio: "Experienced mentor specializing in frontend development, React, and building scalable web applications. Passionate about helping new developers navigate their career paths.",
    profileImageUrl: "https://placehold.co/100x100/A5B4FC/374151?text=SJ",
    location: "San Francisco, CA",
    experience: "12 years",
    expertise: "Web Development, Machine Learning, UI/UX Design",
  });
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "session_request",
      title: "New Session Request",
      message: "Emma Wilson requested a session for React Hooks",
      time: "5 min ago",
      unread: true,
      avatar: "EW",
    },
    {
      id: 2,
      type: "connection",
      title: "New Connection Request",
      message: "Michael Park wants to connect for ML mentorship",
      time: "1 hour ago",
      unread: true,
      avatar: "MP",
    },
    {
      id: 3,
      type: "feedback",
      title: "Session Feedback",
      message: "Alice Smith rated your session 5 stars",
      time: "2 hours ago",
      unread: false,
      avatar: "AS",
    },
    {
      id: 4,
      type: "resource",
      title: "Resource Downloaded",
      message: "Your React Hooks guide was downloaded 10 times",
      time: "1 day ago",
      unread: false,
      avatar: null,
    },
  ]);
  const [toast, setToast] = useState(null);

  const unreadCount = notifications.filter((n) => n.unread).length;

  const showToast = (message, type = "success", autoClose = true) => {
    setToast({ message, type });
    if (autoClose) {
      setTimeout(() => {
        setToast(null);
      }, 3000); // Auto-close after 3 seconds
    }
  };

  const handleNotificationClick = (notificationId) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === notificationId ? { ...n, unread: false } : n))
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMentorProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    setIsSaving(true);
    // In a real app, you would save this data to a database.
    // Simulate a network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsEditing(false);
    setIsSaving(false);
    showToast("Profile updated successfully!", "success");
  };

  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 relative">
      {/* Search Bar */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search mentees, sessions..."
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center space-x-4">
        {/* Notification Bell */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Bell size={18} />
            {unreadCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>

          {/* Notification Dropdown */}
          {showNotifications && (
            <div className="absolute right-0 top-12 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  Notifications
                </h3>
                <div className="flex items-center space-x-2">
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllAsRead}
                      className="text-sm text-blue-500 hover:text-blue-600"
                    >
                      Mark all read
                    </button>
                  )}
                  <button
                    onClick={() => setShowNotifications(false)}
                    className="p-1 text-gray-400 hover:text-gray-600"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              <div className="max-h-96 overflow-y-auto">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    onClick={() => handleNotificationClick(notification.id)}
                    className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                      notification.unread ? "bg-blue-50" : ""
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      {notification.avatar ? (
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-medium">
                            {notification.avatar}
                          </span>
                        </div>
                      ) : (
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                          <Bell size={14} className="text-gray-500" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-sm font-medium text-gray-900">
                            {notification.title}
                          </p>
                          {notification.unread && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-1">
                          {notification.message}
                        </p>
                        <p className="text-xs text-gray-500">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {notifications.length === 0 && (
                <div className="p-8 text-center">
                  <Bell className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-500">No notifications</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* User Avatar */}
        <button
          onClick={() => setShowProfileModal(true)}
          className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
        >
          <User size={16} />
        </button>
      </div>

      {/* Profile Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg">
            {/* Modal Header */}
            <div className="flex justify-between items-center border-b pb-4 mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                Mentor Profile
              </h3>
              <button
                onClick={() => setShowProfileModal(false)}
                className="p-1 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Profile Content */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <img
                  src={mentorProfile.profileImageUrl}
                  alt="Mentor"
                  className="w-20 h-20 rounded-full object-cover shadow-sm"
                />
                <div className="flex-1">
                  {!isEditing ? (
                    <>
                      <h4 className="text-lg font-semibold text-gray-800">
                        {mentorProfile.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {mentorProfile.title}
                      </p>
                    </>
                  ) : (
                    <div className="space-y-2">
                      <input
                        type="text"
                        name="name"
                        value={mentorProfile.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Name"
                      />
                      <input
                        type="text"
                        name="title"
                        value={mentorProfile.title}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Title"
                      />
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  About Me
                </label>
                {!isEditing ? (
                  <p className="text-sm text-gray-600">{mentorProfile.bio}</p>
                ) : (
                  <textarea
                    name="bio"
                    value={mentorProfile.bio}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Tell us about yourself..."
                  />
                )}
              </div>

              {/* New Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  {!isEditing ? (
                    <p className="text-sm text-gray-600">
                      {mentorProfile.location}
                    </p>
                  ) : (
                    <input
                      type="text"
                      name="location"
                      value={mentorProfile.location}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., San Francisco, CA"
                    />
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience
                  </label>
                  {!isEditing ? (
                    <p className="text-sm text-gray-600">
                      {mentorProfile.experience}
                    </p>
                  ) : (
                    <input
                      type="text"
                      name="experience"
                      value={mentorProfile.experience}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 10 years"
                    />
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Area of Expertise
                </label>
                {!isEditing ? (
                  <p className="text-sm text-gray-600">
                    {mentorProfile.expertise}
                  </p>
                ) : (
                  <input
                    type="text"
                    name="expertise"
                    value={mentorProfile.expertise}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., React, Python, UI/UX"
                  />
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex justify-end space-x-3">
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center transition-colors"
                >
                  <Edit2 size={16} className="mr-2" />
                  Edit Profile
                </button>
              ) : (
                <>
                  <button
                    onClick={() => setIsEditing(false)}
                    disabled={isSaving}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className={`px-4 py-2 bg-green-500 text-white rounded-lg flex items-center transition-colors ${
                      isSaving
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-green-600"
                    }`}
                  >
                    {isSaving ? (
                      <>
                        <span className="flex items-center justify-center mr-2">
                          <svg
                            className="animate-spin h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        </span>
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save size={16} className="mr-2" />
                        Save Changes
                      </>
                    )}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Render the Toast component */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default TopPanel;
