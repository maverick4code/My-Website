window.analytics = {
    track: function(event, data) {
        console.log(`Analytics: ${event}`, data);
        localStorage.setItem('analytics_' + Date.now(), JSON.stringify({ event, data }));
    }
};

document.addEventListener('DOMContentLoaded', () => {
    analytics.track('page_view', { page: window.location.pathname });

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            analytics.track('link_click', { href: link.href });
        });
    });

    gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll('.section').forEach(section => {
        gsap.to(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 1,
            y: 0,
            duration: 0.5
        });
    });
});