import React, { useState, useEffect } from "react";
import {
  Search,
  Share2,
  MapPin,
  Clock,
  Users,
  X,
  Send,
  CheckCircle,
  Briefcase,
  User,
  Zap,
} from "lucide-react";
import { mockConnections, mockOpportunities } from "../data/mockData";

// Custom Toast Component
const Toast = ({ message, type, onClose }) => {
  const bgColor =
    type === "success"
      ? "bg-green-600"
      : type === "error"
      ? "bg-red-600"
      : "bg-blue-600";
  const icon = type === "success" ? <CheckCircle /> : <Zap />;

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Auto-close after 3 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 text-white px-6 py-3 rounded-full shadow-xl flex items-center transition-all duration-300 ease-in-out ${bgColor} opacity-95`}
    >
      <div className="mr-2">{icon}</div>
      <span>{message}</span>
    </div>
  );
};

const MarketLinkagePage = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [filteredOpportunities, setFilteredOpportunities] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [talentSearchTerm, setTalentSearchTerm] = useState("");
  const [showShareModal, setShowShareModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showRecommendModal, setShowRecommendModal] = useState(false);
  const [showApplicationModal, setShowApplicationModal] = useState(false);
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [selectedMentees, setSelectedMentees] = useState([]);
  const [recommendationMessage, setRecommendationMessage] = useState("");
  const [applicationData, setApplicationData] = useState({
    coverLetter: "",
    resume: "",
    portfolio: "",
  });
  const [toast, setToast] = useState(null);

  useEffect(() => {
    setOpportunities(mockOpportunities);
    setFilteredOpportunities(mockOpportunities);
  }, []);

  useEffect(() => {
    let filtered = opportunities.filter(
      (opp) =>
        opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.skills.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    if (activeFilter !== "All") {
      filtered = filtered.filter((opp) => {
        if (activeFilter === "Jobs") return opp.type === "Job";
        if (activeFilter === "Internships") return opp.type === "Internship";
        if (activeFilter === "Bootcamps") return opp.type === "Bootcamp";
        if (activeFilter === "Webinars") return opp.type === "Webinar";
        return opp.type === activeFilter;
      });
    }

    setFilteredOpportunities(filtered);
  }, [opportunities, searchTerm, activeFilter]);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
  };

  const handleShareOpportunity = (opportunityId) => {
    const opportunity = opportunities.find((opp) => opp.id === opportunityId);
    setSelectedOpportunity(opportunity);
    setShowShareModal(true);
  };

  const handleRecommendTalent = (opportunityId) => {
    const opportunity = opportunities.find((opp) => opp.id === opportunityId);
    setSelectedOpportunity(opportunity);
    // Use the same selected mentees from the share modal
    setShowRecommendModal(true);
  };

  const handleViewDetails = (opportunityId) => {
    const opportunity = opportunities.find((opp) => opp.id === opportunityId);
    setSelectedOpportunity(opportunity);
    setShowDetailsModal(true);
  };

  const handleApplyToOpportunity = (opportunityId) => {
    const opportunity = opportunities.find((opp) => opp.id === opportunityId);
    setSelectedOpportunity(opportunity);
    setShowApplicationModal(true);
  };

  const handleShareSubmit = () => {
    if (selectedMentees.length > 0) {
      showToast(
        `Opportunity shared with ${selectedMentees.length} mentee(s)!`,
        "success"
      );
      setShowShareModal(false);
    }
  };

  const handleRecommendSubmit = () => {
    if (selectedMentees.length > 0 && recommendationMessage.trim()) {
      showToast(
        `Recommendation sent for ${selectedMentees.length} mentee(s)!`,
        "success"
      );
      setShowRecommendModal(false);
      setSelectedMentees([]);
      setRecommendationMessage("");
    }
  };

  const handleApplicationSubmit = () => {
    if (applicationData.coverLetter.trim()) {
      showToast(`Application submitted successfully!`, "success");
      setShowApplicationModal(false);
      setApplicationData({ coverLetter: "", resume: "", portfolio: "" });
    }
  };

  const handleMenteeSelection = (menteeId) => {
    setSelectedMentees((prevSelected) =>
      prevSelected.includes(menteeId)
        ? prevSelected.filter((id) => id !== menteeId)
        : [...prevSelected, menteeId]
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Market Linkage
        </h1>
        <p className="text-gray-600">Discover opportunities for your mentees</p>
      </div>

      {/* Top Talent Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Top Talent</h2>
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Filter by field or name"
              value={talentSearchTerm}
              onChange={(e) => setTalentSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Talent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mockConnections.mentees
            .filter(
              (mentee) =>
                !talentSearchTerm ||
                mentee.name
                  .toLowerCase()
                  .includes(talentSearchTerm.toLowerCase()) ||
                mentee.field
                  .toLowerCase()
                  .includes(talentSearchTerm.toLowerCase()) ||
                mentee.skills.some((skill) =>
                  skill.toLowerCase().includes(talentSearchTerm.toLowerCase())
                )
            )
            .map((mentee) => (
              <div
                key={mentee.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">
                      {mentee.avatar}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{mentee.name}</h3>
                    <p className="text-sm text-gray-500">
                      {mentee.field} • {mentee.company}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  {mentee.level} level • {mentee.totalSessions} sessions
                  completed
                </p>
                <div className="flex flex-wrap gap-2">
                  {mentee.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
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
              <svg
                className="w-3 h-3 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Webinar
            </span>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center">
            <Share2 size={16} className="mr-2" />
            Share Opportunity
          </button>
        </div>
      </div>

      {/* Job Opportunities Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Available Opportunities
        </h2>

        {/* Filter Tabs */}
        <div className="flex space-x-6 mb-6 border-b border-gray-200">
          {["All", "Jobs", "Internships", "Bootcamps", "Webinars"].map(
            (filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`pb-2 px-1 border-b-2 font-medium text-sm ${
                  activeFilter === filter
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                {filter}
              </button>
            )
          )}
        </div>

        {/* Search Bar for Opportunities */}
        <div className="relative mb-6">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Search opportunities..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Opportunities List */}
        {filteredOpportunities.length > 0 ? (
          <div className="space-y-4">
            {filteredOpportunities.map((opportunity) => (
              <div
                key={opportunity.id}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-medium text-gray-900">
                        {opportunity.title}
                      </h3>
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          opportunity.type === "Job"
                            ? "bg-green-100 text-green-700"
                            : opportunity.type === "Internship"
                            ? "bg-blue-100 text-blue-700"
                            : opportunity.type === "Bootcamp"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {opportunity.type}
                      </span>
                      {opportunity.level && (
                        <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700">
                          {opportunity.level}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      {opportunity.company}
                    </p>
                    <p className="text-sm text-gray-700 mb-3">
                      {opportunity.description}
                    </p>

                    <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                      <span className="flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {opportunity.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        {opportunity.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {opportunity.applicants} applicants
                      </span>
                      <span className="flex items-center font-medium text-green-600">
                        {opportunity.salary}
                      </span>
                    </div>

                    <div className="mb-3">
                      <p className="text-xs text-gray-500 mb-1">
                        <strong>Deadline:</strong> {opportunity.deadline}
                      </p>
                      <p className="text-xs text-gray-500">
                        <strong>Posted:</strong> {opportunity.postedDate}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {opportunity.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2 ml-4">
                    <button
                      onClick={() => handleShareOpportunity(opportunity.id)}
                      className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition-colors flex items-center"
                    >
                      <Share2 className="w-3 h-3 mr-1" />
                      Share
                    </button>
                    <button
                      onClick={() => handleViewDetails(opportunity.id)}
                      className="px-3 py-1 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      View Details
                    </button>
                    <button
                      onClick={() => handleRecommendTalent(opportunity.id)}
                      className="px-3 py-1 bg-green-500 text-white text-sm rounded-lg hover:bg-green-600 transition-colors"
                    >
                      Recommend
                    </button>
                    <button
                      onClick={() => handleApplyToOpportunity(opportunity.id)}
                      className="px-3 py-1 bg-purple-500 text-white text-sm rounded-lg hover:bg-purple-600 transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-500 text-lg mb-2">
              {searchTerm || activeFilter !== "All"
                ? "No opportunities found matching your criteria"
                : "No opportunities available at the moment"}
            </p>
            <p className="text-gray-400 text-sm">
              {searchTerm || activeFilter !== "All"
                ? "Try adjusting your search or filter"
                : "Check back later for new opportunities or share your own!"}
            </p>
          </div>
        )}
      </div>

      {/* Share Opportunity Modal */}
      {showShareModal && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Share Opportunity</h3>
              <button onClick={() => setShowShareModal(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Share "{selectedOpportunity?.title}" with your mentees
            </p>
            <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
              {mockConnections.mentees.map((mentee) => (
                <label key={mentee.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedMentees.includes(mentee.id)}
                    onChange={() => handleMenteeSelection(mentee.id)}
                    className="rounded"
                  />
                  <span className="text-sm">{mentee.name}</span>
                </label>
              ))}
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowShareModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleShareSubmit}
                disabled={selectedMentees.length === 0}
                className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300"
              >
                Share
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Opportunity Details Modal */}
      {showDetailsModal && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-96 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Opportunity Details</h3>
              <button onClick={() => setShowDetailsModal(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            {selectedOpportunity && (
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-lg">
                    {selectedOpportunity.title}
                  </h4>
                  <p className="text-gray-600">{selectedOpportunity.company}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Type:</span>{" "}
                    {selectedOpportunity.type}
                  </div>
                  {selectedOpportunity.level && (
                    <div>
                      <span className="font-medium">Level:</span>{" "}
                      {selectedOpportunity.level}
                    </div>
                  )}
                  <div>
                    <span className="font-medium">Location:</span>{" "}
                    {selectedOpportunity.location}
                  </div>
                  <div>
                    <span className="font-medium">Duration:</span>{" "}
                    {selectedOpportunity.duration}
                  </div>
                  <div>
                    <span className="font-medium">Salary:</span>{" "}
                    {selectedOpportunity.salary}
                  </div>
                  <div>
                    <span className="font-medium">Deadline:</span>{" "}
                    {selectedOpportunity.deadline}
                  </div>
                  <div>
                    <span className="font-medium">Applicants:</span>{" "}
                    {selectedOpportunity.applicants}
                  </div>
                </div>
                <div>
                  <span className="font-medium">Description:</span>
                  <p className="text-gray-700 mt-1">
                    {selectedOpportunity.description}
                  </p>
                </div>
                <div>
                  <span className="font-medium">Required Skills:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {selectedOpportunity.skills?.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Recommend Talent Modal */}
      {showRecommendModal && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-smbg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Recommend Talent</h3>
              <button onClick={() => setShowRecommendModal(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Recommend mentees for "{selectedOpportunity?.title}"
            </p>
            <div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
              {selectedMentees.length > 0 ? (
                selectedMentees.map((menteeId) => {
                  const mentee = mockConnections.mentees.find(
                    (m) => m.id === menteeId
                  );
                  if (!mentee) return null;
                  return (
                    <div
                      key={mentee.id}
                      className="flex items-center space-x-2 p-1 rounded-md bg-green-100" // Reduced padding and removed ring
                    >
                      <User className="w-6 h-6 text-gray-500 bg-gray-200 rounded-full p-0.5" />{" "}
                      {/* Smaller icon */}
                      <div className="flex-1">
                        <h4 className="font-medium text-sm text-gray-900">
                          {mentee.name}
                        </h4>{" "}
                        {/* Smaller text */}
                        <p className="text-xs text-gray-500">{mentee.field}</p>
                      </div>
                      <CheckCircle className="text-green-500 w-4 h-4" />{" "}
                      {/* Smaller check icon */}
                    </div>
                  );
                })
              ) : (
                <div className="text-center text-gray-500 py-4">
                  No mentees selected. Please select mentees from the "Share"
                  option first.
                </div>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Recommendation Message
              </label>
              <textarea
                value={recommendationMessage}
                onChange={(e) => setRecommendationMessage(e.target.value)}
                placeholder="Write your recommendation message..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowRecommendModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleRecommendSubmit}
                disabled={
                  !recommendationMessage.trim() || selectedMentees.length === 0
                }
                className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-300"
              >
                Send Recommendation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Application Modal */}
      {showApplicationModal && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg max-h-96 overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Apply to Opportunity</h3>
              <button onClick={() => setShowApplicationModal(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Apply for "{selectedOpportunity?.title}" at{" "}
              {selectedOpportunity?.company}
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter *
                </label>
                <textarea
                  value={applicationData.coverLetter}
                  onChange={(e) =>
                    setApplicationData({
                      ...applicationData,
                      coverLetter: e.target.value,
                    })
                  }
                  placeholder="Write your cover letter..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resume/CV
                </label>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Portfolio URL
                </label>
                <input
                  type="url"
                  value={applicationData.portfolio}
                  onChange={(e) =>
                    setApplicationData({
                      ...applicationData,
                      portfolio: e.target.value,
                    })
                  }
                  placeholder="https://your-portfolio.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setShowApplicationModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleApplicationSubmit}
                disabled={!applicationData.coverLetter.trim()}
                className="flex-1 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 disabled:bg-gray-300"
              >
                Submit Application
              </button>
            </div>
          </div>
        </div>
      )}

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default MarketLinkagePage;
