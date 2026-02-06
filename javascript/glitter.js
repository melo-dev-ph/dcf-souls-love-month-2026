const carpet = document.getElementById('magic-carpet');
// NEW: Target the container instead of the body
const container = document.getElementById('glitter-container'); 

function createTrail() {
    const rect = carpet.getBoundingClientRect();
    
    // Check if visible
    if(rect.width > 0 && rect.left < window.innerWidth && rect.right > 0) {
        const star = document.createElement('div');
        star.classList.add('trail-particle');
        
        // Randomize position
        const randomX = (Math.random() - 0.5) * 20;
        const randomY = (Math.random() - 0.5) * 10;
        
        star.style.left = (rect.left + rect.width/2 + randomX) + 'px';
        star.style.top = (rect.top + rect.height/2 + randomY) + 'px';
        
        const size = Math.random() * 4 + 2; 
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        // CHANGE: Append to container, NOT document.body
        container.appendChild(star); 
        
        setTimeout(() => { star.remove(); }, 1000);
    }
}
setInterval(createTrail, 50);