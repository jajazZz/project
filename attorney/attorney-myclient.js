document.querySelectorAll('.navbar ul li').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.navbar ul li').forEach(el => el.classList.remove('active'));        
        this.classList.add('active');
    });
});

/*start*/
const clientsTableBody = document.getElementById("clientsTableBody");
const previewContent = document.getElementById("previewContent");
const closeButton = document.querySelector(".myclientContent .close");

const clientsData = [
  { id: 1, name: "Juan Dela Cruz", practiceArea: "Sample", status: "Ongoing" },
  { id: 2, name: "Maria Labo", practiceArea: "Sample", status: "Ongoing" },
  { id: 3, name: "Jericho Rose", practiceArea: "Sample", status: "Done" },
  { id: 4, name: "Jonald Garcia", practiceArea: "Sample", status: "Done" },
  { id: 5, name: "Jaja Santos", practiceArea: "Sample", status: "Done" },
  { id: 6, name: "Jaja Santos", practiceArea: "Sample", status: "Ongoing" },
  { id: 7, name: "Jaja Santos", practiceArea: "Sample", status: "Done" },
  { id: 8, name: "Jaja Santos", practiceArea: "Sample", status: "Done" },
  { id: 9, name: "Jaja Santos", practiceArea: "Sample", status: "Done" },
  { id: 10, name: "Jaja Santos", practiceArea: "Sample", status: "Ongoing" },
  { id: 11, name: "Jaja Santos", practiceArea: "Sample", status: "Done" },
  { id: 12, name: "Jana Santos", practiceArea: "Sample", status: "Done" },
  { id: 13, name: "Airi Puyat", practiceArea: "Sample", status: "Done" },
  { id: 14, name: "Shan Steele", practiceArea: "Sample", status: "Done" },
  { id: 15, name: "Rex Intal", practiceArea: "Sample", status: "Done" },

];

const clientDetails = {
  1: {
    caseTitle: "Sample",
    petitioner: "Juan Dela Cruz",
    court: "Sample",
    caseNo: "Sample",
    contractDate: "Sample",
    contactNo: "Sample",
    email: "Sample",
    details:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,",
  },
  2: {
    caseTitle: "Sample",
    petitioner: "Maria Labo",
    court: "Sample",
    caseNo: "Sample",
    contractDate: "Sample",
    contactNo: "Sample",
    email: "Sample",
    details:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,",
  },
  3: {
    caseTitle: "Sample",
    petitioner: "Jericho Rose",
    court: "Sample",
    caseNo: "Sample",
    contractDate: "Sample",
    contactNo: "Sample",
    email: "Sample",
    details:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,",
  },
  4: {
    caseTitle: "Sample",
    petitioner: "Jonald Garcia",
    court: "Sample",
    caseNo: "Sample",
    contractDate: "Sample",
    contactNo: "Sample",
    email: "Sample",
    details:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,",
  },
  5: {
    caseTitle: "Sample",
    petitioner: "Jaja Santos",
    court: "Sample",
    caseNo: "Sample",
    contractDate: "Sample",
    contactNo: "Sample",
    email: "Sample",
    details:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,",
  },

  6: {
    caseTitle: "Sample",
    petitioner: "Jaja Santos",
    court: "Sample",
    caseNo: "Sample",
    contractDate: "Sample",
    contactNo: "Sample",
    email: "Sample",
    details:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,",
  },

  7: {
    caseTitle: "Sample",
    petitioner: "Jaja Santos",
    court: "Sample",
    caseNo: "Sample",
    contractDate: "Sample",
    contactNo: "Sample",
    email: "Sample",
    details:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,",
  },

  8: {
    caseTitle: "Sample",
    petitioner: "Jaja Santos",
    court: "Sample",
    caseNo: "Sample",
    contractDate: "Sample",
    contactNo: "Sample",
    email: "Sample",
    details:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,",
  },

  9: {
    caseTitle: "Sample",
    petitioner: "Jaja Santos",
    court: "Sample",
    caseNo: "Sample",
    contractDate: "Sample",
    contactNo: "Sample",
    email: "Sample",
    details:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,",
  },

  10: {
    caseTitle: "Sample",
    petitioner: "Jaja Santos",
    court: "Sample",
    caseNo: "Sample",
    contractDate: "Sample",
    contactNo: "Sample",
    email: "Sample",
    details:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,",
  },

  11: {
    caseTitle: "Sample",
    petitioner: "Jaja Santos",
    court: "Sample",
    caseNo: "Sample",
    contractDate: "Sample",
    contactNo: "Sample",
    email: "Sample",
    details:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,",
  },

  12: {
    caseTitle: "Sample",
    petitioner: "Jana Santos",
    court: "Sample",
    caseNo: "Sample",
    contractDate: "Sample",
    contactNo: "Sample",
    email: "Sample",
    details:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,",
  },

  13: {
    caseTitle: "Sample",
    petitioner: "Airi Puyat",
    court: "Sample",
    caseNo: "Sample",
    contractDate: "Sample",
    contactNo: "Sample",
    email: "Sample",
    details:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,",
  },

  14: {
    caseTitle: "Sample",
    petitioner: "Shan Steele",
    court: "Sample",
    caseNo: "Sample",
    contractDate: "Sample",
    contactNo: "Sample",
    email: "Sample",
    details:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,",
  },

  15: {
    caseTitle: "Sample",
    petitioner: "Rex Intal",
    court: "Sample",
    caseNo: "Sample",
    contractDate: "Sample",
    contactNo: "Sample",
    email: "Sample",
    details:
      "Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet,",
  },

};

