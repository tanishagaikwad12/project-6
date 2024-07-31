// scripts.js
// document.getElementById('schedule-form').addEventListener('submit', function (e) {
//     e.preventDefault();

//     const className = document.getElementById('class').value;
//     const day = document.getElementById('day').value;
//     const time = document.getElementById('time').value;

//     const scheduleList = document.getElementById('schedule');

//     const li = document.createElement('li');
//     li.textContent = `${day} - ${time} - ${className}`;

//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';
//     deleteButton.addEventListener('click', function () {
//         scheduleList.removeChild(li);
//     });

//     li.appendChild(deleteButton);
//     scheduleList.appendChild(li);

//     document.getElementById('schedule-form').reset();
// });


// scripts.js

// Variables to hold schedule, announcements, and attendance data
let schedules = [];
let announcements = [];
let attendance = [];

function selectRole(role) {
    document.querySelectorAll('.role-section').forEach(section => section.style.display = 'none');
    document.querySelector(`#${role}-section`).style.display = 'block';
    document.querySelectorAll('.feature-section').forEach(section => section.style.display = 'none');
}

function showScheduleForm() {
    document.querySelectorAll('.feature-section').forEach(section => section.style.display = 'none');
    document.getElementById('schedule-creation').style.display = 'block';
    document.getElementById('schedule-list').style.display = 'block';
}

function showAnnouncements() {
    document.querySelectorAll('.feature-section').forEach(section => section.style.display = 'none');
    document.getElementById('announcements').style.display = 'block';
}

function showAttendance() {
    document.querySelectorAll('.feature-section').forEach(section => section.style.display = 'none');
    document.getElementById('attendance').style.display = 'block';
}

function showSchedule() {
    document.querySelectorAll('.feature-section').forEach(section => section.style.display = 'none');
    document.getElementById('schedule-list').style.display = 'block';
}

// Handle schedule form submission
document.getElementById('schedule-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const className = document.getElementById('class').value;
    const day = document.getElementById('day').value;
    const time = document.getElementById('time').value;

    // Check for conflicts
    const conflict = schedules.some(schedule => schedule.day === day && schedule.time === time);
    if (conflict) {
        alert('Schedule conflict detected. Please choose a different time.');
        return;
    }

    const scheduleList = document.getElementById('schedule');
    const li = document.createElement('li');
    li.textContent = `${day} - ${time} - ${className}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        scheduleList.removeChild(li);
        schedules = schedules.filter(schedule => schedule.day !== day || schedule.time !== time);
    });

    li.appendChild(deleteButton);
    scheduleList.appendChild(li);

    schedules.push({ day, time, className });
    document.getElementById('schedule-form').reset();
});

// Handle announcement form submission
document.getElementById('announcement-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const announcementText = document.getElementById('announcement').value;

    const announcementList = document.getElementById('announcement-list');
    const li = document.createElement('li');
    li.textContent = announcementText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        announcementList.removeChild(li);
        announcements = announcements.filter(announcement => announcement.text !== announcementText);
    });

    li.appendChild(deleteButton);
    announcementList.appendChild(li);

    announcements.push({ text: announcementText });
    document.getElementById('announcement-form').reset();
});

// Handle attendance form submission
document.getElementById('attendance-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const studentName = document.getElementById('student-name').value;
    const attendanceDay = document.getElementById('attendance-day').value;

    const attendanceList = document.getElementById('attendance-list');
    const li = document.createElement('li');
    li.textContent = `${attendanceDay} - ${studentName}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
        attendanceList.removeChild(li);
        attendance = attendance.filter(record => record.studentName !== studentName || record.attendanceDay !== attendanceDay);
    });

    li.appendChild(deleteButton);
    attendanceList.appendChild(li);

    attendance.push({ studentName, attendanceDay });
    document.getElementById('attendance-form').reset();
});
