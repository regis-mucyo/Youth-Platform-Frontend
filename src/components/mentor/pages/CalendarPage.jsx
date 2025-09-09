import React, { useState, useEffect } from "react";
import { Calendar, Plus, X } from "lucide-react";
import { mockCalendarEvents } from "../data/mockData";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CalendarPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCalendarDate, setSelectedCalendarDate] = useState(null);
  const [timeFrom, setTimeFrom] = useState("");
  const [timeTo, setTimeTo] = useState("");
  const [availabilitySlots, setAvailabilitySlots] = useState([
    {
      id: 1,
      date: "2025-01-15",
      timeFrom: "14:00",
      timeTo: "15:00",
      status: "booked",
      mentee: "Emma Wilson",
    },
    {
      id: 2,
      date: "2025-01-16",
      timeFrom: "10:00",
      timeTo: "10:45",
      status: "booked",
      mentee: "Michael Park",
    },
    {
      id: 3,
      date: "2025-01-18",
      timeFrom: "16:00",
      timeTo: "17:00",
      status: "available",
    },
    {
      id: 4,
      date: "2025-01-20",
      timeFrom: "14:00",
      timeTo: "15:30",
      status: "available",
    },
    {
      id: 5,
      date: "2025-01-22",
      timeFrom: "11:00",
      timeTo: "12:00",
      status: "available",
    },
  ]);

  useEffect(() => {
    setEvents(mockCalendarEvents);
  }, []);

  const handleAddAvailability = () => {
    if (selectedDate && timeFrom && timeTo) {
      const newSlot = {
        id: availabilitySlots.length + 1,
        date: selectedDate,
        timeFrom,
        timeTo,
        status: "available",
      };
      setAvailabilitySlots((prev) => [...prev, newSlot]);
      setSelectedDate("");
      setSelectedCalendarDate(null);
      setTimeFrom("");
      setTimeTo("");
      toast.success(
        "Availability slot added! Mentees can now book this time.",
        {
          position: "top-right",
          theme: "colored",
        }
      );
    } else {
      toast.error("Please select a date and time to add your availability.", {
        position: "top-right",
        theme: "colored",
      });
    }
  };

  const handleCalendarDateClick = (day) => {
    if (day >= 1 && day <= 31) {
      setSelectedCalendarDate(day);
      const currentDate = new Date(2025, 0, day);
      setSelectedDate(currentDate.toISOString().split("T")[0]);
    }
  };

  const handleRemoveSlot = (slotId) => {
    setAvailabilitySlots((prev) => prev.filter((slot) => slot.id !== slotId));
    toast.info("The selected availability slot has been removed.", {
      position: "top-right",
      theme: "colored",
    });
  };

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  const formatTime = (timeString) =>
    new Date(`2000-01-01T${timeString}`).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

  const isDateBooked = (day) => {
    const dateString = new Date(2025, 0, day).toISOString().split("T")[0];
    return availabilitySlots.some(
      (slot) => slot.date === dateString && slot.status === "booked"
    );
  };

  const isDateAvailable = (day) => {
    const dateString = new Date(2025, 0, day).toISOString().split("T")[0];
    return availabilitySlots.some(
      (slot) => slot.date === dateString && slot.status === "available"
    );
  };

  return (
    <>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">My Calendar</h1>
          <p className="text-gray-600">Manage your availability and schedule</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar Section */}
          <div className="lg:col-span-2 bg-white rounded-lg border border-gray-200 p-6">
            {/* Calendar Header */}
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

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 mb-4">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-medium text-gray-500 py-2"
                >
                  {day}
                </div>
              ))}

              {Array.from({ length: 35 }, (_, i) => {
                const day = i - 2;
                const isCurrentMonth = day >= 1 && day <= 31;
                const displayDay = isCurrentMonth
                  ? day
                  : day > 31
                  ? day - 31
                  : day + 31;

                const isBooked = isCurrentMonth && isDateBooked(day);
                const isAvailable = isCurrentMonth && isDateAvailable(day);
                const isSelected =
                  selectedCalendarDate === day && isCurrentMonth;

                return (
                  <button
                    key={i}
                    onClick={() => handleCalendarDateClick(day)}
                    className={`text-center py-2 rounded transition-colors ${
                      !isCurrentMonth
                        ? "text-gray-400 hover:bg-gray-50 cursor-not-allowed"
                        : isSelected
                        ? "bg-blue-500 text-white font-medium"
                        : isBooked
                        ? "bg-red-100 text-red-700 font-medium hover:bg-red-200"
                        : isAvailable
                        ? "bg-blue-100 text-blue-700 font-medium hover:bg-blue-200"
                        : "text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    {displayDay}
                  </button>
                );
              })}
            </div>

            {/* Calendar Legend */}
            <div className="flex items-center justify-center space-x-6 pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span className="text-sm text-gray-600">Available</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span className="text-sm text-gray-600">Booked</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gray-300 rounded"></div>
                <span className="text-sm text-gray-600">Normal</span>
              </div>
            </div>

            {/* Current Availability moved here under calendar */}
            <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                Current Availability
              </h4>
              {availabilitySlots.length > 0 ? (
                <div className="space-y-2">
                  {availabilitySlots.map((slot) => (
                    <div
                      key={slot.id}
                      className={`flex items-center justify-between p-3 rounded-lg ${
                        slot.status === "booked"
                          ? "bg-red-50 border border-red-200"
                          : "bg-blue-50 border border-blue-200"
                      }`}
                    >
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">
                          {formatDate(slot.date)}
                        </p>
                        <p className="text-xs text-gray-600">
                          {formatTime(slot.timeFrom)} -{" "}
                          {formatTime(slot.timeTo)}
                        </p>
                        {slot.mentee && (
                          <p className="text-xs text-gray-500 mt-1">
                            with {slot.mentee}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span
                          className={`px-2 py-1 text-xs rounded-full ${
                            slot.status === "booked"
                              ? "bg-red-100 text-red-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {slot.status}
                        </span>
                        {slot.status === "available" && (
                          <button
                            onClick={() => handleRemoveSlot(slot.id)}
                            className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-6 h-6 text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-sm">
                    No availability slots set
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Set Availability Panel stays */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Set Availability
            </h3>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  From
                </label>
                <input
                  type="time"
                  value={timeFrom}
                  onChange={(e) => setTimeFrom(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  To
                </label>
                <input
                  type="time"
                  value={timeTo}
                  onChange={(e) => setTimeTo(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <button
              onClick={handleAddAvailability}
              disabled={!selectedDate || !timeFrom || !timeTo}
              className={`w-full font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center ${
                selectedDate && timeFrom && timeTo
                  ? "bg-blue-500 hover:bg-blue-600 text-white"
                  : "bg-gray-300 cursor-not-allowed text-gray-500"
              }`}
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Availability
            </button>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
};

export default CalendarPage;
