import React, { useState, useEffect } from "react";
import StatsCard from "../components/StatsCard";
import { mockSessions, mockConnections } from "../data/mockData";
import { Calendar, Clock, User, TrendingUp } from "lucide-react";

const DashboardPage = () => {
  const [stats, setStats] = useState({
    totalSessions: 0,
    totalHours: 0,
    bookedSessions: 0,
    activeMentees: 0,
  });
  const [upcomingSessions, setUpcomingSessions] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);

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

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Overview of your mentoring activities</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Total Sessions"
          value={stats.totalSessions}
          color="blue"
          icon={<Calendar className="w-5 h-5" />}
        />
        <StatsCard
          title="Total Hours Mentored"
          value={stats.totalHours}
          color="green"
          icon={<Clock className="w-5 h-5" />}
        />
        <StatsCard
          title="Active Mentees"
          value={stats.activeMentees}
          color="purple"
          icon={<User className="w-5 h-5" />}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upcoming Sessions */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Upcoming Sessions
            </h2>
            <span className="text-sm text-blue-500 font-medium">
              {stats.bookedSessions} scheduled
            </span>
          </div>

          {upcomingSessions.length > 0 ? (
            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <div
                  key={session.id}
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {session.avatar}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">
                      {session.mentee}
                    </h3>
                    <p className="text-sm text-gray-600">{session.topic}</p>
                    <p className="text-xs text-gray-500">
                      {session.date} at {session.time} • {session.duration}min
                    </p>
                  </div>
                  <button className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors">
                    Join
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500">No upcoming sessions scheduled</p>
            </div>
          )}
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Activity
          </h2>

          <div className="space-y-4">
            {recentActivity.map((activity) => {
              const Icon = activity.icon;
              return (
                <div key={activity.id} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Icon className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Quick Actions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
    </div>
  );
};

export default DashboardPage;
