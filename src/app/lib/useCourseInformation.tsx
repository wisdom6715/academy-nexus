export default function CourseInfo(){
  const courseData = {
    "fullstack-development": {
      id: "fullstack-development",
      title: "Full Stack Development Bootcamp",
      subtitle: "Master Frontend and Backend Technologies",
      category: "Software Development",
      level: "Beginner to Advanced",
      duration: "6 months",
      schedule: "Mon-Wed-Fri, 6:00 PM - 9:00 PM",
      nextCohort: "May 1, 2024",
      students: 11200,
      price: 3499,
      originalPrice: 4499,
      bootcampType: "Part-time Evening",
      description: "Become a proficient full stack developer by mastering both frontend technologies like React and backend systems with Node.js. Learn to build complete web applications from database to UI with modern tools and best practices.",
      image: "/images/fullstack-dev.jpeg",
      gradient: "from-cyan-500 via-cyan-600 to-cyan-700",
      skills: [
        "React",
        "Node.js",
        "Express",
        "SQL/NoSQL",
        "RESTful APIs",
        "Authentication",
        "Cloud Deployment"
      ],
      prerequisites: [
        "Basic programming knowledge",
        "Familiarity with HTML/CSS",
        "Logical problem-solving skills",
        "No prior framework experience required"
      ],
      learningOutcomes: [
        "Build complete full stack applications",
        "Develop responsive frontends with React",
        "Create robust backend services with Node.js",
        "Design and consume RESTful APIs",
        "Implement authentication and authorization",
        "Deploy applications to cloud platforms",
        "Collaborate using Git and GitHub",
        "Optimize application performance"
      ],
      curriculum: [
        {
          week: 1,
          title: "Web Fundamentals & Git",
          focus: "HTML, CSS, JavaScript Basics",
          topics: [
            "Modern HTML5/CSS3",
            "JavaScript ES6+",
            "DOM manipulation",
            "Git version control"
          ],
          projects: ["Personal Portfolio", "Interactive Quiz App"],
          duration: "9 hours"
        },
        {
          week: 2,
          title: "Frontend Foundations",
          focus: "React Fundamentals",
          topics: [
            "React components",
            "Props and state",
            "Hooks basics",
            "Component lifecycle"
          ],
          projects: ["Task Manager UI", "Weather App Interface"],
          duration: "9 hours"
        },
        {
          week: 3,
          title: "Backend Introduction",
          focus: "Node.js & Express",
          topics: [
            "Server-side JavaScript",
            "Express framework",
            "Routing",
            "Middleware"
          ],
          projects: ["Basic REST API", "Server-side Calculator"],
          duration: "9 hours"
        },
        {
          week: 4,
          title: "Database Integration",
          focus: "SQL & NoSQL",
          topics: [
            "Relational databases",
            "MongoDB basics",
            "ORMs/ODMs",
            "Database design"
          ],
          projects: ["Bookstore API", "User Management System"],
          duration: "9 hours"
        },
        {
          week: 5,
          title: "Advanced Frontend",
          focus: "React Ecosystem",
          topics: [
            "State management",
            "Context API",
            "React Router",
            "Component patterns"
          ],
          projects: ["E-commerce Frontend", "Dashboard UI"],
          duration: "9 hours"
        },
        {
          week: 6,
          title: "API Development",
          focus: "RESTful Services",
          topics: [
            "API design",
            "CRUD operations",
            "Error handling",
            "Data validation"
          ],
          projects: ["Blog API", "Authentication Service"],
          duration: "9 hours"
        },
        // Continue with remaining weeks...
      ],
      features: [
        "108 hours of live instruction",
        "10 hands-on projects",
        "Weekly 1-on-1 mentorship",
        "Career services support",
        "Lifetime access to materials",
        "Industry-standard tooling",
        "Certificate of completion"
      ],
      careerSupport: [
        "Technical interview preparation",
        "Resume and portfolio reviews",
        "Job search strategy",
        "Networking opportunities",
        "6 months post-graduation support"
      ],
      jobOutcomes: {
        placementRate: 91,
        averageSalary: 88000,
        timeToJob: 3.1,
        topCompanies: ["GitHub", "Netflix", "Spotify", "Airbnb", "Shopify"]
      }
    },
    "business-intelligence": {
      id: "business-intelligence",
      title: "Business Intelligence and Data Analysis",
      subtitle: "Transform Data into Actionable Business Insights",
      category: "Data Analytics",
      level: "Beginner to Intermediate",
      duration: "5 months",
      schedule: "Tue-Thu, 6:00 PM - 9:00 PM",
      nextCohort: "June 3, 2024",
      students: 9250,
      price: 2799,
      originalPrice: 3799,
      bootcampType: "Part-time Evening",
      description: "Master the tools and techniques to transform raw data into strategic insights. Learn Excel, SQL, Power BI, and Tableau to create compelling visualizations and dashboards that drive business decisions.",
      image: "/images/business-analysis.jpeg",
      gradient: "from-blue-500 via-blue-600 to-blue-700",
      skills: ["Excel", "Power BI", "Tableau", "SQL", "Data Visualization", "Dashboard Design"],
      prerequisites: [
        "Basic computer literacy",
        "Familiarity with spreadsheets",
        "Analytical mindset",
        "No prior coding experience required"
      ],
      learningOutcomes: [
        "Create interactive dashboards in Power BI and Tableau",
        "Write complex SQL queries for data analysis",
        "Clean and transform data using Excel",
        "Communicate insights through data storytelling",
        "Build a professional BI portfolio"
      ],
      curriculum: [
        {
          week: 1,
          title: "Excel for Data Analysis",
          focus: "Spreadsheet Mastery",
          topics: [
            "Advanced formulas and functions",
            "Pivot tables and charts",
            "Data cleaning techniques",
            "What-if analysis"
          ],
          projects: ["Sales Performance Dashboard", "Financial Analysis Report"],
          duration: "9 hours"
        },
        {
          week: 2,
          title: "SQL Fundamentals",
          focus: "Database Querying",
          topics: [
            "Relational database concepts",
            "SELECT statements",
            "Filtering and sorting",
            "Basic joins"
          ],
          projects: ["Retail Database Analysis", "Employee Data Queries"],
          duration: "9 hours"
        },
        // Continue with remaining weeks...
      ],
      features: [
        "60 hours of live instruction",
        "5 real-world projects",
        "1-on-1 mentorship sessions",
        "Career coaching",
        "Lifetime access to resources",
        "Industry-standard tools",
        "Certificate of completion"
      ],
      careerSupport: [
        "Resume and LinkedIn review",
        "Portfolio building",
        "Mock interviews",
        "Job search strategy",
        "3 months post-graduation support"
      ],
      jobOutcomes: {
        placementRate: 87,
        averageSalary: 72000,
        timeToJob: 3.8,
        topCompanies: ["Deloitte", "Accenture", "IBM", "Amazon", "Microsoft"]
      }
    },
    "data-science": {
      id: "data-science",
      title: "Data Science Immersive",
      subtitle: "Master Machine Learning and Advanced Analytics",
      category: "Data Science",
      level: "Intermediate to Advanced",
      duration: "8 months",
      schedule: "Mon-Wed-Fri, 6:00 PM - 9:00 PM",
      nextCohort: "June 10, 2024",
      students: 6870,
      price: 3999,
      originalPrice: 4999,
      bootcampType: "Part-time Evening",
      description: "This comprehensive program covers everything from Python programming to advanced machine learning algorithms. Gain hands-on experience with real datasets and build a portfolio of data science projects.",
      image: "/images/data-science.jpeg",
      gradient: "from-purple-500 via-purple-600 to-purple-700",
      skills: ["Python", "Machine Learning", "TensorFlow", "Pandas", "Data Visualization", "Statistical Modeling"],
      prerequisites: [
        "Basic programming knowledge",
        "College-level math",
        "Logical problem-solving skills",
        "Familiarity with statistics helpful but not required"
      ],
      learningOutcomes: [
        "Build and evaluate machine learning models",
        "Clean and analyze complex datasets",
        "Create compelling data visualizations",
        "Implement deep learning solutions",
        "Deploy models to production"
      ],
      curriculum: [
        {
          week: 1,
          title: "Python for Data Science",
          focus: "Programming Fundamentals",
          topics: [
            "Python syntax and structures",
            "NumPy and Pandas",
            "Data cleaning techniques",
            "Exploratory data analysis"
          ],
          projects: ["Data Cleaning Challenge", "Exploratory Analysis Report"],
          duration: "9 hours"
        },
        {
          week: 2,
          title: "Statistical Foundations",
          focus: "Probability and Inference",
          topics: [
            "Descriptive statistics",
            "Probability distributions",
            "Hypothesis testing",
            "Statistical modeling"
          ],
          projects: ["A/B Testing Analysis", "Statistical Simulation"],
          duration: "9 hours"
        },
        // Continue with remaining weeks...
      ],
      features: [
        "96 hours of live instruction",
        "8 hands-on projects",
        "Weekly code reviews",
        "Career services",
        "Lifetime access to materials",
        "GPU cloud resources",
        "Certificate of completion"
      ],
      careerSupport: [
        "Technical interview prep",
        "GitHub portfolio review",
        "Resume workshops",
        "Networking events",
        "6 months post-graduation support"
      ],
      jobOutcomes: {
        placementRate: 85,
        averageSalary: 95000,
        timeToJob: 4.2,
        topCompanies: ["Google", "Amazon", "Microsoft", "Tesla", "SpaceX"]
      }
    },
    "data-analysis": {
      id: "data-analysis",
      title: "Data Analysis Intensive",
      subtitle: "From Spreadsheets to SQL and Beyond",
      category: "Data Analytics",
      level: "Beginner to Intermediate",
      duration: "4 months",
      schedule: "Mon-Thu, 6:00 PM - 8:30 PM",
      nextCohort: "May 27, 2024",
      students: 10350,
      price: 2299,
      originalPrice: 3299,
      bootcampType: "Part-time Evening",
      description: "Learn the essential skills needed to analyze and interpret data effectively. Master Excel, SQL, and basic Python for data manipulation, visualization, and reporting across various business contexts.",
      image: "/images/data-analysis.jpeg",
      gradient: "from-green-500 via-green-600 to-green-700",
      skills: ["Excel", "SQL", "Python", "Data Visualization", "Statistical Analysis", "Reporting"],
      prerequisites: [
        "Basic computer skills",
        "High school math",
        "No prior coding experience needed",
        "Curiosity about data"
      ],
      learningOutcomes: [
        "Clean and transform data efficiently",
        "Write complex SQL queries",
        "Create meaningful data visualizations",
        "Perform statistical analysis",
        "Present data insights effectively"
      ],
      curriculum: [
        {
          week: 1,
          title: "Data Fundamentals",
          focus: "Excel Mastery",
          topics: [
            "Spreadsheet best practices",
            "Formulas and functions",
            "Pivot tables",
            "Basic charts and graphs"
          ],
          projects: ["Sales Analysis Dashboard", "Budget Tracker"],
          duration: "7 hours"
        },
        {
          week: 2,
          title: "SQL Essentials",
          focus: "Database Querying",
          topics: [
            "Relational database concepts",
            "SELECT statements",
            "Filtering and sorting",
            "Aggregate functions"
          ],
          projects: ["Customer Data Analysis", "Inventory Management Queries"],
          duration: "7 hours"
        },
        // Continue with remaining weeks...
      ],
      features: [
        "56 hours of live instruction",
        "4 practical projects",
        "Weekly Q&A sessions",
        "Career guidance",
        "Lifetime access to materials",
        "Community Slack channel",
        "Certificate of completion"
      ],
      careerSupport: [
        "Resume review",
        "LinkedIn optimization",
        "Interview preparation",
        "Job search tips",
        "3 months post-graduation support"
      ],
      jobOutcomes: {
        placementRate: 83,
        averageSalary: 68000,
        timeToJob: 3.5,
        topCompanies: ["Airbnb", "Uber", "Spotify", "Netflix", "Salesforce"]
      }
    },
    "data-engineering": {
    id: "data-engineering",
    title: "Data Engineering Bootcamp",
    subtitle: "Build Scalable Data Infrastructure for Modern Organizations",
    category: "Data Engineering",
    level: "Intermediate to Advanced",
    duration: "5 months",
    schedule: "Mon-Wed-Fri, 6:00 PM - 9:00 PM",
    nextCohort: "July 8, 2024",
    students: 7850,
    price: 3499,
    originalPrice: 4499,
    bootcampType: "Part-time Evening",
    description: "Master the skills to design, build, and maintain the data infrastructure that powers modern organizations. This hands-on program covers everything from large-scale data pipelines to cloud deployment on Azure, AWS, and Microsoft Fabric, with practical experience in relational/NoSQL databases, Apache Beam, and DBT.",
    image: "/images/data-engineering.jpeg",
    gradient: "from-indigo-500 via-indigo-600 to-indigo-700",
    skills: [
      "Apache Beam",
      "DBT",
      "SQL/NoSQL",
      "Azure",
      "AWS",
      "Data Pipelines",
      "Data Warehousing",
      "Microsoft Fabric"
    ],
    prerequisites: [
      "Basic programming knowledge",
      "Familiarity with databases helpful",
      "Understanding of data concepts",
      "No prior cloud experience required"
    ],
    learningOutcomes: [
      "Design and build scalable data pipelines",
      "Work with both relational and NoSQL databases",
      "Implement batch and streaming data processing",
      "Deploy solutions on Azure, AWS, and Microsoft Fabric",
      "Use DBT for data transformation and modeling",
      "Create professional GitHub portfolio",
      "Build personal portfolio website"
    ],
    curriculum: [
      {
        week: 1,
        title: "Data Infrastructure Fundamentals",
        focus: "Core Concepts & SQL Mastery",
        topics: [
          "Relational database principles",
          "Advanced SQL techniques",
          "Database optimization",
          "Indexing strategies"
        ],
        projects: ["Database Design Project", "Query Optimization Challenge"],
        duration: "9 hours"
      },
      {
        week: 2,
        title: "NoSQL & Distributed Systems",
        focus: "Unstructured Data Management",
        topics: [
          "MongoDB and document stores",
          "Cassandra wide-column DBs",
          "Redis key-value store",
          "Graph databases introduction"
        ],
        projects: ["NoSQL Database Implementation", "Data Modeling Exercise"],
        duration: "9 hours"
      },
      {
        week: 3,
        title: "Data Pipeline Development",
        focus: "ETL/ELT Processes",
        topics: [
          "Pipeline design patterns",
          "Data validation techniques",
          "Error handling strategies",
          "Workflow orchestration"
        ],
        projects: ["ETL Pipeline Implementation", "Data Quality Framework"],
        duration: "9 hours"
      },
      {
        week: 4,
        title: "Batch Processing with Apache Beam",
        focus: "Large-Scale Data Processing",
        topics: [
          "Beam programming model",
          "ParDo transforms",
          "GroupByKey operations",
          "Windowed processing"
        ],
        projects: ["Batch Processing Pipeline", "Data Aggregation System"],
        duration: "9 hours"
      },
      {
        week: 5,
        title: "Stream Processing",
        focus: "Real-Time Data Flows",
        topics: [
          "Streaming concepts",
          "Event-time processing",
          "Watermarks and triggers",
          "Stateful processing"
        ],
        projects: ["Real-Time Analytics Pipeline", "Streaming Data Dashboard"],
        duration: "9 hours"
      },
      // Continuing with remaining weeks...
      {
        week: 20,
        title: "Capstone Project & Deployment",
        focus: "End-to-End Solution",
        topics: [
          "Cloud deployment strategies",
          "Performance tuning",
          "Cost optimization",
          "Portfolio presentation"
        ],
        projects: ["Production-Ready Data Platform", "Portfolio Website"],
        duration: "9 hours"
      }
    ],
    features: [
      "90 hours of live instruction",
      "6 hands-on projects",
      "1-on-1 code reviews",
      "Career coaching sessions",
      "Lifetime access to resources",
      "Cloud platform credits",
      "Certificate of completion"
    ],
    careerSupport: [
      "Technical resume review",
      "GitHub portfolio optimization",
      "Mock system design interviews",
      "Salary negotiation guidance",
      "6 months post-graduation support"
    ],
    jobOutcomes: {
      placementRate: 89,
      averageSalary: 112000,
      timeToJob: 3.2,
      topCompanies: ["Netflix", "Uber", "Spotify", "Capital One", "JPMorgan"]
    }
  }
  };
  return{
    courseData
  }
}
