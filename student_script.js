document.addEventListener("DOMContentLoaded", function () {
    const courseLinks = document.querySelectorAll("#sidebar a");
    const mainContent = document.getElementById("main-content");

    // Event-Listener für Sidebar-Links
    courseLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const courseName = this.getAttribute("data-course");    // Kursname aus dem `data-course`-Attribut auslesen

            mainContent.innerHTML = generateCourseContent(courseName);  // Kursinhalt generieren und anzeigen 
            // Event-Listener für Datei-Upload hinzufügen
            const uploadForm = document.querySelector(".upload-form");
            if (uploadForm) {
                uploadForm.addEventListener("submit", function (event) {
                    event.preventDefault();
                    const fileInput = this.querySelector("input[type='file']");
                    const file = fileInput.files[0];
                    if (file) {
                        alert(`Datei "${file.name}" für den Kurs "${courseName}" erfolgreich hochgeladen!`);
                        fileInput.value = ""; // Leert das Eingabefeld
                    } else {
                        alert("Bitte wählen Sie eine Datei aus.");
                    }
                });
            }
        });
    });

    function generateCourseContent(courseName) {
        return `
            <h2>${courseName}</h2>
            <p>Hier können Sie Hausaufgaben für den Kurs <strong>${courseName}</strong> hochladen.</p>
            <form class="upload-form">
                <label for="file-upload">Hausaufgabe hochladen:</label>
                <input type="file" id="file-upload" name="file" required>
                <button type="submit">Hochladen</button>
            </form>
            <div id="BtnContainer">
                <button id="paBtn" onclick = "window.location.href='previous_assignments.html'">Previous Assignments</button> 
            </div>
        `;
    }
});
