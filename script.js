// Smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function() {
    // Get in Touch button functionality
    const getInTouchBtn = document.querySelector('.get-in-touch-btn');
    const contactSection = document.getElementById('contact');
    
    if (getInTouchBtn && contactSection) {
        getInTouchBtn.addEventListener('click', function() {
            contactSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // Discover Our Mission button functionality
    const ctaBtn = document.querySelector('.cta-btn');
    const buildingSection = document.querySelector('.building-tomorrow');
    
    if (ctaBtn && buildingSection) {
        ctaBtn.addEventListener('click', function() {
            buildingSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // Form handling
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.querySelector('.submit-btn');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const project = document.getElementById('project').value;
            
            // Basic validation
            if (!email || !project) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading state
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="animate-spin">
                    <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="2" fill="none" stroke-dasharray="37.7" stroke-dashoffset="37.7">
                        <animateTransform attributeName="transform" type="rotate" values="0 8 8;360 8 8" dur="1s" repeatCount="indefinite"/>
                    </circle>
                </svg>
                Sending...
            `;
            
            // Simulate form submission (replace with actual form handler)
            setTimeout(() => {
                // For GitHub Pages, you'll need to integrate with a service like Formspree
                // For now, we'll show a success message and mailto link as fallback
                
                const subject = encodeURIComponent('Vybe Capital - New Project Inquiry');
                const body = encodeURIComponent(`
Hello,

I'm interested in discussing my intelligence-driven application project.

Email: ${email}
Project Details: ${project}

Looking forward to connecting!
                `);
                
                const mailtoLink = `mailto:contact@vybecapital.com?subject=${subject}&body=${body}`;
                
                // Try to open email client
                window.location.href = mailtoLink;
                
                // Show success message
                showMessage('Thank you for your interest! Your email client should open with a pre-filled message. If not, please email us directly at contact@vybecapital.com', 'success');
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
                
            }, 1500);
        });
    }

    // Add scroll effect to header
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.background = 'rgba(26, 29, 41, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'rgba(26, 29, 41, 0.95)';
        }
    });

    // Add intersection observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.feature-card, .section-content, .contact-content');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add hover effects for cards
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Helper functions
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `form-message ${type}`;
    messageEl.textContent = message;
    messageEl.style.cssText = `
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 8px;
        font-size: 0.9rem;
        font-weight: 500;
        text-align: center;
        ${type === 'error' ? 
            'background: rgba(239, 68, 68, 0.1); color: #EF4444; border: 1px solid rgba(239, 68, 68, 0.3);' : 
            'background: rgba(16, 185, 129, 0.1); color: #10B981; border: 1px solid rgba(16, 185, 129, 0.3);'
        }
        animation: slideIn 0.3s ease;
    `;
    
    // Add animation keyframes
    if (!document.querySelector('#message-animations')) {
        const style = document.createElement('style');
        style.id = 'message-animations';
        style.textContent = `
            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateY(-10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Insert message
    const form = document.getElementById('contactForm');
    form.appendChild(messageEl);
    
    // Auto remove after 5 seconds for success messages
    if (type === 'success') {
        setTimeout(() => {
            if (messageEl.parentNode) {
                messageEl.style.animation = 'slideIn 0.3s ease reverse';
                setTimeout(() => messageEl.remove(), 300);
            }
        }, 5000);
    }
}

// Add some extra polish - parallax effect on hero background
document.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Prevent form submission if JavaScript is disabled
window.addEventListener('beforeunload', function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
        });
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Allow Enter key to trigger button clicks
    if (e.key === 'Enter' && e.target.matches('.get-in-touch-btn, .cta-btn')) {
        e.target.click();
    }
    
    // Allow Escape key to close any modal-like elements (future-proofing)
    if (e.key === 'Escape') {
        const messages = document.querySelectorAll('.form-message');
        messages.forEach(msg => msg.remove());
    }
});