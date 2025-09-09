import { useState } from "react";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Sample avatars for mentors
const mentorAvatars = {
  "Dr. Sarah Chen": "https://randomuser.me/api/portraits/women/44.jpg",
  "John Doe": "https://randomuser.me/api/portraits/men/45.jpg",
  "Jane Smith": "https://randomuser.me/api/portraits/women/46.jpg",
};

const Sessions = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  const [sessions, setSessions] = useState([
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
      date: "Nov 10, 2024",
      time: "2:00 PM - 3:00 PM",
      status: "history",
      rating: null,
    },
  ]);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleCancel = (session) => {
    setSelectedSession(session);
    setShowCancelModal(true);
  };

  const confirmCancel = () => {
    setSessions((prev) => prev.filter((s) => s.id !== selectedSession.id));
    toast.success("Session cancelled successfully");
    setShowCancelModal(false);
  };

  const handleRate = (session) => {
    setSelectedSession(session);
    setShowRatingModal(true);
  };

  const confirmRating = () => {
    setSessions((prev) =>
      prev.map((s) =>
        s.id === selectedSession.id ? { ...s, rating: selectedRating } : s
      )
    );
    toast.success("Mentor rated successfully");
    setShowRatingModal(false);
    setSelectedRating(0);
  };

  const filteredSessions = sessions.filter((s) => s.status === activeTab);

  const renderStars = () => {
    return [...Array(5)].map((_, i) => (
      <span
        key={i}
        onClick={() => setSelectedRating(i + 1)}
        className={`cursor-pointer text-2xl ${
          i < selectedRating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen w-full bg-gray-50 flex flex-col">
      <ToastContainer />
      <div className="px-4 sm:px-6 lg:px-8 py-6 flex-1">
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-6">
          {["Upcoming", "Pending", "History"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`px-6 py-2 rounded-lg text-sm font-medium ${
                activeTab === tab.toLowerCase()
                  ? "bg-white shadow text-black"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Session Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredSessions.length > 0 ? (
            filteredSessions.map((session) => (
              <div
                key={session.id}
                className="bg-white p-6 rounded-xl shadow-md flex flex-col justify-between"
              >
                <div className="flex justify-between items-start">
                  <div className="flex items-start space-x-4">
                    <img
                      src={
                        mentorAvatars[session.name] ||
                        "https://via.placeholder.com/48"
                      }
                      alt={session.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
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
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600 capitalize">
                    {session.status}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-4 mt-4">
                  {session.status === "pending" && (
                    <button
                      onClick={() => handleCancel(session)}
                      className="bg-red-500 text-white px-3 py-1 rounded-full text-xs"
                    >
                      Cancel Request
                    </button>
                  )}
                  {session.status === "history" && (
                    <>
                      <button
                        onClick={() => handleRate(session)}
                        className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs"
                      >
                        Rate Mentor
                      </button>
                      {session.rating && (
                        <span className="text-yellow-400 text-sm ml-2">
                          {"★".repeat(session.rating)}
                        </span>
                      )}
                    </>
                  )}
                  {session.status === "upcoming" && (
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">
                      Join Session
                    </button>
                  )}
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

      {/* Cancel Modal */}
      {showCancelModal && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-6"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md">
            <h2 className="text-lg font-semibold mb-4">Cancel Session</h2>
            <p className="text-sm mb-4">
              Are you sure you want to cancel this session with{" "}
              <strong>{selectedSession.name}</strong>?
            </p>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowCancelModal(false)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                No
              </button>
              <button
                onClick={confirmCancel}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Yes, Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Rating Modal */}
      {showRatingModal && (
        <div
          id="modal-overlay"
          className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-6"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md">
            <h2 className="text-lg font-semibold mb-4">Rate Mentor</h2>
            <p className="text-sm mb-4">
              How would you rate <strong>{selectedSession.name}</strong>?
            </p>
            <div className="flex justify-center mb-4">{renderStars()}</div>
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowRatingModal(false)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Cancel
              </button>

              <button
                onClick={confirmRating}
                className="px-4 py-2 bg-yellow-500 text-white rounded"
              >
                Submit Rating
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sessions;
