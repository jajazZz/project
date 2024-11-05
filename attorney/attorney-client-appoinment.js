document.querySelectorAll('.navbar ul li').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.navbar ul li').forEach(el => el.classList.remove('active'));        
        this.classList.add('active');
    });
});

const calendarGrid = document.getElementById("calendarGrid");
const currentMonthElement = document.getElementById("currentMonth");
const prevMonthButton = document.getElementById("prevMonth");
const nextMonthButton = document.getElementById("nextMonth");
const appointmentForm = document.getElementById("appointmentForm");
const appointmentPreview = document.getElementById("appointmentPreview");

// Add the current date display logic
const currentDateDisplay = document.getElementById("current-date");
const today = new Date().toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
currentDateDisplay.textContent = today;

let currentDate = new Date(2024, 9, 18);
let selectedDate = null;
let previousSelectedDayElement = null;

const unavailableDates = [5, 10, 15, 20, 25];

const todayDate = new Date();
todayDate.setHours(0, 0, 0, 0);

// Function to disable the appointment form
function disableForm() {
  const inputs = appointmentForm.querySelectorAll("input, select, textarea");
  inputs.forEach((input) => (input.disabled = true));
}

// Function to enable the appointment form
function enableForm() {
  const inputs = appointmentForm.querySelectorAll("input, select, textarea");
  inputs.forEach((input) => (input.disabled = false));
}

function renderCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  currentMonthElement.textContent = `${currentDate.toLocaleString("default", {
    month: "long",
  })} ${year}`;

  calendarGrid.innerHTML = "";

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  dayNames.forEach((day) => {
    const dayElement = document.createElement("div");
    dayElement.textContent = day;
    dayElement.style.fontWeight = "bold";
    calendarGrid.appendChild(dayElement);
  });

  for (let i = 0; i < firstDay; i++) {
    calendarGrid.appendChild(document.createElement("div"));
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const dayElement = document.createElement("div");
    dayElement.textContent = day;
    dayElement.classList.add("calendar-day");

    const currentDay = new Date(year, month, day);

    if (unavailableDates.includes(day)) {
      dayElement.classList.add("unavailable");
      dayElement.style.textDecoration = "line-through";
      dayElement.style.cursor = "not-allowed";
      calendarGrid.appendChild(dayElement);
      continue;
    }

    if (currentDay < todayDate) {
      dayElement.classList.add("past");
      dayElement.style.textDecoration = "line-through";
      dayElement.style.cursor = "not-allowed";
    } else {
      // Check if it's the current day
      if (currentDay.getTime() === todayDate.getTime()) {
        dayElement.classList.add("today");
        dayElement.style.backgroundColor = "#4caf50";
        dayElement.style.color = "white";

        if (currentDay.getDay() === 0 || currentDay.getDay() === 6) {
          dayElement.style.cursor = "not-allowed";
        }
      } else {
        const dayOfWeek = currentDay.getDay();
        if (dayOfWeek === 0 || dayOfWeek === 6) {
          dayElement.classList.add("weekend");
          dayElement.style.cursor = "not-allowed";
        } else {
          if (
            previousSelectedDayElement &&
            selectedDate &&
            currentDay.toDateString() === selectedDate.toDateString()
          ) {
            dayElement.style.backgroundColor = "blue";
            dayElement.style.color = "white";
          }

          dayElement.addEventListener("click", () =>
            selectDate(currentDay, dayElement)
          );
        }
      }
    }

    calendarGrid.appendChild(dayElement);
  }

  if (
    currentDate.getFullYear() === todayDate.getFullYear() &&
    currentDate.getMonth() <= todayDate.getMonth()
  ) {
    prevMonthButton.disabled = true;
  } else {
    prevMonthButton.disabled = false;
  }
}

function selectDate(date, dayElement) {
  if (previousSelectedDayElement) {
    previousSelectedDayElement.style.backgroundColor = "";
    previousSelectedDayElement.style.color = "";
  }

  selectedDate = date;
  dayElement.style.backgroundColor = "blue";
  dayElement.style.color = "white";
  previousSelectedDayElement = dayElement;
  renderCalendar();
  updateAppointmentPreview();
  enableForm(); // Enable the form when a date is selected
}

function updateAppointmentPreview() {
  const requiredFields = ["time", "appointmentType", "mode", "notes"];

  const formData = new FormData(appointmentForm);
  let allFieldsComplete = true;

  requiredFields.forEach((field) => {
    if (!formData.get(field)) {
      allFieldsComplete = false;
    }
  });

  if (selectedDate && allFieldsComplete) {
    const previewText = `Date: ${selectedDate.toDateString()}\nTime: ${
      formData.get("time") || "Not selected"
    }\nAppointment Type: ${
      formData.get("appointmentType") || "Not selected"
    }\nMode: ${formData.get("mode") || "Not selected"}\nNotes: ${
      formData.get("notes") || "No notes"
    }`;
    appointmentPreview.textContent = previewText;
  } else if (selectedDate && !allFieldsComplete) {
    appointmentPreview.textContent = "Please complete all fields.";
  } else {
    appointmentPreview.textContent = "Please select a date on the calendar.";
  }
}

prevMonthButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar();
});

nextMonthButton.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar();
});

appointmentForm.addEventListener("change", updateAppointmentPreview);

appointmentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (selectedDate) {
    alert("Appointment request submitted!");
  } else {
    alert("Please select a date before submitting.");
  }
});

// Disable the form initially
disableForm();

renderCalendar();


document.getElementById("backButton").addEventListener("click", function() {
  window.location.href = "attorney-myclient.html";
});