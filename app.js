let students =
JSON.parse(localStorage.getItem("students"))
|| [];

let attendance =
JSON.parse(localStorage.getItem("attendance"))
|| [];

let results =
JSON.parse(localStorage.getItem("results"))
|| [];

document.getElementById("totalStudents")
.innerText = students.length;

document.getElementById("attendanceCount")
.innerText = attendance.length;

document.getElementById("resultCount")
.innerText = results.length;
