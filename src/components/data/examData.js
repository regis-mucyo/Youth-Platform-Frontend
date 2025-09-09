// Central exam data and helpers used by exam components
import { businessCareerPath } from "./businessExam.js";
import { productManagerCareerPath } from "./productManagerExam.js";
import { digitalMarketingCareerPath } from "./digitalMarketingExam.js";

export const uiUxDesignerCareerPath = {
  title: "UI/UX Designer",
  description: "User Interface and User Experience design assessment",
  experienceLevels: ["Beginner", "Intermediate", "Junior", "Senior"],
  technical: {
    title: "Design Principles Assessment",
    duration: 30,
    questions: {
      Beginner: [
        { id: 1, question: "What is 'User Experience'?", options: ["How a product looks", "How a product feels and functions", "How a product is marketed", "How a product is coded"], correctAnswer: 1, type: "multiple-choice", difficulty: "Beginner" },
        { id: 2, question: "Which principle deals with arranging elements?", options: ["Contrast", "Alignment", "Repetition", "Proximity"], correctAnswer: 1, type: "multiple-choice", difficulty: "Beginner" },
      ],
      Intermediate: [
        { id: 1, question: "What is a wireframe?", options: ["A high-fidelity design", "A low-fidelity layout sketch", "A coding framework", "A user testing method"], correctAnswer: 1, type: "multiple-choice", difficulty: "Intermediate" },
      ],
    },
  },
  soft: {
    title: "Soft Skills Assessment",
    duration: 20,
    questions: {
      Beginner: [
        { id: 1, question: "How do you handle design feedback?", options: ["Ignore it", "Defend your design", "Listen and iterate constructively", "Only accept positive feedback"], correctAnswer: 2, type: "multiple-choice", difficulty: "Beginner" },
      ],
      Intermediate: [
        { id: 1, question: "How do you collaborate with developers?", options: ["Hand off designs and leave", "Communicate clearly and work together through implementation", "Expect them to read your mind", "Only talk to project managers"], correctAnswer: 1, type: "multiple-choice", difficulty: "Intermediate" },
      ],
    },
  },
};

export const cybersecuritySpecialistCareerPath = {
  title: "Cybersecurity Specialist",
  description: "Cybersecurity knowledge and threat analysis assessment",
  experienceLevels: ["Beginner", "Intermediate", "Junior", "Senior"],
  technical: {
    title: "Technical Assessment",
    duration: 30,
    questions: {
      Beginner: [
        { id: 1, question: "What is a firewall?", options: ["A physical wall", "A network security system", "A type of virus", "A software bug"], correctAnswer: 1, type: "multiple-choice", difficulty: "Beginner" },
        { id: 2, question: "What is phishing?", options: ["A fishing technique", "An attempt to trick users into revealing sensitive information", "A type of malware", "A network protocol"], correctAnswer: 1, type: "multiple-choice", difficulty: "Beginner" },
      ],
      Intermediate: [
        { id: 1, question: "What is the CIA triad?", options: ["Confidentiality, Integrity, Availability", "Code, Implement, Analyze", "Central, Isolated, Accessible", "Control, Identify, Authenticate"], correctAnswer: 0, type: "multiple-choice", difficulty: "Intermediate" },
      ],
    },
  },
  soft: {
    title: "Soft Skills Assessment",
    duration: 20,
    questions: {
      Beginner: [
        { id: 1, question: "How do you communicate security risks?", options: ["Exaggerate", "Minimize", "Clearly and concisely, tailoring to the audience", "Only to technical people"], correctAnswer: 2, type: "multiple-choice", difficulty: "Beginner" },
      ],
      Intermediate: [
        { id: 1, question: "How do you stay updated on threats?", options: ["Wait for news", "Continuously research and attend trainings", "Only learn new tools", "Rely on colleagues"], correctAnswer: 1, type: "multiple-choice", difficulty: "Intermediate" },
      ],
    },
  },
};

