import Header from "./Header";
import Sessions from "./Session";
import Sidebar from "./SiderBar";
import  { useState } from "react";
function SessionPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex flex-col flex-1">
        <Header setSidebarOpen={setSidebarOpen} />
        <main className="p-4 sm:p-6 overflow-y-auto">
          <Sessions />
        </main>
      </div>
    </div>
  );
}

export default SessionPage;
