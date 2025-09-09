import React, { useState, useEffect } from "react";
import { Search, Share2, MapPin, Clock, Users } from "lucide-react";
import { mockConnections, mockOpportunities } from "../data/mockData";

const MarketLinkagePage = () => {
  const [opportunities, setOpportunities] = useState([]);
  const [filteredOpportunities, setFilteredOpportunities] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [talentSearchTerm, setTalentSearchTerm] = useState("");

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

  const handleShareOpportunity = (opportunityId) => {
    console.log(`Sharing opportunity ${opportunityId}`);
  };

  const handleRecommendTalent = (menteeId, opportunityId) => {
    console.log(
      `Recommending mentee ${menteeId} for opportunity ${opportunityId}`
    );
    alert(`Recommended talent for opportunity ${opportunityId}`);
  };

  const handleViewDetails = (opportunityId) => {
    console.log(`Viewing details for opportunity ${opportunityId}`);
    alert(`Opening details for opportunity ${opportunityId}`);
  };

  const handleApplyToOpportunity = (opportunityId) => {
    console.log(`Applying to opportunity ${opportunityId}`);
    alert(`Application submitted for opportunity ${opportunityId}`);
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
                      onClick={() => handleRecommendTalent(1, opportunity.id)}
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
    </div>
  );
};

export default MarketLinkagePage;
