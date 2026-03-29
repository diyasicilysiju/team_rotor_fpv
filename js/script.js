// Team Rotor FPV — Shared Utilities
// This file contains shared functionality across all pages.

// Safely bind button click if a 'button' element exists
(function () {
    const btn = document.querySelector("button");
    if (btn) {
        btn.addEventListener("click", function () {
            alert("Welcome to Team Rotor FPV!");
        });
    }
})();