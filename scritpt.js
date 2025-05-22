
  /*-------------------------------------------------*/   
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    

    
    const images = [
        'image/N1 (1).jpg',
        'image/N1 (2).jpg',
        'image/N1 (3).jpg',
        'image/N1 (4).jpg',
        'image/N1 (5).jpg'
    ];

    let currentIndex = 0;

    function updateHeroBackground() {
        const hero = document.getElementById('hero');
        hero.style.background = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${images[currentIndex]}') center/cover no-repeat`;
    }

    function nextBackground() {
        currentIndex = (currentIndex + 1) % images.length;
        updateHeroBackground();
    }

    // Start the slideshow automatically
    setInterval(nextBackground, 5000);



    /*-------------------------------------------------*/
    
        document.addEventListener('DOMContentLoaded', function() {
            // Tab switching functionality
            const tabs = document.querySelectorAll('.semester-tab');
            tabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    // Remove active class from all tabs
                    tabs.forEach(t => t.classList.remove('active'));
                    
                    // Add active class to clicked tab
                    this.classList.add('active');
                    
                    // Hide all tab contents
                    document.querySelectorAll('.tab-content').forEach(content => {
                        content.classList.remove('active');
                    });
                    
                    // Show the selected tab content
                    const tabId = this.getAttribute('data-tab');
                    document.getElementById(tabId).classList.add('active');
                });
            });
            
            // Year filter functionality for previous year papers
            const yearButtons = document.querySelectorAll('.year-btn');
            yearButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all year buttons
                    yearButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    // Get the selected year
                    const year = this.getAttribute('data-year');
                    
                    // Filter subject items
                    const subjectItems = document.querySelectorAll('#previous-year .subject-item');
                    subjectItems.forEach(item => {
                        const itemYears = item.getAttribute('data-year').split(',');
                        if (year === 'all' || itemYears.includes(year)) {
                            item.style.display = 'flex';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
        });
    


  /*-------------------------------------------------*/
   
        document.addEventListener('DOMContentLoaded', function() {
            const deptButtons = document.querySelectorAll('.dept-btn');
            const facultyCards = document.querySelectorAll('.faculty-card');

            deptButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    deptButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    // Get the department filter
                    const filter = this.textContent.trim().toLowerCase();
                    
                    // Filter faculty cards
                    facultyCards.forEach(card => {
                        if (filter === 'all faculty') {
                            card.style.display = 'block';
                        } else {
                            const cardText = card.textContent.toLowerCase();
                            if (cardText.includes(filter)) {
                                card.style.display = 'block';
                            } else {
                                card.style.display = 'none';
                            }
                        }
                    });
                });
            });
        });
  

      /*-------------------------------------------------*/
   
     document.addEventListener('DOMContentLoaded', function() {
    const batchFilter = document.getElementById('batch-filter');
    const industryFilter = document.getElementById('industry-filter');
    const alumniCards = document.querySelectorAll('.alumni-card');

    function filterAlumni() {
        const batchValue = batchFilter.value;
        const industryValue = industryFilter.value;

        alumniCards.forEach(card => {
            const cardBatch = card.querySelector('.alumni-batch').textContent.split(' ')[0]; // This will get just the year
            const cardPosition = card.querySelector('.alumni-position').textContent.toLowerCase();
            
            const batchMatch = batchValue === 'all' || cardBatch === batchValue;
            let industryMatch = industryValue === 'all';
            
            if (industryValue === 'academia' && (cardPosition.includes('professor') || cardPosition.includes('lecturer'))) {
                industryMatch = true;
            } else if (industryValue === 'research' && cardPosition.includes('research')) {
                industryMatch = true;
            } else if (industryValue === 'industry' && !cardPosition.includes('research') && !cardPosition.includes('professor') && !cardPosition.includes('lecturer')) {
                industryMatch = true;
            } else if (industryValue === 'entrepreneurship' && (cardPosition.includes('founder') || cardPosition.includes('ceo') || cardPosition.includes('cto'))) {
                industryMatch = true;
            }
            
            if (batchMatch && industryMatch) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    batchFilter.addEventListener('change', filterAlumni);
    industryFilter.addEventListener('change', filterAlumni);
});
  

        /*-------------------------------------------------*/
  
        document.addEventListener('DOMContentLoaded', function() {
            // Batch filter functionality
            const batchButtons = document.querySelectorAll('.batch-btn');
            batchButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Remove active class from all buttons
                    batchButtons.forEach(btn => btn.classList.remove('active'));
                    
                    // Add active class to clicked button
                    this.classList.add('active');
                    
                    // Get the selected batch
                    const batch = this.getAttribute('data-batch');
                    
                    // Filter gallery cards
                    const galleryCards = document.querySelectorAll('.gallery-card');
                    galleryCards.forEach(card => {
                        if (batch === 'all' || card.getAttribute('data-batch') === batch) {
                            card.style.display = 'block';
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
            
            // Activity tabs functionality
            const activityTabs = document.querySelectorAll('.activity-tab');
            activityTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    // Remove active class from all tabs
                    activityTabs.forEach(t => t.classList.remove('active'));
                    
                    // Add active class to clicked tab
                    this.classList.add('active');
                    
                    // Hide all tab contents
                    document.querySelectorAll('.activity-content').forEach(content => {
                        content.classList.remove('active');
                    });
                    
                    // Show the selected tab content
                    const tabId = this.getAttribute('data-tab');
                    document.getElementById(tabId).classList.add('active');
                });
            });
        });
    
                /*-------------------------------------------------*/
