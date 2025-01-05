document.addEventListener("DOMContentLoaded", function () {

    // Daten: Zuordnung von Kursen zu Studenten
    const courses = {
        "Programmieren 1": [10067273, 10077700, 10062605, 10070144, 10058513, 10072081, 10056462, 10073794, 10061655],
        "Programmieren 2": [10073875, 10074848, 10054590, 10063375, 10068136, 10058213, 10061061],
        "Gmci": [10055639, 10059412, 10070539, 10064858, 10052977, 10070663, 10055672, 10075389],
        "Lineare Algebra": [10061383, 10079521, 10070761, 10078004, 10067811, 10051259, 10076540, 10055112],
        "Analysis": [10077903, 10078471, 10067704, 10068598, 10072135, 10073552, 10058597],
        "Gti": [10052457, 10059670, 10066175, 10067268, 10051273, 10051662, 10070797, 10076889, 10066060],
        "Data Science": [10062957, 10053331, 10052735, 10075418, 10063714, 10072489, 10074771, 10061979],
        "Rechnernetze": [10061010, 10062392, 10069020, 10079823, 10058806, 10062671, 10060163]
    };




    const courseLinks = document.querySelectorAll("#sidebar a");
    const studentList = document.getElementById("student-list");
    const mainContent = document.getElementById("main-content");

    // Event-Listener für Sidebar-Links
    courseLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const courseName = this.getAttribute("data-course");    // Kursname aus dem `data-course`-Attribut auslesen
            generateStudentList(courseName);    // Studentenliste basierend auf Kurs aktualisieren


            // Hauptinhalt aktualisieren
            mainContent.innerHTML = `<h2>${courseName}</h2><p>Wählen Sie einen Studenten aus, um Aufgaben zu korrigieren.</p>`;
        });


            // mainContent.innerHTML = generateCourseContent(courseName);  // Kursinhalt generieren und anzeigen 
            // // Event-Listener für Datei-Upload hinzufügen
            // const uploadForm = document.querySelector(".upload-form");
            // if (uploadForm) {
            //     uploadForm.addEventListener("submit", function (event) {
            //         event.preventDefault();
            //         const fileInput = this.querySelector("input[type='file']");
            //         const file = fileInput.files[0];
            //         if (file) {
            //             alert(`Datei "${file.name}" für den Kurs "${courseName}" erfolgreich hochgeladen!`);
            //             fileInput.value = ""; // Leert das Eingabefeld
            //         } else {
            //             alert("Bitte wählen Sie eine Datei aus.");
            //         }
            //     });
            // }
        // });
    });


    // Funktion zum Generieren der Studentenliste
    function generateStudentList(courseName) {
        // Studentenliste leeren
        studentList.innerHTML = "";

        // Studenten für den Kurs hinzufügen
        if (courses[courseName]) {
            courses[courseName].forEach(studentId => {
                const listItem = document.createElement("li");
                const link = document.createElement("a");
                link.href = "#";
                link.textContent = studentId;
                link.setAttribute("data-student", studentId);

                // Event-Listener für Studenten-Link hinzufügen
                link.addEventListener("click", function (event) {
                    event.preventDefault();
                    const studentId = this.getAttribute("data-student");
                    mainContent.innerHTML = generateStudentContent(courseName, studentId);
                });

                listItem.appendChild(link);
                studentList.appendChild(listItem);
            });
        } else {
            studentList.innerHTML = "<li>Keine Studenten gefunden.</li>";
        }
    }

    // Funktion zur Anzeige des Inhalts für einen ausgewählten Studenten
    function generateStudentContent(courseName, studentId) {
        return `
            <h2>${courseName} -  ${studentId}</h2>
            <p>Hier können Sie die Aufgaben von <strong>${studentId}</strong> für den Kurs <strong>${courseName}</strong> einsehen und bewerten.</p>
            <form class="upload-form">
                <label for="file-upload">Korrektur hochladen:</label>
                <input type="file" id="file-upload" name="file" required>
                <button type="submit">Hochladen</button>
            </form>
        `;
    }

    // function generateCourseContent(courseName) {
    //     return `
    //         <h2>${courseName}</h2>
    //         <p>Hier können Sie Hausaufgaben für den Kurs <strong>${courseName}</strong> hochladen.</p>
    //         <form class="upload-form">
    //             <label for="file-upload">Hausaufgabe hochladen:</label>
    //             <input type="file" id="file-upload" name="file" required>
    //             <button type="submit">Hochladen</button>
    //         </form>
    //     `;
    // }
});
