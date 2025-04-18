// Advanced animations and interactive elements
document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Animate skill bars when in viewport
    const skillSection = document.getElementById('skills');
    const skillPercentages = document.querySelectorAll('.skill-percentage');
    
    let skillsAnimated = false;
    
    // Function to animate skill bars
    function animateSkillBars() {
        if (!skillsAnimated && isInViewport(skillSection)) {
            skillPercentages.forEach(skill => {
                const width = skill.style.width;
                skill.style.width = '0';
                setTimeout(() => {
                    skill.style.width = width;
                }, 100);
            });
            skillsAnimated = true;
        }
    }
    
    // Check if element is in viewport
    function isInViewport(element) {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.bottom >= 0
        );
    }
    
    // Listen for scroll to animate skill bars
    window.addEventListener('scroll', animateSkillBars);
    
    // Trigger initial check in case skills section is already in viewport
    animateSkillBars();
    
    // Typing animation for hero section
    const roles = ['AI Researcher', 'Machine Learning Engineer', 'Data Scientist', 'Deep Learning Specialist'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 150;
    let newTextDelay = 2000;
    let deleteSpeed = 50;
    
    function typeText() {
        const heroText = document.querySelector('.hero-text h2');
        if (!heroText) return;
        
        const currentRole = roles[roleIndex];
        const displayText = heroText.innerHTML;
        
        if (displayText.includes('M.Tech in ')) {
            const baseText = 'M.Tech in <span class="highlight">Artificial Intelligence</span>';
            
            if (isDeleting) {
                // If deleting, find the position of the role in the text
                const textWithoutHTMLTags = displayText.replace(/<[^>]*>/g, '');
                const roleStartPos = textWithoutHTMLTags.indexOf('Artificial Intelligence');
                if (roleStartPos !== -1 && roleStartPos + 'Artificial Intelligence'.length === textWithoutHTMLTags.length) {
                    // Delete the role character by character
                    heroText.innerHTML = baseText.substring(0, baseText.length - 1);
                    setTimeout(typeText, deleteSpeed);
                } else {
                    // Switch to typing the new role
                    isDeleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                    charIndex = 0;
                    setTimeout(typeText, newTextDelay);
                }
            } else {
                // If typing, add one character at a time
                if (charIndex < currentRole.length) {
                    const newText = baseText.replace('Artificial Intelligence', currentRole.substring(0, charIndex + 1));
                    heroText.innerHTML = newText;
                    charIndex++;
                    setTimeout(typeText, typingDelay);
                } else {
                    // Pause at the end of typing before starting to delete
                    isDeleting = true;
                    setTimeout(typeText, newTextDelay);
                }
            }
        }
    }
    
    // Start the typing animation after a delay
    setTimeout(typeText, 3000);

    // Project cards hover effect
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Certification cards hover effect
    const certCards = document.querySelectorAll('.cert-card');
    
    certCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
            
            const badge = this.querySelector('.cert-badge');
            if (badge) {
                badge.style.transform = 'scale(1.1)';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
            
            const badge = this.querySelector('.cert-badge');
            if (badge) {
                badge.style.transform = 'scale(1)';
            }
        });
    });

    // Publication items hover effect
    const publicationItems = document.querySelectorAll('.publication-content');
    
    publicationItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const heroSection = document.querySelector('.hero-section');
        
        if (heroSection) {
            heroSection.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
        }
    });

    // Ripple effect for buttons
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.offsetLeft;
            const y = e.clientY - e.target.offsetTop;
            
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Interactive SVG elements
    const svgNodes = document.querySelectorAll('.node');
    
    svgNodes.forEach(node => {
        node.addEventListener('mouseenter', function() {
            this.style.fill = '#4ECDC4';
            this.setAttribute('r', '15');
        });
        
        node.addEventListener('mouseleave', function() {
            this.style.fill = 'none';
            this.setAttribute('r', '10');
        });
    });
});
