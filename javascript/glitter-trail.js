// Magic Carpet Trail Script
    const carpet = document.getElementById('magic-carpet');
    
    function createTrail() {
        const rect = carpet.getBoundingClientRect();
        
        // Only spawn if the carpet is actually on screen/visible
        // (Simple check: if it's not totally off to the side)
        if(rect.width > 0 && rect.opacity !== "0") {
            const star = document.createElement('div');
            star.classList.add('trail-particle');
            
            // Randomize position slightly near the tail of the carpet
            const randomX = (Math.random() - 0.5) * 20;
            const randomY = (Math.random() - 0.5) * 10;
            
            star.style.left = (rect.left + rect.width/2 + randomX) + 'px';
            star.style.top = (rect.top + rect.height/2 + randomY) + 'px';
            
            // Random size
            const size = Math.random() * 4 + 2; // 2px to 6px
            star.style.width = size + 'px';
            star.style.height = size + 'px';
            
            document.body.appendChild(star);
            
            // Remove after animation (1s)
            setTimeout(() => {
                star.remove();
            }, 1000);
        }
    }

    // Run this function rapidly to create a continuous line
    setInterval(createTrail, 50);