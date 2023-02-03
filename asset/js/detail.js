const searchInput = document.getElementById("searchInput");
const table = document.querySelector("table");
const tr = table.getElementsByTagName("tr");

searchInput.addEventListener("input", function () {
  const filter = searchInput.value.toUpperCase();

  for (let i = 0; i < tr.length; i++) {
    const td = tr[i].getElementsByTagName("td");
    let match = false;
    for (let j = 0; j < td.length; j++) {
      if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
        match = true;
      }
    }
    if (match) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
});