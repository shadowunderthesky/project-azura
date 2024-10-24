// Example script to dynamically add students and teachers to the list
document.addEventListener("DOMContentLoaded", function() {
    const studentList = document.getElementById("student-list");
    const teacherList = document.getElementById("teacher-list");

    const students = [
        "Opiskelija 1",
        "Opiskelija 2",
        "Opiskelija 3",
        "Opiskelija 4"
    ];

    const teachers = [
        "Opettaja A",
        "Opettaja B",
        "Opettaja C"
    ];

    students.forEach(student => {
        let listItem = document.createElement("li");
        listItem.textContent = student;
        studentList.appendChild(listItem);
    });

    teachers.forEach(teacher => {
        let listItem = document.createElement("li");
        listItem.textContent = teacher;
        teacherList.appendChild(listItem);
    });
});
