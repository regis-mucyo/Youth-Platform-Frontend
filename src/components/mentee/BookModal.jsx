import  { useState, useEffect } from "react";
import { X } from "lucide-react";
import { toast } from "react-toastify";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const BookingModal = ({ mentor, onClose }) => {
  const [topic, setTopic] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const timeSlots = ["2h00", "2h30", "3h00", "3h30", "4h00"];
  const rules = [
    "Always unmute",
    "Raise hand to speak",
    "Be in a silent place",
    "Avoid background noise",
    "Make it five — be focused, respectful, prepared, punctual, and engaged",
  ];

  const handleBook = () => {
    setShowToast(true);
    toast.info("Waiting for mentor to approve this session.");
    onClose();
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.id === "modal-overlay") {
        onClose();
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [onClose]);

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-6"
    >
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-4 sm:p-6 relative flex flex-col md:flex-row overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Mentor Info */}
        <div className="md:w-1/2 pr-6 border-r">
          <img
            src={mentor.photo}
            alt={mentor.name}
            className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
          />
          <h3 className="text-xl font-semibold text-center">{mentor.name}</h3>
          <p className="text-sm text-gray-600 text-center">{mentor.title}</p>
          <div className="mt-4 space-y-2 text-sm text-gray-700">
            <p>
              <strong>Company:</strong> {mentor.company}
            </p>
            <p>
              <strong>Expertise:</strong> {mentor.expertise}
            </p>
            <p>
              <strong>Experience:</strong> {mentor.experience} yrs
            </p>
            <p>
              <strong>Rating:</strong> {mentor.rating} ({mentor.reviews}{" "}
              reviews)
            </p>
            <p className="mt-2 text-gray-600">{mentor.description}</p>
          </div>
        </div>

        {/* Right: Booking Form */}
       <div className="w-full md:w-1/2 md:pl-6">

          <label className="block text-sm font-medium mb-2">Select Topic</label>
          <select
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full border px-3 py-2 rounded mb-4"
          >
            <option value="">Choose a topic</option>
            <option value="React Interview Prep">React Interview Prep</option>
            <option value="System Design Basics">System Design Basics</option>
            <option value="Career Growth Strategy">
              Career Growth Strategy
            </option>
            <option value="Frontend Debugging">Frontend Debugging</option>
            <option value="Windows Server Setup">Windows Server Setup</option>
          </select>

          <label className="block text-sm font-medium mb-2">Select Date</label>
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            className="w-full max-w-full sm:max-w-md h-auto"

            tileClassName="text-sm"
          />

          <label className="block text-sm font-medium mb-2">Select Time</label>
          <div className="flex flex-wrap gap-2 mb-4">
            {timeSlots.map((slot) => (
              <button
                key={slot}
                onClick={() => setSelectedTime(slot)}
                className={`px-3 py-1 rounded-full border ${
                  selectedTime === slot
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>

          <div className="mt-4">
            <h4 className="text-sm font-semibold mb-2">Meeting Rules</h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              {rules.map((rule, idx) => (
                <li key={idx}>{rule}</li>
              ))}
            </ul>
          </div>

          <button
            onClick={handleBook}
            className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
          >
            Book Session
          </button>
        </div>
      </div>

      {/* Toast Message */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded shadow-lg">
          Waiting for mentee to approve the session...
        </div>
      )}
    </div>
  );
};

export default BookingModal;
