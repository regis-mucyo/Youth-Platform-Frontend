export const initialConversations = [
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
        content: "That's great to hear! How's the data cleaning process going?",
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
