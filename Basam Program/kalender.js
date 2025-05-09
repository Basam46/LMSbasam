const monthYearLabel = document.getElementById("month-year");
const calendarTable = document.getElementById("calendar-table");

let currentDate = new Date();

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();

  const monthNames = [
    "Januari", "Februari", "Maret", "April", "Mei", "Juni",
    "Juli", "Agustus", "September", "Oktober", "November", "Desember"
  ];

  monthYearLabel.textContent = `${monthNames[month]} ${year}`;

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  let table = "<tr>";
  const dayNames = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
  dayNames.forEach(day => {
    table += `<th>${day}</th>`;
  });
  table += "</tr><tr>";

  for (let i = 0; i < firstDay; i++) {
    table += "<td></td>";
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const currentWeekDay = (firstDay + day - 1) % 7;
    table += `<td>${day}</td>`;
    if (currentWeekDay === 6 && day !== daysInMonth) {
      table += "</tr><tr>";
    }
  }

  table += "</tr>";
  calendarTable.innerHTML = table;
}

window.prevMonth = function () {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
};

window.nextMonth = function () {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
};

renderCalendar(currentDate);