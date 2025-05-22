document.addEventListener('DOMContentLoaded', function() {
    // Universal Initialization Functions
    function initComponents() {
        initSmoothScroll();
        initSlideshow();
        initTabs();
        initYearFilters();
        initDeptFilters();
        initAlumniFilters();
        initGalleryFilters();
        initActivityTabs();
    }

    // 1. Smooth Scroll Functionality
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    // Re-initialize components after navigation
                    setTimeout(initComponents, 300);
                }
            });
        });
    }

    // 2. Hero Image Slideshow
    function initSlideshow() {
        const images = [
            'image/N1 (1).jpg',
            'image/N1 (2).jpg',
            'image/N1 (3).jpg',
            'image/N1 (4).jpg',
            'image/N1 (5).jpg'
        ];

        let currentIndex = 0;
        const hero = document.getElementById('hero');

        function updateBackground() {
            if (hero) {
                hero.style.background = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${images[currentIndex]}') center/cover no-repeat`;
            }
        }

        function nextBackground() {
            currentIndex = (currentIndex + 1) % images.length;
            updateBackground();
        }

        if (hero) {
            setInterval(nextBackground, 5000);
            updateBackground();
        }
    }

    // 3. Tab Functionality (Semester/Activity Tabs)
    function initTabs() {
        // Handle all tab types
        document.body.addEventListener('click', function(e) {
            // Semester Tabs
            if (e.target.matches('.semester-tab')) {
                const tabs = document.querySelectorAll('.semester-tab');
                tabs.forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');
                
                const tabId = e.target.getAttribute('data-tab');
                document.querySelectorAll('.tab-content').forEach(c => {
                    c.classList.remove('active');
                });
                document.getElementById(tabId)?.classList.add('active');
            }

            // Activity Tabs
            if (e.target.matches('.activity-tab')) {
                const tabs = document.querySelectorAll('.activity-tab');
                tabs.forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');
                
                const tabId = e.target.getAttribute('data-tab');
                document.querySelectorAll('.activity-content').forEach(c => {
                    c.classList.remove('active');
                });
                document.getElementById(tabId)?.classList.add('active');
            }
        });
    }

    // 4. Filter Functionality
    function initYearFilters() {
        document.body.addEventListener('click', function(e) {
            if (e.target.matches('.year-btn')) {
                const year = e.target.getAttribute('data-year');
                const items = document.querySelectorAll('#previous-year .subject-item');
                
                document.querySelectorAll('.year-btn').forEach(btn => 
                    btn.classList.remove('active'));
                e.target.classList.add('active');

                items.forEach(item => {
                    item.style.display = (year === 'all' || 
                        item.dataset.year.split(',').includes(year)) ? 
                        'flex' : 'none';
                });
            }
        });
    }

    function initDeptFilters() {
        document.body.addEventListener('click', function(e) {
            if (e.target.matches('.dept-btn')) {
                const filter = e.target.textContent.trim().toLowerCase();
                const cards = document.querySelectorAll('.faculty-card');
                
                document.querySelectorAll('.dept-btn').forEach(btn => 
                    btn.classList.remove('active'));
                e.target.classList.add('active');

                cards.forEach(card => {
                    card.style.display = (filter === 'all faculty' || 
                        card.textContent.toLowerCase().includes(filter)) ? 
                        'block' : 'none';
                });
            }
        });
    }

    // 5. Alumni Filters
    function initAlumniFilters() {
        const batchFilter = document.getElementById('batch-filter');
        const industryFilter = document.getElementById('industry-filter');
        const alumniCards = document.querySelectorAll('.alumni-card');

        function filterAlumni() {
            const batchValue = batchFilter?.value;
            const industryValue = industryFilter?.value;

            alumniCards.forEach(card => {
                const cardBatch = card.querySelector('.alumni-batch')?.textContent.split(' ')[0];
                const cardPosition = card.querySelector('.alumni-position')?.textContent.toLowerCase();
                
                const batchMatch = !batchValue || batchValue === 'all' || cardBatch === batchValue;
                let industryMatch = !industryValue || industryValue === 'all';
                
                if (industryValue === 'academia') {
                    industryMatch = cardPosition?.includes('professor') || cardPosition?.includes('lecturer');
                } else if (industryValue === 'research') {
                    industryMatch = cardPosition?.includes('research');
                } else if (industryValue === 'industry') {
                    industryMatch = !cardPosition?.includes('research') && 
                                    !cardPosition?.includes('professor') && 
                                    !cardPosition?.includes('lecturer');
                } else if (industryValue === 'entrepreneurship') {
                    industryMatch = cardPosition?.includes('founder') || 
                                  cardPosition?.includes('ceo') || 
                                  cardPosition?.includes('cto');
                }
                
                card.style.display = (batchMatch && industryMatch) ? 'block' : 'none';
            });
        }

        batchFilter?.addEventListener('change', filterAlumni);
        industryFilter?.addEventListener('change', filterAlumni);
    }

    // 6. Gallery Filters
    function initGalleryFilters() {
        document.body.addEventListener('click', function(e) {
            if (e.target.matches('.batch-btn')) {
                const batch = e.target.dataset.batch;
                const cards = document.querySelectorAll('.gallery-card');
                
                document.querySelectorAll('.batch-btn').forEach(btn => 
                    btn.classList.remove('active'));
                e.target.classList.add('active');

                cards.forEach(card => {
                    card.style.display = (batch === 'all' || 
                        card.dataset.batch === batch) ? 
                        'block' : 'none';
                });
            }
        });
    }

    // 7. Activity Tabs
    function initActivityTabs() {
        // Handled in initTabs()
    }

    // Initial initialization
    initComponents();

    // Re-initialize when DOM changes (for dynamic content)
    const observer = new MutationObserver(initComponents);
    observer.observe(document.body, { 
        childList: true, 
        subtree: true 
    });
});
