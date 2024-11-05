// scripts.js

// Cache le message lorsqu'un champ est activé
document.getElementById("username").addEventListener("focus", function() {
    document.getElementById("message").style.display = "none";
});
document.getElementById("password").addEventListener("focus", function() {
    document.getElementById("message").style.display = "none";
});

// Gère la soumission du formulaire de connexion
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche la soumission réelle du formulaire

    // Redirige vers le tableau de bord
    window.location.href = "./dashboard.html";
});
