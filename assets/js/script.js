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
    category: "E-Commerce Platform",
    description: "A comprehensive nutrition and health e-commerce platform built with ASP.NET Core.",
    learned: [
      "Implemented JWT authentication and authorization",
      "Integrated payment gateways for secure transactions",
      "Built RESTful APIs following best practices",
      "Managed real-time inventory with Entity Framework",
      "Implemented caching strategies for performance optimization"
    ],
    techStack: ["ASP.NET Core", "Entity Framework", "SQL Server", "JWT", "Stripe API", "Redis"],
    howToUse: [
      "Register an account or login with existing credentials",
      "Browse products by category or search",
      "Add items to cart and proceed to checkout",
      "Complete payment using secure payment gateway",
      "Track your order status in your profile"
    ],
    gallery: [
      "URL_TO_IMAGE_1",
      "URL_TO_IMAGE_2",
      "URL_TO_IMAGE_3",
      "URL_TO_IMAGE_4"
    ],
    repoUrl: "YOUR_GITHUB_URL",
    websiteUrl: "YOUR_WEBSITE_URL"
  },
  project2: {
    title: "Task Management System",
    category: "Productivity Tool",
    description: "A collaborative task management application with real-time updates and project analytics.",
    learned: [
      "Implemented real-time features using SignalR",
      "Created drag-and-drop interfaces with JavaScript",
      "Built interactive charts with Chart.js",
      "Designed responsive UI with Bootstrap",
      "Implemented team collaboration features"
    ],
    techStack: ["ASP.NET MVC", "SignalR", "Bootstrap", "Chart.js", "jQuery", "SQL Server"],
    howToUse: [
      "Create a new project or join existing team",
      "Add tasks and assign to team members",
      "Drag and drop tasks between columns",
      "Set deadlines and priority levels",
      "View analytics and progress reports"
    ],
    gallery: [
      "URL_TO_IMAGE_1",
      "URL_TO_IMAGE_2",
      "URL_TO_IMAGE_3",
      "URL_TO_IMAGE_4"
    ],
    repoUrl: "YOUR_GITHUB_URL",
    websiteUrl: "YOUR_WEBSITE_URL"
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
    howToUse: [
      "Add new leads and client information",
      "Track property listings and matches",
      "Schedule appointments and follow-ups",
      "Send automated email campaigns",
      "Generate reports on sales performance"
    ],
    gallery: [
      "URL_TO_IMAGE_1",
      "URL_TO_IMAGE_2",
      "URL_TO_IMAGE_3",
      "URL_TO_IMAGE_4"
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
        <h3><i class="ri-image-line"></i> Gallery</h3>
        <div class="gallery">
          ${project.gallery.map(img => `
            <div class="gallery-item">
              <img src="${img}" alt="Project screenshot">
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="modal-section">
        <h3><i class="ri-guide-line"></i> How to Use</h3>
        <ul>
          ${project.howToUse.map(step => `<li>${step}</li>`).join('')}
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