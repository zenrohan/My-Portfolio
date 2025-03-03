document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check for saved theme preference in localStorage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark");
        themeToggle.textContent = "☀️"; // Sun icon for light mode
    } else {
        body.classList.remove("dark");
        themeToggle.textContent = "🌙"; // Moon icon for dark mode
    }

    // Toggle theme on button click
    themeToggle.addEventListener("click", function () {
        if (body.classList.contains("dark")) {
            body.classList.remove("dark");
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙"; // Switch back to moon icon
        } else {
            body.classList.add("dark");
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️"; // Switch to sun icon
        }

        // Force background color change
        updateBackground();
    });

    function updateBackground() {
        if (body.classList.contains("dark")) {
            body.style.backgroundColor = "black";
        } else {
            body.style.backgroundColor = "white";
        }
    }

    // Apply background fix on page load
    updateBackground();
});

console.log("✅ script.js is successfully loaded!");


// ✅ Ensure `script.js` is running
console.log("✅ script.js is successfully loaded!");

// ✅ Mobile Navbar Toggle (Hamburger Menu)
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", function () {
        // Toggle menu visibility
        mobileMenu.classList.toggle("hidden");

        // Smooth dropdown effect
        if (!mobileMenu.classList.contains("hidden")) {
            mobileMenu.classList.add("animate-slide-down");
        } else {
            mobileMenu.classList.remove("animate-slide-down");
        }
    });
});

