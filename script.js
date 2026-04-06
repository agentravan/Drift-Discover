// GSAP and ScrollTrigger initialization (Assuming CDN is loaded in HTML)
document.addEventListener('DOMContentLoaded', () => {
    
    /* --- Preloader --- */
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.style.opacity = '0';
                setTimeout(() => {
                    preloader.style.display = 'none';
                    // Professional Intro Animation
                    runIntroAnimations();
                }, 800);
            }, 1000);
        });
    }

    /* --- GSAP Professional Animations --- */
    function runIntroAnimations() {
        if (typeof gsap !== 'undefined') {
            // Hero Text Stagger
            gsap.from(".hero-content h1", {
                duration: 1.5,
                y: 100,
                opacity: 0,
                ease: "power4.out",
                skewY: 7
            });

            gsap.from(".hero-content p", {
                duration: 1.2,
                y: 50,
                opacity: 0,
                ease: "power3.out",
                delay: 0.3
            });

            gsap.from(".hero-btns .btn", {
                duration: 1,
                scale: 0.8,
                opacity: 0,
                stagger: 0.2,
                ease: "back.out(1.7)",
                delay: 0.6
            });
        }
    }

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

    if (travelerCountInput) {
        travelerCountInput.addEventListener('input', () => {
            const count = Math.max(0, parseInt(travelerCountInput.value) || 0);
            const total = count * fixedPrice;
            
            // GSAP Number Counter Animation
            if (typeof gsap !== 'undefined') {
                const dummyObj = { value: parseFloat(totalPriceDisplay.textContent.replace(/[₹,]/g, '')) || 0 };
                gsap.to(dummyObj, {
                    duration: 0.8,
                    value: total,
                    ease: "power2.out",
                    onUpdate: () => {
                        totalPriceDisplay.textContent = "₹" + Math.round(dummyObj.value).toLocaleString();
                    }
                });
            } else {
                totalPriceDisplay.textContent = `₹${total.toLocaleString()}`;
            }
        });
    }

    /* --- Cloud Generator for Hero --- */
    const cloudContainer = document.getElementById('cloud-container');
    if (cloudContainer) {
        for (let i = 0; i < 15; i++) {
            const cloud = document.createElement('div');
            cloud.classList.add('cloud');
            
            const size = Math.random() * 200 + 100;
            const top = Math.random() * 80;
            const delay = Math.random() * 20;
            const duration = Math.random() * 30 + 20;
            const opacity = Math.random() * 0.3 + 0.1;

            cloud.style.width = `${size}px`;
            cloud.style.height = `${size/1.8}px`;
            cloud.style.top = `${top}%`;
            cloud.style.left = '-300px';
            cloud.style.animationDelay = `${delay}s`;
            cloud.style.animationDuration = `${duration}s`;
            cloud.style.opacity = opacity;

            cloudContainer.appendChild(cloud);
        }
    }

    /* --- Testimonial Slider --- */
    const track = document.getElementById('testimonialTrack');
    if (track) {
        const slides = Array.from(track.children);
        let currentSlideIndex = 0;

        const moveToSlide = (index) => {
            track.style.transform = `translateX(-${index * 100}%)`;
        };

        setInterval(() => {
            currentSlideIndex = (currentSlideIndex + 1) % slides.length;
            moveToSlide(currentSlideIndex);
        }, 6000);
    }

    /* --- WhatsApp Menu --- */
    const waBtn = document.getElementById('waBtn');
    const waMenu = document.getElementById('waMenu');

    if (waBtn) {
        waBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            waMenu.classList.toggle('active');
        });

        document.addEventListener('click', () => {
            waMenu.classList.remove('active');
        });
    }

    /* --- Exit Popup --- */
    const exitPopup = document.getElementById('exitPopup');
    let hasShownPopup = false;

    if (exitPopup) {
        document.addEventListener('mouseleave', (e) => {
            if (!hasShownPopup && e.clientY < 0) {
                exitPopup.style.display = 'flex';
                hasShownPopup = true;
            }
        });

        setTimeout(() => {
            if (!hasShownPopup) {
                exitPopup.style.display = 'flex';
                hasShownPopup = true;
            }
        }, 45000);
    }

    /* --- Form Submission Handler --- */
    const leadForm = document.getElementById('leadForm');
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const firstBtn = leadForm.querySelector('button[type="submit"]');
            const originalText = firstBtn.innerHTML;
            
            firstBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
            firstBtn.disabled = true;

            setTimeout(() => {
                firstBtn.innerHTML = '<i class="fa-solid fa-check"></i> Quote Received!';
                firstBtn.style.background = '#10b981';
                alert('Thank you! Your quote request has been received.');
                setTimeout(() => {
                    firstBtn.innerHTML = originalText;
                    firstBtn.style.background = 'var(--primary)';
                    firstBtn.disabled = false;
                    leadForm.reset();
                }, 3000);
            }, 1500);
        });
    }

    /* --- Intersection Observer for Reveals --- */
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (typeof gsap !== 'undefined') {
                    gsap.to(entry.target, {
                        opacity: 1,
                        y: 0,
                        x: 0,
                        duration: 1.2,
                        ease: "power3.out"
                    });
                } else {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .dest-card, .feature-card');
    animateElements.forEach(el => {
        revealObserver.observe(el);
    });

});
