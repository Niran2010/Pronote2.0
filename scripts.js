// scripts.js

// Événements pour masquer le message lors de la saisie
document.getElementById("username").addEventListener("focus", function() {
    document.getElementById("message").style.display = "none";
});

document.getElementById("password").addEventListener("focus", function() {
    document.getElementById("message").style.display = "none";
});

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Empêche la soumission par défaut du formulaire
    
    // Simule une connexion réussie en redirigeant l'utilisateur
    window.location.href = "dashboard.html"; // Redirection vers le tableau de bord
});

// Fonction pour envoyer les recommandations
function sendSuggestions() {
    // Masque la section des suggestions
    document.getElementById("suggestionsSection").style.display = "none";

    // Affiche le message de confirmation
    document.getElementById("confirmationMessage").style.display = "block";
}
