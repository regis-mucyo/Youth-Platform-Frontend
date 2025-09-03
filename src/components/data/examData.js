export const careerPaths = {
    "software-developer": {
        title: "Software Developer",
        description: "Full-stack development skills assessment",
        experienceLevels: ["Beginner", "Intermediate", "Junior", "Senior"],
        technical: {
            title: "Technical Assessment",
            duration: 45, // minutes
            questions: {
                Beginner: [
                    {
                        id: 1,
                        question: "What is HTML used for?",
                        options: [
                            "Styling web pages",
                            "Creating the structure of web pages",
                            "Adding interactivity to web pages",
                            "Managing databases",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Beginner",
                    },
                    {
                        id: 2,
                        question: "Which of the following is a programming language?",
                        options: ["HTML", "CSS", "JavaScript", "All of the above"],
                        correctAnswer: 2,
                        type: "multiple-choice",
                        difficulty: "Beginner",
                    },
                    {
                        id: 3,
                        question: "What does CSS stand for?",
                        options: [
                            "Computer Style Sheets",
                            "Cascading Style Sheets",
                            "Creative Style Sheets",
                            "Colorful Style Sheets",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Beginner",
                    },
                    {
                        id: 4,
                        question: "What is a variable in programming?",
                        options: [
                            "A fixed value that never changes",
                            "A container for storing data values",
                            "A type of loop",
                            "A function parameter",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Beginner",
                    },
                    {
                        id: 5,
                        question: "Which symbol is used to end a statement in JavaScript?",
                        options: [".", ":", ";", ","],
                        correctAnswer: 2,
                        type: "multiple-choice",
                        difficulty: "Beginner",
                    },
                ],
                Intermediate: [
                    {
                        id: 1,
                        question: "What is the primary purpose of version control systems like Git?",
                        options: [
                            "To compile code faster",
                            "To track changes and collaborate on code",
                            "To debug applications",
                            "To deploy applications to production",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Intermediate",
                    },
                    {
                        id: 2,
                        question: "Which of the following is NOT a JavaScript primitive data type?",
                        options: ["string", "boolean", "array", "number"],
                        correctAnswer: 2,
                        type: "multiple-choice",
                        difficulty: "Intermediate",
                    },
                    {
                        id: 3,
                        question: "What does REST stand for in web development?",
                        options: [
                            "Representational State Transfer",
                            "Remote Execution State Transfer",
                            "Relational State Transfer",
                            "Responsive State Transfer",
                        ],
                        correctAnswer: 0,
                        type: "multiple-choice",
                        difficulty: "Intermediate",
                    },
                    {
                        id: 4,
                        question: "In React, what is the purpose of the useEffect hook?",
                        options: [
                            "To manage component state",
                            "To handle side effects in functional components",
                            "To create custom components",
                            "To optimize component rendering",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Intermediate",
                    },
                    {
                        id: 5,
                        question: "Which SQL command is used to retrieve data from a database?",
                        options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
                        correctAnswer: 2,
                        type: "multiple-choice",
                        difficulty: "Intermediate",
                    },
                ],
                Junior: [
                    {
                        id: 1,
                        question: "What is the difference between '==' and '===' in JavaScript?",
                        options: [
                            "No difference",
                            "'==' checks type and value, '===' checks only value",
                            "'===' checks type and value, '==' checks only value",
                            "'===' is faster than '=='",
                        ],
                        correctAnswer: 2,
                        type: "multiple-choice",
                        difficulty: "Junior",
                    },
                    {
                        id: 2,
                        question: "What is a closure in JavaScript?",
                        options: [
                            "A way to close browser windows",
                            "A function that has access to variables in its outer scope",
                            "A method to end loops",
                            "A type of error handling",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Junior",
                    },
                    {
                        id: 3,
                        question: "Which design pattern is commonly used in React for state management?",
                        options: ["Singleton", "Observer", "Redux/Flux", "Factory"],
                        correctAnswer: 2,
                        type: "multiple-choice",
                        difficulty: "Junior",
                    },
                    {
                        id: 4,
                        question: "What is the purpose of database indexing?",
                        options: ["To backup data", "To improve query performance", "To encrypt data", "To compress data"],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Junior",
                    },
                    {
                        id: 5,
                        question: "What is the difference between PUT and PATCH HTTP methods?",
                        options: [
                            "No difference",
                            "PUT updates entire resource, PATCH updates partial resource",
                            "PATCH is faster than PUT",
                            "PUT is for creating, PATCH is for updating",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Junior",
                    },
                ],
                Senior: [
                    {
                        id: 1,
                        question: "What is the CAP theorem in distributed systems?",
                        options: [
                            "Consistency, Availability, Partition tolerance - you can only guarantee two",
                            "Create, Access, Process - the three phases of data handling",
                            "Cache, API, Performance - the three pillars of optimization",
                            "Code, Architecture, Performance - the three aspects of software quality",
                        ],
                        correctAnswer: 0,
                        type: "multiple-choice",
                        difficulty: "Senior",
                    },
                    {
                        id: 2,
                        question: "Which architectural pattern is best for handling high-traffic microservices?",
                        options: [
                            "Monolithic architecture",
                            "Event-driven architecture with message queues",
                            "Client-server architecture",
                            "Layered architecture",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Senior",
                    },
                    {
                        id: 3,
                        question: "What is the primary benefit of implementing CQRS (Command Query Responsibility Segregation)?",
                        options: [
                            "Faster development time",
                            "Separate read and write operations for better scalability",
                            "Reduced code complexity",
                            "Better user interface design",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Senior",
                    },
                    {
                        id: 4,
                        question: "In a high-availability system, what is the purpose of circuit breakers?",
                        options: [
                            "To prevent electrical overload",
                            "To prevent cascading failures by stopping calls to failing services",
                            "To improve database performance",
                            "To manage user authentication",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Senior",
                    },
                    {
                        id: 5,
                        question: "What is the difference between horizontal and vertical scaling?",
                        options: [
                            "Horizontal adds more servers, vertical adds more power to existing servers",
                            "Vertical adds more servers, horizontal adds more power to existing servers",
                            "No difference, both terms mean the same thing",
                            "Horizontal is for databases, vertical is for applications",
                        ],
                        correctAnswer: 0,
                        type: "multiple-choice",
                        difficulty: "Senior",
                    },
                ],
            },
        },
        soft: {
            title: "Soft Skills Assessment",
            duration: 30,
            questions: {
                Beginner: [
                    {
                        id: 1,
                        question: "What should you do when you don't understand a task assigned to you?",
                        options: [
                            "Start working and figure it out as you go",
                            "Ask for clarification and examples",
                            "Wait for someone to notice you're stuck",
                            "Guess what needs to be done",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Beginner",
                    },
                    {
                        id: 2,
                        question: "How do you handle making a mistake in your code?",
                        options: [
                            "Hide it and hope no one notices",
                            "Acknowledge it, fix it, and learn from it",
                            "Blame it on the tools or environment",
                            "Ask someone else to fix it",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Beginner",
                    },
                    {
                        id: 3,
                        question: "What's the best way to learn a new programming concept?",
                        options: [
                            "Read about it once and move on",
                            "Practice with small examples and gradually increase complexity",
                            "Jump into complex projects immediately",
                            "Only learn when absolutely necessary",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Beginner",
                    },
                    {
                        id: 4,
                        question: "How should you communicate with team members when you're new?",
                        options: [
                            "Only speak when spoken to",
                            "Ask questions and actively participate in discussions",
                            "Pretend to understand everything",
                            "Avoid team meetings",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Beginner",
                    },
                    {
                        id: 5,
                        question: "What should you do when you complete a task early?",
                        options: [
                            "Take a break and wait for the next assignment",
                            "Ask for additional tasks or help teammates",
                            "Pretend to still be working on it",
                            "Start working on unrelated projects",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Beginner",
                    },
                ],
                Intermediate: [
                    {
                        id: 1,
                        question: "How do you handle conflicting priorities when working on multiple projects?",
                        options: [
                            "Work on the most interesting project first",
                            "Communicate with stakeholders to understand priorities and deadlines",
                            "Complete tasks in the order they were assigned",
                            "Focus only on the project with the closest deadline",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Intermediate",
                    },
                    {
                        id: 2,
                        question: "When you encounter a bug you cannot solve, what is your first step?",
                        options: [
                            "Ask a colleague for help immediately",
                            "Research the problem and try different approaches",
                            "Report it as unfixable",
                            "Work on something else and hope it resolves itself",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Intermediate",
                    },
                    {
                        id: 3,
                        question: "How do you stay updated with new technologies and programming trends?",
                        options: [
                            "Only learn what is required for current projects",
                            "Regularly read tech blogs, attend conferences, and experiment with new tools",
                            "Wait for company training programs",
                            "Learn only when switching jobs",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Intermediate",
                    },
                    {
                        id: 4,
                        question: "When working in a team, how do you handle code reviews?",
                        options: [
                            "Avoid giving feedback to maintain relationships",
                            "Provide constructive feedback and be open to receiving it",
                            "Only focus on syntax errors",
                            "Approve all reviews quickly to avoid delays",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Intermediate",
                    },
                    {
                        id: 5,
                        question: "How do you approach learning a new programming language or framework?",
                        options: [
                            "Read the entire documentation before starting",
                            "Start with small projects and gradually increase complexity",
                            "Copy code from tutorials without understanding",
                            "Wait for formal training",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Intermediate",
                    },
                ],
                Junior: [
                    {
                        id: 1,
                        question: "How do you handle disagreements about technical approaches with senior developers?",
                        options: [
                            "Always defer to their experience",
                            "Present your reasoning respectfully and be open to learning",
                            "Argue until you win",
                            "Implement your approach without discussion",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Junior",
                    },
                    {
                        id: 2,
                        question: "How do you approach mentoring newer team members?",
                        options: [
                            "Do their work for them to save time",
                            "Guide them through problems and encourage independent thinking",
                            "Only help when directly asked",
                            "Refer them to documentation only",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Junior",
                    },
                    {
                        id: 3,
                        question: "How do you handle technical debt in your projects?",
                        options: [
                            "Ignore it and focus on new features",
                            "Document it and advocate for dedicated time to address it",
                            "Fix it secretly without telling anyone",
                            "Wait for it to become a critical issue",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Junior",
                    },
                    {
                        id: 4,
                        question: "How do you contribute to technical discussions and decision-making?",
                        options: [
                            "Stay quiet and let seniors decide",
                            "Research topics thoroughly and contribute informed opinions",
                            "Always advocate for the latest technologies",
                            "Make decisions based on personal preferences",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Junior",
                    },
                    {
                        id: 5,
                        question: "How do you handle project deadlines that seem unrealistic?",
                        options: [
                            "Work overtime without communicating concerns",
                            "Discuss concerns with stakeholders and propose realistic alternatives",
                            "Deliver incomplete work to meet the deadline",
                            "Ignore the deadline and work at your own pace",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Junior",
                    },
                ],
                Senior: [
                    {
                        id: 1,
                        question: "What is the CAP theorem in distributed systems?",
                        options: [
                            "Consistency, Availability, Partition tolerance - you can only guarantee two",
                            "Create, Access, Process - the three phases of data handling",
                            "Cache, API, Performance - the three pillars of optimization",
                            "Code, Architecture, Performance - the three aspects of software quality",
                        ],
                        correctAnswer: 0,
                        type: "multiple-choice",
                        difficulty: "Senior",
                    },
                    {
                        id: 2,
                        question: "Which architectural pattern is best for handling high-traffic microservices?",
                        options: [
                            "Monolithic architecture",
                            "Event-driven architecture with message queues",
                            "Client-server architecture",
                            "Layered architecture",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Senior",
                    },
                    {
                        id: 3,
                        question: "What is the primary benefit of implementing CQRS (Command Query Responsibility Segregation)?",
                        options: [
                            "Faster development time",
                            "Separate read and write operations for better scalability",
                            "Reduced code complexity",
                            "Better user interface design",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Senior",
                    },
                    {
                        id: 4,
                        question: "In a high-availability system, what is the purpose of circuit breakers?",
                        options: [
                            "To prevent electrical overload",
                            "To prevent cascading failures by stopping calls to failing services",
                            "To improve database performance",
                            "To manage user authentication",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Senior",
                    },
                    {
                        id: 5,
                        question: "What is the difference between horizontal and vertical scaling?",
                        options: [
                            "Horizontal adds more servers, vertical adds more power to existing servers",
                            "Vertical adds more servers, horizontal adds more power to existing servers",
                            "No difference, both terms mean the same thing",
                            "Horizontal is for databases, vertical is for applications",
                        ],
                        correctAnswer: 0,
                        type: "multiple-choice",
                        difficulty: "Senior",
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
            duration: 50,
            questions: {
                Beginner: [
                    {
                        id: 1,
                        question: "What is data science?",
                        options: [
                            "Only about creating charts and graphs",
                            "The process of extracting insights from data using various techniques",
                            "Just programming in Python",
                            "Only about machine learning",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Beginner",
                    },
                    {
                        id: 2,
                        question: "Which of the following is a common data format?",
                        options: ["CSV", "JSON", "XML", "All of the above"],
                        correctAnswer: 3,
                        type: "multiple-choice",
                        difficulty: "Beginner",
                    },
                    {
                        id: 3,
                        question: "What does 'mean' represent in statistics?",
                        options: ["The middle value", "The most frequent value", "The average value", "The range of values"],
                        correctAnswer: 2,
                        type: "multiple-choice",
                        difficulty: "Beginner",
                    },
                    {
                        id: 4,
                        question: "Which Python library is commonly used for data manipulation?",
                        options: ["Pandas", "Requests", "Flask", "Django"],
                        correctAnswer: 0,
                        type: "multiple-choice",
                        difficulty: "Beginner",
                    },
                    {
                        id: 5,
                        question: "What is a dataset?",
                        options: [
                            "A single data point",
                            "A collection of related data",
                            "A type of database",
                            "A programming language",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Beginner",
                    },
                ],
                Intermediate: [
                    {
                        id: 1,
                        question: "What is the primary difference between supervised and unsupervised learning?",
                        options: [
                            "Supervised learning uses labeled data, unsupervised does not",
                            "Supervised learning is faster than unsupervised learning",
                            "Unsupervised learning is more accurate",
                            "There is no difference",
                        ],
                        correctAnswer: 0,
                        type: "multiple-choice",
                        difficulty: "Intermediate",
                    },
                    {
                        id: 2,
                        question: "Which Python library is most commonly used for data manipulation and analysis?",
                        options: ["NumPy", "Matplotlib", "Pandas", "Scikit-learn"],
                        correctAnswer: 2,
                        type: "multiple-choice",
                        difficulty: "Intermediate",
                    },
                    {
                        id: 3,
                        question: "What does overfitting mean in machine learning?",
                        options: [
                            "The model performs well on training data but poorly on new data",
                            "The model is too simple",
                            "The model trains too quickly",
                            "The model uses too much memory",
                        ],
                        correctAnswer: 0,
                        type: "multiple-choice",
                        difficulty: "Intermediate",
                    },
                    {
                        id: 4,
                        question: "Which statistical measure is most robust to outliers?",
                        options: ["Mean", "Standard deviation", "Median", "Range"],
                        correctAnswer: 2,
                        type: "multiple-choice",
                        difficulty: "Intermediate",
                    },
                    {
                        id: 5,
                        question: "What is the purpose of cross-validation in machine learning?",
                        options: [
                            "To speed up training",
                            "To assess model performance and prevent overfitting",
                            "To reduce data size",
                            "To visualize data",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Intermediate",
                    },
                ],
                Junior: [
                    {
                        id: 1,
                        question: "What is feature engineering in machine learning?",
                        options: [
                            "Building new features from existing data",
                            "Removing all features from data",
                            "Only selecting numerical features",
                            "Copying features from other datasets",
                        ],
                        correctAnswer: 0,
                        type: "multiple-choice",
                        difficulty: "Junior",
                    },
                    {
                        id: 2,
                        question: "Which technique is used to handle missing data?",
                        options: ["Imputation", "Deletion", "Interpolation", "All of the above"],
                        correctAnswer: 3,
                        type: "multiple-choice",
                        difficulty: "Junior",
                    },
                    {
                        id: 3,
                        question: "What is the curse of dimensionality?",
                        options: [
                            "Having too few features",
                            "Performance degradation as the number of features increases",
                            "Using only 2D visualizations",
                            "Working with time series data",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Junior",
                    },
                    {
                        id: 4,
                        question: "Which algorithm is best for classification with non-linear relationships?",
                        options: ["Linear Regression", "Random Forest", "Logistic Regression", "K-Means"],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Junior",
                    },
                    {
                        id: 5,
                        question: "What is A/B testing in data science?",
                        options: [
                            "Testing two different algorithms",
                            "Comparing two versions to determine which performs better",
                            "Testing data quality",
                            "Validating model accuracy",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Junior",
                    },
                ],
                Senior: [
                    {
                        id: 1,
                        question: "How do you handle data drift in production ML systems?",
                        options: [
                            "Ignore it and hope it goes away",
                            "Implement monitoring and retraining pipelines",
                            "Only retrain models annually",
                            "Use the same model indefinitely",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Senior",
                    },
                    {
                        id: 2,
                        question: "What is the best approach for handling class imbalance in large datasets?",
                        options: [
                            "Always use SMOTE",
                            "Combine multiple techniques like sampling, cost-sensitive learning, and ensemble methods",
                            "Ignore the imbalance",
                            "Only use oversampling",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Senior",
                    },
                    {
                        id: 3,
                        question: "Which approach is best for deploying ML models at scale?",
                        options: [
                            "Deploy models directly in Jupyter notebooks",
                            "Use containerization with proper CI/CD pipelines",
                            "Email model files to users",
                            "Only use cloud-based AutoML solutions",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Senior",
                    },
                    {
                        id: 4,
                        question: "How do you ensure reproducibility in ML experiments?",
                        options: [
                            "Don't worry about reproducibility",
                            "Version control code, data, and models with proper experiment tracking",
                            "Only document final results",
                            "Use random seeds occasionally",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Senior",
                    },
                    {
                        id: 5,
                        question: "What is the most important consideration when building ML systems for business?",
                        options: [
                            "Using the most complex algorithms",
                            "Aligning model objectives with business goals and measuring business impact",
                            "Achieving the highest accuracy possible",
                            "Using the latest research papers",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Senior",
                    },
                ],
            },
        },
        soft: {
            title: "Soft Skills Assessment",
            duration: 25,
            questions: {
                Beginner: [
                    {
                        id: 1,
                        question: "How do you approach learning data science concepts?",
                        options: [
                            "Only read theory without practice",
                            "Combine theory with hands-on practice using real datasets",
                            "Only follow tutorials step by step",
                            "Memorize formulas without understanding",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Beginner",
                    },
                    {
                        id: 2,
                        question: "What should you do when you don't understand a statistical concept?",
                        options: [
                            "Skip it and move on",
                            "Research multiple sources and ask for help when needed",
                            "Pretend to understand it",
                            "Only use concepts you already know",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Beginner",
                    },
                    {
                        id: 3,
                        question: "How do you handle working with messy or incomplete data?",
                        options: [
                            "Give up and find perfect data",
                            "Clean and prepare the data systematically",
                            "Use the data as-is without cleaning",
                            "Only work with pre-cleaned datasets",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Beginner",
                    },
                    {
                        id: 4,
                        question: "How do you present your findings to others?",
                        options: [
                            "Show only complex technical details",
                            "Use clear visualizations and simple explanations",
                            "Present raw data without context",
                            "Avoid presenting to others",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Beginner",
                    },
                    {
                        id: 5,
                        question: "What's your approach to learning new data science tools?",
                        options: [
                            "Stick to tools you already know",
                            "Experiment with new tools on small projects first",
                            "Only use the most popular tools",
                            "Wait for formal training",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Beginner",
                    },
                ],
                Intermediate: [
                    {
                        id: 1,
                        question: "How do you communicate complex data insights to non-technical stakeholders?",
                        options: [
                            "Use technical jargon to show expertise",
                            "Create clear visualizations and use simple language",
                            "Provide only the raw numbers",
                            "Avoid presenting to non-technical audiences",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Intermediate",
                    },
                    {
                        id: 2,
                        question: "When your analysis contradicts business expectations, how do you proceed?",
                        options: [
                            "Change the analysis to match expectations",
                            "Present findings objectively with supporting evidence",
                            "Ignore the contradictory results",
                            "Only show favorable results",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Intermediate",
                    },
                    {
                        id: 3,
                        question: "How do you ensure data quality in your projects?",
                        options: [
                            "Assume all data is accurate",
                            "Implement validation checks and document data sources",
                            "Only use small datasets",
                            "Rely on others to validate data",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Intermediate",
                    },
                    {
                        id: 4,
                        question: "How do you handle ambiguous or poorly defined business problems?",
                        options: [
                            "Make assumptions and proceed",
                            "Ask clarifying questions and define success metrics",
                            "Choose the easiest interpretation",
                            "Wait for someone else to define the problem",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Intermediate",
                    },
                    {
                        id: 5,
                        question: "How do you stay current with data science trends and methodologies?",
                        options: [
                            "Only use methods learned in school",
                            "Regularly read research papers and experiment with new techniques",
                            "Wait for company training",
                            "Use only popular tools",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Intermediate",
                    },
                ],
                Junior: [
                    {
                        id: 1,
                        question: "How do you approach collaborating with domain experts?",
                        options: [
                            "Work independently without their input",
                            "Actively seek their knowledge to understand business context",
                            "Only involve them at the end of projects",
                            "Assume you understand their domain better",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Junior",
                    },
                    {
                        id: 2,
                        question: "How do you handle conflicting requirements from different stakeholders?",
                        options: [
                            "Choose the loudest voice",
                            "Facilitate discussions to understand priorities and find compromises",
                            "Ignore conflicting requirements",
                            "Implement all requirements regardless of feasibility",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Junior",
                    },
                    {
                        id: 3,
                        question: "How do you approach model validation and testing?",
                        options: [
                            "Only test on training data",
                            "Use multiple validation techniques and test on unseen data",
                            "Skip validation to save time",
                            "Only validate if results look good",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Junior",
                    },
                    {
                        id: 4,
                        question: "How do you handle ethical considerations in data science projects?",
                        options: [
                            "Ignore ethical implications",
                            "Proactively consider bias, privacy, and fairness throughout the project",
                            "Only consider ethics if asked",
                            "Leave ethical decisions to management",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Junior",
                    },
                    {
                        id: 5,
                        question: "How do you approach mentoring junior data scientists?",
                        options: [
                            "Do their work for them",
                            "Guide them through problems and encourage independent thinking",
                            "Only help when directly asked",
                            "Give them only easy tasks",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Junior",
                    },
                ],
                Senior: [
                    {
                        id: 1,
                        question: "How do you approach building data science strategy for an organization?",
                        options: [
                            "Focus only on the latest technologies",
                            "Align data science initiatives with business objectives and build sustainable processes",
                            "Copy what other companies are doing",
                            "Let individual projects drive strategy",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Senior",
                    },
                    {
                        id: 2,
                        question: "How do you handle resistance to data-driven decision making?",
                        options: [
                            "Force adoption through authority",
                            "Educate stakeholders and demonstrate value through small wins",
                            "Give up and let them make intuitive decisions",
                            "Only work with data-friendly teams",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Senior",
                    },
                    {
                        id: 3,
                        question: "How do you ensure data science projects deliver business value?",
                        options: [
                            "Focus only on model accuracy",
                            "Define clear success metrics and measure business impact throughout the project",
                            "Assume technical success equals business success",
                            "Let business stakeholders define value after completion",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Senior",
                    },
                    {
                        id: 4,
                        question: "How do you build and lead high-performing data science teams?",
                        options: [
                            "Hire only senior data scientists",
                            "Create diverse teams with clear roles, growth paths, and collaborative culture",
                            "Let team members work independently without coordination",
                            "Focus only on technical skills when hiring",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Senior",
                    },
                    {
                        id: 5,
                        question: "How do you approach scaling data science across an organization?",
                        options: [
                            "Centralize all data science work",
                            "Build platforms, standards, and enable self-service while maintaining quality",
                            "Let each department build their own solutions",
                            "Only focus on high-impact projects",
                        ],
                        correctAnswer: 1,
                        type: "multiple-choice",
                        difficulty: "Senior",
                    },
                ],
            },
        },
        "product-manager": {
            title: "Product Manager",
            description: "Product strategy and management assessment",
            experienceLevels: ["Beginner", "Intermediate", "Junior", "Senior"],
            technical: {
                title: "Technical Assessment",
                duration: 40,
                questions: {
                    Beginner: [
                        {
                            id: 1,
                            question: "What is the primary purpose of A/B testing in product development?",
                            options: [
                                "To reduce development costs",
                                "To compare two versions and determine which performs better",
                                "To speed up development process",
                                "To eliminate user feedback"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 2,
                            question: "What does MVP stand for in product development?",
                            options: [
                                "Most Valuable Player",
                                "Minimum Viable Product",
                                "Maximum Value Proposition",
                                "Market Validation Process"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 3,
                            question: "What is a user story in agile development?",
                            options: [
                                "A detailed technical specification",
                                "A short description of a feature from user's perspective",
                                "A bug report from users",
                                "A marketing campaign story"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 4,
                            question: "What is the main goal of user research?",
                            options: [
                                "To prove the product is perfect",
                                "To understand user needs and behaviors",
                                "To reduce development costs",
                                "To speed up launch timeline"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 5,
                            question: "What is a product roadmap?",
                            options: [
                                "A map of user locations",
                                "A visual timeline of product development plans",
                                "A list of bugs to fix",
                                "A marketing strategy document"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        }
                    ],
                    Intermediate: [
                        {
                            id: 1,
                            question: "What is the primary purpose of A/B testing in product development?",
                            options: [
                                "To reduce development costs",
                                "To compare two versions and determine which performs better",
                                "To speed up development process",
                                "To eliminate user feedback"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 2,
                            question: "How do you calculate customer lifetime value (CLV)?",
                            options: [
                                "Monthly revenue × 12",
                                "Average purchase value × purchase frequency × customer lifespan",
                                "Total customers ÷ monthly churn",
                                "Monthly active users × conversion rate"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 3,
                            question: "What is the difference between leading and lagging indicators?",
                            options: [
                                "Leading indicators predict future performance, lagging indicators measure past performance",
                                "Leading indicators are more important than lagging indicators",
                                "Leading indicators are for executives, lagging indicators are for teams",
                                "There is no difference between them"
                            ],
                            correctAnswer: 0,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 4,
                            question: "What is product-market fit?",
                            options: [
                                "When the product fits in the market budget",
                                "When the product satisfies a strong market demand",
                                "When the product has no competitors",
                                "When the product is technically perfect"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 5,
                            question: "What is the purpose of a go-to-market strategy?",
                            options: [
                                "To define how to deliver the product to customers",
                                "To set the product price",
                                "To hire marketing team",
                                "To choose technology stack"
                            ],
                            correctAnswer: 0,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        }
                    ],
                    Junior: [
                        {
                            id: 1,
                            question: "How would you prioritize features in a product backlog?",
                            options: [
                                "By development complexity only",
                                "Using frameworks like RICE or MoSCoW method",
                                "By stakeholder preferences only",
                                "Randomly to ensure fairness"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 2,
                            question: "What is cohort analysis used for?",
                            options: [
                                "To analyze user behavior over time",
                                "To count total users",
                                "To measure server performance",
                                "To track bug reports"
                            ],
                            correctAnswer: 0,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 3,
                            question: "How do you handle conflicting stakeholder requirements?",
                            options: [
                                "Choose the highest-paid stakeholder's requirements",
                                "Facilitate discussions to find common ground and align with business goals",
                                "Implement all requirements regardless of conflicts",
                                "Ignore conflicting requirements"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 4,
                            question: "What is the North Star metric?",
                            options: [
                                "The most expensive metric to track",
                                "A key measure that captures the core value delivered to customers",
                                "The metric with the highest number",
                                "A metric only executives can see"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 5,
                            question: "How do you validate a product hypothesis?",
                            options: [
                                "By asking the CEO",
                                "Through experiments, user research, and data analysis",
                                "By checking competitor products",
                                "By reading industry reports only"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        }
                    ],
                    Senior: [
                        {
                            id: 1,
                            question: "How would you design a framework for measuring product success across multiple business units?",
                            options: [
                                "Use the same metrics for all units",
                                "Create unit-specific metrics aligned with overall business strategy",
                                "Let each unit choose their own metrics",
                                "Focus only on revenue metrics"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 2,
                            question: "What approach would you take to enter a new market with an existing product?",
                            options: [
                                "Use the same strategy as the current market",
                                "Conduct market research, adapt product-market fit, and develop localized go-to-market strategy",
                                "Lower the price and hope for the best",
                                "Copy what competitors are doing"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 3,
                            question: "How do you balance technical debt with new feature development?",
                            options: [
                                "Always prioritize new features",
                                "Always fix technical debt first",
                                "Allocate resources based on business impact and risk assessment",
                                "Let the engineering team decide"
                            ],
                            correctAnswer: 2,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 4,
                            question: "What's your approach to building a data-driven product culture?",
                            options: [
                                "Hire more data analysts",
                                "Implement comprehensive measurement frameworks, educate teams, and embed data in decision-making processes",
                                "Buy expensive analytics tools",
                                "Create more dashboards"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 5,
                            question: "How would you handle a situation where user feedback conflicts with business metrics?",
                            options: [
                                "Always follow business metrics",
                                "Always follow user feedback",
                                "Investigate the root cause, consider long-term impact, and find solutions that address both concerns",
                                "Ignore both and follow intuition"
                            ],
                            correctAnswer: 2,
                            type: "multiple-choice",
                            difficulty: "senior"
                        }
                    ]
                }
            },
            soft: {
                title: "Soft Skills Assessment",
                duration: 30,
                questions: {
                    Beginner: [
                        {
                            id: 1,
                            question: "How do you handle disagreements in team meetings?",
                            options: [
                                "Avoid speaking up to prevent conflict",
                                "Listen to all perspectives and work toward a collaborative solution",
                                "Argue until others agree with you",
                                "Let the manager decide everything"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 2,
                            question: "What's the best way to communicate a project delay to stakeholders?",
                            options: [
                                "Wait until the last minute to inform them",
                                "Communicate early, explain the reasons, and provide a revised timeline",
                                "Blame other team members for the delay",
                                "Hope they don't notice"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 3,
                            question: "How do you prioritize tasks when everything seems urgent?",
                            options: [
                                "Work on whatever is easiest first",
                                "Assess impact and urgency to create a priority matrix",
                                "Work on tasks randomly",
                                "Ask someone else to prioritize for you"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 4,
                            question: "What's your approach to giving feedback to team members?",
                            options: [
                                "Only give positive feedback to avoid hurt feelings",
                                "Provide specific, constructive feedback focused on behaviors and outcomes",
                                "Give feedback only during formal reviews",
                                "Avoid giving feedback altogether"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 5,
                            question: "How do you stay updated with industry trends?",
                            options: [
                                "Wait for others to tell you about changes",
                                "Regularly read industry publications, attend events, and network with peers",
                                "Only learn when required by your job",
                                "Assume trends don't affect your work"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        }
                    ],
                    Intermediate: [
                        {
                            id: 1,
                            question: "How do you handle disagreements in team meetings?",
                            options: [
                                "Avoid speaking up to prevent conflict",
                                "Listen to all perspectives and work toward a collaborative solution",
                                "Argue until others agree with you",
                                "Let the manager decide everything"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 2,
                            question: "How do you manage stakeholder expectations when requirements change frequently?",
                            options: [
                                "Accept all changes without question",
                                "Establish clear change management processes and communicate impact",
                                "Refuse all changes to maintain original scope",
                                "Let stakeholders figure it out themselves"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 3,
                            question: "What's your approach to mentoring junior team members?",
                            options: [
                                "Give them tasks and let them figure it out",
                                "Provide guidance, share knowledge, and create learning opportunities",
                                "Do their work for them to ensure quality",
                                "Avoid mentoring to focus on your own work"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 4,
                            question: "How do you handle competing priorities from different stakeholders?",
                            options: [
                                "Work on whoever asks last",
                                "Facilitate alignment discussions and establish clear priority criteria",
                                "Try to do everything at once",
                                "Choose randomly to be fair"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 5,
                            question: "What's your strategy for building relationships with cross-functional teams?",
                            options: [
                                "Only interact when necessary",
                                "Proactively engage, understand their goals, and find collaboration opportunities",
                                "Wait for them to reach out first",
                                "Focus only on your own team"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        }
                    ],
                    Junior: [
                        {
                            id: 1,
                            question: "How do you influence decisions when you don't have direct authority?",
                            options: [
                                "Use data, build relationships, and present compelling arguments",
                                "Escalate to your manager immediately",
                                "Give up if people don't listen",
                                "Use pressure tactics to force agreement"
                            ],
                            correctAnswer: 0,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 2,
                            question: "How do you handle a situation where a key stakeholder is resistant to your product recommendations?",
                            options: [
                                "Ignore their concerns and proceed anyway",
                                "Understand their perspective, address concerns, and find common ground",
                                "Escalate to their manager immediately",
                                "Change your recommendation to match their preference"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 3,
                            question: "What's your approach to managing up effectively?",
                            options: [
                                "Only communicate when asked",
                                "Provide regular updates, seek guidance, and align on priorities",
                                "Avoid bothering your manager with details",
                                "Wait for your manager to check in with you"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 4,
                            question: "How do you build consensus among team members with different opinions?",
                            options: [
                                "Let the loudest voice win",
                                "Facilitate discussion, find common ground, and focus on shared goals",
                                "Make the decision yourself to avoid conflict",
                                "Vote and let majority rule"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 5,
                            question: "What's your strategy for continuous learning and professional development?",
                            options: [
                                "Wait for company-provided training",
                                "Set learning goals, seek feedback, and actively pursue growth opportunities",
                                "Learn only what's required for current role",
                                "Assume experience is enough"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        }
                    ],
                    Senior: [
                        {
                            id: 1,
                            question: "How do you drive organizational change when there's resistance at multiple levels?",
                            options: [
                                "Force change through authority",
                                "Build coalition of supporters, communicate vision, and address concerns systematically",
                                "Give up and maintain status quo",
                                "Implement change secretly"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 2,
                            question: "What's your approach to developing product strategy in uncertain market conditions?",
                            options: [
                                "Wait for market clarity before making decisions",
                                "Create flexible strategies with multiple scenarios and rapid feedback loops",
                                "Copy what successful competitors are doing",
                                "Stick to original plan regardless of changes"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 3,
                            question: "How do you balance innovation with business constraints?",
                            options: [
                                "Always choose innovation over constraints",
                                "Always prioritize business constraints",
                                "Find creative solutions that advance innovation within realistic constraints",
                                "Alternate between innovation and constraints"
                            ],
                            correctAnswer: 2,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 4,
                            question: "What's your strategy for scaling product management practices across a growing organization?",
                            options: [
                                "Hire more product managers",
                                "Develop standardized processes, training programs, and governance frameworks",
                                "Let each team develop their own practices",
                                "Maintain current practices regardless of growth"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 5,
                            question: "How do you handle ethical dilemmas in product decisions?",
                            options: [
                                "Always choose what's most profitable",
                                "Consider stakeholder impact, long-term consequences, and company values",
                                "Let legal team make all ethical decisions",
                                "Avoid products that might have ethical implications"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        }
                    ]
                }
            }
        },
        "ui-ux-designer": {
            title: "UI/UX Designer",
            description: "User interface and experience design assessment",
            experienceLevels: ["Beginner", "Intermediate", "Junior", "Senior"],
            technical: {
                title: "Technical Assessment",
                duration: 40,
                questions: {
                    Beginner: [
                        {
                            id: 1,
                            question: "What is the primary difference between UI and UX design?",
                            options: [
                                "UI focuses on visual elements, UX focuses on user experience",
                                "UI is for mobile, UX is for web",
                                "UI is cheaper than UX",
                                "There is no difference"
                            ],
                            correctAnswer: 0,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 2,
                            question: "What is a wireframe?",
                            options: [
                                "A final design mockup",
                                "A low-fidelity structural blueprint of a page",
                                "A coding framework",
                                "A user testing method"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 3,
                            question: "What does 'responsive design' mean?",
                            options: [
                                "Design that responds to user clicks",
                                "Design that adapts to different screen sizes",
                                "Design that loads quickly",
                                "Design with animations"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 4,
                            question: "What is the purpose of user personas?",
                            options: [
                                "To make designs look professional",
                                "To represent target users and guide design decisions",
                                "To increase project costs",
                                "To impress stakeholders"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 5,
                            question: "What is usability testing?",
                            options: [
                                "Testing if the design looks good",
                                "Testing how easy and intuitive a product is to use",
                                "Testing the code quality",
                                "Testing the server performance"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        }
                    ],
                    Intermediate: [
                        {
                            id: 1,
                            question: "What is the primary difference between UI and UX design?",
                            options: [
                                "UI focuses on visual elements, UX focuses on user experience",
                                "UI is for mobile, UX is for web",
                                "UI is cheaper than UX",
                                "There is no difference"
                            ],
                            correctAnswer: 0,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 2,
                            question: "What is the purpose of A/B testing in design?",
                            options: [
                                "To test two different designs and see which performs better",
                                "To test if colors match",
                                "To test loading speed",
                                "To test browser compatibility"
                            ],
                            correctAnswer: 0,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 3,
                            question: "What is information architecture?",
                            options: [
                                "The visual design of a website",
                                "The structural design of shared information environments",
                                "The coding structure of a website",
                                "The server architecture"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 4,
                            question: "What is the 8-point grid system?",
                            options: [
                                "A design system using multiples of 8 pixels for spacing and sizing",
                                "A grid with 8 columns",
                                "A testing method with 8 users",
                                "A color system with 8 colors"
                            ],
                            correctAnswer: 0,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 5,
                            question: "What is the purpose of design systems?",
                            options: [
                                "To make designs look identical",
                                "To create consistent, scalable design standards across products",
                                "To reduce the number of designers needed",
                                "To speed up development only"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        }
                    ],
                    Junior: [
                        {
                            id: 1,
                            question: "How do you approach designing for accessibility?",
                            options: [
                                "Add accessibility features after design is complete",
                                "Consider accessibility from the beginning, following WCAG guidelines",
                                "Accessibility is only for disabled users",
                                "Accessibility makes designs look worse"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 2,
                            question: "What is the difference between user research and usability testing?",
                            options: [
                                "They are the same thing",
                                "User research understands user needs, usability testing evaluates design effectiveness",
                                "User research is cheaper than usability testing",
                                "Usability testing is only for mobile apps"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 3,
                            question: "How do you handle conflicting feedback from stakeholders?",
                            options: [
                                "Implement all feedback regardless of conflicts",
                                "Prioritize based on user needs and business goals",
                                "Choose the feedback from the highest-ranking person",
                                "Ignore all feedback"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 4,
                            question: "What is the purpose of design critique sessions?",
                            options: [
                                "To criticize designers personally",
                                "To collaboratively improve designs through constructive feedback",
                                "To show off design skills",
                                "To waste time in meetings"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 5,
                            question: "How do you measure the success of a design?",
                            options: [
                                "By how pretty it looks",
                                "Through user metrics, task completion rates, and business KPIs",
                                "By the number of colors used",
                                "By stakeholder approval only"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        }
                    ],
                    Senior: [
                        {
                            id: 1,
                            question: "How do you establish design strategy for a new product line?",
                            options: [
                                "Copy existing successful products",
                                "Conduct market research, define design principles, and align with business strategy",
                                "Use the latest design trends",
                                "Ask the CEO what they want"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 2,
                            question: "What's your approach to scaling design across multiple teams?",
                            options: [
                                "Hire more designers",
                                "Create design systems, establish processes, and provide training",
                                "Let each team design independently",
                                "Centralize all design decisions"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 3,
                            question: "How do you balance user needs with business constraints?",
                            options: [
                                "Always prioritize user needs",
                                "Always prioritize business needs",
                                "Find creative solutions that serve both user and business goals",
                                "Alternate between user and business priorities"
                            ],
                            correctAnswer: 2,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 4,
                            question: "What's your strategy for driving design thinking adoption in an organization?",
                            options: [
                                "Force everyone to attend design workshops",
                                "Demonstrate value through pilot projects and gradual cultural change",
                                "Replace all non-designers with designers",
                                "Ignore resistance and implement anyway"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 5,
                            question: "How do you approach designing for emerging technologies?",
                            options: [
                                "Wait until the technology is mainstream",
                                "Research user needs, prototype early, and iterate based on feedback",
                                "Copy what other companies are doing",
                                "Focus only on visual design"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        }
                    ]
                }
            },
            soft: {
                title: "Soft Skills Assessment",
                duration: 30,
                questions: {
                    Beginner: [
                        {
                            id: 1,
                            question: "How do you handle creative differences with team members?",
                            options: [
                                "Insist your design is better",
                                "Listen to feedback and find collaborative solutions",
                                "Avoid discussing differences",
                                "Let others make all decisions"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 2,
                            question: "What's your approach to presenting designs to stakeholders?",
                            options: [
                                "Show the design without explanation",
                                "Explain design decisions and how they meet user and business needs",
                                "Focus only on visual aesthetics",
                                "Let someone else present for you"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 3,
                            question: "How do you stay current with design trends?",
                            options: [
                                "Copy whatever is popular",
                                "Follow design publications, attend conferences, and analyze successful products",
                                "Ignore trends completely",
                                "Wait for others to tell you about trends"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 4,
                            question: "What's your approach to receiving design feedback?",
                            options: [
                                "Take all feedback personally",
                                "Listen objectively and use feedback to improve the design",
                                "Ignore feedback you don't like",
                                "Argue with every piece of feedback"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 5,
                            question: "How do you manage your time when working on multiple design projects?",
                            options: [
                                "Work on whatever feels most interesting",
                                "Prioritize based on deadlines and project importance",
                                "Try to work on everything simultaneously",
                                "Focus only on the easiest projects"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        }
                    ],
                    Intermediate: [
                        {
                            id: 1,
                            question: "How do you handle creative differences with team members?",
                            options: [
                                "Insist your design is better",
                                "Listen to feedback and find collaborative solutions",
                                "Avoid discussing differences",
                                "Let others make all decisions"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 2,
                            question: "How do you advocate for user-centered design in business-focused discussions?",
                            options: [
                                "Ignore business concerns",
                                "Connect user needs to business outcomes and ROI",
                                "Only focus on user needs",
                                "Let business stakeholders make all decisions"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 3,
                            question: "What's your approach to mentoring junior designers?",
                            options: [
                                "Let them figure everything out alone",
                                "Provide guidance, share knowledge, and create learning opportunities",
                                "Do their work for them",
                                "Only give feedback when asked"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 4,
                            question: "How do you handle tight deadlines without compromising design quality?",
                            options: [
                                "Rush through everything",
                                "Prioritize key design elements and communicate trade-offs",
                                "Ignore deadlines completely",
                                "Ask for deadline extensions every time"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 5,
                            question: "What's your strategy for building relationships with developers?",
                            options: [
                                "Only interact when handing off designs",
                                "Collaborate throughout the process and understand technical constraints",
                                "Assume they'll figure out implementation",
                                "Avoid technical discussions"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        }
                    ],
                    Junior: [
                        {
                            id: 1,
                            question: "How do you influence design decisions when you don't have authority?",
                            options: [
                                "Use data, user research, and compelling design rationale",
                                "Escalate to management immediately",
                                "Give up if people don't listen",
                                "Use emotional appeals only"
                            ],
                            correctAnswer: 0,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 2,
                            question: "What's your approach to handling design criticism from non-designers?",
                            options: [
                                "Dismiss their opinions as uninformed",
                                "Listen for valid concerns and educate about design principles",
                                "Accept all criticism without question",
                                "Get defensive about your design choices"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 3,
                            question: "How do you balance creativity with usability requirements?",
                            options: [
                                "Always prioritize creativity over usability",
                                "Always prioritize usability over creativity",
                                "Find innovative solutions that are both creative and usable",
                                "Alternate between creative and usable designs"
                            ],
                            correctAnswer: 2,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 4,
                            question: "What's your strategy for continuous learning in design?",
                            options: [
                                "Only learn new tools when required",
                                "Actively seek learning opportunities, experiment, and stay curious",
                                "Wait for company-provided training",
                                "Assume current skills are sufficient"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 5,
                            question: "How do you handle situations where user research conflicts with stakeholder preferences?",
                            options: [
                                "Always follow stakeholder preferences",
                                "Always follow user research",
                                "Present both perspectives and facilitate data-driven decisions",
                                "Compromise by doing half of each"
                            ],
                            correctAnswer: 2,
                            type: "multiple-choice",
                            difficulty: "junior"
                        }
                    ],
                    Senior: [
                        {
                            id: 1,
                            question: "How do you drive design culture change in an organization?",
                            options: [
                                "Force change through authority",
                                "Lead by example, educate stakeholders, and demonstrate design value",
                                "Wait for leadership to mandate change",
                                "Focus only on your own team"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 2,
                            question: "What's your approach to building design strategy for multiple product lines?",
                            options: [
                                "Use the same strategy for all products",
                                "Develop tailored strategies while maintaining brand consistency",
                                "Let each product team create their own strategy",
                                "Focus only on the most profitable product"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 3,
                            question: "How do you handle ethical considerations in design decisions?",
                            options: [
                                "Focus only on business outcomes",
                                "Consider user welfare, societal impact, and long-term consequences",
                                "Let legal team handle all ethical decisions",
                                "Avoid products with ethical implications"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 4,
                            question: "What's your strategy for scaling design impact across a large organization?",
                            options: [
                                "Hire more designers",
                                "Build systems, processes, and capabilities that enable others",
                                "Centralize all design decisions",
                                "Focus only on high-visibility projects"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 5,
                            question: "How do you balance innovation with proven design patterns?",
                            options: [
                                "Always use proven patterns",
                                "Always innovate regardless of risk",
                                "Strategically innovate where it adds value while leveraging proven patterns",
                                "Let users decide through testing"
                            ],
                            correctAnswer: 2,
                            type: "multiple-choice",
                            difficulty: "senior"
                        }
                    ]
                }
            }
        },
        "digital-marketer": {
            title: "Digital Marketer",
            description: "Digital marketing strategy and execution assessment",
            experienceLevels: ["Beginner", "Intermediate", "Junior", "Senior"],
            technical: {
                title: "Technical Assessment",
                duration: 35,
                questions: {
                    Beginner: [
                        {
                            id: 1,
                            question: "What does CTR stand for in digital marketing?",
                            options: ["Cost To Revenue", "Click Through Rate", "Customer Target Reach", "Content Traffic Ratio"],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 2,
                            question: "What is SEO?",
                            options: [
                                "Social Engagement Optimization",
                                "Search Engine Optimization",
                                "Sales Enhancement Operations",
                                "Site Enhancement Options"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 3,
                            question: "What does CPC mean in paid advertising?",
                            options: ["Cost Per Click", "Customer Per Campaign", "Content Per Channel", "Conversion Per Customer"],
                            correctAnswer: 0,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 4,
                            question: "What is a conversion in digital marketing?",
                            options: [
                                "Changing website design",
                                "A desired action taken by a user",
                                "Converting files to different formats",
                                "Changing marketing channels"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 5,
                            question: "What is the purpose of A/B testing in marketing?",
                            options: [
                                "To test two different versions and see which performs better",
                                "To test website loading speed",
                                "To test different browsers",
                                "To test server capacity"
                            ],
                            correctAnswer: 0,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        }
                    ],
                    Intermediate: [
                        {
                            id: 1,
                            question: "What does CTR stand for in digital marketing?",
                            options: ["Cost To Revenue", "Click Through Rate", "Customer Target Reach", "Content Traffic Ratio"],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 2,
                            question: "What is the customer acquisition cost (CAC)?",
                            options: [
                                "Total marketing spend divided by new customers acquired",
                                "Average order value per customer",
                                "Customer lifetime value",
                                "Cost of customer service"
                            ],
                            correctAnswer: 0,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 3,
                            question: "What is remarketing/retargeting?",
                            options: [
                                "Marketing to new customers",
                                "Targeting ads to people who previously interacted with your brand",
                                "Changing your target market",
                                "Marketing through email only"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 4,
                            question: "What is a marketing funnel?",
                            options: [
                                "A tool for collecting email addresses",
                                "The customer journey from awareness to conversion",
                                "A type of advertising campaign",
                                "A social media strategy"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 5,
                            question: "What does ROAS stand for?",
                            options: [
                                "Return on Advertising Spend",
                                "Rate of Active Subscribers",
                                "Revenue of All Sales",
                                "Reach of Advertising Strategy"
                            ],
                            correctAnswer: 0,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        }
                    ],
                    Junior: [
                        {
                            id: 1,
                            question: "How do you optimize a marketing campaign that's underperforming?",
                            options: [
                                "Increase budget immediately",
                                "Analyze data, identify issues, and test improvements",
                                "Change everything at once",
                                "Stop the campaign completely"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 2,
                            question: "What's the best approach to multi-channel marketing attribution?",
                            options: [
                                "Give all credit to the last click",
                                "Give all credit to the first click",
                                "Use a model that considers all touchpoints in the customer journey",
                                "Only track direct traffic"
                            ],
                            correctAnswer: 2,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 3,
                            question: "How do you determine the optimal marketing mix for a campaign?",
                            options: [
                                "Use the same mix for all campaigns",
                                "Analyze target audience, goals, and channel performance data",
                                "Choose the cheapest channels",
                                "Use only the most popular channels"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 4,
                            question: "What's your approach to marketing automation?",
                            options: [
                                "Automate everything possible",
                                "Never use automation",
                                "Strategically automate repetitive tasks while maintaining personalization",
                                "Only automate email marketing"
                            ],
                            correctAnswer: 2,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 5,
                            question: "How do you measure the success of a content marketing strategy?",
                            options: [
                                "Only look at page views",
                                "Track engagement, leads generated, and conversion metrics",
                                "Count the number of posts published",
                                "Measure only social media followers"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        }
                    ],
                    Senior: [
                        {
                            id: 1,
                            question: "How do you develop a comprehensive digital marketing strategy for a new market?",
                            options: [
                                "Copy strategies from existing markets",
                                "Conduct market research, analyze competition, and develop localized approach",
                                "Use only global campaigns",
                                "Focus on the cheapest marketing channels"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 2,
                            question: "What's your approach to marketing budget allocation across channels?",
                            options: [
                                "Split budget equally across all channels",
                                "Allocate based on historical performance, goals, and market opportunities",
                                "Put all budget in the highest performing channel",
                                "Let each team decide their own budget"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 3,
                            question: "How do you build a data-driven marketing organization?",
                            options: [
                                "Buy expensive analytics tools",
                                "Hire more data analysts",
                                "Implement measurement frameworks, train teams, and embed data in decision-making",
                                "Focus only on vanity metrics"
                            ],
                            correctAnswer: 2,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 4,
                            question: "What's your strategy for marketing in a privacy-first world?",
                            options: [
                                "Ignore privacy regulations",
                                "Stop all digital marketing",
                                "Adapt to first-party data strategies and privacy-compliant targeting",
                                "Only use traditional marketing"
                            ],
                            correctAnswer: 2,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 5,
                            question: "How do you align marketing strategy with overall business objectives?",
                            options: [
                                "Focus only on marketing metrics",
                                "Understand business goals and create marketing strategies that drive those outcomes",
                                "Let business teams worry about alignment",
                                "Use the same strategy regardless of business changes"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        }
                    ]
                }
            },
            soft: {
                title: "Soft Skills Assessment",
                duration: 30,
                questions: {
                    Beginner: [
                        {
                            id: 1,
                            question: "How do you handle campaign performance that doesn't meet expectations?",
                            options: [
                                "Panic and change everything immediately",
                                "Analyze data, identify issues, and make informed adjustments",
                                "Blame external factors",
                                "Give up on the campaign"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 2,
                            question: "What's your approach to presenting marketing results to stakeholders?",
                            options: [
                                "Only show positive metrics",
                                "Present comprehensive data with insights and recommendations",
                                "Let the data speak for itself without explanation",
                                "Focus only on vanity metrics"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 3,
                            question: "How do you stay updated with digital marketing trends?",
                            options: [
                                "Wait for others to tell you about changes",
                                "Follow industry publications, attend webinars, and network with peers",
                                "Only learn when required by your job",
                                "Assume trends don't affect your campaigns"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 4,
                            question: "What's your approach to collaborating with creative teams?",
                            options: [
                                "Give them complete creative freedom",
                                "Provide clear briefs while allowing creative input",
                                "Dictate exactly what they should create",
                                "Avoid working with creative teams"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 5,
                            question: "How do you manage multiple marketing campaigns simultaneously?",
                            options: [
                                "Work on whatever seems most urgent",
                                "Prioritize based on business impact and deadlines",
                                "Try to give equal attention to all campaigns",
                                "Focus only on the easiest campaigns"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        }
                    ],
                    Intermediate: [
                        {
                            id: 1,
                            question: "How do you handle campaign performance that doesn't meet expectations?",
                            options: [
                                "Panic and change everything immediately",
                                "Analyze data, identify issues, and make informed adjustments",
                                "Blame external factors",
                                "Give up on the campaign"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 2,
                            question: "How do you manage stakeholder expectations when campaign results vary?",
                            options: [
                                "Only report when results are good",
                                "Provide regular updates with context and next steps",
                                "Let stakeholders interpret results themselves",
                                "Blame poor results on external factors"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 3,
                            question: "What's your approach to cross-functional collaboration?",
                            options: [
                                "Work in isolation to avoid conflicts",
                                "Actively engage with other teams to align goals and share insights",
                                "Only collaborate when absolutely necessary",
                                "Let managers handle all cross-team communication"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 4,
                            question: "How do you handle conflicting priorities from different stakeholders?",
                            options: [
                                "Try to satisfy everyone equally",
                                "Prioritize based on business impact and communicate trade-offs",
                                "Work on whoever asks last",
                                "Escalate all conflicts to management"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 5,
                            question: "What's your strategy for continuous learning in digital marketing?",
                            options: [
                                "Wait for company-provided training",
                                "Actively seek learning opportunities and experiment with new approaches",
                                "Only learn about tools you currently use",
                                "Assume current knowledge is sufficient"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        }
                    ],
                    Junior: [
                        {
                            id: 1,
                            question: "How do you influence marketing decisions when you don't have authority?",
                            options: [
                                "Use data, insights, and compelling business cases",
                                "Escalate to management immediately",
                                "Give up if people don't listen",
                                "Use pressure tactics"
                            ],
                            correctAnswer: 0,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 2,
                            question: "What's your approach to managing marketing budgets effectively?",
                            options: [
                                "Spend the entire budget regardless of performance",
                                "Monitor performance and reallocate based on ROI",
                                "Never change budget allocation once set",
                                "Always ask for more budget"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 3,
                            question: "How do you handle situations where data conflicts with stakeholder intuition?",
                            options: [
                                "Always follow stakeholder intuition",
                                "Always follow the data",
                                "Present both perspectives and facilitate data-driven discussions",
                                "Compromise by doing half of each"
                            ],
                            correctAnswer: 2,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 4,
                            question: "What's your strategy for building relationships with external partners?",
                            options: [
                                "Only interact when necessary",
                                "Proactively engage, understand their goals, and find mutual value",
                                "Let account managers handle all relationships",
                                "Focus only on getting the best deals"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 5,
                            question: "How do you approach mentoring junior marketers?",
                            options: [
                                "Let them figure everything out alone",
                                "Share knowledge, provide guidance, and create learning opportunities",
                                "Do their work for them to ensure quality",
                                "Only help when directly asked"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        }
                    ],
                    Senior: [
                        {
                            id: 1,
                            question: "How do you drive marketing transformation in a traditional organization?",
                            options: [
                                "Force change through authority",
                                "Build coalition, demonstrate value, and gradually shift culture",
                                "Wait for leadership mandate",
                                "Focus only on your own team"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 2,
                            question: "What's your approach to building marketing strategy for multiple business units?",
                            options: [
                                "Use the same strategy for all units",
                                "Develop tailored strategies while maintaining brand consistency",
                                "Let each unit create their own strategy",
                                "Focus only on the most profitable unit"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 3,
                            question: "How do you balance short-term performance with long-term brand building?",
                            options: [
                                "Always prioritize short-term results",
                                "Always prioritize long-term brand building",
                                "Create integrated strategies that serve both objectives",
                                "Alternate focus between short and long-term"
                            ],
                            correctAnswer: 2,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 4,
                            question: "What's your strategy for marketing in uncertain economic conditions?",
                            options: [
                                "Cut all marketing spend",
                                "Maintain current strategy regardless",
                                "Adapt strategy based on market conditions while maintaining brand presence",
                                "Only focus on the cheapest channels"
                            ],
                            correctAnswer: 2,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 5,
                            question: "How do you handle ethical considerations in marketing campaigns?",
                            options: [
                                "Focus only on performance metrics",
                                "Consider consumer welfare, truthfulness, and long-term brand reputation",
                                "Let legal team handle all ethical decisions",
                                "Avoid any potentially controversial campaigns"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        }
                    ]
                }
            }
        },
        "cybersecurity-analyst": {
            title: "Cybersecurity Analyst",
            description: "Information security and threat analysis assessment",
            experienceLevels: ["Beginner", "Intermediate", "Junior", "Senior"],
            technical: {
                title: "Technical Assessment",
                duration: 50,
                questions: {
                    Beginner: [
                        {
                            id: 1,
                            question: "What does CIA stand for in cybersecurity?",
                            options: [
                                "Central Intelligence Agency",
                                "Confidentiality, Integrity, Availability",
                                "Computer Information Access",
                                "Cyber Intelligence Analysis"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 2,
                            question: "What is malware?",
                            options: [
                                "Broken software",
                                "Malicious software designed to harm systems",
                                "Software that runs slowly",
                                "Outdated software"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 3,
                            question: "What is phishing?",
                            options: [
                                "A type of fishing",
                                "A social engineering attack to steal sensitive information",
                                "A network protocol",
                                "A type of malware"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 4,
                            question: "What is two-factor authentication?",
                            options: [
                                "Using two passwords",
                                "An additional security layer requiring two forms of identification",
                                "Having two user accounts",
                                "Using two different browsers"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 5,
                            question: "What is a firewall?",
                            options: [
                                "A physical wall that prevents fires",
                                "A security system that monitors and controls network traffic",
                                "A type of antivirus software",
                                "A backup system"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        }
                    ],
                    Intermediate: [
                        {
                            id: 1,
                            question: "What does CIA stand for in cybersecurity?",
                            options: [
                                "Central Intelligence Agency",
                                "Confidentiality, Integrity, Availability",
                                "Computer Information Access",
                                "Cyber Intelligence Analysis"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 2,
                            question: "What is the difference between symmetric and asymmetric encryption?",
                            options: [
                                "Symmetric uses one key, asymmetric uses two keys",
                                "Symmetric is faster, asymmetric is slower",
                                "Symmetric is for files, asymmetric is for networks",
                                "There is no difference"
                            ],
                            correctAnswer: 0,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 3,
                            question: "What is a zero-day vulnerability?",
                            options: [
                                "A vulnerability that takes zero days to fix",
                                "A previously unknown vulnerability with no available patch",
                                "A vulnerability that occurs on day zero of deployment",
                                "A vulnerability that causes zero damage"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 4,
                            question: "What is the purpose of penetration testing?",
                            options: [
                                "To break into competitor systems",
                                "To simulate attacks and identify vulnerabilities",
                                "To test network speed",
                                "To install security software"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 5,
                            question: "What is a DDoS attack?",
                            options: [
                                "Distributed Denial of Service attack",
                                "Direct Data Override System",
                                "Dynamic Domain Operation Service",
                                "Dedicated Database Operation System"
                            ],
                            correctAnswer: 0,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        }
                    ],
                    Junior: [
                        {
                            id: 1,
                            question: "How would you respond to a suspected security incident?",
                            options: [
                                "Ignore it if systems seem to be working",
                                "Follow incident response procedures: contain, investigate, remediate",
                                "Immediately shut down all systems",
                                "Wait for someone else to handle it"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 2,
                            question: "What is the principle of least privilege?",
                            options: [
                                "Give users minimum access needed to perform their job",
                                "Give all users the same access level",
                                "Give users access to everything by default",
                                "Only give access to privileged users"
                            ],
                            correctAnswer: 0,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 3,
                            question: "How do you assess the risk of a security vulnerability?",
                            options: [
                                "All vulnerabilities are equally dangerous",
                                "Consider likelihood of exploitation and potential impact",
                                "Only worry about vulnerabilities in production",
                                "Focus only on the newest vulnerabilities"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 4,
                            question: "What is defense in depth?",
                            options: [
                                "Having one very strong security control",
                                "Multiple layers of security controls",
                                "Deep packet inspection only",
                                "Focusing only on perimeter security"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 5,
                            question: "How do you stay current with cybersecurity threats?",
                            options: [
                                "Wait for threats to affect your organization",
                                "Follow threat intelligence feeds, security advisories, and industry reports",
                                "Only learn about threats after incidents occur",
                                "Assume current knowledge is sufficient"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        }
                    ],
                    Senior: [
                        {
                            id: 1,
                            question: "How would you develop a comprehensive security strategy for a growing organization?",
                            options: [
                                "Copy another organization's strategy",
                                "Assess risks, align with business goals, and create layered security framework",
                                "Focus only on the latest security tools",
                                "Wait for security incidents to guide strategy"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 2,
                            question: "What's your approach to security awareness training?",
                            options: [
                                "One annual training session for all employees",
                                "Ongoing, role-based training with regular testing and updates",
                                "Only train IT staff",
                                "Assume employees will learn on their own"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 3,
                            question: "How do you balance security requirements with business needs?",
                            options: [
                                "Always prioritize security over business needs",
                                "Always prioritize business needs over security",
                                "Find solutions that meet both security and business requirements",
                                "Let business leaders make all security decisions"
                            ],
                            correctAnswer: 2,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 4,
                            question: "What's your strategy for managing third-party security risks?",
                            options: [
                                "Trust all vendors completely",
                                "Never work with third parties",
                                "Implement vendor risk assessment and ongoing monitoring programs",
                                "Only check security once during vendor selection"
                            ],
                            correctAnswer: 2,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 5,
                            question: "How do you measure the effectiveness of security controls?",
                            options: [
                                "Count the number of security tools deployed",
                                "Use metrics like incident response time, vulnerability remediation, and risk reduction",
                                "Measure only the cost of security tools",
                                "Assume controls are effective if no incidents occur"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        }
                    ]
                }
            },
            soft: {
                title: "Soft Skills Assessment",
                duration: 30,
                questions: {
                    Beginner: [
                        {
                            id: 1,
                            question: "How do you communicate security risks to non-technical stakeholders?",
                            options: [
                                "Use technical jargon to show expertise",
                                "Explain risks in business terms with clear impact and recommendations",
                                "Avoid discussing risks to prevent panic",
                                "Let someone else handle communications"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 2,
                            question: "What's your approach to handling security incidents under pressure?",
                            options: [
                                "Panic and make quick decisions",
                                "Follow established procedures while staying calm and focused",
                                "Wait for someone else to take charge",
                                "Blame others for the incident"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 3,
                            question: "How do you stay updated with cybersecurity trends?",
                            options: [
                                "Wait for others to inform you",
                                "Follow security publications, attend conferences, and participate in communities",
                                "Only learn when required for work",
                                "Assume current knowledge is sufficient"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 4,
                            question: "What's your approach to working with other IT teams?",
                            options: [
                                "Work in isolation to avoid conflicts",
                                "Collaborate actively and share security knowledge",
                                "Only interact when security issues arise",
                                "Let managers handle all coordination"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 5,
                            question: "How do you handle situations where security measures inconvenience users?",
                            options: [
                                "Remove security measures to make users happy",
                                "Explain the importance and work to find user-friendly solutions",
                                "Ignore user complaints",
                                "Implement security measures without explanation"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        }
                    ],
                    Intermediate: [
                        {
                            id: 1,
                            question: "How do you communicate security risks to non-technical stakeholders?",
                            options: [
                                "Use technical jargon to show expertise",
                                "Explain risks in business terms with clear impact and recommendations",
                                "Avoid discussing risks to prevent panic",
                                "Let someone else handle communications"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 2,
                            question: "How do you handle disagreements about security priorities?",
                            options: [
                                "Insist on your priorities without discussion",
                                "Use risk assessment data to facilitate informed discussions",
                                "Always defer to others' priorities",
                                "Avoid discussing priorities altogether"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 3,
                            question: "What's your approach to building security awareness across the organization?",
                            options: [
                                "Send occasional security emails",
                                "Create engaging, relevant training and ongoing communication",
                                "Assume people will learn from experience",
                                "Focus only on IT staff"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 4,
                            question: "How do you manage relationships with external security vendors?",
                            options: [
                                "Accept everything vendors recommend",
                                "Evaluate recommendations against organizational needs and constraints",
                                "Avoid working with external vendors",
                                "Let procurement handle all vendor relationships"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 5,
                            question: "What's your strategy for continuous learning in cybersecurity?",
                            options: [
                                "Wait for company-provided training",
                                "Actively pursue certifications, training, and hands-on experience",
                                "Only learn about tools currently used",
                                "Assume current skills are sufficient"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        }
                    ],
                    Junior: [
                        {
                            id: 1,
                            question: "How do you influence security decisions when you don't have authority?",
                            options: [
                                "Use data, risk analysis, and compelling business cases",
                                "Escalate to management immediately",
                                "Give up if people don't listen",
                                "Use fear tactics to motivate action"
                            ],
                            correctAnswer: 0,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 2,
                            question: "What's your approach to incident communication during a security breach?",
                            options: [
                                "Share all technical details immediately",
                                "Provide timely, accurate updates appropriate for each audience",
                                "Wait until the incident is fully resolved",
                                "Let legal team handle all communications"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 3,
                            question: "How do you handle situations where business needs conflict with security requirements?",
                            options: [
                                "Always prioritize security",
                                "Always prioritize business needs",
                                "Work collaboratively to find solutions that address both concerns",
                                "Let executives make all decisions"
                            ],
                            correctAnswer: 2,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 4,
                            question: "What's your strategy for mentoring junior security professionals?",
                            options: [
                                "Let them learn through trial and error",
                                "Share knowledge, provide guidance, and create learning opportunities",
                                "Do their work for them to ensure quality",
                                "Only help when directly asked"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 5,
                            question: "How do you build trust with business stakeholders?",
                            options: [
                                "Focus only on technical expertise",
                                "Understand business context and demonstrate security value",
                                "Avoid interacting with business stakeholders",
                                "Always agree with stakeholder requests"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        }
                    ],
                    Senior: [
                        {
                            id: 1,
                            question: "How do you drive security culture change in an organization?",
                            options: [
                                "Mandate security policies through authority",
                                "Lead by example, educate stakeholders, and demonstrate security value",
                                "Wait for leadership to drive change",
                                "Focus only on technical controls"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 2,
                            question: "What's your approach to building a security program for multiple business units?",
                            options: [
                                "Use the same approach for all units",
                                "Develop tailored strategies while maintaining consistent standards",
                                "Let each unit create their own security program",
                                "Focus only on the highest-risk unit"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 3,
                            question: "How do you handle ethical considerations in cybersecurity?",
                            options: [
                                "Focus only on protecting the organization",
                                "Consider broader implications including privacy, transparency, and societal impact",
                                "Let legal team handle all ethical decisions",
                                "Avoid situations with ethical implications"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 4,
                            question: "What's your strategy for communicating with the board about cybersecurity?",
                            options: [
                                "Focus on technical details and tools",
                                "Present business risks, strategic initiatives, and ROI in business terms",
                                "Avoid board presentations",
                                "Only present when there's a security incident"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 5,
                            question: "How do you balance innovation with security in a fast-moving organization?",
                            options: [
                                "Always prioritize security over innovation",
                                "Always prioritize innovation over security",
                                "Integrate security into innovation processes and find enabling solutions",
                                "Let business leaders make all decisions"
                            ],
                            correctAnswer: 2,
                            type: "multiple-choice",
                            difficulty: "senior"
                        }
                    ]
                }
            }
        },
        "business-analyst": {
            title: "Business Analyst",
            description: "Business process analysis and requirements assessment",
            experienceLevels: ["Beginner", "Intermediate", "Junior", "Senior"],
            technical: {
                title: "Technical Assessment",
                duration: 45,
                questions: {
                    Beginner: [
                        {
                            id: 1,
                            question: "What is the primary purpose of requirements gathering?",
                            options: [
                                "To increase project timeline",
                                "To understand and document business needs",
                                "To justify project costs",
                                "To assign blame when projects fail"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 2,
                            question: "What is a stakeholder in business analysis?",
                            options: [
                                "Someone who owns company stock",
                                "Anyone who is affected by or can influence the project",
                                "Only the project manager",
                                "Only the end users"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 3,
                            question: "What is a use case?",
                            options: [
                                "A description of how a system is used to achieve a goal",
                                "A list of system features",
                                "A project timeline",
                                "A budget estimate"
                            ],
                            correctAnswer: 0,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 4,
                            question: "What is the difference between functional and non-functional requirements?",
                            options: [
                                "Functional requirements work, non-functional don't",
                                "Functional describe what the system does, non-functional describe how it performs",
                                "Functional are more important than non-functional",
                                "There is no difference"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 5,
                            question: "What is a business process?",
                            options: [
                                "A legal procedure",
                                "A series of activities that accomplish a business objective",
                                "A type of software",
                                "A meeting format"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        }
                    ],
                    Intermediate: [
                        {
                            id: 1,
                            question: "What is the primary purpose of requirements gathering?",
                            options: [
                                "To increase project timeline",
                                "To understand and document business needs",
                                "To justify project costs",
                                "To assign blame when projects fail"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 2,
                            question: "What is gap analysis?",
                            options: [
                                "Finding gaps in documentation",
                                "Comparing current state with desired future state",
                                "Analyzing budget shortfalls",
                                "Identifying missing team members"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 3,
                            question: "What is the purpose of a traceability matrix?",
                            options: [
                                "To track project costs",
                                "To link requirements to their sources and test cases",
                                "To trace employee performance",
                                "To track system bugs"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 4,
                            question: "What is SWOT analysis?",
                            options: [
                                "A project management methodology",
                                "Analysis of Strengths, Weaknesses, Opportunities, and Threats",
                                "A type of software testing",
                                "A budgeting technique"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 5,
                            question: "What is the purpose of process modeling?",
                            options: [
                                "To create visual representations of business processes",
                                "To model employee behavior",
                                "To create financial models",
                                "To design user interfaces"
                            ],
                            correctAnswer: 0,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        }
                    ],
                    Junior: [
                        {
                            id: 1,
                            question: "How do you handle conflicting requirements from different stakeholders?",
                            options: [
                                "Choose the requirement from the highest-ranking stakeholder",
                                "Facilitate discussions to understand underlying needs and find solutions",
                                "Implement all requirements regardless of conflicts",
                                "Ignore conflicting requirements"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 2,
                            question: "What's your approach to requirements validation?",
                            options: [
                                "Assume all documented requirements are correct",
                                "Review requirements with stakeholders and test against business objectives",
                                "Only validate technical requirements",
                                "Let developers validate requirements during implementation"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 3,
                            question: "How do you prioritize requirements when resources are limited?",
                            options: [
                                "Implement requirements in the order they were received",
                                "Use techniques like MoSCoW method or value vs. effort analysis",
                                "Let stakeholders fight it out",
                                "Choose the easiest requirements first"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 4,
                            question: "What's your approach to change management in projects?",
                            options: [
                                "Resist all changes to maintain original scope",
                                "Accept all changes without question",
                                "Evaluate impact and follow formal change control processes",
                                "Let project managers handle all changes"
                            ],
                            correctAnswer: 2,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 5,
                            question: "How do you ensure requirements are testable?",
                            options: [
                                "Assume all requirements are automatically testable",
                                "Write requirements with specific, measurable criteria",
                                "Let testers figure out how to test requirements",
                                "Only worry about testing after development is complete"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        }
                    ],
                    Senior: [
                        {
                            id: 1,
                            question: "How do you develop a business analysis strategy for a complex transformation project?",
                            options: [
                                "Use the same approach as previous projects",
                                "Assess organizational readiness, stakeholder landscape, and create tailored approach",
                                "Let project managers define the strategy",
                                "Focus only on technical requirements"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 2,
                            question: "What's your approach to enterprise-level business architecture?",
                            options: [
                                "Focus only on individual projects",
                                "Create holistic view of business capabilities, processes, and information flows",
                                "Let architects handle all architecture decisions",
                                "Avoid enterprise-level thinking"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 3,
                            question: "How do you measure the business value of analysis activities?",
                            options: [
                                "Count the number of requirements documented",
                                "Measure impact on project success, stakeholder satisfaction, and business outcomes",
                                "Focus only on time spent on analysis",
                                "Assume analysis always adds value"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 4,
                            question: "What's your strategy for building business analysis capabilities in an organization?",
                            options: [
                                "Hire more business analysts",
                                "Develop standards, training programs, and communities of practice",
                                "Let each team develop their own approach",
                                "Focus only on tools and techniques"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 5,
                            question: "How do you handle ethical considerations in business analysis?",
                            options: [
                                "Focus only on business objectives",
                                "Consider stakeholder impact, transparency, and long-term consequences",
                                "Let legal team handle all ethical decisions",
                                "Avoid projects with ethical implications"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        }
                    ]
                }
            },
            soft: {
                title: "Soft Skills Assessment",
                duration: 30,
                questions: {
                    Beginner: [
                        {
                            id: 1,
                            question: "How do you handle situations where stakeholders provide vague requirements?",
                            options: [
                                "Accept vague requirements as given",
                                "Ask probing questions to clarify and understand underlying needs",
                                "Make assumptions about what they mean",
                                "Let developers interpret vague requirements"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 2,
                            question: "What's your approach to facilitating requirements workshops?",
                            options: [
                                "Let stakeholders talk without structure",
                                "Prepare agenda, guide discussions, and ensure all voices are heard",
                                "Only invite senior stakeholders",
                                "Avoid workshops and gather requirements individually"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 3,
                            question: "How do you communicate complex business concepts to technical teams?",
                            options: [
                                "Use only business terminology",
                                "Translate business needs into clear, technical requirements",
                                "Let business stakeholders explain directly to developers",
                                "Avoid technical teams altogether"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 4,
                            question: "What's your approach to documenting requirements?",
                            options: [
                                "Write everything in technical jargon",
                                "Use clear, concise language that all stakeholders can understand",
                                "Copy requirements from similar projects",
                                "Keep documentation to a minimum"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        },
                        {
                            id: 5,
                            question: "How do you stay updated with business analysis best practices?",
                            options: [
                                "Rely only on past experience",
                                "Read industry publications, attend training, and network with peers",
                                "Wait for company-provided training",
                                "Assume current knowledge is sufficient"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "beginner"
                        }
                    ],
                    Intermediate: [
                        {
                            id: 1,
                            question: "How do you handle situations where stakeholders provide vague requirements?",
                            options: [
                                "Accept vague requirements as given",
                                "Ask probing questions to clarify and understand underlying needs",
                                "Make assumptions about what they mean",
                                "Let developers interpret vague requirements"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 2,
                            question: "How do you manage stakeholder expectations when project scope changes?",
                            options: [
                                "Accept all scope changes without question",
                                "Communicate impact clearly and facilitate informed decision-making",
                                "Resist all scope changes",
                                "Let project managers handle all scope discussions"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 3,
                            question: "What's your approach to building consensus among diverse stakeholders?",
                            options: [
                                "Let the loudest voice win",
                                "Facilitate discussions to find common ground and shared objectives",
                                "Make decisions unilaterally",
                                "Avoid situations requiring consensus"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 4,
                            question: "How do you handle resistance to change from stakeholders?",
                            options: [
                                "Force change through authority",
                                "Understand concerns, address them, and demonstrate benefits",
                                "Ignore resistance and proceed anyway",
                                "Give up on proposed changes"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        },
                        {
                            id: 5,
                            question: "What's your strategy for continuous improvement in business analysis?",
                            options: [
                                "Stick with proven methods",
                                "Seek feedback, learn new techniques, and adapt approaches",
                                "Wait for others to suggest improvements",
                                "Focus only on current project needs"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "intermediate"
                        }
                    ],
                    Junior: [
                        {
                            id: 1,
                            question: "How do you influence decisions when you don't have direct authority?",
                            options: [
                                "Use data, analysis, and compelling business cases",
                                "Escalate to management immediately",
                                "Give up if people don't listen",
                                "Use pressure tactics"
                            ],
                            correctAnswer: 0,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 2,
                            question: "What's your approach to managing conflicting priorities from different business units?",
                            options: [
                                "Work on whoever asks last",
                                "Facilitate alignment discussions and establish clear priority criteria",
                                "Try to satisfy everyone equally",
                                "Let executives make all priority decisions"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 3,
                            question: "How do you handle situations where analysis reveals uncomfortable truths?",
                            options: [
                                "Hide negative findings",
                                "Present findings objectively with recommendations for improvement",
                                "Only share positive findings",
                                "Let others discover problems on their own"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 4,
                            question: "What's your strategy for mentoring junior business analysts?",
                            options: [
                                "Let them learn through trial and error",
                                "Share knowledge, provide guidance, and create learning opportunities",
                                "Do their work for them to ensure quality",
                                "Only help when directly asked"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        },
                        {
                            id: 5,
                            question: "How do you build credibility with business stakeholders?",
                            options: [
                                "Focus only on technical expertise",
                                "Understand business context and demonstrate value through insights",
                                "Agree with everything stakeholders say",
                                "Avoid challenging stakeholder assumptions"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "junior"
                        }
                    ],
                    Senior: [
                        {
                            id: 1,
                            question: "How do you drive organizational change through business analysis?",
                            options: [
                                "Focus only on documenting current state",
                                "Identify improvement opportunities and build coalition for change",
                                "Wait for leadership to drive change",
                                "Avoid recommending changes"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 2,
                            question: "What's your approach to building business analysis capabilities across an organization?",
                            options: [
                                "Hire more business analysts",
                                "Develop standards, training programs, and communities of practice",
                                "Let each team develop their own approach",
                                "Focus only on tools and templates"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 3,
                            question: "How do you balance stakeholder needs with organizational constraints?",
                            options: [
                                "Always prioritize stakeholder needs",
                                "Always prioritize organizational constraints",
                                "Find creative solutions that address both concerns",
                                "Let executives make all trade-off decisions"
                            ],
                            correctAnswer: 2,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 4,
                            question: "What's your strategy for managing complex stakeholder ecosystems?",
                            options: [
                                "Treat all stakeholders the same",
                                "Develop stakeholder-specific engagement strategies based on influence and interest",
                                "Only work with the most senior stakeholders",
                                "Avoid complex stakeholder situations"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        },
                        {
                            id: 5,
                            question: "How do you ensure business analysis adds strategic value?",
                            options: [
                                "Focus only on tactical requirements",
                                "Connect analysis activities to business strategy and outcomes",
                                "Let others worry about strategic value",
                                "Measure success only by deliverable completion"
                            ],
                            correctAnswer: 1,
                            type: "multiple-choice",
                            difficulty: "senior"
                        }
                    ]
                }
            }
        }
    }
}

export const getExamByPath = (careerPath, examType, experienceLevel = "Intermediate") => {
    const career = careerPaths[careerPath]

    if (!career || !career[examType]) {
        return null
    }

    const exam = career[examType]
    const questionsSource = exam.questions || {}
    const experienceLevelQuestions = questionsSource[experienceLevel] || questionsSource["Intermediate"]

    return {
        ...exam,
        questions: Array.isArray(experienceLevelQuestions) ? experienceLevelQuestions : Object.values(experienceLevelQuestions).flat(),
    }
}

export const getCareerPaths = () => {
    return Object.keys(careerPaths).map((key) => ({
        id: key,
        ...careerPaths[key],
    }))
}

export const getFilteredCareerPaths = ({ fieldOfWork } = {}) => {
    const allPaths = getCareerPaths()

    if (!fieldOfWork) return allPaths

    const fieldToCareerMapping = {
        "Software Development": ["software-developer"],
        "Data Science": ["data-scientist"],
        "Product Management": ["product-manager"],
        "Digital Marketing": ["digital-marketer"],
        "UI/UX Design": ["ui-ux-designer"],
        Cybersecurity: ["cybersecurity-analyst"],
        "Business Analysis": ["business-analyst"],
        "DevOps Engineering": ["software-developer"], // Map to closest available
    }

    const relevantCareers = fieldToCareerMapping[fieldOfWork] || []

    return relevantCareers.length > 0
        ? allPaths.filter((career) => relevantCareers.includes(career.id))
        : allPaths
}
