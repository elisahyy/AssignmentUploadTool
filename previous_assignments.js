document.addEventListener("DOMContentLoaded", function () {
    const courseName = localStorage.getItem("selectedCourse");
    if (courseName) {
        document.getElementById("course-name").textContent = courseName;
    } else {
        document.getElementById("course-name").textContent = "Kein Kurs ausgewählt";
    }
});

document.getElementById('avatar').addEventListener('click', function() {
    // Avatar wird verändert
    this.classList.add('clicked');
    
    // Sprechblase wird angezeigt
    var speechBubble = document.getElementById('speechBubble');
    speechBubble.style.display = 'block';
});

document.getElementById('closeButton').addEventListener('click', function() {
    // Sprechblase schließen
    var speechBubble = document.getElementById('speechBubble');
    speechBubble.style.display = 'none';
    
    // Avatar zurücksetzen
    document.getElementById('avatar').classList.remove('clicked');
});
