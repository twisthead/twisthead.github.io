document.addEventListener("DOMContentLoaded", function() {
    const numRaindrops = 150;
    const container = document.querySelector(".rain-effect");

    for (let i = 0; i < numRaindrops; i++) {
        createRaindrop();
    }

    function createRaindrop() {
        const raindrop = document.createElement("div");
        raindrop.classList.add("raindrop");
        raindrop.style.left = `${Math.random() * 100}%`;
        raindrop.style.animationDuration = `${Math.random() * 3 + 1}s`;
        container.appendChild(raindrop);
    }
});
