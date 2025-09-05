// Re-export exam components for simplified imports
export { default as ExamSelection } from "./ExamSelection.jsx";
export { default as ExamInterface } from "./ExamInterface.jsx";
export { default as ExamResults } from "./ExamResults.jsx";
export { default as ExamTimer } from "./ExamTimer.jsx";
export { default as ProgressBar } from "./ProgressBar.jsx";
export { default as QuestionCard } from "./QuestionCard.jsx";
export { default as SectionComplete } from "./SectionComplete.jsx";

// Re-export helpers
export { getExamByPath, getCareerPaths, getFilteredCareerPaths, careerPaths } from "../../data/examData.js";
