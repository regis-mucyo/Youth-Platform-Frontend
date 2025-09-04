import React, { useState, useRef, useEffect } from "react";
import { Paperclip, Search, Send } from "lucide-react";
import Header from "./Header";
import Sidebar from "./SiderBar";
const users = [
  {
    id: "mentee1",
    name: "Alice Niyonsaba",
    role: "mentee",
    avatar: "https://via.placeholder.com/40?text=A",
  },
  {
    id: "mentee2",
    name: "Eric Mugiraneza",
    role: "mentee",
    avatar: "https://via.placeholder.com/40?text=E",
  },
  {
    id: "mentor1",
    name: "Dr. Sarah Uwase",
    role: "mentor",
    avatar: "https://via.placeholder.com/40?text=S",
  },
  {
    id: "mentor2",
    name: "Prof. Jean Bosco",
    role: "mentor",
    avatar: "https://via.placeholder.com/40?text=J",
  },
  {
    id: "mentor3",
    name: "Coach Diane",
    role: "mentor",
    avatar: "https://via.placeholder.com/40?text=D",
  },
];

const ChatApp = () => {
  const [activeUser, setActiveUser] = useState(users[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [chatHistory, setChatHistory] = useState({});
  const messagesEndRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const currentMessages = chatHistory[activeUser.id] || [];

  const handleSend = () => {
    if (text.trim() || file) {
      const newMessage = {
        text,
        fileName: file?.name || null,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        sender: {
          id: "you",
          name: "MUGISHA",
          avatar: "https://via.placeholder.com/40?text=U",
        },
      };
      const updatedHistory = {
        ...chatHistory,
        [activeUser.id]: [...currentMessages, newMessage],
      };
      setChatHistory(updatedHistory);
      setText("");
      setFile(null);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory, activeUser]);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex h-screen bg-gray-50">
        <Sidebar
          open={sidebarOpen}
          setOpen={setSidebarOpen}
          activeItem="Messages"
        />
        <div className="flex flex-col flex-1">
          <Header
            setSidebarOpen={setSidebarOpen}
            dashboard={"My Messages"}
            description={"s"}
          />
          <main className="p-4 sm:p-6 overflow-y-auto">
            <div className="flex h-xl font-[Poppins] bg-gray-100">
              {/* Sidebar */}
              <div className="w-full md:w-1/4 bg-white border-r flex flex-col">
                <div className="p-4 border-b flex items-center space-x-2">
                  <Search className="w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search contacts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="flex-1 overflow-y-auto">
                  {filteredUsers.map((user) => (
                    <div
                      key={user.id}
                      onClick={() => setActiveUser(user)}
                      className={`flex items-center p-4 cursor-pointer hover:bg-gray-100 ${
                        activeUser.id === user.id ? "bg-gray-200" : ""
                      }`}
                    >
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat Panel */}
              <div className="flex flex-col flex-1 w-full md:w-3/4">
                {/* Header */}
                <div className="flex items-center p-4 bg-white shadow">
                  <img
                    src={activeUser.avatar}
                    alt={activeUser.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {activeUser.name}
                    </h3>
                    <p className="text-sm text-gray-500">{activeUser.role}</p>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 bg-gray-50">
                  {currentMessages.map((msg, index) => {
                    const isUser = msg.sender.id === "you";
                    return (
                      <div
                        key={index}
                        className={`flex ${
                          isUser ? "justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-xs px-4 py-2 rounded-lg shadow-sm ${
                            isUser
                              ? "bg-green-500 text-white"
                              : "bg-white text-gray-800"
                          }`}
                        >
                          <p>{msg.text}</p>
                          {msg.fileName && (
                            <p className="mt-2 text-sm italic text-gray-300">
                              📎 {msg.fileName}
                            </p>
                          )}
                          <span className="text-xs text-gray-300 block text-right mt-1">
                            {msg.time}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 bg-white border-t flex items-center space-x-2">
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="hidden"
                    id="fileUpload"
                  />
                  <label
                    htmlFor="fileUpload"
                    className="cursor-pointer text-gray-500 hover:text-green-600"
                  >
                    <Paperclip className="w-5 h-5" />
                  </label>
                  <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Type a message"
                    className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                  <button
                    onClick={handleSend}
                    className="px-3 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition flex items-center"
                  >
                    <Send className="w-4 h-4 mr-1" />
                    Send
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ChatApp;
