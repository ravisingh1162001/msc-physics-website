// script.js - Modularized Version

// ========================
// Common Functionality
// ========================
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Initialize page-specific features
    initHomePage();
    initSemesterPage();
    initFacultyPage();
    initAlumniPage();
    initGalleryPage();
});

// ========================
// Home Page Features
// ========================
function initHomePage() {
    // Hero Image Slider
    const hero = document.getElementById('hero');
    if (hero) {
        const images = [
            'image/N1 (1).jpg',
            'image/N1 (2).jpg',
            'image/N1 (3).jpg',
            'image/N1 (4).jpg',
            'image/N1 (5).jpg'
        ];

        let currentIndex = 0;
        const updateBackground = () => {
            hero.style.background = `linear-gradient(rgba(0,0,0,0.7), url('${images[currentIndex]}') center/cover no-repeat`;
        };

        const nextBackground = () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateBackground();
        };
        
        setInterval(nextBackground, 5000);
        updateBackground();
    }

    // Semester Tabs
    const semesterTabs = document.querySelectorAll('.semester-tab');
    if (semesterTabs.length > 0) {
        semesterTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                semesterTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                document.getElementById(this.dataset.tab)?.classList.add('active');
            });
        });
    }
}

// ========================
// Alumni Page Features
// ========================
function initAlumniPage() {
    const batchFilter = document.getElementById('batch-filter');
    const industryFilter = document.getElementById('industry-filter');
    
    if (batchFilter && industryFilter) {
        const filterAlumni = () => {
            const batchValue = batchFilter.value;
            const industryValue = industryFilter.value;

            document.querySelectorAll('.alumni-card').forEach(card => {
                const cardBatch = card.querySelector('.alumni-batch')?.textContent.split(' ')[0];
                const cardPosition = card.querySelector('.alumni-position')?.textContent.toLowerCase();
                
                const batchMatch = batchValue === 'all' || cardBatch === batchValue;
                let industryMatch = false;

                switch(industryValue) {
                    case 'all':
                        industryMatch = true;
                        break;
                    case 'academia':
                        industryMatch = cardPosition?.includes('professor') || cardPosition?.includes('lecturer');
                        break;
                    case 'research':
                        industryMatch = cardPosition?.includes('research');
                        break;
                    case 'industry':
                        industryMatch = !cardPosition?.includes('research') && 
                                      !cardPosition?.includes('professor') && 
                                      !cardPosition?.includes('lecturer');
                        break;
                    case 'entrepreneurship':
                        industryMatch = cardPosition?.includes('founder') || 
                                      cardPosition?.includes('ceo') || 
                                      cardPosition?.includes('cto');
                        break;
                }

                card.style.display = (batchMatch && industryMatch) ? 'block' : 'none';
            });
        };

        batchFilter.addEventListener('change', filterAlumni);
        industryFilter.addEventListener('change', filterAlumni);
        filterAlumni(); // Initial filter
    }
}

// ========================
// Faculty Page Features
// ========================
function initFacultyPage() {
    const deptButtons = document.querySelectorAll('.dept-btn');
    if (deptButtons.length > 0) {
        deptButtons.forEach(button => {
            button.addEventListener('click', function() {
                deptButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                const filter = this.textContent.trim().toLowerCase();
                
                document.querySelectorAll('.faculty-card').forEach(card => {
                    const cardText = card.textContent.toLowerCase();
                    card.style.display = (filter === 'all faculty' || cardText.includes(filter))
                        ? 'block'
                        : 'none';
                });
            });
        });
    }
}

// ========================
// Semester Page Features
// ========================
function initSemesterPage() {
    const yearButtons = document.querySelectorAll('.year-btn');
    if (yearButtons.length > 0) {
        yearButtons.forEach(button => {
            button.addEventListener('click', function() {
                yearButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                const year = this.dataset.year;
                
                document.querySelectorAll('#previous-year .subject-item').forEach(item => {
                    const itemYears = item.dataset.year.split(',');
                    item.style.display = (year === 'all' || itemYears.includes(year))
                        ? 'flex'
                        : 'none';
                });
            });
        });
    }
}

// ========================
// Gallery Page Features
// ========================
function initGalleryPage() {
    // Batch Filter
    const batchButtons = document.querySelectorAll('.batch-btn');
    if (batchButtons.length > 0) {
        batchButtons.forEach(button => {
            button.addEventListener('click', function() {
                batchButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                const batch = this.dataset.batch;
                
                document.querySelectorAll('.gallery-card').forEach(card => {
                    card.style.display = (batch === 'all' || card.dataset.batch === batch)
                        ? 'block'
                        : 'none';
                });
            });
        });
    }

    // Activity Tabs
    const activityTabs = document.querySelectorAll('.activity-tab');
    if (activityTabs.length > 0) {
        activityTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                activityTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                document.querySelectorAll('.activity-content').forEach(content => {
                    content.classList.remove('active');
                });
                
                document.getElementById(this.dataset.tab)?.classList.add('active');
            });
        });
    }
}
