let listMenu = document.getElementById("list"),
    menu     = document.getElementById("menu"),
    img  = Array.from(document.querySelectorAll(".about .our-team .imge"));

    listMenu.onclick = () => {
      listMenu.classList.toggle("lisMenu");
      menu.classList.toggle("opacity");
    }





