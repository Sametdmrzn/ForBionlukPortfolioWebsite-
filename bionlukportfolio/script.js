document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.photo-banner');
    const items = document.querySelector('.photo-items');

    banner.addEventListener('mouseover', () => {
        items.style.animationPlayState = 'paused';
    });

    banner.addEventListener('mouseout', () => {
        items.style.animationPlayState = 'running';
    });
});
