export const personalInfo = {
  name: "Christian George Warren",
  title: "Data Analyst | Aspiring Machine Learning Engineer | AI Enthusiast",
  subtitle: "Computer Science Student • Mapúa University – Makati",
  university: "Mapúa University – Makati",
  degree: "Bachelor of Science in Computer Science",
  location: "Makati City, Philippines",
  profileImage: "/profile.png",

  heroBio: "I enjoy working with data, discovering meaningful insights, and exploring how machine learning can be applied to real-world problems. As an active AI Enthusiast, I love building projects with AI, modern LLM pipelines, and intelligent workflows to solve complex challenges.",

  aboutBio: "I'm a Computer Science student at Mapúa University who builds data systems and backend architectures using modern AI-augmented workflows. I leverage AI as an advanced co-pilot to accelerate development, optimize SQL pipelines, and prototype applications rapidly—allowing me to focus on database design, data analytics, and solving complex problems.",

  learningQuote: "My goal is not simply to learn technologies, but to understand them deeply and apply them to meaningful real-world problems. While I specialize in data analysis and machine learning, game development serves as my creative outlet and stress reliever—a space where I can unwind, experiment freely, and keep my passion for building alive.",

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
    title: "Programming & Query Languages",
    skills: [
      { name: "Python", desc: "Data manipulation, scripting, statistical modeling & ML workflows" },
      { name: "SQL", desc: "Complex queries, multi-table aggregations, joins & view optimizations" },
      { name: "FastAPI", desc: "Production REST APIs & machine learning model deployment" }
    ]
  },
  {
    id: "analysis",
    title: "Data Analysis & Modeling",
    skills: [
      { name: "Pandas", desc: "DataFrames, grouping, pivot tables & data restructuring" },
      { name: "NumPy", desc: "Numerical arrays, vectorization & mathematical operations" },
      { name: "Data Modeling", desc: "Relational schema design, entity relationships & data normalization" },
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
      { name: "Power BI", desc: "Interactive executive dashboards, KPI metrics & risk tracking" },
      { name: "Matplotlib", desc: "Custom publication-quality charts & static plots" },
      { name: "Seaborn", desc: "Statistical data visualization & attractive distribution plots" }
    ]
  },
  {
    id: "tools",
    title: "Databases & Platforms",
    skills: [
      { name: "PostgreSQL", desc: "Relational database architecture, table schemas & indexing" },
      { name: "Git / GitHub", desc: "Version control, branching & repository management" },
      { name: "Jupyter Notebook", desc: "Exploratory data analysis & model documentation" },
      { name: "Uvicorn", desc: "ASGI web server implementation for model deployment" }
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
    githubUrl: "https://github.com/Apak-C/Retail_Sales",
    liveDemoUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "Customer Churn Intelligence System",
    subtitle: "Supervised Customer Churn Classification Model",
    category: "Machine Learning",
    summary: "Predict customer churn patterns and identify key retention drivers across 440K+ subscription records using machine learning.",
    problem: "Identifying at-risk customer churn patterns across large-scale subscription data (440K+ rows) enables targeted retention strategies and prevents revenue loss.",
    solution: "Engineered a Random Forest model and deployed it via a production-ready FastAPI REST API, achieving 99.96% accuracy and enabling real-time automated churn prediction workflows.",
    techList: "Python • Pandas • Scikit-Learn • FastAPI • Uvicorn • Jupyter Notebook",
    technologies: ["Python", "Pandas", "Scikit-Learn", "FastAPI", "Uvicorn", "Jupyter Notebook"],
    githubUrl: "https://github.com/Apak-C/customer-churn-prediction",
    liveDemoUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Retail Banking Executive Dashboard & Risk Analysis",
    subtitle: "PostgreSQL Pipeline & Power BI Executive Dashboard",
    category: "Business Intelligence",
    summary: "Architected a relational database pipeline and interactive Power BI executive dashboard to monitor loan portfolios, deposit trends, and credit risk exposure.",
    problem: "Retail banking leadership lacks centralized, real-time visibility into active loan portfolios, customer deposit trends, and high-risk default exposure.",
    solution: "Built an end-to-end data pipeline by architecting a relational PostgreSQL database, writing optimized SQL views for multi-table aggregation, and developing an interactive Power BI executive dashboard to track credit risk and financial KPIs.",
    techList: "PostgreSQL · SQL · Power BI · Data Modeling",
    technologies: ["PostgreSQL", "SQL", "Power BI", "Data Modeling"],
    githubUrl: "https://github.com/Apak-C/RetailBankingDB",
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

export const extraCurricularProjects = [
  {
    id: "been-here-before",
    title: "Been Here Before",
    subtitle: "2D Psychological Horror Game",
    category: "Game Development",
    summary: "A 2D psychological horror game inspired by Exit 8, where players are trapped inside a looping apartment environment. Requires careful observation of surroundings to spot subtle anomalies, track progressive reality distortions, and escape before time runs unstable.",
    contribution: "Contributed most on animation (character sprites, anomaly transitions & scene rigging) and conducted pre-release playtesting & QA validation.",
    problem: "Designing an unsettling looping environment with progressive psychological tension, subtle visual anomalies, and seamless room loop resets.",
    solution: "Programmed core loop detection and anomaly state machines in Godot Engine, authored custom frame-by-frame 2D pixel animations in Aseprite, built 3D environmental references in Blender, and performed extensive playtesting to catch anomaly bugs and balance difficulty prior to release.",
    techList: "GDScript · Godot Engine · Aseprite · Blender · Git · QA Playtesting",
    technologies: ["GDScript", "Godot Engine", "Aseprite", "Blender", "Git", "QA Playtesting"],
    githubUrl: "https://github.com/Dooooooks/scream",
    liveDemoUrl: "#"
  }
];


