// Fullscreen functionality for image-container
const imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(container => {
    container.addEventListener('click', function() {
        const img = this.querySelector('img');
        openFullscreen(img.src);
    });
});

// Fullscreen functionality for image class
const images = document.querySelectorAll('.image');

images.forEach(imageDiv => {
    imageDiv.addEventListener('click', function() {
        const img = this.querySelector('img');
        openFullscreen(img.src);
    });
});

// Create fullscreen overlay
function openFullscreen(imageSrc) {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.className = 'fullscreen-overlay';
    overlay.innerHTML = `
        <button class="close-btn">&times;</button>
        <img src="https://assets.awwwards.com/awards/element/2025/10/68eb99a32907c372585217.jpg" alt="Fullscreen image">
    `;
    
    document.body.appendChild(overlay);
    
    // Show overlay
    setTimeout(() => overlay.classList.add('active'), 10);
    
    // Close on click
    overlay.addEventListener('click', function(e) {
        if (e.target === overlay || e.target.classList.contains('close-btn')) {
            closeFullscreen(overlay);
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function escapeHandler(e) {
        if (e.key === 'Escape') {
            closeFullscreen(overlay);
            document.removeEventListener('keydown', escapeHandler);
        }
    });
}

function closeFullscreen(overlay) {
    overlay.classList.remove('active');
    setTimeout(() => overlay.remove(), 300);
}