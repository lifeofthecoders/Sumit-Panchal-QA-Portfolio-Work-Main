// ============================================================
// portfolioData.js — Centralized configuration for the portfolio
// All external links, personal info, and content in one place.
// ============================================================

export const personalInfo = {
  name: "Sumit Panchal",
  firstName: "Sumit",
  brandName: "Sumit Panchal",
  title: "Quality Assurance Analyst | Manual QA",
  location: "India",
  phone: "+91 9640225564",
  emails: {
    primary: "sumitpanchal5225@gmail.com",
    secondary: "lifeofthecoders@gmail.com",
  },
  summary:
    "Quality Assurance professional focused on manual testing, test case design, test execution, defect reporting, regression testing, and improving software quality and user experience.",
  resumeUrl: "/Sumit_Panchal_QA_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/lifeofthecoders",
  linkedin: "https://www.linkedin.com/in/sumit-panchal-b790a8236/",
  instagram: "https://www.instagram.com/workhard2livelarge?igsh=MmM0YmZvNHc0bDZ2",
  facebook: "https://www.facebook.com/share/1BxMxaQsV8/",
  quora: "https://www.quora.com/profile/Sumit-Panchal-345",
};

export const heroContent = {
  greeting: "Hi, I'm Sumit Panchal",
  titleHighlight: "Quality Assurance Analyst Manual QA",
  subtitle:
    "Quality Assurance professional focused on manual testing, test case design, test execution, defect reporting, functional testing, regression testing, smoke & sanity testing, and improving software quality and user experience.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "#contact",
  },
  ctaResume: { text: "Download Resume", href: "/Sumit_Panchal_QA_Resume.pdf" },
};

