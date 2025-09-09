import {
  LayoutDashboard,
  Users,
  Share2,
  BarChart3,
  FileText,
  MessageSquare,
  Calendar,
} from "lucide-react";

export const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "session", label: "Session", icon: Users },
  { id: "connection", label: "My Connection", icon: Share2 },
  { id: "contribution", label: "My Contribution", icon: BarChart3 },
  { id: "linkage", label: "Market Linkage", icon: FileText },
  { id: "resource", label: "My Resource", icon: FileText },
  { id: "message", label: "Message", icon: MessageSquare },
  { id: "calendar", label: "My Calendar", icon: Calendar },
];
