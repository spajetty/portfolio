/* ==========================================================
   Portfolio content — edit this file to update the site.
   ========================================================== */

window.PORTFOLIO = {
  education: [
    {
      level: "College",
      date: "2022 — 2026",
      title: "Bachelor of Science in Information Technology",
      school: "Polytechnic University of the Philippines",
      honor: "Magna Cum Laude"
    },
    {
      level: "Senior High School",
      date: "2020 — 2022",
      title: "TVL-ICT Strand",
      school: "Polytechnic University of the Philippines",
      honor: "Top 1 Strand Rank"
    },
    {
      level: "Junior High School",
      date: "2016 — 2022", // TODO: check this range, it overlaps with senior high
      title: "Junior High School",
      school: "Sergio Osmeña Sr. High School",
      honor: "Valedictorian"
    }
  ],

  experience: [
    {
      date: "June 2026 — Aug 2026",
      role: "Software Developer",
      org: "Public Employment Service Office (PESO) — Short-Term Contract",
      bullets: [
        "Led the development of REFER, a full-stack recruitment and job referral platform using React, TypeScript, Node.js/Express, and MySQL.",
        "Developed job matching, referral, job posting, and applicant management workflows across jobseeker, employer, and administrator roles.",
        "Implemented JWT-based authentication and role-based authorization to secure access to sensitive health and administrative data."
      ],
      stack: ["React", "TypeScript", "Node.js", "Express", "MySQL", "JWT"]
    },
    {
      date: "Feb 2026 — May 2026",
      role: "Software Developer Intern",
      org: "Public Employment Service Office (PESO)",
      bullets: [
        "Developed ASCEND, an internal employment management platform using JavaScript, MySQL, PHP, and Tailwind CSS to centralize employment program records.",
        "Engineered RESTful APIs and optimized database operations for program tracking, secure access and record management to employment data.",
        "Collaborated with cross-functional team members to deliver scalable backend features that streamlined administrative workflows and simplified program monitoring for PESO personnel."
      ],
      stack: ["JavaScript", "PHP", "MySQL", "Tailwind CSS", "REST APIs"]
    }
  ],

  // Two rows in the strip between Experience and Projects (they scroll in opposite directions).
  // Row A = main focus (React, .NET, Azure). Row B = Node, PHP and supporting tools.
  stack: {
    rowA: ["React", "TypeScript", "C#", "ASP.NET Core", "Entity Framework Core", "SQL Server", "SignalR", "Azure App Service", "Azure SQL"],
    rowB: ["Node.js", "Express", "PHP", "MySQL", "Tailwind CSS", "Vite", "JWT", "REST APIs", "Git", "GitHub", "Postman"]
  },

  projects: [
    {
      title: "REFER",
      category: "Employment Referral & Recruitment System",
      description:
        "A full-stack web-based employment referral and recruitment system designed to connect jobseekers and employers through a centralized platform. The system supports jobseeker information, employment opportunities, job matching, and referral activities.",
      learned: [
        "Developed a full-stack application using React, TypeScript, Node.js, and Express",
        "Built multi-step jobseeker registration and profile management workflows",
        "Implemented job searching, filtering, and matching functionality",
        "Developed RESTful APIs for employment-related operations",
        "Implemented email verification and account recovery workflows",
        "Designed the system while adhering to institutional confidentiality requirements"
      ],
      techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Query", "Node.js", "Express.js", "MySQL", "MariaDB", "REST APIs", "JWT", "Postman", "Git", "GitHub", "Hostinger"],
      features: [
        "Jobseeker profile management",
        "Job opportunity management",
        "Job searching and filtering",
        "Qualification-based job matching",
        "Employment referral management",
        "Saved job opportunities",
        "Employment-related dashboards",
        "Email verification and account recovery",
        "Role-based access control"
      ],
      repoUrl: "https://github.com/spajetty/refer-peso",
      websiteUrl: null,
      nda: true
    },
    {
      title: "ASCEND",
      category: "Public Employment Division Management System",
      description:
        "An internal web-based management and reporting system developed to support employment program data management within a Public Employment Service Office (PESO). The system provides authorized personnel with a centralized platform for organizing, monitoring, and reporting employment-related information.",
      learned: [
        "Developed a database-driven web application for institutional use",
        "Designed centralized employment data management workflows",
        "Implemented dashboards, data visualization, and reporting functionality",
        "Developed data searching, filtering, import, and export capabilities",
        "Implemented role-based access for authorized personnel",
        "Worked within institutional confidentiality and NDA requirements"
      ],
      techStack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "PHP", "MySQL", "MariaDB", "Postman", "Git", "GitHub", "Hostinger"],
      features: [
        "Centralized employment program data management",
        "Period-based data monitoring",
        "Dashboards and data visualization",
        "Report generation",
        "Data searching and filtering",
        "Data import and export",
        "Role-based access control"
      ],
      repoUrl: "https://github.com/spajetty/ascend-peso",
      websiteUrl: null,
      nda: true
    },
    {
      title: "NutriAksyon",
      category: "Child Nutrition Monitoring System",
      description:
        "A full-stack web system that monitors child nutrition through automated WHO-based BMI and HFA computation, food recommendations, and real-time reporting.",
      learned: [
        "Implemented role-based authentication using JWT",
        "Automated BMI and HFA calculations based on WHO standards",
        "Designed real-time dashboards using SignalR and Chart.js",
        "Built scalable RESTful APIs with ASP.NET Core",
        "Generated and exported nutrition reports per monitoring cycle",
        "Created food-recommendation algorithms"
      ],
      techStack: ["TypeScript", "React", "Vite", "Tailwind CSS", "Chart.js", "Calendar.js", "SignalR", "ASP.NET Core", "Entity Framework Core", "SQL Server", "JWT", "Azure App Service", "Azure SQL", "Vercel"],
      features: [
        "Role-based login for teachers, coordinators, and administrators",
        "Automated BMI and HFA computation using WHO standards",
        "Nutrition status analysis with food recommendations",
        "Real-time dashboards and analytics",
        "Exportable reports per feeding or monitoring cycle",
        "Centralized child nutrition records"
      ],
      repoUrl: "https://github.com/spajetty/nutriaksyon", // Private repository (Data Privacy Act of 2012)
      websiteUrl: "https://nutriaksyon.vercel.app/"
    },
    {
      title: "MediTrack",
      category: "Medication Management System",
      description:
        "A full-stack medication management platform that enables doctors and patients to manage prescriptions, track medication intake, and view adherence history through a secure web dashboard.",
      learned: [
        "Implemented role-based authentication for doctors and patients",
        "Built RESTful APIs using ASP.NET Core and Entity Framework",
        "Designed prescription and medication tracking workflows",
        "Handled secure frontend-backend communication using Axios",
        "Deployed full-stack application using cloud services"
      ],
      techStack: ["HTML", "CSS", "JavaScript", "React", "Vite", "Tailwind CSS", "Axios", "ASP.NET Core", "Entity Framework Core", "SQL Server", "Azure SQL", "Azure App Service", "Vercel"],
      features: [
        "Role-based login for doctors and patients",
        "Create, update, and manage prescriptions",
        "Track daily medication intake",
        "View prescription and intake history",
        "Dashboard view for monitoring adherence"
      ],
      repoUrl: "https://github.com/spajetty/meditrack",
      websiteUrl: "https://meditrack-web-app.vercel.app/"
    },
    {
      title: "DonDon: Dorayaki Bites!",
      category: "Food Management System",
      description:
        "A web-based food ordering and management system that enables customers to browse menus, place and track orders, while allowing administrators to manage inventory and operations in real time.",
      learned: [
        "Designed end-to-end food ordering workflows",
        "Implemented real-time order and stock updates",
        "Integrated Firebase for authentication and data handling",
        "Built responsive UI using Bootstrap",
        "Managed relational data using SQL and MySQL"
      ],
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "Firebase", "MySQL", "SQL", "VS Code"],
      features: [
        "Browse menus by branch with item details and images",
        "Add items to cart and manage orders",
        "Real-time order status tracking",
        "Cash-on-delivery payment option",
        "Real-time stock availability updates",
        "Customer feedback and rating system",
        "Admin dashboard for inventory and order management"
      ],
      repoUrl: "https://github.com/spajetty/dondon-web-app",
      websiteUrl: "https://dondondorayaki.netlify.app/"
    },
    {
      title: "Diaria: Digital Diary",
      category: "Web-Based Diary Application",
      description:
        "Diaria is a web-based digital diary that allows users to create, view, edit, and delete personal journal entries. It focuses on simplicity, secure authentication, and real-time cloud data synchronization using Firebase.",
      learned: [
        "Implemented full CRUD operations for diary entries",
        "Integrated Firebase Authentication for secure user login",
        "Used Cloud Firestore for real-time data storage and syncing",
        "Designed a clean and responsive UI using Bootstrap",
        "Improved understanding of client-side state and user flows"
      ],
      techStack: ["HTML", "CSS", "JavaScript (ES6 Modules)", "Bootstrap", "Firebase", "Firebase Authentication", "Cloud Firestore", "VS Code"],
      features: [
        "Create and save daily diary entries",
        "View, edit, and delete existing entries",
        "Secure user authentication and account management",
        "Real-time data synchronization with Firebase",
        "Cloud-based storage for reliability",
        "Responsive and mobile-friendly design"
      ],
      repoUrl: "https://github.com/spajetty/diaria-web-app",
      websiteUrl: "https://diaria.netlify.app/"
    },
    {
      title: "Planorama",
      category: "Event Management System",
      description:
        "Planorama is a desktop-based event management system developed for the Polytechnic University of the Philippines. It enables organizers to create and manage events, track registrations and attendees, and generate reports to support efficient campus and off-campus event planning.",
      learned: [
        "Designed and implemented a multi-entity database-driven system",
        "Applied object-oriented programming principles using Java",
        "Built desktop user interfaces with Java Swing",
        "Managed event, registration, and attendee data using relational databases",
        "Created ERDs and data schemas for structured system design"
      ],
      techStack: ["Java", "Java Swing", "JDK", "phpMyAdmin", "MySQL", "Eclipse IDE"],
      features: [
        "Create and schedule events with detailed information",
        "Categorize events by type (corporate, social, cultural, etc.)",
        "Online event registration and attendee management",
        "Real-time tracking of registered participants",
        "Event and participation cancellation",
        "Generate reports on attendance and participation trends"
      ],
      repoUrl: "https://github.com/spajetty/event-mngmnt-system",
      websiteUrl: null
    },
    {
      title: "Journalism Portfolio Website",
      category: "Personal Portfolio Website",
      description:
        "A journalism portfolio website created to showcase articles, features, and multimedia works. The site emphasizes clear storytelling, editorial layout, and accessibility, serving as both a personal brand platform and an online archive of published pieces.",
      learned: [
        "Applied editorial design principles to improve readability and content flow",
        "Structured content hierarchy for effective storytelling",
        "Designed responsive layouts for multiple screen sizes",
        "Improved visual balance using typography and spacing",
        "Deployed static websites using GitHub Pages"
      ],
      techStack: ["HTML", "CSS", "JavaScript", "Responsive Design", "GitHub Pages"],
      features: [
        "Curated article showcase with titles and summaries",
        "Clean and minimal editorial design",
        "Content categorization for intuitive navigation",
        "Responsive layout across desktop, tablet, and mobile devices",
        "Integrated visuals to support narrative storytelling",
        "About and profile section for author background"
      ],
      repoUrl: "https://github.com/spajetty/journalism-portfolio",
      websiteUrl: "https://spajetty.github.io/journalism-portfolio/"
    }
  ],

  contact: {
    email: "jayjayangadok21@gmail.com",
    links: [
      { label: "GitHub", value: "github.com/spajetty", href: "https://github.com/spajetty" },
      { label: "LinkedIn", value: "linkedin.com/in/your-name", href: "" } // TODO: add your URL; hidden while empty
    ]
  }
};