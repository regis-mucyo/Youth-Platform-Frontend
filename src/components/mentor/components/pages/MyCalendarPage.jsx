// src/mentor/components/pages/MyCalendarPage.jsx
import React, { useState } from "react";
import { Calendar } from "lucide-react";

// 🇷🇼 Rwanda Flag Colors — ONLY
const RWANDA_BLUE = "#00A1DE";
const RWANDA_YELLOW = "#FFDD00";
const RWANDA_GREEN = "#00A651";

const MyCalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [availability, setAvailability] = useState([]);

  const handleDateClick = (dayNumber) => {
    if (dayNumber > 0 && dayNumber <= 30) {
      const date = `2025-09-${dayNumber.toString().padStart(2, "0")}`;
      setSelectedDate(date);
    }
  };

  const handleAddAvailability = (e) => {
    e.preventDefault();
    if (!selectedDate) return;

    const newSlot = { date: selectedDate, from: "09:00", to: "11:00" };
    setAvailability([...availability, newSlot]);
    setSelectedDate("");
  };

  const handleRemoveAvailability = (index) => {
    setAvailability(availability.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">My Calendar</h1>
        <p className="text-gray-600">Manage your availability and schedule</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar Section */}
        <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              September 2025
            </h2>
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 mb-4">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="text-center text-sm font-medium text-gray-500 py-2"
              >
                {day}
              </div>
            ))}
            {[...Array(35)].map((_, i) => {
              const dayNumber = i - 3;
              const isCurrentMonth = dayNumber > 0 && dayNumber <= 30;
              const hasEvent = availability.some(
                (slot) =>
                  slot.date ===
                  `2025-09-${dayNumber.toString().padStart(2, "0")}`
              );

              return (
                <div
                  key={i}
                  onClick={() => handleDateClick(dayNumber)}
                  className={`text-center py-3 text-sm font-medium rounded-lg cursor-pointer transition-colors ${
                    hasEvent
                      ? "bg-green-100 text-green-700 font-bold"
                      : isCurrentMonth
                      ? "text-gray-800 hover:bg-gray-100"
                      : "text-gray-300"
                  }`}
                  style={
                    hasEvent
                      ? {
                          backgroundColor: `${RWANDA_GREEN}20`,
                          color: RWANDA_GREEN,
                        }
                      : {}
                  }
                >
                  {dayNumber > 0 ? dayNumber : ""}
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded"
                style={{ backgroundColor: RWANDA_GREEN }}
              ></div>
              <span className="text-sm text-gray-600">Available</span>
            </div>
            <div className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded"
                style={{ backgroundColor: "red" }}
              ></div>
              <span className="text-sm text-gray-600">Booked</span>
            </div>
            <div className="flex items-center space-x-2">
              <div
                className="w-3 h-3 rounded"
                style={{ backgroundColor: "#D1D5DB" }}
              ></div>
              <span className="text-sm text-gray-600">Normal</span>
            </div>
          </div>
        </div>

        {/* Set Availability Panel */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Set Availability
          </h3>
          {selectedDate ? (
            <form onSubmit={handleAddAvailability}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  style={{
                    borderColor: RWANDA_BLUE,
                  }}
                  onFocus={(e) =>
                    (e.target.style.boxShadow = `0 0 0 3px ${RWANDA_YELLOW}`)
                  }
                  onBlur={(e) => (e.target.style.boxShadow = "")}
                />
              </div>
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    From
                  </label>
                  <input
                    type="time"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    style={{
                      borderColor: RWANDA_BLUE,
                    }}
                    onFocus={(e) =>
                      (e.target.style.boxShadow = `0 0 0 3px ${RWANDA_YELLOW}`)
                    }
                    onBlur={(e) => (e.target.style.boxShadow = "")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    To
                  </label>
                  <input
                    type="time"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    style={{
                      borderColor: RWANDA_BLUE,
                    }}
                    onFocus={(e) =>
                      (e.target.style.boxShadow = `0 0 0 3px ${RWANDA_YELLOW}`)
                    }
                    onBlur={(e) => (e.target.style.boxShadow = "")}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors mb-6"
                style={{ backgroundColor: RWANDA_GREEN }}
              >
                Add Availability
              </button>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-6 h-6 text-gray-400" />
              </div>
              <p className="text-gray-500 text-sm">
                Click a date on the calendar to set availability
              </p>
            </div>
          )}
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">
              Current Availability
            </h4>
            {availability.length === 0 ? (
              <div className="text-center py-8">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-gray-400" />
                </div>
                <p className="text-gray-500 text-sm">
                  No availability slots set
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {availability.map((slot, idx) => (
                  <div
                    key={idx}
                    className="p-4 border border-gray-200 rounded-lg hover:shadow transition-shadow"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-bold">
                          {new Date(slot.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </p>
                        <p className="text-xs text-gray-500">
                          {slot.from} - {slot.to}
                        </p>
                      </div>
                      <button
                        onClick={() => handleRemoveAvailability(idx)}
                        className="text-red-500 hover:text-red-700 text-xs font-bold"
                      >
                        ✕ Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCalendarPage;
