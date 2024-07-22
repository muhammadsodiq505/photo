document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const closeButton = lightbox.querySelector('.close');
    const instagramLink = document.getElementById('instagram-link');
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const fullsizeImage = item.getAttribute('data-fullsize');
            const instagramUrl = item.getAttribute('data-instagram-link');
            lightboxImage.src = fullsizeImage;
            instagramLink.href = instagramUrl;
            lightbox.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
