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
  Copy,
  ChevronDown,
} from "lucide-react";

// Updated mock data with new fields
const mockConnections = {
  mentees: [
    {
      id: 1,
      name: "Tshepo Modise",
      avatar: "TM",
      field: "Software Development",
      company: "Innovate Solutions",
      level: "Intermediate",
      totalSessions: 12,
      bio: "Tshepo is a passionate and detail-oriented full-stack developer with a strong foundation in modern web technologies. He has a proven track record of building responsive and scalable applications.",
      skills: ["React", "Node.js", "Express", "MongoDB", "JavaScript"],
      experience: [
        {
          title: "Junior Software Engineer",
          company: "Innovate Solutions",
          years: "2023 - Present",
        },
      ],
      education: [
        {
          degree: "BSc Computer Science",
          university: "University of Cape Town",
          graduationYear: "2022",
        },
      ],
      portfolioLink: "https://github.com/tshepodev",
      linkedinLink: "https://linkedin.com/in/tshepo-modise",
      location: "Cape Town, South Africa",
      availability: "Immediately",
      preferredRole: "Full-Stack Developer",
      languages: ["English", "Zulu"],
    },
    {
      id: 2,
      name: "Ayisha Suleiman",
      avatar: "AS",
      field: "UX/UI Design",
      company: "Creative Hub",
      level: "Entry-level",
      totalSessions: 8,
      bio: "Ayisha is a creative UX/UI designer with a keen eye for user-centric design and a passion for crafting intuitive and beautiful digital experiences.",
      skills: ["Figma", "Sketch", "Adobe XD", "User Research", "Wireframing"],
      experience: [
        {
          title: "Product Design Intern",
          company: "Creative Hub",
          years: "2024 - Present",
        },
      ],
      education: [
        {
          degree: "Diploma in Graphic Design",
          university: "Lagos School of Arts",
          graduationYear: "2024",
        },
      ],
      portfolioLink: "https://behance.net/ayishasuleiman",
      linkedinLink: "https://linkedin.com/in/ayisha-suleiman",
      location: "Lagos, Nigeria",
      availability: "Two weeks' notice",
      preferredRole: "Junior UX/UI Designer",
      languages: ["English", "Yoruba"],
    },
    {
      id: 3,
      name: "Kwame Osei",
      avatar: "KO",
      field: "Data Science",
      company: "DataMinds Inc.",
      level: "Advanced",
      totalSessions: 20,
      bio: "Kwame is an experienced data scientist with expertise in machine learning and data visualization. He enjoys turning complex data into actionable insights.",
      skills: ["Python", "SQL", "Machine Learning", "Tableau", "R"],
      experience: [
        {
          title: "Data Scientist",
          company: "DataMinds Inc.",
          years: "2021 - Present",
        },
        {
          title: "Data Analyst",
          company: "Global Metrics",
          years: "2019 - 2021",
        },
      ],
      education: [
        {
          degree: "MSc Data Science",
          university: "Accra Tech University",
          graduationYear: "2019",
        },
      ],
      portfolioLink: "https://github.com/kwame-data",
      linkedinLink: "https://linkedin.com/in/kwame-osei",
      location: "Accra, Ghana",
      availability: "Open to new roles",
      preferredRole: "Senior Data Scientist",
      languages: ["English", "Akan"],
    },
  ],
};

