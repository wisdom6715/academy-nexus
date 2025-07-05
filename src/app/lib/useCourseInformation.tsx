export default function CourseInfo(){
  const courseData = {
    "fullstack-development": {
      id: "fullstack-development",
      title: "Full Stack Development Bootcamp",
      subtitle: "Master Frontend and Backend Technologies",
      category: "Software Development",
      level: "Beginner to Advanced",
      nextCohort: "May 1, 2024",
      students: 11200,
      price: 180000,
      originalPrice: 200000,
      description: "Become a proficient full stack developer by mastering both frontend technologies like React and backend systems with Node.js. Learn to build complete web applications from database to UI with modern tools and best practices.",
      image: "/images/fullstack-dev.jpeg",
      gradient: "from-cyan-500 via-cyan-600 to-cyan-700",
      features: [
        "108 hours of live instruction",
        "10 hands-on projects",
        "Career services support",
        "Lifetime access to materials",
        "Industry-standard tooling",
        "Certificate of completion"
      ],
      about: `The Full Stack Engineering program is designed to equip you with the comprehensive skills and knowledge to build complete, end-to-end web applications. This hands-on course blends the art of creating dynamic, responsive user interfaces with the science of building secure, scalable backend systems. You’ll gain proficiency in frontend technologies like HTML, CSS, JavaScript, React, and Vue.js, as well as backend tools such as Node.js, Express.js, and database systems.

Throughout the program, you’ll learn to design seamless user experiences, implement real-time features with WebSockets, and build and consume RESTful APIs. Emphasis is placed on writing clean, maintainable code, using Git and GitHub for version control, and deploying full-stack applications to leading cloud platforms. In addition to technical mastery, you’ll develop a professional portfolio website and GitHub repository to showcase your projects and attract potential employers. Whether you're starting from scratch or aiming to become a well-rounded developer, this program prepares you for real-world challenges and job opportunities in today’s fast-paced tech landscape.`,
      outline: [
        "Master responsive web design techniques to create websites that adapt flawlessly across all screen sizes and devices, delivering an exceptional user experience.",
        "Create a personal portfolio website to demonstrate your skills, projects, and design aesthetic—essential for job applications and networking.",
        "Apply best practices in coding standards, version control, and collaboration through hands-on experience with Git and GitHub, including pull requests, branching, and code reviews.",
        "Build and maintain a professional GitHub portfolio showcasing your projects, code quality, and progression as a frontend engineer.",
        "Learn to interact with server-side APIs through RESTful services and GraphQL, efficiently fetching and displaying data in your applications",
        "Develop expertise in deploying frontend applications to popular hosting platforms such as Netlify, Vercel, and AWS Amplify, understanding the full deployment lifecycle.",
        "Optimize web performance by implementing techniques to reduce load times, improve rendering speed, and enhance overall user experience.",
        "Learn accessibility standards and SEO basics to ensure your applications are inclusive and discoverable by search engines",
        "Prepare thoroughly for frontend engineering interviews with practical coding challenges, technical quizzes, and mock interview sessions.",
        "Explore modern frontend tooling and workflows, including package managers (npm/yarn), module bundlers (Webpack, Vite), and CSS preprocessors (Sass, Less).",
        "Gain proficiency in server-side development using widely adopted technologies such as Node.js and Express.js, building scalable and maintainable backend systems",
        "Understand and implement real-time communication with WebSockets, enabling live updates, chat applications, and interactive user experiences.",
        "Design, develop, and document RESTful and GraphQL APIs for seamless and efficient data exchange between frontend and backend services.",
        "Deploy backend applications on cloud and hosting platforms like AWS, Azure, Heroku, and DigitalOcean, making your projects production-ready and accessible worldwide.",
        "Master database integration and management by working with both SQL (PostgreSQL, MySQL) and NoSQL databases (MongoDB), ensuring efficient data storage, retrieval, and security.",
        "Learn authentication and authorization techniques, including JWT, OAuth, and session management, to build secure backend systems.",
        "Automate testing and continuous integration (CI/CD) pipelines to ensure reliable and maintainable backend code.",
        "Prepare for backend engineering interviews by practicing common coding challenges, system design questions, and technical problem-solving techniques."
      ],
      career: [
        "Full-stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "Technical Consultant",
        "Node.js Developer",
        "Junior Software Engineer",
      ]
    },

    "business-intelligence": {
      id: "business-intelligence",
      title: "Business Intelligence and Data Analysis",
      subtitle: "Transform Data into Actionable Business Insights",
      category: "Data Analytics",
      level: "Beginner to Intermediate",
      nextCohort: "May 1, 2024",
      students: 9250,
      price: 100000,
      originalPrice: 120000,
      description: "Master the tools and techniques to transform raw data into strategic insights. Learn Excel, SQL, Power BI, and Tableau to create compelling visualizations and dashboards that drive business decisions.",
      image: "/images/business-analysis.jpeg",
      gradient: "from-blue-500 via-blue-600 to-blue-700",
      features: [
        "60 hours of live instruction",
        "5 real-world projects",
        "1-on-1 mentorship sessions",
        "Career coaching",
        "Lifetime access to resources",
        "Industry-standard tools",
        "Certificate of completion"
      ],
      about: `The Business Intelligence and Data Analysis program is designed to equip learners with the practical skills and knowledge needed to transform data into actionable business insights. This hands-on program blends the core principles of data analysis with business intelligence strategies, empowering you to analyze trends, make informed decisions, and communicate insights effectively.

Explore statistical techniques, data storytelling, and visual analytics using industry-standard tools like Excel, SQL, Power BI, Tableau, and more. You'll also gain real-world experience working with databases and dashboards, while building a professional portfolio and showcasing your work on GitHub and your personal portfolio website.

Whether you're looking to start a career in data or enhance your decision-making skills in your current role, this program prepares you to become a confident, job-ready data analyst across various industries. Enroll today to harness the power of business intelligence and make data work for you.
`,
      outline:[
        "Build a solid foundation in statistical principles that are critical for effective data analysis and data-driven decision-making in real-world scenarios.",
        "Master spreadsheet tools like Microsoft Excel and Google Sheets for data cleaning, transformation, and analysis.",
        "Craft compelling, data-driven presentations using tools such as Google Slides and Microsoft PowerPoint, enabling you to effectively communicate insights to both technical and non-technical audiences.",
        "Develop data storytelling and visualization skills using platforms such as Tableau Public, Power BI, Google Data Studio, and spreadsheet-based charting tools.",
        "Gain hands-on experience with relational databases by working with MySQL and PostgreSQL to understand data storage, management, and retrieval",
        "Write and optimize SQL queries to extract, analyze, and manipulate data from databases for meaningful insights",
        "Build and showcase your projects on GitHub, demonstrating version control practices and collaborative workflows used by professionals in the data field.",
        "Create a personal Portfolio Website to display your projects, visualizations, and dashboards — establishing your online presence and making you job-market ready."
      ],
      career:[
        "Data Analyst",
        "Business Intelligence Analyst",
        "Reporting Analyst",
        "Data Visualization Specialist",
        "Operations Analyst",
        "Market Research Analyst",
        "Junior Data Scientist",
        "SQL Developer",
        "Business Analyst"

      ]
    },

    "data-science": {
      id: "data-science",
      title: "Data Science Immersive",
      subtitle: "Master Machine Learning and Advanced Analytics",
      category: "Data Science",
      level: "Intermediate to Advanced",
      nextCohort: "June 10, 2024",
      students: 6870,
      price: 120000,
      originalPrice: 150000,
      description: "This comprehensive program covers everything from Python programming to advanced machine learning algorithms. Gain hands-on experience with real datasets and build a portfolio of data science projects.",
      image: "/images/data-science.jpeg",
      gradient: "from-purple-500 via-purple-600 to-purple-700",
      features: [
        "96 hours of live instruction",
        "8 hands-on projects",
        "Weekly code reviews",
        "Career services",
        "Lifetime access to materials",
        "GPU cloud resources",
        "Certificate of completion"
      ],
      about:`The Data Science Program is an immersive 8-month learning journey designed to take you from foundational concepts to advanced, real-world applications in the field of data science. Whether you're transitioning into tech, expanding your current skill set, or aiming to become a full-fledged data scientist, this program is structured to guide you every step of the way.

Through a blend of hands-on projects, real datasets, and modern tools, you will build a strong foundation in programming, statistics, machine learning, and data visualization. You will also explore ethical issues in data usage and gain practical experience with popular libraries and frameworks such as Pandas, NumPy, Scikit-learn, TensorFlow, and Keras.

In addition to core technical skills, the program emphasizes industry readiness. You will learn version control using Git and GitHub, enabling professional collaboration and code management, and you will develop a personal portfolio website to showcase your projects, analytical reports, and machine learning models—helping you stand out in job applications or freelance opportunities.

By the end of this program, you won’t just know data science—you’ll have a portfolio to prove it.
`,
      outline: [
        "Develop strong proficiency in data structures and algorithms to efficiently manipulate and analyze complex datasets.",
        "Apply feature engineering techniques and understand different optimization algorithms to enhance model training and performance.",
        "Perform data cleaning, preprocessing, and mining to uncover valuable patterns and insights from raw data.",
        "Understand and apply key concepts such as learning rates, learning schedules, and loss functions for fine-tuning machine learning models.",
        "Gain in-depth knowledge of essential machine learning algorithms including linear regression, logistic regression, decision trees, random forests, ensemble methods, and clustering techniques.",
        "Create compelling data visualizations using libraries such as Matplotlib and Seaborn to effectively communicate your findings.",
        "Build, train, and evaluate neural networks using popular deep learning frameworks such as Keras and TensorFlow.",
        "Examine the ethical considerations and responsibilities involved in real-world data science applications.",
        "Design and implement recommendation systems to provide personalized user experiences.",
        "Learn version control using Git and GitHub, enabling you to collaborate on projects, track your progress, and manage your codebase professionally.",
        "Build a professional portfolio website to showcase your projects, analyses, and visualizations to potential employers or clients."
      ],
      career:[
        "Data Scientist",
        "Machine Learning Engineer",
        "Research Scientist",
        "AI Specialist",
        "Quantitative Analyst",
        "Data Analyst (Advanced Level)",
        "Business Intelligence Scientist"
      ]
    },

    "cloud-devops": {
      id: "cloud-devops",
      title: "Cloud and Devops",
      subtitle: "From Spreadsheets to SQL and Beyond",
      category: "cloud",
      level: "Beginner to advance",
      nextCohort: "May 1, 2024",
      students: 10350,
      price: 120000,
      originalPrice: 150000,
      description: "Learn the essential skills needed to analyze and interpret data effectively. Master Excel, SQL, and basic Python for data manipulation, visualization, and reporting across various business contexts.",
      image: "/images/cloud.jpeg",
      gradient: "from-green-500 via-green-600 to-green-700",
      features: [
        "56 hours of live instruction",
        "5-months program",
        "Weekly Q&A sessions",
        "Career guidance",
        "Lifetime access to materials",
        "Community Slack channel",
        "Certificate of completion"
      ],
      about: `The Cloud & DevOps Engineering program is designed to equip learners with the essential skills to design, deploy, and manage modern cloud infrastructure using industry-leading platforms like AWS and Microsoft Azure. This hands-on course blends core cloud computing concepts with DevOps best practices to enable seamless, automated software delivery and infrastructure management.

You will learn how to build scalable, secure, and highly available systems, implement Continuous Integration and Continuous Deployment (CI/CD) pipelines, and leverage containerization and orchestration tools such as Docker and Kubernetes. The program also emphasizes collaboration and version control through GitHub, empowering you to work efficiently in team environments.

With a strong focus on practical experience, you’ll develop a professional portfolio and GitHub repository to showcase your projects, preparing you for in-demand roles in cloud engineering and DevOps. Whether you’re starting your career or looking to upskill, this program will prepare you to drive innovation and operational excellence in today’s cloud-first world.
`,
      outline:[
        "Gain proficiency in cloud computing fundamentals and master key services in both AWS and Microsoft Azure platforms.",
        "Learn to design, deploy, and manage scalable cloud infrastructure, including compute, storage, and networking resources, using AWS and Azure.",
        "Understand and implement DevOps principles such as Continuous Integration (CI), Continuous Deployment (CD), and Infrastructure as Code (IaC) with tools like Jenkins, GitHub Actions, Terraform, and Azure DevOps.",
        "Automate cloud resource provisioning and configuration to streamline development workflows and reduce manual effort.",
        "Master containerization technologies like Docker and orchestration platforms such as Kubernetes for efficient application deployment and management.",
        "Implement monitoring, logging, and alerting solutions to maintain application health and ensure high availability in cloud environments.",
        "Develop skills in version control and collaboration using GitHub, enabling effective teamwork and project management.",
        "Build, test, and deploy infrastructure and applications securely and reliably across hybrid and multi-cloud environments.",
        "Create a professional portfolio website and GitHub repository showcasing your cloud and DevOps projects to demonstrate your job readiness.",
        "Prepare confidently for Cloud and DevOps engineering roles with interview strategies, practical exercises, and real-world projects."
      ],
      career:[
        "Cloud Engineer",
        "DevOps Engineer",
        "Site Reliability Engineer (SRE)",
        "Cloud Solutions Architect",
        "Infrastructure Engineer"
      ]
    },

    "data-engineering": {
    id: "data-engineering",
    title: "Data Engineering Bootcamp",
    subtitle: "Build Scalable Data Infrastructure for Modern Organizations",
    category: "Data Engineering",
    level: "Beginner",
    nextCohort: "May 1, 2024",
    students: 7850,
    price: 120000,
    originalPrice: 150000,
    description: "Master the skills to design, build, and maintain the data infrastructure that powers modern organizations. This hands-on program covers everything from large-scale data pipelines to cloud deployment on Azure, AWS, and Microsoft Fabric, with practical experience in relational/NoSQL databases, Apache Beam, and DBT.",
    image: "/images/data-engineering.jpeg",
    gradient: "from-indigo-500 via-indigo-600 to-indigo-700",
    features: [
      "90 hours of live instruction",
      "6 hands-on projects",
      "1-on-1 code reviews",
      "Career coaching sessions",
      "Lifetime access to resources",
      "Cloud platform credits",
      "Certificate of completion"
    ],
    about:`The Data Engineering program is designed to empower learners with the critical skills needed to design, build, and maintain the data infrastructure that powers today’s data-driven organizations. This hands-on course covers everything from managing large-scale data pipelines to deploying solutions on leading cloud platforms like Azure, AWS, and Microsoft Fabric.

You will gain expertise in working with relational and NoSQL databases, orchestrating complex data workflows, and mastering tools like Apache Beam and DBT for data transformation and modeling. The program also emphasizes practical experience, helping you build a professional GitHub portfolio and a personal website to showcase your projects.

Whether you aspire to become a data engineer, cloud data specialist, or work in big data analytics, this program prepares you for real-world challenges and high-demand roles in the data ecosystem. Enroll today to start building the foundation for a successful career in data engineering.`,
    outline:[
      "Develop expertise in handling and processing large binary objects (BLOBs) and file systems efficiently across diverse platforms.",
      "Build and orchestrate scalable data pipelines for both batch and real-time streaming data processing, leveraging industry best practices.",
      "Master advanced SQL querying techniques to interact with and manipulate data in relational databases effectively.",
      "Gain proficiency in job scheduling and workflow orchestration to automate and manage complex data workflows seamlessly.",
      "Understand the core principles of relational database systems and their applications in data engineering.",
      "Explore Apache Beam for unified batch and streaming data processing, enabling flexible and scalable data workflows.",
      "Work with NoSQL and object-oriented databases to efficiently manage and query unstructured and semi-structured data.",
      "Learn to use DBT (Data Build Tool) for robust data transformation, modeling, and version control.",
      "Design and manage data warehouses and data lakes to optimize data storage, retrieval, and analytics.",
      "Gain hands-on experience with major cloud platforms including Microsoft Azure, Amazon Web Services (AWS), and Microsoft Fabric, learning to deploy and manage data engineering solutions in scalable cloud environments.",
      "Build a professional GitHub portfolio to showcase your projects, code, and collaborative workflows.",
      "Create a personal portfolio website to present your data engineering projects, demonstrating your skills and readiness to potential employers."
    ],
    career:[
      "Data Engineer",
      "Cloud Data Engineer",
      "Big Data Engineer",
      "Data Pipeline Developer",
      "ETL Developer",
      "Data Warehouse Engineer",
      "Database Administrator (DBA)",
      "Cloud Solutions Engineer"
    ]
  }
  };
  return{
    courseData
  }
}
