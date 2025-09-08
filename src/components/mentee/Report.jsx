import React, { useState } from "react";

import {
  CalendarCheck,
  Clock,
  BookOpenCheck,
  CheckCircle2,
  Target,
  BarChart3,
  Brain,
  Users,
} from "lucide-react";
import Header from "./Header";
import Sidebar from "./SiderBar";
const Report = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <div className="flex h-screen bg-gray-50">
        <Sidebar
          open={sidebarOpen}
          setOpen={setSidebarOpen}
          activeItem="Self Reflection"
        />
        <div className="flex flex-col flex-1">
          <Header
            setSidebarOpen={setSidebarOpen}
            dashboard={"Self Reflection"}
            description={
              "Track your progress and acheivement in your mentorship journey"
            }
          />
          <main className="p-4 sm:p-6 overflow-y-auto">
            <div className="max-w-4xl mx-auto p-4 space-y-8">
              {/* Top Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white shadow rounded-lg p-4 flex items-center space-x-3">
                  <CalendarCheck className="text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Total Sessions</p>
                    <p className="text-xl font-semibold text-gray-800">24</p>
                  </div>
                </div>
                <div className="bg-white shadow rounded-lg p-4 flex items-center space-x-3">
                  <Clock className="text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Total Hours</p>
                    <p className="text-xl font-semibold text-gray-800">36</p>
                  </div>
                </div>
                <div className="bg-white shadow rounded-lg p-4 flex items-center space-x-3">
                  <BookOpenCheck className="text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Booked Sessions</p>
                    <p className="text-xl font-semibold text-gray-800">3</p>
                  </div>
                </div>
              </div>

              {/* Milestone Progress */}
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <Target className="text-blue-500" />
                  Milestone Progress
                </h2>
                <p className="text-sm text-gray-500 mb-4">Learning Journey</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-blue-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-700">
                        First Session Completed
                      </p>
                      <p className="text-sm text-gray-500">
                        Successfully completed your first mentorship session
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-blue-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-700">
                        10 Hours Milestone
                      </p>
                      <p className="text-sm text-gray-500">
                        Reached 10 hours of mentorship sessions
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-gray-300 mt-1" />
                    <div>
                      <p className="font-medium text-gray-700">
                        Goal Achievement
                      </p>
                      <p className="text-sm text-gray-500">
                        Complete your first technical interview
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Progress Overview */}
              <div className="bg-white shadow rounded-lg p-6 space-y-6">
                <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <BarChart3 className="text-blue-500" />
                  Progress Overview
                </h2>

                <div className="space-y-4">
                  {/* Milestone Completion */}
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 size={16} />
                        Milestone Completion
                      </span>
                      <span>2/3</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-2/3"></div>
                    </div>
                  </div>

                  {/* Skills Development */}
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span className="flex items-center gap-1">
                        <Brain size={16} />
                        Skills Development
                      </span>
                      <span>6/8</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>

                  {/* Network Building */}
                  <div>
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span className="flex items-center gap-1">
                        <Users size={16} />
                        Network Building
                      </span>
                      <span>4/5</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Report;