export const devopsEngineerCareerPath = {
  title: "DevOps Engineer",
  description: "DevOps practices, tools, and automation assessment",
  experienceLevels: ["Beginner", "Intermediate", "Junior", "Senior"],
  technical: {
    title: "Technical Assessment",
    duration: 30,
    questions: {
      Beginner: [
        { id: 1, question: "What is Continuous Integration (CI)?", options: ["Manual testing", "Regularly merging code changes into a central repository", "A deployment strategy", "A database design principle"], correctAnswer: 1, type: "multiple-choice", difficulty: "Beginner" },
        { id: 2, question: "Which tool is used for version control?", options: ["Jira", "Git", "Slack", "Jenkins"], correctAnswer: 1, type: "multiple-choice", difficulty: "Beginner" },
      ],
      Intermediate: [
        { id: 1, question: "What is Infrastructure as Code (IaC)?", options: ["Manually configuring servers", "Managing and provisioning infrastructure through code", "A programming language", "A cloud provider"], correctAnswer: 1, type: "multiple-choice", difficulty: "Intermediate" },
      ],
    },
  },
  soft: {
    title: "Soft Skills Assessment",
    duration: 20,
    questions: {
      Beginner: [
        { id: 1, question: "How do you foster collaboration between Dev and Ops?", options: ["Keep them separate", "Encourage shared responsibility and communication", "Blame one another", "Automate everything without human interaction"], correctAnswer: 1, type: "multiple-choice", difficulty: "Beginner" },
      ],
      Intermediate: [
        { id: 1, question: "How do you handle production incidents?", options: ["Panic", "Follow established incident response procedures and communicate effectively", "Blame the last deploy", "Ignore alerts"], correctAnswer: 1, type: "multiple-choice", difficulty: "Intermediate" },
      ],
    },
  },
};

