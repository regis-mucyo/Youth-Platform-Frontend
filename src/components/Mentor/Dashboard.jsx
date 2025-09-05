import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  User,
  LayoutDashboard,
  Users,
  Share2,
  BarChart3,
  FileText,
  MessageSquare,
  Calendar
} from 'lucide-react';

// Left Panel Component
const LeftPanel = ({ activePage, setActivePage }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'session', label: 'Session', icon: Users },
    { id: 'connection', label: 'My Connection', icon: Share2 },
    { id: 'contribution', label: 'My Contribution', icon: BarChart3 },
    { id: 'linkage', label: 'Market Linkage', icon: FileText },
    { id: 'resource', label: 'My Resource', icon: FileText },
    { id: 'message', label: 'Message', icon: MessageSquare },
    { id: 'calendar', label: 'My Calendar', icon: Calendar },
  ];

  return (
    <div className="w-72 bg-white border-r border-gray-200 h-full flex flex-col">
      {/* Logo Section */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-green-500 mb-1">ElevateLink</h1>
        <p className="text-sm text-gray-500">Mentor Dashboard</p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActivePage(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                    isActive
                      ? 'bg-green-500 text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-sm">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">DS</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Dr. Sarah Johnson</p>
              <p className="text-xs text-gray-500">Senior Software Engineer</p>
            </div>
          </div>
          <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

// Top Panel Component
const TopPanel = () => {
  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      {/* Search Bar */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search mentees, sessions..."
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center space-x-4">
        {/* Notification Bell */}
        <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell size={18} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Avatar */}
        <button className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-white">
          <User size={16} />
        </button>
      </div>
    </div>
  );
};

// Center Panel Component
const CenterPanel = ({ activePage, activeSessionTab, setActiveSessionTab, activeConnectionTab, setActiveConnectionTab }) => {
  
  const renderDashboard = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Overview of your mentoring activities</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Sessions</p>
              <p className="text-3xl font-bold text-gray-900">0</p>
            </div>
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Hours Mentored</p>
              <p className="text-3xl font-bold text-gray-900">0</p>
            </div>
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Booked Sessions</p>
              <p className="text-3xl font-bold text-gray-900">2</p>
            </div>
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Sessions</h2>
        <div className="text-center py-12">
          <p className="text-gray-500">No upcoming sessions scheduled</p>
        </div>
      </div>
    </div>
  );

  const renderSessions = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Sessions</h1>
        <p className="text-gray-600">Manage your mentoring sessions</p>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="border-b border-gray-200 px-6 pt-4">
          <div className="flex space-x-8">
            <button 
              onClick={() => setActiveSessionTab('upcoming')}
              className={`pb-3 px-1 border-b-2 font-medium text-sm ${
                activeSessionTab === 'upcoming'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Upcoming
            </button>
            <button 
              onClick={() => setActiveSessionTab('pending')}
              className={`pb-3 px-1 border-b-2 font-medium text-sm ${
                activeSessionTab === 'pending'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Pending
            </button>
            <button 
              onClick={() => setActiveSessionTab('history')}
              className={`pb-3 px-1 border-b-2 font-medium text-sm ${
                activeSessionTab === 'history'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              History
            </button>
          </div>
        </div>
        
        {/* Content Area */}
        <div className="p-6">
          <div className="text-center py-12">
            {activeSessionTab === 'upcoming' && (
              <p className="text-gray-500">No upcoming sessions found</p>
            )}
            {activeSessionTab === 'pending' && (
              <p className="text-gray-500">No pending sessions found</p>
            )}
            {activeSessionTab === 'history' && (
              <p className="text-gray-500">No session history found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderMyConnection = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">My Connection</h1>
        <p className="text-gray-600">Connect with mentors and mentees</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-8 border-b border-gray-200">
        <button 
          onClick={() => setActiveConnectionTab('mentor')}
          className={`pb-3 px-1 font-medium text-sm ${
            activeConnectionTab === 'mentor'
              ? 'text-gray-900 border-b-2 border-gray-900'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Mentor
        </button>
        <button 
          onClick={() => setActiveConnectionTab('mentee')}
          className={`pb-3 px-1 font-medium text-sm ${
            activeConnectionTab === 'mentee'
              ? 'text-gray-900 border-b-2 border-gray-900'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          Mentee
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder="Search by field (e.g. UI Design, Data Science)"
          className="w-full pl-10 pr-4 py-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
        />
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="text-center py-12">
          {activeConnectionTab === 'mentor' && (
            <p className="text-gray-500">No mentors available</p>
          )}
          {activeConnectionTab === 'mentee' && (
            <p className="text-gray-500">No mentees available</p>
          )}
        </div>
      </div>
    </div>
  );

  const renderMyContribution = () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">My Contribution</h1>
        <p className="text-gray-600">Track your mentoring impact and achievements</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Impact Summary */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Impact Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Hours Mentored</span>
              <span className="text-xl font-bold text-gray-900">0</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Total Booked Sessions</span>
              <span className="text-xl font-bold text-gray-900">0</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Active Mentees</span>
              <span className="text-xl font-bold text-gray-900">2</span>
            </div>
          </div>
        </div>

        {/* Milestone Tracker */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Milestone Tracker</h2>
          <div className="space-y-4">
            {/* Completed Milestones */}
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Completed First Session</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Reached 5 Sessions</span>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">Mentored 100+ Hours</span>
            </div>

            {/* Progress Milestone */}
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              </div>
              <div className="flex-1">
                <span className="text-gray-500">Reach 50 Mentees</span>
                <div className="text-xs text-gray-400 mt-1">Progress: 18/50</div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '36%'}}></div>
                </div>
              </div>
            </div>

            {/* Print Certificate Button */}
            <button className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded-lg transition-colors">
              Print Certificate
            </button>
          </div>
        </div>
      </div>

      {/* Additional Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-500 mb-1">4.9</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-500 mb-1">95%</div>
            <div className="text-sm text-gray-600">Session Completion</div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-500 mb-1">12</div>
            <div className="text-sm text-gray-600">Certificates Earned</div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-500 mb-1">8</div>
            <div className="text-sm text-gray-600">Skills Shared</div>
          </div>
        </div>
      </div>

      {/* Recent Achievements */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Achievements</h2>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Top Mentor Badge</p>
              <p className="text-xs text-gray-500">Earned for exceptional mentoring quality</p>
            </div>
            <div className="text-xs text-gray-400 ml-auto">2 days ago</div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">50 Sessions Milestone</p>
              <p className="text-xs text-gray-500">Successfully completed 50 mentoring sessions</p>
            </div>
            <div className="text-xs text-gray-400 ml-auto">1 week ago</div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return renderDashboard();
      case 'session':
        return renderSessions();
      case 'connection':
        return renderMyConnection();
      case 'contribution':
        return renderMyContribution();
      case 'linkage':
        return (
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Market Linkage</h1>
              <p className="text-gray-600">Discover opportunities for your mentees</p>
            </div>

            {/* Top Talent Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Top Talent</h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    placeholder="Filter by field or name"
                    className="pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Talent Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Emma Wilson Card */}
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">EW</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Emma Wilson</h3>
                      <p className="text-sm text-gray-500">Frontend Development • Startup Inc</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Junior developer learning React</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">React</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">JavaScript</span>
                  </div>
                </div>

                {/* Michael Park Card */}
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">MP</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Michael Park</h3>
                      <p className="text-sm text-gray-500">Data Science • Tech Corp</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Transitioning to data science</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Python</span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded">Machine Learning</span>
                  </div>
                </div>

                {/* Additional Talent Card */}
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-medium">AS</span>
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Alice Smith</h3>
                      <p className="text-sm text-gray-500">UX Design • Design Studio</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Seeking UX mentorship opportunities</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded">Figma</span>
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded">UI Design</span>
                  </div>
                </div>
              </div>

              {/* Opportunity Tags */}
              <div className="flex items-center justify-between">
                <div className="flex space-x-3">
                  <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full flex items-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                    Job
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full flex items-center">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    Internship
                  </span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-700 text-sm rounded-full flex items-center">
                    <div className="w-2 h-2 bg-pink-500 rounded-full mr-2"></div>
                    Bootcamp
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full flex items-center">
                    <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Webinar
                  </span>
                </div>
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center">
                  <Share2 size={16} className="mr-2" />
                  Share Opportunity
                </button>
              </div>
            </div>

            {/* Job Opportunities Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Available Opportunities</h2>
              
              {/* Filter Tabs */}
              <div className="flex space-x-6 mb-6 border-b border-gray-200">
                <button className="pb-2 px-1 border-b-2 border-green-500 text-green-600 font-medium text-sm">All</button>
                <button className="pb-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">Jobs</button>
                <button className="pb-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">Internships</button>
                <button className="pb-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">Bootcamps</button>
                <button className="pb-2 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium text-sm">Webinars</button>
              </div>

              {/* Empty State */}
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8zM16 10h.01M12 14h.01M8 14h.01M8 10h.01M12 10h.01M16 14h.01" />
                  </svg>
                </div>
                <p className="text-gray-500 text-lg mb-2">No job opportunities available at the moment</p>
                <p className="text-gray-400 text-sm">Check back later for new opportunities or share your own!</p>
              </div>

              {/* Sample Opportunity Cards (you can uncomment these when you have data) */}
              {/*
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-gray-900">Frontend Developer</h3>
                      <p className="text-sm text-gray-500">TechCorp Inc. • Remote</p>
                    </div>
                    <span className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded">Job</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Looking for a junior frontend developer with React experience...</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">React</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">JavaScript</span>
                    </div>
                    <button className="text-green-600 hover:text-green-700 text-sm font-medium">Apply Now</button>
                  </div>
                </div>
              </div>
              */}
            </div>
          </div>
        );
      case 'resource':
        return (
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">My Resource</h1>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <p className="text-gray-600">Resource management interface will be displayed here.</p>
            </div>
          </div>
        );
      case 'message':
        return (
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Message</h1>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <p className="text-gray-600">Message interface will be displayed here.</p>
            </div>
          </div>
        );
      case 'calendar':
        return (
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">My Calendar</h1>
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <p className="text-gray-600">Calendar interface will be displayed here.</p>
            </div>
          </div>
        );
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
      {renderContent()}
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  const [activePage, setActivePage] = useState('dashboard');
  const [activeSessionTab, setActiveSessionTab] = useState('upcoming');
  const [activeConnectionTab, setActiveConnectionTab] = useState('mentor');

  return (
    <div className="h-screen flex bg-gray-100">
      {/* Left Panel */}
      <LeftPanel activePage={activePage} setActivePage={setActivePage} />
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Panel */}
        <TopPanel />
        
        {/* Center Panel */}
        <CenterPanel 
          activePage={activePage} 
          activeSessionTab={activeSessionTab} 
          setActiveSessionTab={setActiveSessionTab}
          activeConnectionTab={activeConnectionTab}
          setActiveConnectionTab={setActiveConnectionTab}
        />
      </div>
    </div>
  );
};

export default Dashboard;