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
    title: "Real Estate CRM",
    category: "Business Management",
    description: "A customer relationship management system tailored for real estate agencies.",
    learned: [
      "Built interactive UI with Blazor components",
      "Implemented automated email workflows with SendGrid",
      "Deployed application to Azure cloud",
      "Created complex database relationships with EF Core",
      "Implemented file upload and management system"
    ],
    techStack: ["Blazor", "Entity Framework", "Azure", "SendGrid", "SQL Server", "Azure Blob Storage"],
    features: [
      "Add new leads and client information",
      "Track property listings and matches",
      "Schedule appointments and follow-ups",
      "Send automated email campaigns",
      "Generate reports on sales performance"
    ],
    repoUrl: "YOUR_GITHUB_URL",
    websiteUrl: "YOUR_WEBSITE_URL"
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