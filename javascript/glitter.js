document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("glitter-container");
    
    // Configuration
    const glitterFrequency = 100; // Faster frequency = More glitter
    const colors = [
        '#ffffff', // White
        '#ffd700', // Gold
        '#ffb3c1', // Cherry Blossom 
        '#ff4d6d'  // Bubblegum Pink 
    ];

    function createGlitter() {
        if (!container) return; // Safety check

        const sparkle = document.createElement("div");
        sparkle.classList.add("glitter-star");

        // 1. Random Position
        sparkle.style.left = Math.random() * 100 + "%";
        sparkle.style.top = Math.random() * 100 + "%";

        // 2. Random Size
        const size = Math.random() * 15 + 10;
        sparkle.style.width = size + "px";
        sparkle.style.height = size + "px";

        // 3. Random Color
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        sparkle.style.backgroundColor = randomColor;

        // 4. Random Animation Speed
        const duration = Math.random() * 1.5 + 0.5; // Between 0.5s and 2s
        sparkle.style.animationDuration = duration + "s";
        
        // 5. Force Z-Index (Just in case)
        sparkle.style.zIndex = "2"; 

        // Add to HTML
        container.appendChild(sparkle);

        // Cleanup
        setTimeout(() => {
            sparkle.remove();
        }, duration * 1000);
    }

    // Start the glitter machine
    setInterval(createGlitter, glitterFrequency);
});