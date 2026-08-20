export const personalInfo = {
  name: "Christian George Warren",
  title: "Data Analyst | Aspiring Machine Learning Engineer",
  subtitle: "Computer Science Student • Mapúa University – Makati",
  university: "Mapúa University – Makati",
  degree: "Bachelor of Science in Computer Science",
  location: "Makati City, Philippines",
  profileImage: "/profile.png",

  heroBio: "I enjoy working with data, discovering meaningful insights, and exploring how machine learning can be applied to real-world problems. As an aspiring Machine Learning Engineer, I am continuously learning and sharpening my skills in data analysis, Python, and AI.",

  aboutBio: "I enjoy transforming raw data into meaningful insights and am aspiring to become a Machine Learning Engineer. My current focus is on building a strong foundation in data analysis, Python, SQL, visualization, and machine learning workflows. I believe that mastering this field is a continuous journey, and I am always excited to experiment, learn, and grow.",

  learningQuote: "My goal is not simply to learn technologies, but to understand them deeply and apply them to meaningful real-world problems. I am continuously improving my skills in data analysis, machine learning, and AI while building projects that allow me to learn through practice.",

  contactIntro: "I'm always open to new opportunities, collaborations, and conversations about data, machine learning, and technology. Feel free to reach out directly via email or connect on social platforms.",

  socials: {
    email: "warrenchristian91@gmail.com",
    github: "https://github.com/Apak-C",
    linkedin: "https://linkedin.com/in/christian-george-warren-9a7163337",
    facebook: "https://www.facebook.com/nerraw24"
  }
};

