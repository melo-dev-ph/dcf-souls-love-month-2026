document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("glitter-container");
    
    // Configuration
    const glitterFrequency = 150; // New star every 150ms (Lower = more glitter)
    const colors = [
        '#ffffff', // White
        '#ffd700', // Gold
        '#ffb3c1', // Cherry Blossom (From your theme)
        '#ff4d6d'  // Bubblegum Pink (From your theme)
    ];

    function createGlitter() {
        const sparkle = document.createElement("div");
        sparkle.classList.add("glitter-star");

        // 1. Random Position
        // Math.random() gives 0 to 1. We multiply by 100 to get percentage.
        sparkle.style.left = Math.random() * 100 + "%";
        sparkle.style.top = Math.random() * 100 + "%";

        // 2. Random Size (between 10px and 25px)
        const size = Math.random() * 15 + 10;
        sparkle.style.width = size + "px";
        sparkle.style.height = size + "px";

        // 3. Random Color
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        sparkle.style.backgroundColor = randomColor;

        // 4. Random Animation Speed (between 1s and 2s)
        // This makes them twinkle at different rates
        const duration = Math.random() * 1 + 1;
        sparkle.style.animationDuration = duration + "s";

        // Add to HTML
        container.appendChild(sparkle);

        // Remove the element after animation finishes to keep browser clean
        setTimeout(() => {
            sparkle.remove();
        }, duration * 1000);
    }

    // Start the glitter machine
    setInterval(createGlitter, glitterFrequency);
});