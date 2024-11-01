document.querySelectorAll('.navbar ul li').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.navbar ul li').forEach(el => el.classList.remove('active'));        
        this.classList.add('active');
    });
});

const cases = [
    {
      id: 1,
      title: "Jose Jackie Chan vs. Maria Carey Batumbakal",
      type: "Sample",
      caseNo: "1",
    },
    { id: 2, title: "Bruno Mouse vs. Quoya Jobert", type: "Sample", caseNo: "2" },
    {
      id: 3,
      title: "People of the Philippines vs. Kenneth Sy",
      type: "Sample",
      caseNo: "3",
    },
    {
      id: 4,
      title: "ABC Corp. vs. Jonathan Joestar",
      type: "Sample",
      caseNo: "4",
    },
    {
      id: 5,
      title: "Lisa Hontiveros vs. Alice Gew",
      type: "Sample",
      caseNo: "5",
    },
    {
      id: 6,
      title: "People of the Philippines vs. Gusion Dela Cruz",
      type: "Sample",
      caseNo: "6",
    },
    {
      id: 7,
      title: "People of the Philippines vs. Taylor Dolores Swift",
      type: "Sample",
      caseNo: "7",
    },
    { id: 8, title: "This Corp. vs. Eminem Santos", type: "Sample", caseNo: "8" },
    {
      id: 9,
      title: "People of the Philippines vs. BenBen Agustin",
      type: "Sample",
      caseNo: "9",
    },
    {
      id: 10,
      title: "Kagura Dela Cruz vs. John LLoyd Dela Cruz",
      type: "Sample",
      caseNo: "10",
    },
    {
      id: 11,
      title: "People of the Philippines vs. Gatorkaca",
      type: "Sample",
      caseNo: "11",
    },
  ];
  
  function renderCases(casesToRender) {
    const tableBody = document.getElementById("cases-body");
    tableBody.innerHTML = "";
  
    casesToRender.forEach((caseItem) => {
      const row = document.createElement("tr");
      row.innerHTML = `
            <td>
              <input type="checkbox" class="checkbox">
              ${caseItem.title}
            </td>
            <td>${caseItem.type}</td>
            <td>${caseItem.caseNo}</td>
          `;
      tableBody.appendChild(row);
    });
  }
  
  function filterCases(searchTerm) {
    return cases.filter((caseItem) =>
      caseItem.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    renderCases(cases);
  
    const searchInput = document.getElementById("search-input");
    const searchButton = document.getElementById("search-button");
  
    function performSearch() {
      const searchTerm = searchInput.value.trim();
  
      if (searchTerm === "") {
        document.getElementById("exit-search").classList.add("hidden");
        renderCases(cases);
        return;
      }
  
      const filteredCases = filterCases(searchTerm);
      renderCases(filteredCases);
  
      if (filteredCases.length > 0) {
        document.getElementById("exit-search").classList.remove("hidden");
      } else {
        document.getElementById("exit-search").classList.add("hidden");
      }
    }
  
    searchButton.addEventListener("click", performSearch);
  
    searchInput.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        performSearch();
      }
    });
  
    const exitSearch = document.getElementById("exit-search");
    exitSearch.addEventListener("click", () => {
      searchInput.value = "";
      renderCases(cases);
      exitSearch.classList.add("hidden");
    });
  });
  