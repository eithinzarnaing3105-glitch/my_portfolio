function initializePortfolio() {
    // --- DARK MODE TOGGLE ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn?.querySelector('i');

    function applyTheme(theme) {
        if (theme === 'light') {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }

        if (themeIcon) {
            themeIcon.classList.toggle('fa-sun', theme === 'light');
            themeIcon.classList.toggle('fa-moon', theme !== 'light');
        }
    }

    // Read the saved theme if browser storage is available.
    let savedTheme = 'dark';

    try {
        savedTheme = localStorage.getItem('theme') || 'dark';
    } catch {
        // Use dark mode if storage is unavailable.
    }

    applyTheme(savedTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isLight =
                document.documentElement.getAttribute('data-theme') === 'light';

            const nextTheme = isLight ? 'dark' : 'light';

            applyTheme(nextTheme);

            try {
                localStorage.setItem('theme', nextTheme);
            } catch {
                // The theme still changes when storage is unavailable.
            }
        });
    }

    // --- MOBILE MENU TOGGLE ---
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.setAttribute('aria-controls', 'nav-links');
        hamburger.setAttribute(
            'aria-expanded',
            String(navLinks.classList.contains('active'))
        );

        hamburger.addEventListener('click', () => {
            const expanded = navLinks.classList.toggle('active');
            hamburger.setAttribute('aria-expanded', String(expanded));
        });

        // Close the menu after selecting a link.
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // --- VIEW MORE PROJECTS ---
    const projectGrid = document.getElementById('projects-grid');
    const projectButton = document.getElementById('toggle-projects');

    if (projectGrid && projectButton) {
        const extraProjects =
            projectGrid.querySelectorAll('.extra-project');

        if (extraProjects.length === 0) {
            projectButton.hidden = true;
        } else {
            function updateProjects(expanded) {
                extraProjects.forEach(project => {
                    project.hidden = !expanded;
                });

                projectButton.textContent = expanded
                    ? 'Show Less'
                    : 'View More Projects';

                projectButton.setAttribute(
                    'aria-expanded',
                    String(expanded)
                );
            }

            // Hide additional projects when the page loads.
            updateProjects(false);

            projectButton.addEventListener('click', () => {
                const wasExpanded =
                    projectButton.getAttribute('aria-expanded') === 'true';

                updateProjects(!wasExpanded);

                // Keep the button visible when the extra cards collapse.
                if (wasExpanded) {
                    projectButton.scrollIntoView({
                        block: 'nearest',
                        behavior: 'auto'
                    });
                }
            });
        }
    }

    // --- SCROLL FADE-IN ANIMATION ---
    const reduceMotion =
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!reduceMotion && 'IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';

                    // Animate each section only once.
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0,
            rootMargin: '0px 0px -30px 0px'
        });

        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition =
                'opacity 0.6s ease, transform 0.6s ease';

            observer.observe(section);
        });
    }
}

// Run after the HTML has loaded.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePortfolio);
} else {
    initializePortfolio();
}