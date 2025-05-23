// Common functionality for all pages
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links (all pages)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Home Page Specific Code
function initHomePage() {
    // Hero Slider
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

        function updateHeroBackground() {
            hero.style.background = `linear-gradient(rgba(0,0,0,0.7), url('${images[currentIndex]}') center/cover no-repeat`;
        }

        function nextBackground() {
            currentIndex = (currentIndex + 1) % images.length;
            updateHeroBackground();
        }

        setInterval(nextBackground, 5000);
    }

    // Semester Tabs (Home Page)
    const semesterTabs = document.querySelectorAll('.semester-tab');
    if (semesterTabs.length > 0) {
        semesterTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                semesterTabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                document.getElementById(this.dataset.tab).classList.add('active');
            });
        });
    }
}

// Previous Year Papers Page
function initPreviousYearPage() {
    const yearButtons = document.querySelectorAll('.year-btn');
    if (yearButtons.length > 0) {
        yearButtons.forEach(button => {
            button.addEventListener('click', function() {
                yearButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                const year = this.dataset.year;
                document.querySelectorAll('#previous-year .subject-item').forEach(item => {
                    item.style.display = (year === 'all' || item.dataset.year.split(',').includes(year)) 
                        ? 'flex' 
                        : 'none';
                });
            });
        });
    }
}

// Faculty Page
function initFacultyPage() {
    const deptButtons = document.querySelectorAll('.dept-btn');
    if (deptButtons.length > 0) {
        deptButtons.forEach(button => {
            button.addEventListener('click', function() {
                deptButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                const filter = this.textContent.trim().toLowerCase();
                document.querySelectorAll('.faculty-card').forEach(card => {
                    card.style.display = (filter === 'all faculty' || card.textContent.toLowerCase().includes(filter))
                        ? 'block'
                        : 'none';
                });
            });
        });
    }
}

// Alumni Page
function initAlumniPage() {
    const batchFilter = document.getElementById('batch-filter');
    const industryFilter = document.getElementById('industry-filter');
    if (batchFilter && industryFilter) {
        const filterAlumni = () => {
            const batchValue = batchFilter.value;
            const industryValue = industryFilter.value;
            
            document.querySelectorAll('.alumni-card').forEach(card => {
                const cardBatch = card.querySelector('.alumni-batch').textContent.split(' ')[0];
                const cardPosition = card.querySelector('.alumni-position').textContent.toLowerCase();
                
                const batchMatch = batchValue === 'all' || cardBatch === batchValue;
                const industryMatch = checkIndustryMatch(industryValue, cardPosition);
                
                card.style.display = (batchMatch && industryMatch) ? 'block' : 'none';
            });
        };

        const checkIndustryMatch = (industry, position) => {
            if (industry === 'all') return true;
            const checks = {
                academia: () => position.includes('professor') || position.includes('lecturer'),
                research: () => position.includes('research'),
                industry: () => !position.includes('research') && !position.includes('professor') && !position.includes('lecturer'),
                entrepreneurship: () => position.includes('founder') || position.includes('ceo') || position.includes('cto')
            };
            return checks[industry] ? checks[industry]() : false;
        };

        batchFilter.addEventListener('change', filterAlumni);
        industryFilter.addEventListener('change', filterAlumni);
    }
}

// Gallery Page
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
                document.getElementById(this.dataset.tab).classList.add('active');
            });
        });
    }
}

// Initialize all page-specific code
document.addEventListener('DOMContentLoaded', function() {
    initHomePage();
    initPreviousYearPage();
    initFacultyPage();
    initAlumniPage();
    initGalleryPage();
});
