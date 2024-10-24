document.getElementById('course-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Estetään lomakkeen oletustoiminta

    var courseName = document.getElementById('course-name').value;
    var courseDescription = document.getElementById('course-description').value;
    var courseDuration = document.getElementById('course-duration').value;

    if (courseName && courseDescription && courseDuration) {
        addCourseToList(courseName, courseDescription, courseDuration);
    } else {
        alert('Täytä kaikki kentät!');
    }
});

function addCourseToList(name, description, duration) {
    var courseList = document.getElementById('course-list');
    var courseItem = document.createElement('li');
    courseItem.textContent = `Kurssi: ${name}, Kuvaus: ${description}, Kesto: ${duration} päivää`;
    courseList.appendChild(courseItem);

    // Tyhjennetään lomake lisäyksen jälkeen
    document.getElementById('course-form').reset();
}