const mockOpportunities = [
  {
    id: 1,
    title: "Full-Stack Developer",
    company: "Tech Solutions Inc.",
    type: "Job",
    location: "Remote",
    level: "Intermediate",
    description:
      "Join our dynamic team to build and maintain web applications. We're looking for someone with strong skills in React and Node.js.",
    skills: ["React", "Node.js", "MongoDB", "Express"],
    salary: "$60,000 - $80,000",
    duration: "Full-time",
    applicants: 15,
    deadline: "2025-10-30",
    postedDate: "2025-09-01",
  },
  {
    id: 2,
    title: "UX/UI Design Intern",
    company: "Design Studio",
    type: "Internship",
    location: "Nairobi, Kenya",
    level: "Entry-level",
    description:
      "A hands-on internship for aspiring designers. You will work on real projects, creating user flows, wireframes, and prototypes.",
    skills: ["Figma", "Adobe XD", "User Research", "Prototyping"],
    salary: "Stipend",
    duration: "3 months",
    applicants: 25,
    deadline: "2025-10-15",
    postedDate: "2025-09-05",
  },
  {
    id: 3,
    title: "Data Science Bootcamp",
    company: "Future Coders Academy",
    type: "Bootcamp",
    location: "Online",
    level: "All Levels",
    description:
      "A comprehensive 6-month program covering Python, data analysis, machine learning, and more. No prior experience needed.",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    salary: "N/A",
    duration: "6 months",
    applicants: 40,
    deadline: "2025-09-20",
    postedDate: "2025-08-28",
  },
  {
    id: 4,
    title: "Software Developer",
    company: "FinTech Solutions",
    type: "Job",
    location: "Remote",
    level: "Mid-level",
    description:
      "Looking for an experienced software developer to join our team, focusing on backend systems and API development.",
    skills: ["Python", "Django", "SQL", "AWS"],
    salary: "$75,000 - $95,000",
    duration: "Full-time",
    applicants: 10,
    deadline: "2025-11-01",
    postedDate: "2025-09-08",
  },
];

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
    }, 3000);
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

const ShareOpportunityModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    type: "Job",
    location: "",
    level: "",
    description: "",
    skills: "",
    salary: "",
    duration: "",
    applicants: 0,
    deadline: "",
    postedDate: new Date().toLocaleDateString(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillsChange = (e) => {
    const value = e.target.value;
    const skillsArray = value
      .split(",")
      .map((skill) => skill.trim())
      .filter((skill) => skill !== "");
    setFormData((prev) => ({ ...prev, skills: skillsArray.join(", ") }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Share a New Opportunity</h3>
          <button onClick={onClose}>
            <X className="w-5 h-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title*
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company*
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Type*
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option>Job</option>
                <option>Internship</option>
                <option>Bootcamp</option>
                <option>Webinar</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Location*
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Level
              </label>
              <input
                type="text"
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Salary
              </label>
              <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="e.g., $50,000 - $70,000"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Duration
              </label>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="e.g., Full-time, 6 months"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Application Deadline
              </label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Required Skills (comma-separated)*
            </label>
            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleSkillsChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description*
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg resize-none"
            />
          </div>
          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Share Opportunity
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// New Edit Profile Modal Component with improved layout and new fields
const EditProfileModal = ({ mentee, onClose, onShare }) => {
  const [editedMentee, setEditedMentee] = useState(mentee);
  const [isSectionOpen, setIsSectionOpen] = useState({
    bio: true,
    skills: false,
    experience: true,
    education: true,
    links: true,
    jobDetails: true,
  });

  const toggleSection = (section) => {
    setIsSectionOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedMentee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSkillsChange = (e) => {
    const value = e.target.value;
    const skillsArray = value
      .split(",")
      .map((skill) => skill.trim())
      .filter((skill) => skill !== "");
    setEditedMentee((prev) => ({ ...prev, skills: skillsArray }));
  };

  const handleLanguagesChange = (e) => {
    const value = e.target.value;
    const languagesArray = value
      .split(",")
      .map((language) => language.trim())
      .filter((language) => language !== "");
    setEditedMentee((prev) => ({ ...prev, languages: languagesArray }));
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const newExperience = [...editedMentee.experience];
    newExperience[index][name] = value;
    setEditedMentee((prev) => ({ ...prev, experience: newExperience }));
  };

  const handleAddExperience = () => {
    setEditedMentee((prev) => ({
      ...prev,
      experience: [...prev.experience, { company: "", title: "", years: "" }],
    }));
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const newEducation = [...editedMentee.education];
    newEducation[index][name] = value;
    setEditedMentee((prev) => ({ ...prev, education: newEducation }));
  };

  const handleAddEducation = () => {
    setEditedMentee((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        { university: "", degree: "", graduationYear: "" },
      ],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onShare(editedMentee);
  };

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Edit & Share Profile</h3>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <div className="border-b border-gray-200 pb-4 mb-4">
          <h4 className="text-lg font-semibold">{mentee.name}</h4>
          <p className="text-sm text-gray-500">{mentee.field}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Bio Section */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("bio")}
            >
              <h4 className="font-semibold text-gray-800">Bio & Summary</h4>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  isSectionOpen.bio ? "rotate-180" : ""
                }`}
              />
            </div>
            {isSectionOpen.bio && (
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Write a brief summary to highlight their strengths
                </label>
                <textarea
                  name="bio"
                  value={editedMentee.bio || ""}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg resize-none"
                />
              </div>
            )}
          </div>

          {/* Skills & Languages Section */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("skills")}
            >
              <h4 className="font-semibold text-gray-800">
                Skills & Languages
              </h4>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  isSectionOpen.skills ? "rotate-180" : ""
                }`}
              />
            </div>
            {isSectionOpen.skills && (
              <div className="mt-4 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Technical Skills (comma-separated)
                  </label>
                  <input
                    type="text"
                    name="skills"
                    value={editedMentee.skills?.join(", ") || ""}
                    onChange={handleSkillsChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="e.g., React, Python, Figma"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Languages (comma-separated)
                  </label>
                  <input
                    type="text"
                    name="languages"
                    value={editedMentee.languages?.join(", ") || ""}
                    onChange={handleLanguagesChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="e.g., English, French, Swahili"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Job & Availability Details Section */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("jobDetails")}
            >
              <h4 className="font-semibold text-gray-800">Job Preferences</h4>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  isSectionOpen.jobDetails ? "rotate-180" : ""
                }`}
              />
            </div>
            {isSectionOpen.jobDetails && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Preferred Role
                  </label>
                  <input
                    type="text"
                    name="preferredRole"
                    value={editedMentee.preferredRole || ""}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="e.g., Senior Data Scientist"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Location Preference
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={editedMentee.location || ""}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="e.g., Remote, On-site, Hybrid"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Availability
                  </label>
                  <input
                    type="text"
                    name="availability"
                    value={editedMentee.availability || ""}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
                    placeholder="e.g., Immediately, 2 weeks' notice"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Work Experience Section */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("experience")}
            >
              <h4 className="font-semibold text-gray-800">Work Experience</h4>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  isSectionOpen.experience ? "rotate-180" : ""
                }`}
              />
            </div>
            {isSectionOpen.experience && (
              <div className="mt-4 space-y-2">
                {editedMentee.experience.map((exp, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2"
                  >
                    <input
                      type="text"
                      name="title"
                      value={exp.title}
                      onChange={(e) => handleExperienceChange(index, e)}
                      placeholder="Job Title"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                    />
                    <input
                      type="text"
                      name="company"
                      value={exp.company}
                      onChange={(e) => handleExperienceChange(index, e)}
                      placeholder="Company"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                    />
                    <input
                      type="text"
                      name="years"
                      value={exp.years}
                      onChange={(e) => handleExperienceChange(index, e)}
                      placeholder="Years"
                      className="w-full md:w-24 px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddExperience}
                  className="mt-2 text-sm text-blue-500 hover:text-blue-600 font-medium"
                >
                  + Add Experience
                </button>
              </div>
            )}
          </div>

          {/* Education Section */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("education")}
            >
              <h4 className="font-semibold text-gray-800">Education</h4>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  isSectionOpen.education ? "rotate-180" : ""
                }`}
              />
            </div>
            {isSectionOpen.education && (
              <div className="mt-4 space-y-2">
                {editedMentee.education.map((edu, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2"
                  >
                    <input
                      type="text"
                      name="degree"
                      value={edu.degree}
                      onChange={(e) => handleEducationChange(index, e)}
                      placeholder="Degree"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                    />
                    <input
                      type="text"
                      name="university"
                      value={edu.university}
                      onChange={(e) => handleEducationChange(index, e)}
                      placeholder="University"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                    />
                    <input
                      type="text"
                      name="graduationYear"
                      value={edu.graduationYear}
                      onChange={(e) => handleEducationChange(index, e)}
                      placeholder="Year"
                      className="w-full md:w-24 px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddEducation}
                  className="mt-2 text-sm text-blue-500 hover:text-blue-600 font-medium"
                >
                  + Add Education
                </button>
              </div>
            )}
          </div>

          {/* Links Section */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("links")}
            >
              <h4 className="font-semibold text-gray-800">Links</h4>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  isSectionOpen.links ? "rotate-180" : ""
                }`}
              />
            </div>
            {isSectionOpen.links && (
              <div className="mt-4 space-y-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Portfolio / GitHub Link
                  </label>
                  <input
                    type="text"
                    name="portfolioLink"
                    value={editedMentee.portfolioLink || ""}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    LinkedIn Profile Link
                  </label>
                  <input
                    type="text"
                    name="linkedinLink"
                    value={editedMentee.linkedinLink || ""}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors flex items-center"
            >
              <Copy size={16} className="mr-2" />
              Create Shareable Link
            </button>
          </div>
        </form>
      </div>
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
  const [showNewShareModal, setShowNewShareModal] = useState(false);
  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const [selectedMentee, setSelectedMentee] = useState(null);

  useEffect(() => {
    setOpportunities(mockOpportunities);
    setFilteredOpportunities(mockOpportunities);
  }, []);

  useEffect(() => {
    let filtered = opportunities.filter(
      (opp) =>
        opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        opp.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (opp.skills &&
          opp.skills.some((skill) =>
            skill.toLowerCase().includes(searchTerm.toLowerCase())
          ))
    );

    if (activeFilter !== "All") {
      filtered = filtered.filter((opp) => opp.type === activeFilter);
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

  const handleShareOpportunityClick = () => {
    setShowNewShareModal(true);
  };

  const handleShareOpportunitySubmit = (newOpportunity) => {
    const skillsArray = newOpportunity.skills
      .split(",")
      .map((skill) => skill.trim());

    const newOpp = {
      ...newOpportunity,
      id: opportunities.length + 1,
      skills: skillsArray,
      applicants: 0,
      postedDate: new Date().toLocaleDateString(),
    };

    setOpportunities((prevOpportunities) => [newOpp, ...prevOpportunities]);
    showToast("Opportunity shared successfully!", "success");
    setShowNewShareModal(false);
  };

  const handleCreateShareableProfile = (menteeId) => {
    const mentee = mockConnections.mentees.find((m) => m.id === menteeId);
    if (mentee) {
      setSelectedMentee(mentee);
      setShowEditProfileModal(true);
    }
  };

  const handleFinalShareProfile = (editedMentee) => {
    console.log("Saving changes and generating link for:", editedMentee);
    const generatedLink = `https://your-app.com/talent-profile/${editedMentee.id}/shareable`;
    navigator.clipboard.writeText(generatedLink);
    showToast("Shareable profile link copied to clipboard!", "success");
    setShowEditProfileModal(false);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Market Linkage
        </h1>
        <p className="text-gray-600">
          Discover and share opportunities for your mentees
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">My Top Talent</h2>
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {mentee.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={() => handleCreateShareableProfile(mentee.id)}
                    className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-sm font-medium transition-colors flex items-center"
                  >
                    <Copy size={16} className="mr-2" />
                    Create Shareable Profile
                  </button>
                </div>
              </div>
            ))}
        </div>

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
          <button
            onClick={handleShareOpportunityClick}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center"
          >
            <Briefcase size={16} className="mr-2" />
            Share Opportunity
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Available Opportunities
        </h2>

        <div className="flex space-x-6 mb-6 border-b border-gray-200">
          {["All", "Job", "Internship", "Bootcamp", "Webinar"].map((filter) => (
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
          ))}
        </div>

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
                      {opportunity.skills?.map((skill) => (
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

      {showNewShareModal && (
        <ShareOpportunityModal
          onClose={() => setShowNewShareModal(false)}
          onSubmit={handleShareOpportunitySubmit}
        />
      )}

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

      {showEditProfileModal && selectedMentee && (
        <EditProfileModal
          mentee={selectedMentee}
          onClose={() => setShowEditProfileModal(false)}
          onShare={handleFinalShareProfile}
        />
      )}

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
                      className="flex items-center space-x-2 p-1 rounded-md bg-green-100"
                    >
                      <User className="w-6 h-6 text-gray-500 bg-gray-200 rounded-full p-0.5" />
                      <div className="flex-1">
                        <h4 className="font-medium text-sm text-gray-900">
                          {mentee.name}
                        </h4>
                        <p className="text-xs text-gray-500">{mentee.field}</p>
                      </div>
                      <CheckCircle className="text-green-500 w-4 h-4" />
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
