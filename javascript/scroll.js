document.addEventListener('DOMContentLoaded', () => {
    
    // Get Elements
    const rantBtn = document.getElementById('btn-rant');
    const scrollClosed = document.getElementById('scroll-closed');
    const scrollOpen = document.getElementById('scroll-open');
    const notebookOverlay = document.getElementById('notebook-overlay');

    // Function to run when Rant Button is clicked
    rantBtn.addEventListener('click', () => {
        
        // 1. Hide the Closed Scroll
        scrollClosed.style.display = 'none';

        // 2. Show the Open Scroll
        scrollOpen.style.display = 'block';

        // 3. Wait 0.6 seconds (animation time), then show Notebook
        setTimeout(() => {
            notebookOverlay.classList.remove('hidden');
            notebookOverlay.style.display = 'flex'; // Force visibility
        }, 600);
        
    });
});