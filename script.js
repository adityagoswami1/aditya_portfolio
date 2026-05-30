document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple interaction for window controls (just visual feedback)
    document.querySelectorAll('.control.close').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const windowEl = e.target.closest('.window');
            if(windowEl && !windowEl.classList.contains('nav-window')) {
                windowEl.style.opacity = '0.5';
                setTimeout(() => {
                    windowEl.style.opacity = '1';
                }, 500);
            }
        });
    });

    // Load More Certificates
    const loadMoreBtn = document.getElementById('load-more-certs');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            document.querySelectorAll('.hidden-cert').forEach(cert => {
                cert.classList.remove('hidden');
            });
            loadMoreBtn.style.display = 'none';
        });
    }
});