export const careerPaths = {
  "software-developer": {
    title: "Software Developer",
    description: "Full-stack development skills assessment",
    experienceLevels: ["Beginner", "Intermediate", "Junior", "Senior"],
    technical: {
      title: "Technical Assessment",
      duration: 30,
      questions: {
        Beginner: [
          {
            id: 1,
            question: "What does HTML stand for?",
            options: [
              "Hyper Trainer Marking Language",
              "Hyper Text Markup Language",
              "Hyper Text Marketing Language",
              "Hyper Tool Multi Language",
            ],
            correctAnswer: 1,
            type: "multiple-choice",
            difficulty: "Beginner",
          },
          {
            id: 2,
            question: "Which of these is NOT a JavaScript data type?",
            options: ["String", "Boolean", "Float", "Number"],
            correctAnswer: 2,
            type: "multiple-choice",
            difficulty: "Beginner",
          },
          {
            id: 3,
            question: "Which tag is used to include JavaScript in HTML?",
            options: ["<style>", "<script>", "<js>", "<link>"],
            correctAnswer: 1,
            type: "multiple-choice",
            difficulty: "Beginner",
          },
          {
            id: 4,
            question: "Which CSS property changes text color?",
            options: ["font", "text-color", "color", "background"],
            correctAnswer: 2,
            type: "multiple-choice",
            difficulty: "Beginner",
          },
          {
            id: 5,
            question: "Which symbol is used for single-line comments in JavaScript?",
            options: ["//", "<!-- -->", "#", "/* */"],
            correctAnswer: 0,
            type: "multiple-choice",
            difficulty: "Beginner",
          },
        ],
        Intermediate: [
          {
            id: 1,
            question: "Which HTTP method is idempotent?",
            options: ["POST", "PUT", "PATCH", "CONNECT"],
            correctAnswer: 1,
            type: "multiple-choice",
            difficulty: "Intermediate",
          },
          {
            id: 2,
            question: "What is the output type of Array.map()?",
            options: ["Object", "Array", "Number", "String"],
            correctAnswer: 1,
            type: "multiple-choice",
            difficulty: "Intermediate",
          },
          {
            id: 3,
            question: "Which of the following best describes REST?",
            options: [
              "A database",
              "An architectural style for networked applications",
              "A frontend framework",
              "A deployment tool",
            ],
            correctAnswer: 1,
            type: "multiple-choice",
            difficulty: "Intermediate",
          },
          {
            id: 4,
            question: "Which hook is used for side effects in React?",
            options: ["useState", "useEffect", "useMemo", "useCallback"],
            correctAnswer: 1,
            type: "multiple-choice",
            difficulty: "Intermediate",
          },
          {
            id: 5,
            question: "Which SQL statement is used to retrieve data?",
            options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
            correctAnswer: 2,
            type: "multiple-choice",
            difficulty: "Intermediate",
          },
        ],
      },
    },
    soft: {
      title: "Soft Skills Assessment",
      duration: 20,
      questions: {
        Beginner: [
          {
            id: 1,
            question: "How should you handle code reviews?",
            options: [
              "Avoid giving feedback",
              "Provide constructive feedback and be open to receiving it",
              "Only approve if perfect",
              "Reject everything",
            ],
            correctAnswer: 1,
            type: "multiple-choice",
            difficulty: "Beginner",
          },
          {
            id: 2,
            question: "What should you do if you don't understand a task?",
            options: [
              "Start coding and guess",
              "Ask for clarification",
              "Wait for someone to help",
              "Ignore it",
            ],
            correctAnswer: 1,
            type: "multiple-choice",
            difficulty: "Beginner",
          },
          {
            id: 3,
            question: "How do you handle conflicting priorities?",
            options: [
              "Pick the easiest task",
              "Align with stakeholders on priority and deadlines",
              "Work randomly",
              "Ignore conflicts",
            ],
            correctAnswer: 1,
            type: "multiple-choice",
            difficulty: "Beginner",
          },
          {
            id: 4,
            question: "What is a good approach to learning a new tool?",
            options: [
              "Avoid it",
              "Read everything before trying",
              "Start with small projects and iterate",
              "Copy/paste code only",
            ],
            correctAnswer: 2,
            type: "multiple-choice",
            difficulty: "Beginner",
          },
          {
            id: 5,
            question: "What's a professional way to communicate delays?",
            options: [
              "Say nothing",
              "Blame others",
              "Communicate early with reasons and a new timeline",
              "Hide the delay",
            ],
            correctAnswer: 2,
            type: "multiple-choice",
            difficulty: "Beginner",
          },
        ],
        Intermediate: [
          {
            id: 1,
            question: "How do you manage stakeholder expectations?",
            options: [
              "Accept all changes",
              "Establish change control and communicate impacts",
              "Refuse all changes",
              "Ignore requests",
            ],
            correctAnswer: 1,
            type: "multiple-choice",
            difficulty: "Intermediate",
          },
          {
            id: 2,
            question: "What is a good approach to mentoring juniors?",
            options: [
              "Do their work",
              "Provide guidance and encourage independence",
              "Avoid mentoring",
              "Only give tasks",
            ],
            correctAnswer: 1,
            type: "multiple-choice",
            difficulty: "Intermediate",
          },
          {
            id: 3,
            question: "How do you communicate complex ideas to non-technical audiences?",
            options: [
              "Use jargon",
              "Use clear visuals and simple language",
              "Provide raw data",
              "Avoid presenting",
            ],
            correctAnswer: 1,
            type: "multiple-choice",
            difficulty: "Intermediate",
          },
          {
            id: 4,
            question: "How do you handle ambiguous problems?",
            options: [
              "Proceed without clarification",
              "Ask clarifying questions and define success metrics",
              "Pick the easiest assumption",
              "Ignore ambiguity",
            ],
            correctAnswer: 1,
            type: "multiple-choice",
            difficulty: "Intermediate",
          },
          {
            id: 5,
            question: "What's the best way to give feedback?",
            options: [
              "Focus on behavior and outcomes constructively",
              "Criticize personally",
              "Avoid feedback",
              "Only give positive feedback",
            ],
            correctAnswer: 0,
            type: "multiple-choice",
            difficulty: "Intermediate",
          },
        ],
      },
    },
  },
  "data-scientist": {
    title: "Data Scientist",
    description: "Analytics and machine learning assessment",
    experienceLevels: ["Beginner", "Intermediate", "Junior", "Senior"],
    technical: {
      title: "Technical Assessment",
      duration: 30,
      questions: {
        Beginner: [
          {
            id: 1,
            question: "What is overfitting?",
            options: [
              "Model performs well on training but poorly on new data",
              "Model is too simple",
              "Model is too fast",
              "None of the above",
            ],
            correctAnswer: 0,
            type: "multiple-choice",
            difficulty: "Beginner",
          },
          {
            id: 2,
            question: "Which library is commonly used for data manipulation in Python?",
            options: ["Pandas", "Flask", "Requests", "Django"],
            correctAnswer: 0,
            type: "multiple-choice",
            difficulty: "Beginner",
          },
          {
            id: 3,
            question: "Which plot is best to visualize distribution?",
            options: ["Bar chart", "Histogram", "Line chart", "Pie chart"],
            correctAnswer: 1,
            type: "multiple-choice",
            difficulty: "Beginner",
          },
          {
            id: 4,
            question: "What does 'mean' represent?",
            options: ["Average", "Middle value", "Most frequent", "Range"],
            correctAnswer: 0,
            type: "multiple-choice",
            difficulty: "Beginner",
          },
          {
            id: 5,
            question: "Which is a supervised learning task?",
            options: ["Clustering", "Classification", "Dimensionality Reduction", "PCA"],
            correctAnswer: 1,
            type: "multiple-choice",
            difficulty: "Beginner",
          },
        ],
        Intermediate: [
          {
            id: 1,
            question: "Which library is primarily used for data manipulation in Python?",
            options: ["Matplotlib", "Requests", "Pandas", "Flask"],
            correctAnswer: 2,
            type: "multiple-choice",
            difficulty: "Intermediate",
          },
          {
            id: 2,
            question: "What is cross-validation used for?",
            options: [
              "Speed up training",
              "Assess model performance and prevent overfitting",
              "Reduce data size",
              "Tune database connections",
            ],
            correctAnswer: 1,
            type: "multiple-choice",
            difficulty: "Intermediate",
          },
          {
            id: 3,
            question: "Which measure is robust to outliers?",
            options: ["Mean", "Median", "Standard deviation", "Range"],
            correctAnswer: 1,
            type: "multiple-choice",
            difficulty: "Intermediate",
          },
          {
            id: 4,
            question: "What is regularization used for?",
            options: [
              "Increase model variance",
              "Reduce overfitting by penalizing complexity",
              "Improve data cleaning",
              "Speed up inference",
            ],
            correctAnswer: 1,
            type: "multiple-choice",
            difficulty: "Intermediate",
          },
          {
            id: 5,
            question: "Which model is best for nonlinear classification?",
            options: ["Linear Regression", "Random Forest", "K-Means", "PCA"],
            correctAnswer: 1,
            type: "multiple-choice",
            difficulty: "Intermediate",
          },
        ],
      },
    },
    soft: {
      title: "Soft Skills Assessment",
      duration: 20,
      questions: {
        Beginner: [
          {
            id: 1,
            question: "How do you explain complex insights to non-technical stakeholders?",
            options: [
              "Use jargon",
              "Use clear visuals and plain language",
              "Provide raw numbers only",
              "Avoid presenting",
            ],
            correctAnswer: 1,
            type: "multiple-choice",
            difficulty: "Beginner",
          },
          {
            id: 2,
            question: "How do you handle messy data?",
            options: [
              "Ignore missing values",
              "Systematically clean and prepare data",
              "Use raw data as-is",
              "Delete entire dataset",
            ],
            correctAnswer: 1,
            type: "multiple-choice",
            difficulty: "Beginner",
          },
          {
            id: 3,
            question: "How do you present findings?",
            options: [
              "Only technical details",
              "Clear visuals and simple explanations",
              "Raw tables",
              "No context",
            ],
            correctAnswer: 1,
            type: "multiple-choice",
            difficulty: "Beginner",
          },
          {
            id: 4,
            question: "How do you learn new tools?",
            options: [
              "Stick to old tools",
              "Experiment on small projects first",
              "Wait for training",
              "Avoid learning",
            ],
            correctAnswer: 1,
            type: "multiple-choice",
            difficulty: "Beginner",
          },
          {
            id: 5,
            question: "How do you ask for help?",
            options: [
              "Never ask",
              "Ask clearly with context",
              "Wait until last minute",
              "Ask someone else to do it",
            ],
            correctAnswer: 1,
            type: "multiple-choice",
            difficulty: "Beginner",
          },
        ],
        Intermediate: [
          {
            id: 1,
            question: "How do you handle ambiguous business problems?",
            options: [
              "Proceed without clarification",
              "Clarify objectives and define success metrics",
              "Choose easiest interpretation",
              "Ignore ambiguity",
            ],
            correctAnswer: 1,
            type: "multiple-choice",
            difficulty: "Intermediate",
          },
          {
            id: 2,
            question: "How do you communicate results to non-technical stakeholders?",
            options: [
              "Use only technical language",
              "Use insights tied to business goals",
              "Share code only",
              "Avoid presenting",
            ],
            correctAnswer: 1,
            type: "multiple-choice",
            difficulty: "Intermediate",
          },
          {
            id: 3,
            question: "How do you ensure data quality?",
            options: [
              "Assume data is perfect",
              "Implement validation and document sources",
              "Use smallest datasets only",
              "Let others validate",
            ],
            correctAnswer: 1,
            type: "multiple-choice",
            difficulty: "Intermediate",
          },
          {
            id: 4,
            question: "How do you handle stakeholder conflicts?",
            options: [
              "Choose the loudest voice",
              "Facilitate alignment discussions",
              "Implement everything",
              "Ignore conflicts",
            ],
            correctAnswer: 1,
            type: "multiple-choice",
            difficulty: "Intermediate",
          },
          {
            id: 5,
            question: "How do you keep up with trends?",
            options: [
              "Read research and experiment",
              "Wait for training",
              "Use only popular tools",
              "Ignore trends",
            ],
            correctAnswer: 0,
            type: "multiple-choice",
            difficulty: "Intermediate",
          },
        ],
      },
    },
  },
  "business": businessCareerPath,
  "product-manager": productManagerCareerPath,
  "digital-marketer": digitalMarketingCareerPath,
  "ui-ux-designer": uiUxDesignerCareerPath,
  "cybersecurity-specialist": cybersecuritySpecialistCareerPath,
  "devops-engineer": devopsEngineerCareerPath,
};

