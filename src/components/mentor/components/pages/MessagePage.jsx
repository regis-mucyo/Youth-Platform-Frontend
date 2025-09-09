// src/mentor/components/pages/MessagePage.jsx
import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  Send,
  Paperclip,
  Smile,
  MoreVertical,
  Phone,
  Video,
} from "lucide-react";

// 🇷🇼 Rwanda Flag Colors — ONLY
const RWANDA_BLUE = "#00A1DE";
const RWANDA_YELLOW = "#FFDD00";
const RWANDA_GREEN = "#00A651";

const MessagePage = () => {
  const [selectedConversation, setSelectedConversation] = useState(0);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const conversations = [
    {
      id: 1,
      name: "Emma Wilson",
      lastMessage:
        "Thanks for the session today! The React concepts you explained really helped me understand hooks better.",
      time: "2:30 PM",
      unread: 2,
      avatar: "EW",
      online: true,
      messages: [
        {
          id: 1,
          sender: "Emma Wilson",
          content: "Hi Dr. Johnson! I hope you're doing well.",
          time: "2:15 PM",
          isMe: false,
        },
        {
          id: 2,
          sender: "Dr. Sarah Johnson",
          content:
            "Hello Emma! I'm doing great, thank you. How can I help you today?",
          time: "2:16 PM",
          isMe: true,
        },
        {
          id: 3,
          sender: "Emma Wilson",
          content:
            "I was working on the React project we discussed, but I'm having trouble with useEffect hooks. Could you help me understand when to use the dependency array?",
          time: "2:18 PM",
          isMe: false,
        },
        {
          id: 4,
          sender: "Dr. Sarah Johnson",
          content:
            "Absolutely! The dependency array in useEffect determines when the effect should re-run. If you pass an empty array [], it runs only once after the initial render. If you include variables, it runs whenever those variables change.",
          time: "2:20 PM",
          isMe: true,
        },
        {
          id: 5,
          sender: "Emma Wilson",
          content:
            "Thanks for the session today! The React concepts you explained really helped me understand hooks better.",
          time: "2:30 PM",
          isMe: false,
        },
      ],
    },
    {
      id: 2,
      name: "Michael Park",
      lastMessage:
        "Could we schedule a session for next week to discuss the machine learning project?",
      time: "1:45 PM",
      unread: 0,
      avatar: "MP",
      online: false,
      messages: [
        {
          id: 1,
          sender: "Michael Park",
          content:
            "Hi Dr. Johnson! I've been working on the data preprocessing for our ML project.",
          time: "1:30 PM",
          isMe: false,
        },
        {
          id: 2,
          sender: "Dr. Sarah Johnson",
          content:
            "That's great to hear! How's the data cleaning process going?",
          time: "1:35 PM",
          isMe: true,
        },
        {
          id: 3,
          sender: "Michael Park",
          content:
            "It's going well, but I have some questions about feature scaling and selection. Could we schedule a session for next week to discuss the machine learning project?",
          time: "1:45 PM",
          isMe: false,
        },
      ],
    },
    {
      id: 3,
      name: "Alice Smith",
      lastMessage:
        "The design prototype looks amazing! Thank you for your guidance on the UX principles.",
      time: "11:20 AM",
      unread: 1,
      avatar: "AS",
      online: true,
      messages: [
        {
          id: 1,
          sender: "Alice Smith",
          content:
            "Hi! I just finished the wireframes for the mobile app project.",
          time: "11:00 AM",
          isMe: false,
        },
        {
          id: 2,
          sender: "Dr. Sarah Johnson",
          content:
            "Excellent! I'd love to take a look. How did you approach the user flow?",
          time: "11:05 AM",
          isMe: true,
        },
        {
          id: 3,
          sender: "Alice Smith",
          content:
            "I focused on minimizing the number of taps required to complete key actions, just like you suggested in our last session.",
          time: "11:10 AM",
          isMe: false,
        },
        {
          id: 4,
          sender: "Alice Smith",
          content:
            "The design prototype looks amazing! Thank you for your guidance on the UX principles.",
          time: "11:20 AM",
          isMe: false,
        },
      ],
    },
    {
      id: 4,
      name: "John Davis",
      lastMessage: "I'll send over the code review by tomorrow morning.",
      time: "Yesterday",
      unread: 0,
      avatar: "JD",
      online: false,
      messages: [
        {
          id: 1,
          sender: "John Davis",
          content:
            "Hi Dr. Johnson, I've completed the backend API for the project.",
          time: "Yesterday",
          isMe: false,
        },
        {
          id: 2,
          sender: "Dr. Sarah Johnson",
          content: "That's fantastic! Could you share the code for review?",
          time: "Yesterday",
          isMe: true,
        },
        {
          id: 3,
          sender: "John Davis",
          content: "I'll send over the code review by tomorrow morning.",
          time: "Yesterday",
          isMe: false,
        },
      ],
    },
  ];

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    const newMsg = {
      id: Date.now(),
      sender: "Dr. Sarah Johnson",
      content: newMessage,
      time: currentTime,
      isMe: true,
    };

    // Update conversation
    const updatedConversations = [...conversations];
    const currentConv = updatedConversations[selectedConversation];
    currentConv.messages.push(newMsg);
    currentConv.lastMessage = newMessage;
    currentConv.time = currentTime;
    currentConv.unread = 0;

    setNewMessage("");

    // Simulate reply after 1 second
    setTimeout(() => {
      const replyMsg = {
        id: Date.now() + 1,
        sender: currentConv.name,
        content: "Got it, thanks for your quick response!",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isMe: false,
      };
      currentConv.messages.push(replyMsg);
      currentConv.lastMessage = replyMsg.content;
      currentConv.time = replyMsg.time;
      currentConv.unread = 1;
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [conversations[selectedConversation]?.messages]);

  return (
    <div className="flex h-full bg-white">
      {/* Conversations List */}
      <div className="w-80 border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Messages</h2>
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search conversations..."
              className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
        {/* Conversations */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map((conversation, index) => (
            <div
              key={conversation.id}
              onClick={() => setSelectedConversation(index)}
              className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors ${
                selectedConversation === index
                  ? "bg-green-50 border-green-200"
                  : ""
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {conversation.avatar}
                    </span>
                  </div>
                  {conversation.online && (
                    <div
                      className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"
                      style={{ backgroundColor: RWANDA_GREEN }}
                    ></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {conversation.name}
                    </h3>
                    <span className="text-xs text-gray-500">
                      {conversation.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">
                    {conversation.lastMessage}
                  </p>
                </div>
                {conversation.unread > 0 && (
                  <div
                    className="w-5 h-5 bg-green-500 text-white text-xs rounded-full flex items-center justify-center"
                    style={{ backgroundColor: RWANDA_GREEN }}
                  >
                    {conversation.unread}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Interface */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {conversations[selectedConversation]?.avatar}
                  </span>
                </div>
                {conversations[selectedConversation]?.online && (
                  <div
                    className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"
                    style={{ backgroundColor: RWANDA_GREEN }}
                  ></div>
                )}
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">
                  {conversations[selectedConversation]?.name}
                </h3>
                <p className="text-xs text-gray-500">
                  {conversations[selectedConversation]?.online
                    ? "Online"
                    : "Last seen recently"}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Phone size={18} />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Video size={18} />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreVertical size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {conversations[selectedConversation]?.messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.isMe ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.isMe
                    ? "bg-green-500 text-white"
                    : "bg-white text-gray-900 border border-gray-200"
                }`}
                style={message.isMe ? { backgroundColor: RWANDA_GREEN } : {}}
              >
                <p className="text-sm">{message.content}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.isMe ? "text-green-100" : "text-gray-500"
                  }`}
                >
                  {message.time}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center space-x-3">
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
              <Paperclip size={18} />
            </button>
            <div className="flex-1 relative">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="w-full px-4 py-2 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                style={{
                  borderColor: RWANDA_BLUE,
                }}
                onFocus={(e) =>
                  (e.target.style.boxShadow = `0 0 0 3px ${RWANDA_YELLOW}`)
                }
                onBlur={(e) => (e.target.style.boxShadow = "")}
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-gray-600 hover:text-gray-900 rounded transition-colors">
                <Smile size={16} />
              </button>
            </div>
            <button
              onClick={handleSendMessage}
              className="p-2 bg-green-500 text-white hover:bg-green-600 rounded-lg transition-colors"
              style={{ backgroundColor: RWANDA_GREEN }}
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagePage;