export const skillCategories = [
  {
    id: "programming",
    title: "Programming Languages & Frameworks",
    skills: [
      { name: "Python", desc: "Data manipulation, scripting, statistical modeling & ML workflows" },
      { name: "SQL", desc: "PostgreSQL & MySQL queries, joins, aggregations & database design" },
      { name: "Java", desc: "Object-oriented programming concepts & algorithms" },
      { name: "Spring Boot", desc: "Basic backend REST APIs & Java application fundamentals" }
    ]
  },
  {
    id: "analysis",
    title: "Data Analysis & Manipulation",
    skills: [
      { name: "Pandas", desc: "DataFrames, grouping, pivot tables & data restructuring" },
      { name: "NumPy", desc: "Numerical arrays, vectorization & mathematical operations" },
      { name: "Data Cleaning", desc: "Handling missing values, outlier detection & normalization" }
    ]
  },
  {
    id: "ml-ai",
    title: "Machine Learning & AI",
    skills: [
      { name: "Scikit-Learn", desc: "Supervised classification, regression & clustering models" },
      { name: "LangChain", tag: "LLM Pipelines", desc: "Prompt engineering & document contextual Q&A workflows" }
    ]
  },
  {
    id: "visualization",
    title: "Data Visualization & BI",
    skills: [
      { name: "Power BI", desc: "Interactive dashboards & KPI metrics" },
      { name: "Excel", desc: "Data analysis, formulas, charts & pivot tables" },
      { name: "Matplotlib", desc: "Custom publication-quality charts & static plots" },
      { name: "Seaborn", desc: "Statistical data visualization & attractive distribution plots" }
    ]
  },
  {
    id: "tools",
    title: "Databases & Developer Tools",
    skills: [
      { name: "PostgreSQL", desc: "Relational database management & complex queries" },
      { name: "MySQL", desc: "Database administration & schema design" },
      { name: "Git / GitHub", desc: "Version control, branching & repository management" },
      { name: "Jupyter Notebook", desc: "Exploratory data analysis & model documentation" },
      { name: "VS Code", desc: "Code editing, virtual environment management & debugging" }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Real-World Data Analysis",
    subtitle: "Exploratory Data Analysis & Statistical Trends",
    category: "Data Analysis",
    summary: "Analyze a real-world dataset and discover trends, patterns, and meaningful insights.",
    problem: "Raw unorganized datasets often hide crucial operational patterns and business metrics that require systematic exploratory data analysis.",
    solution: "Executed thorough data cleaning, feature engineering, statistical distribution checks, and visualization to extract actionable insights.",
    techList: "Python · Pandas · NumPy · Matplotlib · Seaborn",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/Apak-C",
    liveDemoUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Machine Learning Prediction",
    subtitle: "Supervised Customer Churn Classification Model",
    category: "Machine Learning",
    summary: "Build a machine learning model capable of making predictions from historical data.",
    problem: "Identifying at-risk customer churn patterns early enables targeted retention strategies and reduces revenue loss.",
    solution: "Engineered and evaluated classification algorithms (Random Forest, Logistic Regression) using Scikit-Learn to forecast churn probability.",
    techList: "Python · Pandas · Scikit-Learn",
    technologies: ["Python", "Pandas", "Scikit-Learn"],
    githubUrl: "https://github.com/Apak-C",
    liveDemoUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "AI Application",
    subtitle: "LLM Document Knowledge Assistant",
    category: "AI Application",
    summary: "An AI-powered application demonstrating the integration of AI and machine learning technologies.",
    problem: "Extracting precise information from lengthy technical document sets is time-consuming.",
    solution: "Built a context-aware document assistant using LangChain and Python for natural language querying over document contexts.",
    techList: "Python · LangChain · AI",
    technologies: ["Python", "LangChain", "AI"],
    githubUrl: "https://github.com/Apak-C",
    liveDemoUrl: "#",
    featured: true
  }
];

export const dataInMotionMetrics = {
  kpis: [
    { label: "Datasets Processed", value: "45+", change: "Structured & Unstructured" },
    { label: "ML Experiments", value: "120+", change: "Classification & Regression" },
    { label: "Data Visualizations", value: "250+", change: "Seaborn / Matplotlib / Recharts" },
    { label: "Model Precision", value: "91.4%", change: "Avg Cross-Validation Score" }
  ],

  trainingCurve: [
    { epoch: "Ep 1", trainingLoss: 0.85, valLoss: 0.88, accuracy: 62 },
    { epoch: "Ep 5", trainingLoss: 0.62, valLoss: 0.65, accuracy: 74 },
    { epoch: "Ep 10", trainingLoss: 0.44, valLoss: 0.48, accuracy: 81 },
    { epoch: "Ep 15", trainingLoss: 0.31, valLoss: 0.36, accuracy: 87 },
    { epoch: "Ep 20", trainingLoss: 0.22, valLoss: 0.29, accuracy: 91 },
    { epoch: "Ep 25", trainingLoss: 0.16, valLoss: 0.25, accuracy: 94 }
  ],

  featureImportance: [
    { feature: "Feature A (Usage)", importance: 88 },
    { feature: "Feature B (Tenure)", importance: 74 },
    { feature: "Feature C (Frequency)", importance: 65 },
    { feature: "Feature D (Support Calls)", importance: 52 },
    { feature: "Feature E (Monthly Spend)", importance: 45 },
    { feature: "Feature F (Contract Type)", importance: 38 }
  ],

  clusterData: [
    { x: 15, y: 78, cluster: "High Value" },
    { x: 22, y: 85, cluster: "High Value" },
    { x: 18, y: 92, cluster: "High Value" },
    { x: 55, y: 42, cluster: "Moderate" },
    { x: 62, y: 48, cluster: "Moderate" },
    { x: 50, y: 35, cluster: "Moderate" },
    { x: 82, y: 15, cluster: "Low Engagement" },
    { x: 88, y: 22, cluster: "Low Engagement" },
    { x: 75, y: 18, cluster: "Low Engagement" }
  ]
};

export const educationDetails = {
  institution: "Mapúa University – Makati",
  degree: "Bachelor of Science in Computer Science",
  period: "Present",
  location: "Makati City, Philippines",
  description: "Focusing on core Computer Science foundations, database systems, data structures, and specialized coursework in Data Analysis, Machine Learning, and Artificial Intelligence."
};
