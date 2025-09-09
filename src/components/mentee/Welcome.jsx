import React, { useState } from "react";
import {
  CalendarCheck,
  Clock,
  MessageCircle,
  Users,
  ShoppingBag,
  Pencil,
  BookOpen,
  CheckCircle2,
  BarChart3,
  Brain,
  Calendar,
} from "lucide-react";
import Header from "./Header";
import Sidebar from "./SiderBar";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 font-[Poppins]">
      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        activeItem="Dashboard"
      />
      <div className="flex flex-col flex-1">
        <Header
          setSidebarOpen={setSidebarOpen}
          dashboard={"Dashboard"}
          description={
            "Welcome to your mentorship hub. Track your progress, explore resources, and stay connected."
          }
        />
        <main className="p-4 sm:p-6 overflow-y-auto">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Welcome back, Buban 👋
            </h1>
            <p className="text-sm text-gray-600 mt-1 italic">
              “Growth happens when you show up, stay curious, and keep
              building.”
            </p>
          </div>

          {/* Top Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <StatCard
              icon={<CalendarCheck />}
              label="Total Sessions"
              value="24"
            />
            <StatCard icon={<Clock />} label="Mentorship Hours" value="36" />
            <StatCard
              icon={<MessageCircle />}
              label="Messages Received"
              value="3"
            />
          </div>

          {/* Module Widgets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Widget
              icon={<Calendar />}
              title="Upcoming Session"
              description="React Interview Prep with Prof. Jean Bosco"
              cta="View All"
            />
            <Widget
              icon={<MessageCircle />}
              title="New Message"
              description="Dr. Sarah: 'Ready for our next session?'"
              cta="Open Inbox"
            />
          </div>

          {/* Progress Overview */}
          <div className="bg-white shadow rounded-lg p-6 space-y-6">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <BarChart3 className="text-blue-500" />
              Progress Overview
            </h2>
            <ProgressBar
              label="Milestone Completion"
              value="2/3"
              percent="66%"
              icon={<CheckCircle2 size={16} />}
            />
            <ProgressBar
              label="Skills Development"
              value="6/8"
              percent="75%"
              icon={<Brain size={16} />}
            />
            <ProgressBar
              label="Network Building"
              value="4/5"
              percent="80%"
              icon={<Users size={16} />}
            />
          </div>

          {/* Calendar Preview */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <Calendar className="text-blue-500" />
              Upcoming Sessions
            </h2>
            <ul className="mt-2 space-y-2 text-sm text-gray-700">
              <li>🗓️ Sep 6 – React Interview Prep with Prof. Jean Bosco</li>
              <li>🗓️ Sep 9 – Portfolio Review with Dr. Sarah Uwase</li>
            </ul>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              View Upcoming sessions
            </button>
          </div>

          {/* Achievements */}
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
              Your Achievements
            </h2>
            <div className="flex flex-wrap gap-3">
              <Badge label="✅ First Session Completed" color="blue" />
              <Badge label="🧠 10 Hours Milestone" color="blue" />
              <Badge label="🎯 Goal Achievement (Pending)" color="gray" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

// Reusable Components
const StatCard = ({ icon, label, value }) => (
  <div className="bg-white shadow rounded-lg p-4 flex items-center space-x-3">
    <div className="text-blue-500">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-xl font-semibold text-gray-800">{value}</p>
    </div>
  </div>
);

const Widget = ({ icon, title, description, cta }) => (
  <div className="bg-white shadow rounded-lg p-4">
    <div className="flex items-center gap-2 mb-2 text-blue-500">{icon}</div>
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600 mt-1">{description}</p>
    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition text-sm">
      {cta}
    </button>
  </div>
);

const ProgressBar = ({ label, value, percent, icon }) => (
  <div>
    <div className="flex justify-between text-sm text-gray-600 mb-1">
      <span className="flex items-center gap-1">
        {icon}
        {label}
      </span>
      <span>{value}</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-500 h-2 rounded-full"
        style={{ width: percent }}
      ></div>
    </div>
  </div>
);

const Badge = ({ label, color }) => {
  const bg = {
    be: "bg-blue-100 text-blue-700",
    blue: "bg-blue-100 text-blue-700",
    gray: "bg-gray-200 text-gray-600",
  }[color];

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium ${bg}`}>
      {label}
    </span>
  );
};

export default Dashboard;
