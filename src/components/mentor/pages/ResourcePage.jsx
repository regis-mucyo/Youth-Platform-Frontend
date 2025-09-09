import React, { useState, useEffect } from "react";
import { Search, FileText, Download, Star, Eye, Plus } from "lucide-react";
import { mockResources } from "../data/mockData";

const ResourcePage = () => {
  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All Types");
  const [showUploadForm, setShowUploadForm] = useState(false);
  const [newResource, setNewResource] = useState({
    title: "",
    type: "",
    topic: "",
    level: "",
    description: "",
    url: "",
  });

  useEffect(() => {
    setResources(mockResources);
    setFilteredResources(mockResources);
  }, []);

  useEffect(() => {
    let filtered = resources.filter(
      (resource) =>
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.topic.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedType !== "All Types") {
      filtered = filtered.filter((resource) => resource.type === selectedType);
    }

    setFilteredResources(filtered);
  }, [resources, searchTerm, selectedType]);

  const handleUploadResource = () => {
    if (newResource.title && newResource.type) {
      const resource = {
        id: resources.length + 1,
        ...newResource,
        uploadDate: new Date().toISOString().split("T")[0],
        downloads: 0,
        rating: 0,
        url: newResource.url || "#",
      };

      setResources((prev) => [resource, ...prev]);
      setNewResource({
        title: "",
        type: "",
        topic: "",
        level: "",
        description: "",
        url: "",
      });
      setShowUploadForm(false);
    }
  };

  const handleDownload = (resourceId) => {
    setResources((prev) =>
      prev.map((resource) =>
        resource.id === resourceId
          ? { ...resource, downloads: resource.downloads + 1 }
          : resource
      )
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">My Resource</h1>
        <p className="text-gray-600">
          Share knowledge and resources with your mentees
        </p>
      </div>

      {/* Upload New Resource Section */}
      <div
        className={`bg-white rounded-lg border border-gray-200 transition-all duration-300 ${
          showUploadForm ? "p-6" : "p-4"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Upload New Resource
          </h2>
          <button
            onClick={() => setShowUploadForm(!showUploadForm)}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Plus className="w-4 h-4 mr-2" />
            {showUploadForm ? "Cancel" : "Add Resource"}
          </button>
        </div>

        {showUploadForm && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Resource Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Resource Type
                </label>
                <select
                  value={newResource.type}
                  onChange={(e) =>
                    setNewResource((prev) => ({
                      ...prev,
                      type: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>Select type</option>
                  <option>Document</option>
                  <option>Video</option>
                  <option>Link</option>
                  <option>Tool</option>
                  <option>Template</option>
                </select>
              </div>

              {/* Topic */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Topic
                </label>
                <input
                  type="text"
                  placeholder="e.g. React Hooks"
                  value={newResource.topic}
                  onChange={(e) =>
                    setNewResource((prev) => ({
                      ...prev,
                      topic: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Resource title"
                  value={newResource.title}
                  onChange={(e) =>
                    setNewResource((prev) => ({
                      ...prev,
                      title: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Audience Level */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Audience Level
                </label>
                <select
                  value={newResource.level}
                  onChange={(e) =>
                    setNewResource((prev) => ({
                      ...prev,
                      level: e.target.value,
                    }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option>Select level</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                  <option>Expert</option>
                </select>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                placeholder="Brief description of the resource"
                rows={4}
                value={newResource.description}
                onChange={(e) =>
                  setNewResource((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Upload or Link Section */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-4">
                Upload or Link
              </label>

              {/* File Drop Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors">
                <div className="flex flex-col items-center">
                  <svg
                    className="w-12 h-12 text-gray-400 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    />
                  </svg>
                  <p className="text-gray-500 mb-2">
                    Drag and drop files here or click to browse
                  </p>
                  <p className="text-sm text-gray-400">Or paste a URL here</p>
                </div>
                <input type="file" className="hidden" />
              </div>

              {/* URL Input */}
              <div className="mt-4">
                <input
                  type="url"
                  placeholder="Or paste a URL here"
                  value={newResource.url}
                  onChange={(e) =>
                    setNewResource((prev) => ({ ...prev, url: e.target.value }))
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-500"
                />
              </div>
            </div>

            {/* Upload Button */}
            <div className="mt-6">
              <button
                onClick={handleUploadResource}
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                Upload Resource
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Resource Library Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Resource Library
          </h2>

          {/* Search and Filter */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option>All Types</option>
              <option>Documents</option>
              <option>Videos</option>
              <option>Links</option>
              <option>Tools</option>
            </select>
          </div>
        </div>

        {/* Resources Grid */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-blue-500" />
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                      {resource.type}
                    </span>
                  </div>
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    {resource.level}
                  </span>
                </div>

                <h3 className="font-medium text-gray-900 mb-2">
                  {resource.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                  <span>{resource.topic}</span>
                  <span>{resource.uploadDate}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-xs text-gray-500">
                    <span className="flex items-center">
                      <Download className="w-3 h-3 mr-1" />
                      {resource.downloads}
                    </span>
                    {resource.rating > 0 && (
                      <span className="flex items-center">
                        <Star className="w-3 h-3 mr-1 text-yellow-500" />
                        {resource.rating}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleDownload(resource.id)}
                      className="px-2 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 transition-colors"
                    >
                      <Download className="w-3 h-3" />
                    </button>
                    <button className="px-2 py-1 border border-gray-300 text-gray-700 text-xs rounded hover:bg-gray-50 transition-colors">
                      <Eye className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-500 text-lg mb-2">
              {searchTerm || selectedType !== "All Types"
                ? "No resources found matching your criteria"
                : "No resources uploaded yet"}
            </p>
            <p className="text-gray-400 text-sm">
              {searchTerm || selectedType !== "All Types"
                ? "Try adjusting your search or filter"
                : "Upload your first resource to get started sharing knowledge"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcePage;