function populateTable() {
  clientsTableBody.innerHTML = "";
  clientsData.forEach((client) => {
    const row = document.createElement("tr");
    row.setAttribute("data-client-id", client.id);

    // Create button element separately to add an event listener
    const buttonHtml =
      client.status === "Ongoing"
        ? "<button class='appointment-btn'>Make Appointment</button>"
        : "";

    row.innerHTML = `
      <td>${client.name}</td>
      <td>${client.practiceArea}</td>
      <td class="status-${client.status.toLowerCase()}">${client.status}</td>
      <td>${buttonHtml}</td>
    `;

    // Append row to table body
    clientsTableBody.appendChild(row);

    // Add event listener to button if it exists
    if (client.status === "Ongoing") {
      const button = row.querySelector(".appointment-btn");
      button.addEventListener("click", () => {
        window.location.href = "attorney-client-appointment.html";
      });
    }
  });
}


function showPreview(clientId) {
  const client = clientDetails[clientId];
  if (client) {
    previewContent.innerHTML = `
            <p><strong>Case Title:</strong> ${client.caseTitle}</p>
            <p><strong>Petitioner:</strong> ${client.petitioner}</p>
            <p><strong>Court:</strong> ${client.court}</p>
            <p><strong>Case No.:</strong> ${client.caseNo}</p>
            <p><strong>Contract Date:</strong> ${client.contractDate}</p>
            <p><strong>Contact No.:</strong> ${client.contactNo}</p>
            <p><strong>Email:</strong> ${client.email}</p>
            <p><strong>Details:</strong></p>
            <p>${client.details}</p>
        `;
  } else {
    previewContent.innerHTML = "<p>No client selected</p>";
  }
}

clientsTableBody.addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    console.log("Appointment requested");
    return;
  }
  const row = e.target.closest("tr");
  if (row) {
    clientsTableBody
      .querySelectorAll("tr")
      .forEach((r) => r.classList.remove("selected"));
    row.classList.add("selected");
    const clientId = row.getAttribute("data-client-id");
    showPreview(clientId);
  }
});

closeButton.addEventListener("click", function () {
  previewContent.innerHTML = "<p>No client selected</p>";
  clientsTableBody
    .querySelectorAll("tr")
    .forEach((r) => r.classList.remove("selected"));
});

populateTable();
showPreview(null);
