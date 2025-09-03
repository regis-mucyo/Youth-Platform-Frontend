// Central exam data and helpers used by exam components

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
        ],
        Intermediate: [
          {
            id: 1,
            question: "How do you manage conflicting priorities?",
            options: [
              "Work on whatever is easiest",
              "Align with stakeholders on priorities and impact",
              "Ignore conflicts",
              "Pick randomly",
            ],
            correctAnswer: 1,
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
        ],
      },
    },
  },
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
    "UI/UX Design": ["ui-ux-designer"],
    Cybersecurity: ["cybersecurity-analyst"],
    "Business Analysis": ["business-analyst"],
    "DevOps Engineering": ["software-developer"],
  };

  const relevantCareers = fieldMapping[userProfile.fieldOfWork] || [];
  return relevantCareers.length > 0
    ? allPaths.filter((career) => relevantCareers.includes(career.id))
    : allPaths;
};