export const getExamByPath = (careerPath, examType, experienceLevel = "Intermediate") => {
  const career = careerPaths[careerPath];
  if (!career || !career[examType]) return null;

  const exam = career[examType];
  const source = exam && exam.questions ? exam.questions : [];
  const selected = (!Array.isArray(source) && (source[experienceLevel] || source["Intermediate"])) || source;

  return {
    ...exam,
    questions: Array.isArray(selected)
      ? selected
      : Object.values(selected || {}).reduce((acc, arr) => acc.concat(arr), []),
  };
};

export const getCareerPaths = () => {
  return Object.keys(careerPaths).map((key) => ({ id: key, ...careerPaths[key] }));
};

export const getFilteredCareerPaths = (userProfile) => {
  const allPaths = getCareerPaths();
  if (!userProfile || !userProfile.fieldOfWork) return allPaths;

  const fieldMapping = {
    "Software Development": ["software-developer"],
    "Data Science": ["data-scientist"],
    "Product Management": ["product-manager"],
    "Digital Marketing": ["digital-marketer"],
    "UI/UX Design": ["software-developer"], // Map to software-developer for now
    Cybersecurity: ["software-developer"], // Map to software-developer for now
    "Business": ["business"],
    "Business Analysis": ["business"],
    "DevOps Engineering": ["software-developer"], // Map to software-developer for now
  };

  const relevantCareers = fieldMapping[userProfile.fieldOfWork] || [];
  const filtered = relevantCareers.length > 0
    ? allPaths.filter((career) => relevantCareers.includes(career.id))
    : allPaths;

  // If no careers match, show all available careers
  return filtered.length > 0 ? filtered : allPaths;
};
