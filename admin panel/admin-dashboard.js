// Add course functionality
document.getElementById('course-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const courseName = document.getElementById('course-name').value;
    const courseDescription = document.getElementById('course-description').value;
    const courseDuration = document.getElementById('course-duration').value;

    if (courseName && courseDescription && courseDuration) {
        const courseList = document.getElementById('course-list');
        const newCourse = document.createElement('li');
        newCourse.textContent = `${courseName} - ${courseDescription} (${courseDuration} päivää)`;
        courseList.appendChild(newCourse);

        // Clear the form after submission
        document.getElementById('course-form').reset();
    }
});
