document.querySelectorAll('.navbar ul li').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.navbar ul li').forEach(el => el.classList.remove('active'));        
        this.classList.add('active');
    });
});

/*start*/
let appointments = [
    {
      id: 1,
      title: "Consultation",
      date: "2024-10-16",
      time: "10:00",
      location: "DMT Law Office",
      status: "today",
      attorney: "Atty. A",
    },
    {
      id: 2,
      title: "Complaint Filing",
      date: "2024-08-19",
      time: "10:00",
      location: "DMT Law Office",
      status: "previous",
      attorney: "Atty. John Doe",
    },
    {
      id: 3,
      title: "Contract Signing",
      date: "2024-08-19",
      time: "10:00",
      location: "DMT Law Office",
      status: "previous",
      attorney: "Atty. Jane Smith",
    },
    {
      id: 4,
      title: "Document Review",
      date: "2024-10-16",
      time: "14:00",
      location: "DMT Law Office",
      status: "today",
      attorney: "Atty. Mark Brown",
    },
  
    {
      id: 5,
      title: "Document Review",
      date: "2024-10-16",
      time: "14:00",
      location: "DMT Law Office",
      status: "upcoming",
      attorney: "Atty. Mark Brown",
    },
  ];
  
  function renderAppointments(filteredAppointments = appointments) {
    const todayEl = document.getElementById("todayAppointments");
    const upcomingEl = document.getElementById("upcomingAppointments");
    const previousEl = document.getElementById("previousAppointments");
  
    todayEl.innerHTML = "";
    upcomingEl.innerHTML = "";
    previousEl.innerHTML = "";
  
    filteredAppointments.forEach((app) => {
      const appEl = document.createElement("div");
      appEl.className = "appointment-item";
      appEl.innerHTML = `
        <div class="title-container">
          <h3>${app.title}</h3>
        </div>
        <div class="pendings">
          <div class="details">
            <strong><p>${app.attorney}</p></strong>
            <p>Labor Law</p>
          </div>
          <div class="time-place">
            <p>
              ${new Date(app.date).toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}, ${new Date(app.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
            </p>
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
    });
  }
  
  function showEditModal(id) {
    const appointment = appointments.find((app) => app.id === id);
    if (!appointment) return;
  
    const editModal = document.createElement("div");
    editModal.className = "modal";
    editModal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Edit Appointment</h2>
        <form id="editForm">
          <div class="form-group">
            <label for="editTitle">Title:</label>
            <input type="text" id="editTitle" name="title" value="${
              appointment.title
            }" required>
          </div>
          <div class="form-group">
            <label for="editDate">Date:</label>
            <input type="date" id="editDate" name="date" value="${
              appointment.date
            }" required>
          </div>
          <div class="form-group">
            <label for="editTime">Time:</label>
            <input type="time" id="editTime" name="time" value="${
              appointment.time
            }" required>
          </div>
          <div class="form-group">
            <label for="editLocation">Location:</label>
            <select id="editLocation" name="location">
              <option value="DMT Law Office" ${
                appointment.location === "DMT Law Office" ? "selected" : ""
              }>DMT Law Office</option>
              <option value="Online" ${
                appointment.location === "Online" ? "selected" : ""
              }>Online</option>
            </select>
          </div>
          <div class="form-group">
            <label for="editAttorney">Attorney:</label>
            <input type="text" id="editAttorney" name="attorney" value="${
              appointment.attorney
            }" required>
          </div>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    `;
    document.body.appendChild(editModal);
  
    document.querySelector(".close").addEventListener("click", () => {
      document.body.removeChild(editModal);
    });
  
    document.getElementById("editForm").addEventListener("submit", (e) => {
      e.preventDefault();
      appointment.title = document.getElementById("editTitle").value;
      appointment.date = document.getElementById("editDate").value;
      appointment.time = document.getElementById("editTime").value;
      appointment.location = document.getElementById("editLocation").value;
      appointment.attorney = document.getElementById("editAttorney").value;
      renderAppointments();
      document.body.removeChild(editModal);
    });
  }
  
  function showDeleteConfirmation(id) {
    const deleteModal = document.createElement("div");
    deleteModal.className = "modal";
    deleteModal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Delete Appointment</h2>
        <p>Are you sure you want to delete this appointment?</p>
        <button id="confirmDelete">Yes, Delete</button>
        <button id="cancelDelete">Cancel</button>
      </div>
    `;
    document.body.appendChild(deleteModal);
  
    document.getElementById("confirmDelete").addEventListener("click", () => {
      appointments = appointments.filter((app) => app.id !== id);
      renderAppointments();
      document.body.removeChild(deleteModal);
    });
  
    document.getElementById("cancelDelete").addEventListener("click", () => {
      document.body.removeChild(deleteModal);
    });
  
    document.querySelector(".close").addEventListener("click", () => {
      document.body.removeChild(deleteModal);
    });
  }
  
  renderAppointments();
  