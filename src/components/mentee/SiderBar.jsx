import React from "react";
import {
  LayoutDashboard,
  Calendar,
  MessageCircle,
  Users,
  ShoppingBag,
  Trophy,
  Settings,
  X,
} from "lucide-react";

const Sidebar = ({ open, setOpen }) => {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 sm:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed sm:static inset-y-0 left-0 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}`}
      >
        {/* Close (mobile only) */}
        <div className="sm:hidden flex justify-end p-4">
          <button onClick={() => setOpen(false)}>
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Logo & Subtitle */}
        <div className="px-6 py-4">
          <h1 className="text-green-600 font-bold text-xl">ElevateLink</h1>
          <p className="text-sm text-gray-500">Mentorship Platform</p>
        </div>

        {/* Navigation */}
        <nav className="mt-6 space-y-2">
          <SidebarItem icon={<LayoutDashboard />} text="Dashboard" />
          <SidebarItem icon={<Calendar />} text="Sessions" active />
          <SidebarItem icon={<MessageCircle />} text="Messages" badge="3" />
          <SidebarItem icon={<Users />} text="My Connections" />
          <SidebarItem icon={<ShoppingBag />} text="Market Linkage" />
          <SidebarItem icon={<Trophy />} text="My Contribution" />
        </nav>

        {/* User Profile */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t flex items-center space-x-3">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-sm sm:text-base">Alex Johnson</p>
            <p className="text-xs sm:text-sm text-gray-500">mentee</p>
          </div>
          <Settings className="ml-auto w-5 h-5 text-gray-500 cursor-pointer" />
        </div>
      </aside>
    </>
  );
};

const SidebarItem = ({ icon, text, active, badge }) => (
  <div
    className={`flex items-center px-6 py-3 cursor-pointer  ${
      active ? "bg-green-500 text-white rounded-r-full" : "text-gray-700"
    }`}
  >
    <span className="w-5 h-5">{icon}</span>
    <span className="ml-3 text-sm sm:text-base">{text}</span>
    {badge && (
      <span className="ml-auto bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">
        {badge}
      </span>
    )}
  </div>
);

export default Sidebar;
