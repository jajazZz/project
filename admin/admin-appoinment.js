let appointments = [
  {
    id: 1,
    title: "Consultation",
    date: "2024-08-19",
    time: "10:00 AM",
    location: "Office",
    status: "upcoming",
    attorney: "Juan Dela Cruz",
    client: "Atty. Sample 1",
  },
  {
    id: 2,
    title: "Complaint Filing",
    date: "2024-08-07",
    time: "9:00 AM",
    location: "Office",
    status: "previous",
    attorney: "Juan Dela Cruz",
    client: "Atty. Sample 1",
  },
  {
    id: 3,
    title: "Contract Signing",
    date: "2024-07-26",
    time: "2:00 PM",
    location: "Office",
    status: "previous",
    attorney: "Juan Dela Cruz",
    client: "Atty. Sample 1",
  },
  {
    id: 4,
    title: "Contract Signing",
    date: "2024-07-08",
    time: "11:00 AM",
    location: "Office",
    status: "previous",
    attorney: "Juan Dela Cruz",
    client: "Atty. Sample 1",
  },
  {
    id: 5,
    title: "Complaint Filing",
    date: "2024-08-07",
    time: "9:00 AM",
    location: "Office",
    status: "previous",
    attorney: "Atty. Sample 2",
    client: "Sample 2",
  },
  {
    id: 5,
    title: "Complaint Filing",
    date: "2024-08-07",
    time: "9:00 AM",
    location: "Office",
    status: "previous",
    attorney: "Atty. Sample 2",
    client: "Sample 2",
  },
  {
    id: 5,
    title: "Complaint Filing",
    date: "2024-08-07",
    time: "9:00 AM",
    location: "Office",
    status: "previous",
    attorney: "Atty. Sample 2",
    client: "Sample 2",
  },

  {
    id: 5,
    title: "Complaint Filing",
    date: "2024-08-07",
    time: "9:00 AM",
    location: "Office",
    status: "upcoming",
    attorney: "Atty. Sample 2",
    client: "Sample 2",
  },

  {
    id: 5,
    title: "Complaint Filing",
    date: "2024-08-07",
    time: "9:00 AM",
    location: "Office",
    status: "upcoming",
    attorney: "Atty. Sample 2",
    client: "Sample 2",
  },

  {
    id: 5,
    title: "Complaint Filing",
    date: "2024-08-07",
    time: "9:00 AM",
    location: "Office",
    status: "upcoming",
    attorney: "Atty. Sample 2",
    client: "Sample 2",
  },
  {
    id: 5,
    title: "Complaint Filing",
    date: "2024-08-07",
    time: "9:00 AM",
    location: "Office",
    status: "today",
    attorney: "Atty. Sample 2",
    client: "Sample 2",
  },
  {
    id: 5,
    title: "Complaint Filing",
    date: "2024-08-07",
    time: "9:00 AM",
    location: "Office",
    status: "today",
    attorney: "Atty. Sample 2",
    client: "Sample 2",
  },
  {
    id: 5,
    title: "Complaint Filing",
    date: "2024-08-07",
    time: "9:00 AM",
    location: "Office",
    status: "today",
    attorney: "Atty. Sample 2",
    client: "Sample 2",
  },
  {
    id: 5,
    title: "Complaint Filing",
    date: "2024-08-07",
    time: "9:00 AM",
    location: "Office",
    status: "today",
    attorney: "Atty. Sample 2",
    client: "Sample 2",
  },
];


let selectedAttorney = "All";
let selectedClient = "All";

function renderAppointments() {
  const todayEl = document.getElementById("todayAppointments");
  const upcomingEl = document.getElementById("upcomingAppointments");
  const previousEl = document.getElementById("previousAppointments");

  todayEl.innerHTML = "";
  upcomingEl.innerHTML = "";
  previousEl.innerHTML = "";

  appointments.forEach((app) => {
    if (
      (selectedAttorney === "All" || app.attorney === selectedAttorney) &&
      (selectedClient === "All" || app.client === selectedClient)
    ) {
      const appEl = document.createElement("div");
      appEl.className = "appointment-item";
      appEl.innerHTML = `
                    <h6>${app.title}</h6>
                    <div class="appointment-details">
                        <div>
                            <p class="appointment-client">${app.attorney}</p>
                            <p>${app.client}</p>
                        </div>
                        <div class="appointment-time">
                            <p>${app.time}, ${new Date(
        app.date
      ).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}</p>
                            <p>${app.location}</p>
                        </div>
                    </div>
                `;

      if (app.status === "today") {
        todayEl.appendChild(appEl);
      } else if (app.status === "upcoming") {
        upcomingEl.appendChild(appEl);
      } else if (app.status === "previous") {
        previousEl.appendChild(appEl);
      }
    }
  });
}

function populateDropdowns() {
  const uniqueAttorneys = new Set(appointments.map((app) => app.attorney));
  const uniqueClients = new Set(appointments.map((app) => app.client));

  const attorneys = ["All", ...Array.from(uniqueAttorneys)];
  const clients = ["All", ...Array.from(uniqueClients)];

  const attorneyDropdown = document.getElementById("attorneyDropdown");
  const clientDropdown = document.getElementById("clientDropdown");

  attorneyDropdown.innerHTML = "";
  clientDropdown.innerHTML = "";

  attorneys.forEach((attorney) => {
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = attorney;
    a.dataset.value = attorney;
    attorneyDropdown.appendChild(a);
  });

  clients.forEach((client) => {
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = client;
    a.dataset.value = client;
    clientDropdown.appendChild(a);
  });
}

function toggleDropdown(dropdownId) {
  document.getElementById(dropdownId).classList.toggle("show");
}

document.querySelectorAll(".dropbtn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const dropdownId = this.nextElementSibling.id;
    toggleDropdown(dropdownId);
  });
});

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

document
  .getElementById("attorneyDropdown")
  .addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      selectedAttorney = e.target.dataset.value;
      document.querySelector(
        "#attorneyDropdown"
      ).previousElementSibling.textContent =
        selectedAttorney === "All" ? "Attorney" : selectedAttorney;
      renderAppointments();
    }
  });

document
  .getElementById("clientDropdown")
  .addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      selectedClient = e.target.dataset.value;
      document.querySelector(
        "#clientDropdown"
      ).previousElementSibling.textContent =
        selectedClient === "All" ? "Client" : selectedClient;
      renderAppointments();
    }
  });

document
  .getElementById("reviewAppointments")
  .addEventListener("click", function () {
    alert("Not Available");
  });

document.addEventListener("DOMContentLoaded", function () {
  populateDropdowns();
  renderAppointments();
});

document.querySelectorAll(".sidebar-links a").forEach((link) => {
  link.addEventListener("click", function () {
    document
      .querySelectorAll(".sidebar-links a")
      .forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  });
});

