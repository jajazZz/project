document.querySelectorAll('.navbar ul li').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.navbar ul li').forEach(el => el.classList.remove('active'));        
        this.classList.add('active');
    });
});



/*calendar*/
const calendarBody = document.getElementById("calendarBody");
const monthYear = document.getElementById("monthYear");
const currentmonth = document.getElementById("currentmonth");
const currentDate = document.getElementById("currentDate");
const monthDay = document.getElementById("monthDay");

let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function renderCalendar(month, year) {
    calendarBody.innerHTML = "";

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevDaysInMonth = new Date(year, month, 0).getDate();
    
    monthYear.innerHTML = `${months[month]} ${year}`;
    
    let date = 1;
    let nextDate = 1;
    for (let i = 0; i < 5; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement("td");
            if (i === 0 && j < firstDay) {
                cell.innerHTML = prevDaysInMonth - firstDay + j + 1;
                cell.classList.add("prev-month");
            } 
            else if (date <= daysInMonth) {
                cell.innerHTML = date;
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("today");
                }
                date++;
            }
            else {
                cell.innerHTML = nextDate;
                cell.classList.add("next-month");
                nextDate++;
            }       
            row.appendChild(cell);
        }
        calendarBody.appendChild(row);
    }
}

function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
}

function displayCurrentDate() {
    const dayOfWeek = daysOfWeek[today.getDay()];
    const month = months[today.getMonth()];
    const day = today.getDate();
    const year = today.getFullYear();
    
    if (currentDate) {
        currentDate.innerHTML = `${dayOfWeek}, ${month} ${day}, ${year}`;
    }
    
    if (monthDay) {
        monthDay.innerHTML = `${month} ${day}`;
    }
        
    if (currentmonth) {
        currentmonth.innerHTML = `${month}`;
    }
}

renderCalendar(currentMonth, currentYear);
displayCurrentDate();


/*appointment*/
function showAppointmentForm(form) {
    document.getElementById('appointment_content').style.display = 'none';
    document.getElementById('appointment_form').style.display = 'none';
    document.getElementById(form).style.display = 'block';
}

