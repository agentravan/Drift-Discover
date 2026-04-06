document.addEventListener('DOMContentLoaded', () => {
    
    // --- Tabs for Trip Details ---
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    if (tabLinks.length > 0) {
        tabLinks.forEach(link => {
            link.addEventListener('click', () => {
                const targetTab = link.getAttribute('data-tab');

                // Remove active class from all links and contents
                tabLinks.forEach(l => l.classList.remove('active'));
                tabContents.forEach(c => c.style.display = 'none');

                // Add active class to current link and show target content
                link.classList.add('active');
                document.getElementById(targetTab).style.display = 'block';
            });
        });
    }

    // --- Accordions for Itinerary ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    if (accordionHeaders.length > 0) {
        accordionHeaders.forEach(header => {
            header.addEventListener('click', () => {
                const parent = header.parentElement;
                
                // Toggle current accordion
                parent.classList.toggle('active');
                
                // Close other accordions
                const items = document.querySelectorAll('.accordion-item');
                items.forEach(item => {
                    if (item !== parent) {
                        item.classList.remove('active');
                    }
                });
            });
        });
    }

    // --- Sticky Header Scroll Effect ---
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            nav.style.padding = '0.5rem 0';
        } else {
            nav.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
            nav.style.padding = '1rem 0';
        }
    });

    // --- Smooth Scroll for Internal Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});
