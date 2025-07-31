// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the lightbox elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');
    
    // Get all gallery images
    const galleryImages = document.querySelectorAll('.gallery img');
    
    // Add click event to each gallery image
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.dataset.full;
            captionText.innerHTML = this.alt;
        });
    });
    
    // Close lightbox when clicking the X
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });
    
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
    
    // Close lightbox with ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            lightbox.style.display = 'none';
        }
    });
});