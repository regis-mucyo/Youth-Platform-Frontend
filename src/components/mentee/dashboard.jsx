import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Calendar, 
  MessageCircle, 
  Users, 
  TrendingUp, 
  Trophy,
  Bell,
  Plus,
  Menu,
  X,
  Settings
} from 'lucide-react';

// Logo Component
const Logo = () => (
  <div className="flex items-center space-x-3">
    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
      <TrendingUp className="w-5 h-5 text-white" />
    </div>
    <div>
      <h1 className="text-lg font-bold text-gray-900">ElevateLink</h1>
      <p className="text-sm text-gray-500">Mentorship Platform</p>
    </div>
  </div>
);

// Navigation Item Component
const NavigationItem = ({ item, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
      isActive
        ? 'bg-green-500 text-white'
        : 'text-gray-700 hover:bg-gray-100'
    }`}
  >
    <item.icon className="w-5 h-5" />
    <span className="font-medium">{item.label}</span>
    {item.badge && (
      <span className={`ml-auto px-2 py-1 text-xs rounded-full ${
        isActive
          ? 'bg-white bg-opacity-20 text-white'
          : 'bg-green-500 text-white'
      }`}>
        {item.badge}
      </span>
    )}
  </button>
);

// User Profile Component
const UserProfile = () => (
  <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
        <span className="text-sm font-medium text-gray-700">AJ</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate">Alex Johnson</p>
        <p className="text-xs text-gray-500">Mentee</p>
      </div>
      <button className="p-1 text-gray-400 hover:text-gray-600">
        <Settings className="w-4 h-4" />
      </button>
    </div>
  </div>
);

// Sidebar Component
const Sidebar = ({ isOpen, onToggle, activeTab, onTabChange, navigationItems }) => (
  <>
    {/* Mobile Overlay */}
    {isOpen && (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={() => onToggle(false)}
      />
    )}

    {/* Sidebar */}
    <div className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
      isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
    }`}>
      {/* Logo Section */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <Logo />
        <button 
          onClick={() => onToggle(false)}
          className="lg:hidden p-2 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="px-4 py-6 space-y-2">
        {navigationItems.map((item, index) => (
          <NavigationItem
            key={index}
            item={item}
            isActive={item.active || activeTab === item.label}
            onClick={() => {
              onTabChange(item.label);
              if (window.innerWidth < 1024) onToggle(false);
            }}
          />
        ))}
      </nav>

      <UserProfile />
    </div>
  </>
);

// Header Component
const Header = ({ activeTab, onSidebarToggle }) => (
  <header className="bg-white shadow-sm border-b border-gray-200 px-4 lg:px-6 py-4">
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button
          onClick={onSidebarToggle}
          className="lg:hidden p-2 text-gray-500 hover:text-gray-700"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{activeTab}</h2>
          <p className="text-gray-600 text-sm mt-1">
            Manage your upcoming, pending, and completed mentorship sessions.
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative p-2 text-gray-500 hover:text-gray-700">
          <Bell className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 text-white text-xs rounded-full flex items-center justify-center">
            2
          </span>
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center space-x-2">
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline">Book Session</span>
        </button>
      </div>
    </div>
  </header>
);

// Tab Navigation Component
const TabNavigation = ({ tabs, activeTab, onTabChange }) => (
  <div className="flex flex-wrap border-b border-gray-200 mb-6">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => onTabChange(tab)}
        className={`px-4 py-2 mr-4 mb-2 font-medium text-sm border-b-2 transition-colors ${
          activeTab === tab
            ? 'border-green-500 text-green-600'
            : 'border-transparent text-gray-600 hover:text-gray-900'
        }`}
      >
        {tab}
      </button>
    ))}
  </div>
);

// Session Card Component
const SessionCard = ({ session }) => (
  <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 lg:p-6">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-sm font-medium text-gray-700">
            {session.avatar}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="text-lg font-semibold text-gray-900">
              {session.name}
            </h3>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
              {session.status}
            </span>
          </div>
          <p className="text-gray-700 mb-2">{session.topic}</p>
          <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
            <span className="flex items-center">
              📅 {session.date}
            </span>
            <span className="flex items-center">
              🕐 {session.time}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 sm:ml-4">
        <div className="text-sm text-gray-600 sm:text-right mb-2 sm:mb-0">
          Waiting for Approval
        </div>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-colors text-sm">
          Cancel
        </button>
      </div>
    </div>
  </div>
);

// Empty State Component
const EmptyState = ({ icon: Icon, title, description, actionText, onAction }) => (
  <div className="text-center py-12">
    <Icon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
    <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-500 mb-6">{description}</p>
    {actionText && onAction && (
      <button 
        onClick={onAction}
        className="bg-green-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition-colors"
      >
        {actionText}
      </button>
    )}
  </div>
);

// Sessions Content Component
const SessionsContent = ({ sessionView, setSessionView }) => {
  const sessionTabs = ['Upcoming', 'Pending', 'History'];
  
  const pendingSession = {
    name: 'Michael Rodriguez',
    topic: 'Technical Interview Preparation',
    date: 'Dec 18, 2024',
    time: '10:00 AM - 11:00 AM',
    status: 'pending',
    avatar: 'MR'
  };

  const handleBookSession = () => {
    console.log('Book session clicked');
  };

  return (
    <main className="flex-1 p-4 lg:p-6">
      <TabNavigation 
        tabs={sessionTabs}
        activeTab={sessionView}
        onTabChange={setSessionView}
      />

      <div className="space-y-4">
        {sessionView === 'Pending' && (
          <SessionCard session={pendingSession} />
        )}

        {sessionView === 'Upcoming' && (
          <EmptyState
            icon={Calendar}
            title="No upcoming sessions"
            description="Book a session to get started with mentorship."
            actionText="Book Your First Session"
            onAction={handleBookSession}
          />
        )}

        {sessionView === 'History' && (
          <EmptyState
            icon={Trophy}
            title="No completed sessions yet"
            description="Your session history will appear here once you complete sessions."
          />
        )}
      </div>
    </main>
  );
};

// Other Content Component
const OtherContent = ({ activeTab, navigationItems }) => {
  const currentItem = navigationItems.find(item => item.label === activeTab);
  
  return (
    <main className="flex-1 p-4 lg:p-6">
      <div className="text-center py-12">
        <div className="w-16 h-16 text-gray-300 mx-auto mb-4">
          {currentItem?.icon && 
            React.createElement(currentItem.icon, { className: "w-full h-full" })
          }
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">{activeTab} Coming Soon</h3>
        <p className="text-gray-500">This section is under development.</p>
      </div>
    </main>
  );
};

// Main Dashboard Component
const ElevateLinkDashboard = () => {
  const [activeTab, setActiveTab] = useState('Sessions');
  const [sessionView, setSessionView] = useState('Pending');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigationItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: false },
    { icon: Calendar, label: 'Sessions', active: true },
    { icon: MessageCircle, label: 'Messages', badge: 3 },
    { icon: Users, label: 'My Connections' },
    { icon: TrendingUp, label: 'Market Linkage' },
    { icon: Trophy, label: 'My Contribution' }
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={setIsSidebarOpen}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        navigationItems={navigationItems}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <Header 
          activeTab={activeTab}
          onSidebarToggle={toggleSidebar}
        />

        {activeTab === 'Sessions' ? (
          <SessionsContent 
            sessionView={sessionView}
            setSessionView={setSessionView}
          />
        ) : (
          <OtherContent 
            activeTab={activeTab}
            navigationItems={navigationItems}
          />
        )}
      </div>
    </div>
  );
};

export default ElevateLinkDashboard;