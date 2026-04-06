document.addEventListener('DOMContentLoaded', () => {
    
    /* --- Sticky Navbar --- */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* --- Dynamic Price Calculator --- */
    const travelerCountInput = document.getElementById('travelerCount');
    const totalPriceDisplay = document.getElementById('totalPrice');
    const fixedPrice = 6999;

    travelerCountInput.addEventListener('input', () => {
        const count = parseInt(travelerCountInput.value) || 0;
        const total = count * fixedPrice;
        
        // Animating the result change
        totalPriceDisplay.style.opacity = '0';
        setTimeout(() => {
            totalPriceDisplay.textContent = `₹${total.toLocaleString()}`;
            totalPriceDisplay.style.opacity = '1';
        }, 150);
    });

    /* --- Cloud Generator for Hero --- */
    const cloudContainer = document.getElementById('cloud-container');
    if (cloudContainer) {
        for (let i = 0; i < 15; i++) {
            const cloud = document.createElement('div');
            cloud.classList.add('cloud');
            
            const size = Math.random() * 200 + 100;
            const top = Math.random() * 100;
            const delay = Math.random() * 20;
            const duration = Math.random() * 20 + 20;
            const opacity = Math.random() * 0.4 + 0.1;

            cloud.style.width = `${size}px`;
            cloud.style.height = `${size/1.5}px`;
            cloud.style.top = `${top}%`;
            cloud.style.left = '-250px';
            cloud.style.animationDelay = `${delay}s`;
            cloud.style.animationDuration = `${duration}s`;
            cloud.style.opacity = opacity;

            cloudContainer.appendChild(cloud);
        }
    }

    /* --- Testimonial Slider --- */
    const track = document.getElementById('testimonialTrack');
    const slides = Array.from(track.children);
    let currentSlideIndex = 0;

    const moveToSlide = (index) => {
        track.style.transform = `translateX(-${index * 100}%)`;
    };

    setInterval(() => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        moveToSlide(currentSlideIndex);
    }, 5000);

    /* --- WhatsApp Menu --- */
    const waBtn = document.getElementById('waBtn');
    const waMenu = document.getElementById('waMenu');

    waBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        waMenu.classList.toggle('active');
    });

    document.addEventListener('click', () => {
        waMenu.classList.remove('active');
    });

    /* --- Exit Popup --- */
    const exitPopup = document.getElementById('exitPopup');
    let hasShownPopup = false;

    document.addEventListener('mouseleave', (e) => {
        if (!hasShownPopup && e.clientY < 0) {
            exitPopup.style.display = 'flex';
            hasShownPopup = true;
        }
    });

    // Also auto-show after 30 seconds if not already shown
    setTimeout(() => {
        if (!hasShownPopup) {
            exitPopup.style.display = 'flex';
            hasShownPopup = true;
        }
    }, 30000);

    /* --- Form Submission Handler (Mock) --- */
    const leadForm = document.getElementById('leadForm');
    leadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const firstBtn = leadForm.querySelector('button[type="submit"]');
        const originalText = firstBtn.innerHTML;
        
        firstBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
        firstBtn.disabled = true;

        setTimeout(() => {
            firstBtn.innerHTML = '<i class="fa-solid fa-check"></i> Quote Received!';
            firstBtn.style.background = '#10b981';
            
            // Show alert or success message
            alert('Thank you! Your quote request has been received. Our team will contact you within 24 hours.');
            
            // Revert after 3 seconds
            setTimeout(() => {
                firstBtn.innerHTML = originalText;
                firstBtn.style.background = 'var(--primary)';
                firstBtn.disabled = false;
                leadForm.reset();
            }, 3000);
        }, 1500);
    });

    /* --- Scroll Animations (Intersection Observer) --- */
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.dest-card, .feature-card, .glass');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 1s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

});
