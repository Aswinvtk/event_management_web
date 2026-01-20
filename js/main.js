// ==================================================================
// Event Management Website - Main JavaScript
// ==================================================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // ==================================================================
    // Navigation Bar - Scroll Effect
    // ==================================================================
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ==================================================================
    // Mobile Menu Toggle
    // ==================================================================
    const navbarToggle = document.getElementById('navbarToggle');
    const navbarMenu = document.getElementById('navbarMenu');

    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', function () {
            navbarMenu.classList.toggle('active');
            navbarToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.navbar-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navbarMenu.classList.remove('active');
                navbarToggle.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function (event) {
            const isClickInsideNav = navbar.contains(event.target);
            if (!isClickInsideNav && navbarMenu.classList.contains('active')) {
                navbarMenu.classList.remove('active');
                navbarToggle.classList.remove('active');
            }
        });
    }

    // ==================================================================
    // Smooth Scrolling for Anchor Links
    // ==================================================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ==================================================================
    // Scroll Reveal Animation
    // ==================================================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with scroll-reveal class
    document.querySelectorAll('.scroll-reveal').forEach(element => {
        observer.observe(element);
    });

    // ==================================================================
    // Form Validation
    // ==================================================================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Clear previous errors
            document.querySelectorAll('.form-group').forEach(group => {
                group.classList.remove('error');
            });

            let isValid = true;

            // Validate name
            const name = document.getElementById('name');
            if (name && name.value.trim() === '') {
                showError(name, 'Name is required');
                isValid = false;
            }

            // Validate email
            const email = document.getElementById('email');
            if (email) {
                if (email.value.trim() === '') {
                    showError(email, 'Email is required');
                    isValid = false;
                } else if (!isValidEmail(email.value)) {
                    showError(email, 'Please enter a valid email');
                    isValid = false;
                }
            }

            // Validate phone
            const phone = document.getElementById('phone');
            if (phone && phone.value.trim() === '') {
                showError(phone, 'Phone number is required');
                isValid = false;
            }

            // Validate message
            const message = document.getElementById('message');
            if (message && message.value.trim() === '') {
                showError(message, 'Message is required');
                isValid = false;
            }

            // If form is valid, show success message
            if (isValid) {
                // Here you would typically send the form data to a server
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            }
        });
    }

    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        formGroup.classList.add('error');

        const errorElement = formGroup.querySelector('.form-error');
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // ==================================================================
    // Dynamic Year in Footer
    // ==================================================================
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // ==================================================================
    // Active Navigation Link Highlighting
    // ==================================================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar-link').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

});
