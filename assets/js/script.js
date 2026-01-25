function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
  } else {
      navbar.classList.remove('scrolled');
  }
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when clicking a nav button
document.querySelectorAll('.nav-button').forEach(button => {
  button.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Typewriter effect
const typewriterText = "Hi, I'm Jetty";
const typewriterElement = document.getElementById('typewriter');
let charIndex = 0;

function typeWriter() {
  if (charIndex < typewriterText.length) {
    typewriterElement.textContent += typewriterText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 150); // Adjust speed here (lower = faster)
  } else {
    // Remove cursor after typing is complete
    setTimeout(() => {
      typewriterElement.style.borderRight = 'none';
    }, 1000);
  }
}

// Start typewriter effect when page loads
window.addEventListener('load', () => {
  setTimeout(typeWriter, 500); // Start after 500ms delay
});

// Project data
const projectData = {
  project1: {
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
    techStack: [
      "TypeScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "Chart.js",
      "Calendar.js",
      "SignalR",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "JWT",
      "Azure App Service",
      "Azure SQL",
      "Vercel"
    ],
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
  project2: {
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
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "Axios",
      "ASP.NET Core",
      "Entity Framework Core",
      "SQL Server",
      "Azure SQL",
      "Azure App Service",
      "Vercel"
    ],
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
  project3: {
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
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Firebase",
      "MySQL",
      "SQL",
      "VS Code"
    ],
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
  project4: {
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

    techStack: [
      "HTML",
      "CSS",
      "JavaScript (ES6 Modules)",
      "Bootstrap",
      "Firebase",
      "Firebase Authentication",
      "Cloud Firestore",
      "VS Code"
    ],

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
  project5: {
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

    techStack: [
      "Java",
      "Java Swing",
      "JDK",
      "phpMyAdmin",
      "MySQL",
      "Eclipse IDE"
    ],

    features: [
      "Create and schedule events with detailed information",
      "Categorize events by type (corporate, social, cultural, etc.)",
      "Online event registration and attendee management",
      "Real-time tracking of registered participants",
      "Event and participation cancellation",
      "Generate reports on attendance and participation trends"
    ],

    repoUrl: "https://github.com/spajetty/event-mngmnt-system"
  }
};

function openModal(projectId) {
  const modal = document.getElementById('projectModal');
  const modalBody = document.getElementById('modalBody');
  const project = projectData[projectId];
  
  modalBody.innerHTML = `
    <div class="modal-body">
      <h2 class="modal-title">${project.title}</h2>
      <span class="modal-category">${project.category}</span>
      
      <div class="modal-section">
        <h3><i class="ri-information-line"></i> About</h3>
        <p>${project.description}</p>
      </div>
      
      <div class="modal-section">
        <h3><i class="ri-lightbulb-line"></i> What I Learned</h3>
        <ul>
          ${project.learned.map(item => `<li>${item}</li>`).join('')}
        </ul>
      </div>
      
      <div class="modal-section">
        <h3><i class="ri-code-s-slash-line"></i> Tech Stack</h3>
        <div class="tech-stack">
          ${project.techStack.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
        </div>
      </div>
      
      <div class="modal-section">
        <h3><i class="ri-guide-line"></i> Features</h3>
        <ul>
          ${project.features.map(step => `<li>${step}</li>`).join('')}
        </ul>
      </div>
      
      <div class="modal-actions">
        <button class="modal-btn modal-btn-repo" onclick="window.open('${project.repoUrl}', '_blank')">
          <i class="ri-github-fill"></i> View Repository
        </button>
        <button class="modal-btn modal-btn-visit" onclick="window.open('${project.websiteUrl}', '_blank')">
          <i class="ri-external-link-fill"></i> Visit Website
        </button>
      </div>
    </div>
  `;
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});