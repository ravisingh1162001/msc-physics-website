// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all page functionality
  initNavigation();
  
  // Page-specific initializations
  if (document.querySelector('.professor-page')) {
    initProfessorPage();
  }
  if (document.querySelector('.students-page')) {
    initStudentGallery();
  }
});

// Common Functions
function initNavigation() {
  // Highlight current page in nav
  const currentPage = location.pathname.split('/').pop();
  document.querySelectorAll('nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });
}

// Professor Page Functions
function initProfessorPage() {
  // Faculty data would be loaded here
  renderFacultyCards();
}

// Students Page Functions
function initStudentGallery() {
  // Image gallery functionality
  setupYearFilters();
}

// Additional helper functions...
