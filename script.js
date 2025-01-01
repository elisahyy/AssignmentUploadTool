document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert die Standardaktion des Formulars

    // Auslesen der ausgewählten Rolle
    const selectedRole = document.querySelector('input[name="role"]:checked').value;

    // Weiterleitung je nach Rolle
    if (selectedRole === 'student') {
        window.location.href = 'student-dashboard.html'; // Zielseite für Studenten
    } else if (selectedRole === 'tutor') {
        window.location.href = 'tutor-dashboard.html'; // Zielseite für Tutoren
    }
});