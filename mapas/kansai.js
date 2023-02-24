function toggleSidebar() {
  var sidebar = document.getElementById("mySidebar");
  if (sidebar.style.width === "250px") {
    closeSidebar();
  } else {
    openSidebar();
  }
}

function openSidebar() {
  document.getElementById("mySidebar").style.width = "250px";
}

function closeSidebar() {
  document.getElementById("mySidebar").style.width = "0";
}

   const areas = document.querySelectorAll("area");
  const sidebar = document.getElementById("mySidebar");

  for (let area of areas) {
    area.addEventListener("click", function() {
      toggleNav();
      updateSidebarContent(area.title);
    });
  }

  function toggleNav() {
    if (sidebar.style.display === "block") {
      sidebar.style.display = "none";
    } else {
      sidebar.style.display = "block";
    }
  }

  function updateSidebarContent(title) {
    let content;
    switch (title) {
      case "A Lenda da Guerreira que Celebra a Maidono":
        content = "";
        break;
      case "A Verdadeira Face do Deus Secreto":
        content = "This is some custom content for the 'A Verdadeira Face do Deus Secreto' section.";
        break;
      case "Fé Nativa em meio a terra morta":
        content = "This is some custom content for the 'Fé Nativa em meio a terra morta' section.";
        break;
      default:
        content = "This is some default content for an undefined section.";
    }
    sidebar.innerHTML = `
      <a href="#" class="closebtn" onclick="toggleNav()">&times;</a>
      <br></br>
      <br></br>
      <h3>${title}</h3>
      <p>${content}</p>
    `;
  }

var img = document.querySelector("img");
  var currentSeason = 1; // 1 corresponds to winter, 2 to spring, 3 to summer, 4 to autumn
  var button = document.querySelector("button");

  function toggleSeason() {
    currentSeason = (currentSeason % 4) + 1;
    var seasonName = "";

    switch (currentSeason) {
      case 1:
        seasonName = "Inverno";
        break;
      case 2:
        seasonName = "Primavera";
        break;
      case 3:
        seasonName = "Verão";
        break;
      case 4:
        seasonName = "Outono";
        break;
    }

    img.src = "Kansai - " + seasonName + ".jpg";
    button.setAttribute("data-season", currentSeason);
  }