export const aboutContent = {
  heading: "Building Reliable Software Through Precision Testing",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Sumit Panchal</span>, a Quality Assurance professional who focuses on understanding requirements, validating user workflows, identifying defects, and helping teams deliver dependable software. My QA approach emphasizes careful observation, structured test cases, clear bug reports, and user-focused testing. I collaborate with developers and stakeholders to communicate issues clearly and support a smoother release process.`,
  techStack: ["Manual Testing", "Test Case Design", "Test Execution", "Bug Reporting", "Regression Testing", "Smoke Testing", "Exploratory Testing", "Jira", "Postman", "AI/ML"],
  highlights: [
    "⭐ Manual QA & Software Testing",
    "⭐ Test Case Design & Test Execution",
    "⭐ Functional, Smoke & Sanity Testing",
    "⭐ Bug Reporting & Defect Tracking",
    "⭐ Regression Testing & Verification",
    "⭐ QA Portfolio & Project Testing",
  ]
};

export const technicalSkills = {
  categories: [
    {
      title: "Manual Testing",
      skills: [
        { name: "Functional Testing", level: 90 },
        { name: "Regression Testing", level: 90 },
        { name: "Smoke Testing", level: 85 },
        { name: "Sanity Testing", level: 75 },
        { name: "Exploratory Testing", level: 80 },
        { name: "UI Testing", level: 80 },
        { name: "Usability Testing", level: 90 },
      ],
    },
    {
      title: "Test Design & Documentation",
      skills: [
        { name: "Test Scenarios", level: 92 },
        { name: "Test Case Writing", level: 95 },
        { name: "Test Data Preparation", level: 70 },
        { name: "Requirement Analysis", level: 82 },
        { name: "Boundary Value Analysis", level: 85 },
        { name: "Equivalence Partitioning", level: 75 },
        { name: "Defect Reporting & Bug Documentation", level: 90 },
        { name: "Traceability", level: 85 },
      ],
    },
    {
      title: "Defect Management & Reporting",
      skills: [
        { name: "Bug Reporting", level: 90 },
        { name: "Defect Lifecycle", level: 95 },
        { name: "Severity & Priority", level: 70 },
        { name: "Retesting", level: 90 },
        { name: "Regression Verification", level: 95 },
      ],
    },
    {
      title: "QA Tools & Collaboration",
      skills: [
        { name: "Jira", level: 95 },
        { name: "Test Documentation", level: 85 },
        { name: "Git & GitHub", level: 85 },
        { name: "Browser DevTools", level: 85 },
        { name: "Chrome / Firefox Testing", level: 85 },
        { name: "Agile / Scrum", level: 75 },
        { name: "Bug Tracking & Defect Management", level: 88 },
        { name: "Microsoft Excel / Google Sheets", level: 80 },
      ],
    },
    {
      title: "Web & Compatibility Testing",
      skills: [
        { name: "Cross-Browser Testing", level: 88 },
        { name: "Responsive UI Testing", level: 75 },
        { name: "Form Validation", level: 90 },
        { name: "Authentication Workflows", level: 90 },
        { name: "Navigation & Links", level: 82 },
        { name: "Broken Links Testing", level: 80 },
        { name: "UI Consistency Testing", level: 82 },
        { name: "Session & Cookie Testing", level: 70 },
        { name: "Accessibility Testing", level: 85 },
      ],
    },
    {
      title: "Quality Practices & Process Improvement",
      skills: [
        { name: "Risk-Based Testing", level: 82 },
        { name: "Positive & Negative Testing", level: 85 },
        { name: "Edge-Case Testing", level: 75 },
        { name: "Release Validation", level: 80 },
        { name: "Root-Cause Investigation", level: 80 },
        { name: "Regression Testing", level: 95 },
        { name: "Smoke & Sanity Testing", level: 80 },
        { name: "Defect Lifecycle Management", level: 88 },
      ],
    },
    {
      title: "API & Data Testing",
      skills: [
        { name: "Postman", level: 75 },
        { name: "REST API Validation", level: 70 },
        { name: "HTTP Status Codes", level: 77 },
        { name: "JSON Validation", level: 80 },
        { name: "SQL Queries", level: 60 },
        { name: "Request/Response Checks", level: 75 },
      ],
    },
  ],
};

export const skillsContent = {
  badge: "My QA Process",
  heading: "A structured approach to software quality",
  description:
    "I follow a user-focused testing process to understand expected behavior, find defects, and communicate results clearly.",
  cards: [
    {
      number: "01",
      title: "Understand",
      text: "Review requirements, acceptance criteria, user stories, and workflows to understand expected behavior.",
    },
    {
      number: "02",
      title: "Plan",
      text: "Identify test scenarios, prepare test cases, consider edge cases, and prioritize testing based on risk.",
    },
    {
      number: "03",
      title: "Test",
      text: "Execute test cases, explore important workflows, record actual results, and report reproducible defects.",
    },
    {
      number: "04",
      title: "Verify",
      text: "Retest fixes, run relevant regression tests, and communicate test results and remaining risks.",
    },
  ],
  endText: "Quality is a team effort!",
};

export const projects = [

  // LYMÜV - Taxi Booking Application
  {
    id: "lymuv-taxi-booking",
    number: "01",
    badge: "🚖 Taxi Booking & Ride-Hailing QA Project",
    title: "LYMÜV - Taxi Booking Application",
    description:
      "A real-time taxi booking platform with live tracking, digital payments, wallet, promotions, ratings, and invoicing. QA coverage includes end-to-end booking workflows, driver assignment logic, payment gateway and wallet validation, notifications, invoicing, and admin panel functionality across Android, iOS, and web admin platforms.",
    techTags: [
      "Manual Testing",
      "Ride Booking Flow",
      "Driver Assignment",
      "Payment & Wallet",
      "Live Tracking",
      "Notifications",
      "Regression Testing",
      "Admin Panel Testing",
    ],
    links: {
      github: "https://github.com/lifeofthecoders",
      demo: "https://lifeofthecoders.github.io/Sumit-Panchal-QA-Portfolio/#/projects?project=1",
    },
    isFlagship: true,
  },

  //Dap Me - Professional Networking Application
  {
    id: "dap-me-professional-networking",
    number: "02",
    badge: "🤝 Professional Networking QA Project",
    title: "Dap Me - Professional Networking Application",
    description:
      "A React Native professional networking application for discovering professionals, connecting with people, chatting in real time, sharing profiles, and managing professional interactions securely. Testing covers authentication, profile management, connections, messaging, notifications, subscriptions, payment gateway workflows, and admin moderation.",
    techTags: [
      "Manual Testing",
      "Registration & Login",
      "User Profiles",
      "Connections & Networking",
      "Chat & Messaging",
      "Search & Discovery",
      "Notifications",
      "Privacy & Account Settings",
      "Admin Panel",
    ],
    links: {
      github: "https://github.com/lifeofthecoders",
      demo: "https://lifeofthecoders.github.io/Sumit-Panchal-QA-Portfolio/#/projects?project=2",
    },
    isFlagship: false,
  },

  // Kinzwin - Multiplayer Gaming Platform & Scoreboard Application
  {
    id: "kinzwin-multiplayer-gaming",
    number: "03",
    badge: "🎮 Multiplayer Gaming & Scoreboard QA Project",
    title: "Kinzwin - Multiplayer Gaming Platform & Scoreboard Application",
    description:
      "A competitive multiplayer gaming platform offering casual and skill-based games, social engagement, and real-time competition. QA activities include gameplay and scoring validation, multiplayer synchronization, chat functionality, leaderboard verification, fair-play checks, and release regression testing.",
    techTags: [
      "Manual QA",
      "Gameplay Testing",
      "Scoring Validation",
      "Multiplayer Synchronization",
      "Chat Testing",
      "Leaderboards",
      "Fair Play Validation",
      "Regression Testing",
    ],
    links: {
      github: "https://github.com/lifeofthecoders",
      demo: "https://lifeofthecoders.github.io/Sumit-Panchal-QA-Portfolio/#/projects?project=3",
    },
    isFlagship: false,
  },

  // Bunny Books - Photo Book E-Commerce Application
  {
    id: "bunny-books-photo-book",
    number: "04",
    badge: "📸 Photo Book E-Commerce QA Project",
    title: "Bunny Books - Photo Book E-Commerce Application",
    description:
      "A photo-book ordering platform that enables users to upload photos, create and preview personalized photo books, select layouts and cover types, complete secure checkout, and track order delivery. Testing focuses on photo uploads, album creation, design previews, cart and checkout flows, payment processing, notifications, delivery tracking, and admin management.",
    techTags: [
      "Manual Testing",
      "Photo Upload",
      "Album Creation",
      "Design Preview",
      "Cart & Checkout",
      "Payment Processing",
      "Order Management",
      "Delivery Tracking",
      "Notifications",
    ],
    links: {
      github: "https://github.com/lifeofthecoders",
      demo: "https://lifeofthecoders.github.io/Sumit-Panchal-QA-Portfolio/#/projects?project=4",
    },
    isFlagship: false,
  },

  // Health-E - Digital Health & Medical Records Application
  {
    id: "health-e-digital-health",
    number: "05",
    badge: "🩺 Digital Health & Medical Records QA Project",
    title: "Health-E - Digital Health & Medical Records Application",
    description:
      "An ABHA-focused digital health application for managing medical records, health information, appointments, medication reminders, and emergency contacts. QA coverage includes mobile registration and OTP verification, profile validation, medical-record lifecycle operations, appointment scheduling, ABHA number generation, pregnancy and paediatric care features, and administrator access controls.",
    techTags: [
      "Manual QA",
      "Registration & OTP Verification",
      "Medical Records & Reports",
      "Profile & Health Information",
      "Appointment Scheduling",
      "Medication Reminders",
      "ABHA Number Generation",
      "Pregnancy & Paediatric Modules",
      "Authentication & Role-Based Access",
    ],
    links: {
      github: "https://github.com/lifeofthecoders",
      demo: "https://lifeofthecoders.github.io/Sumit-Panchal-QA-Portfolio/#/projects?project=5",
    },
    isFlagship: false,
  },

  // reGive - Community Sharing & Gift Transaction Application
  {
    id: "regive-community-sharing",
    number: "06",
    badge: "🎁 Community Sharing & Gift Transaction QA Project",
    title: "reGive - Community Sharing & Gift Transaction Application",
    description:
      "A community-sharing app where users post articles they want to give away, browse item details, send or withdraw requests, and coordinate pickup times. The documented transaction lifecycle progresses through Posted, Requested, Promised, Accepted, Handover, Pickup, Concluded, and Rating, with notifications and expiry handling for time-sensitive steps.",
    techTags: [
      "Manual Testing",
      "Post & Edit Article",
      "Image Upload & Item Details",
      "Article Request & Withdrawal",
      "Promise, Accept & Decline",
      "Pickup Time & Address Selection",
      "Transaction Status Progression",
      "Notifications & Reminders",
      "Rating Scenarios",
    ],
    links: {
      github: "https://github.com/lifeofthecoders",
      demo: "https://lifeofthecoders.github.io/Sumit-Panchal-QA-Portfolio/#/projects?project=6",
    },
    isFlagship: false,
  },
];

export const contentCreation = {
  badge: "Quality in Practice",
  heading: "Testing from the user's point of view",
  description: "My QA focus is on validating important workflows, uncovering unexpected behavior, and giving teams actionable information about product quality.",
  categories: [
    {
      title: "Functional Testing",
      description: "Validate features against requirements, acceptance criteria, and expected business behavior.",
      stats: "Requirements & Workflows",
      icon: "🧪",
    },
    {
      title: "Test Case Design",
      description: "Create organized test scenarios and cases that cover positive, negative, boundary, and alternate paths.",
      stats: "Coverage & Traceability",
      icon: "📝",
    },
    {
      title: "Defect Reporting",
      description: "Document clear steps to reproduce, expected and actual results, supporting evidence, and impact.",
      stats: "Reproducible Bug Reports",
      icon: "🐛",
    },
    {
      title: "Regression Testing",
      description: "Ensure that new code changes do not negatively impact existing functionality.",
      stats: "Maintainability & Stability",
      icon: "🔄",
    },
    {
      title: "API Testing",
      description: "Validate API requests and responses, status codes, response data, and error handling where applicable.",
      stats: "Postman & REST APIs",
      icon: "🔌",
    },
    {
      title: "UI, UX & Cross-Browser Excellence",
      description:
        "Validate responsive layouts, intuitive user journeys, forms, navigation, and cross-browser consistency to deliver seamless, reliable digital experiences.",
      stats: "Responsive Design • Usability • Compatibility",
      icon: "🖥️",
    },
  ],
};

export const internshipsList = [
  {
    organization: "Makein Technologies",
    role: "Manual QA / Quality Assurance Analyst",
    type: "Internship / Project",
    duration: "January 2021 – March 2021",
    skills: [
      "Requirement Analysis",
      "Test Case Design",
      "Manual Test Execution",
      "Defect Reporting",
      "Regression Testing"
    ],
    tech: [
      "Jira",
      "Redmine",
      "Trello",
      "TestRail",
      "Browser DevTools",
      "Microsoft Excel",
      "Google Sheets"
    ],
  },
  {
    organization: "Makein Technologies",
    role: "Automation QA Engineer",
    type: "Internship / Project",
    duration: "April 2021 – June 2026",
    skills: [
      "Automation Test Script Development",
      "Web UI Automation",
      "Automated Regression Testing",
      "API Test Automation",
      "Test Framework Design",
      "Test Data Management",
      "Defect Reporting & Root-Cause Analysis",
      "Continuous Integration & Test Execution",
      "Collaboration with Developers & QA Team"
    ],
    tech: [
      "Selenium WebDriver",
      "Java",
      "TestNG",
      "Maven",
      "REST Assured",
      "Jenkins",
      "Git & GitHub",
      "Cucumber BDD",
      "Browser DevTools",
      "BrowserStack",
      "Jira",
      "TestNG Reports",
      "Allure Reports"
    ],
  },
  {
    organization: "Echo Innovate IT",
    role: "Manual QA Engineer | Quality Assurance Analyst",
    type: "Full-Time Employment / Projects",
    duration: "June 2021 – Present",
    skills: [
      "Requirement Analysis & Test Planning",
      "Test Scenarios & Test Case Design",
      "Functional & End-to-End Testing",
      "Regression, Smoke & Sanity Testing",
      "Exploratory & Risk-Based Testing",
      "Positive, Negative & Boundary Testing",
      "Web UI & Cross-Browser Compatibility",
      "Responsive Design & Usability Testing",
      "Database & Data Validation",
      "Defect Reporting, Triage & Retesting",
      "Root-Cause Investigation",
      "User Acceptance Testing (UAT)",
      "Release Validation & Quality Sign-Off",
      "Agile / Scrum & SDLC / STLC",
      "Test Documentation & QA Reporting"
    ],
    tech: [
      "Jira",
      "Chrome DevTools",
      "BrowserStack",
      "Selenium WebDriver",
      "Java",
      "TestNG",
      "Maven",
      "Microsoft Excel",
      "Google Sheets",
      "Git",
      "GitHub",
      "Chrome",
      "Firefox",
      "Microsoft Edge",
      "JSON",
      "Confluence"
    ],
  },
];

export const education = {
  degree: "Bachelor of Engineering (B.E.) in Electronics and Communications Engineering",
  institution: "Silver Oak University, Ahmedabad, India",
  cgpa: "7.48",
  graduation: "2018",

  diploma: "Diploma of Engineering (D.E.) in Electronics and Communications Engineering",
  institution: "Atul Polytechnic, Khadat, Mahudi, India",
  diplomaCgpa: "7.74",
  diplomaYear: "2014",

  twelfth: "Intermediate (MPC) – 90.60%",
  tenth: "Senior Secondary – Completed",
  achievements: [
    "⭐ Department Topper with 7.48 CGPA",
    "⭐ 450+ LeetCode Problems Solved",
    "⭐ 500+ CodeChef Problems Solved",
    "⭐ 250+ GeeksforGeeks Problems Solved",
    "⭐ 15+ HackerRank Badges",
    "⭐ Adobe Hackathon Round 1 Finalist",
    "⭐ HackerEarth Hackathon Round 1 Finalist",
    "⭐ 40+ Industry-Grade Software Engineering Projects Completed"
  ]
};

export const leadershipList = [
  {
    title: "QA Collaboration",
    description: "Work collaboratively with developers and stakeholders by sharing clear findings, asking requirement questions, and helping clarify expected behavior.",
    role: "Quality-Focused Team Contributor",
    badge: "Collaboration",
  },
  {
    title: "Test Documentation",
    description: "Organize test scenarios, test cases, execution results, and defect evidence so testing work can be reviewed and repeated.",
    role: "Test Documentation Specialist",
    badge: "Process & Organization",
  },
  {
    title: "Continuous Improvement",
    description: "Use lessons from test execution and defect analysis to improve coverage, prioritization, and the clarity of QA communication.",
    role: "Continuous Learner",
    badge: "Growth & Improvement",
  },
];

export const certificates = {
  featured: [
    {
      name: "Certified Tester – Foundation Level (CTFL)",
      issuer: "ISTQB — verify issuing board and certificate",
      icon: "🧪",
    },
    {
      name: "Certified Tester – Foundation Level Agile Tester (CTFL-AT)",
      issuer: "ISTQB — verify issuing board and certificate",
      icon: "🔄",
    },
    {
      name: "ISTQB Automation Test Engineer",
      issuer: "Verify the official qualification title and issuer",
      icon: "🤖",
    },
    {
      name: "Quality Analyst Assessment",
      issuer: "As stated on the certificate",
      icon: "🔍",
    },
    {
      name: "API Integration",
      issuer: "LearnTube.ai",
      icon: "🔗",
    },
    {
      name: "Component Testing",
      issuer: "LearnTube.ai",
      icon: "🧩",
    },
    {
      name: "Frontend Debugging",
      issuer: "LearnTube.ai",
      icon: "🐞",
    },
    {
      name: "Business Analyst Assessment",
      issuer: "LearnTube.ai",
      icon: "📊",
    },
  ],

  viewAllUrl:
    "https://drive.google.com/drive/folders/1KAzZNVsiafrUw9DHKvzEc-LusKSMz9tG?usp=sharing",
};

export const softSkillsList = [
  { name: "Attention to Detail", icon: "🔎", desc: "Carefully inspect workflows, content, and results to identify inconsistencies and unexpected behavior." },
  { name: "Analytical Thinking", icon: "🧠", desc: "Ability to break down complex problems and analyze data to make informed decisions." },
  { name: "Risk-Based Testing", icon: "🎯", desc: "Prioritize test coverage based on business impact, application risk, and potential failure points to maximize quality within release timelines." },
  { name: "Defect Lifecycle Management", icon: "📋", desc: "Manage defects from identification and documentation through triage, retesting, and closure while maintaining clear traceability and supporting release decisions." },
  { name: "Communication", icon: "💬", desc: "Explain defects and test findings in a clear, respectful, and actionable way." },
  { name: "Team Collaboration", icon: "🤝", desc: "Work with developers and stakeholders to clarify issues and support shared quality goals." },
  { name: "Problem Solving", icon: "🛠️", desc: "Investigate unexpected behavior and gather evidence that helps the team understand the issue." },
  { name: "Adaptability", icon: "🌱", desc: "Quick to learn new tools, frameworks, and adjust test coverage as requirements, priorities, and application behavior change." },
  { name: "Time Management", icon: "⏰", desc: "Prioritize testing based on risk, business importance, and available time." },
  { name: "Creativity", icon: "🎨", desc: "Balancing user experience, design, and engineering with thoughtful execution." },
  { name: "Leadership", icon: "👑", desc: "Guide and motivate teams to achieve quality goals and improve processes." },
  { name: "Continuous Learning", icon: "📚", desc: "Keep improving QA techniques, tools, and product knowledge through practice and feedback." },
];

export const footerContent = {
  taglines: [
    "   Manual QA & Software Testing Experience",
    "Functional · Regression · Smoke · UAT Testing",
    "Test Case Design · Defect Tracking · Quality Assurance",
  ],
  credential: [
    "B.E. Electronics and Communications Engineering",
    "CGPA 7.48 · Silver Oak University",
    "Ahmedabad, India",
  ],
  copyright: [
    `© ${new Date().getFullYear()} 
    Sumit Panchal | Quality Assurance Analyst | Manual QA | Software Testing`,
    `All Rights Reserved | Designed & Developed by Sumit Panchal`,
  ],
  motto: [`"Quality is a Team Effort"`, `
    Building Confidence Through Testing`],
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
