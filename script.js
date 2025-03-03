document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Check for saved user preference in localStorage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark");
        themeToggle.textContent = "☀️"; // Light mode icon
    } else {
        body.classList.remove("dark");
        themeToggle.textContent = "🌙"; // Dark mode icon
    }

    // Toggle between light and dark mode
    themeToggle.addEventListener("click", () => {
        if (body.classList.contains("dark")) {
            body.classList.remove("dark");
            localStorage.setItem("theme", "light");
            themeToggle.textContent = "🌙"; // Dark mode icon
        } else {
            body.classList.add("dark");
            localStorage.setItem("theme", "dark");
            themeToggle.textContent = "☀️"; // Light mode icon
        }
    });
});
console.log("✅ script.js is successfully loaded!");
