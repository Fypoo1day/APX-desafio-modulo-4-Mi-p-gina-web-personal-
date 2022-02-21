function headerComponent(el) {
  const componentEl = document.createElement("div");
  componentEl.classList.add("header__nav");

  componentEl.innerHTML = `
  
  <a href="./index.html">
    <h2 class="header__logo">ALAN</h2>
  </a>
  <nav>
    <button class="hamburguer" id="hamburguer">
      <i class="fas fa-bars"></i>
    </button>
    
    <ul class="header__nav-links">
      <li><a href="./portfolio.html">Portfolio</a></li>
      <li><a href="./services.html">Servicios</a></li>
      <li><a href="./contact.html">Contacto</a></li>
    </nav>
  </ul>
  
  `;

  el.appendChild(componentEl);
  // const burguerMenuEl = document.querySelector(".hamburguer");
  // const windowEl = document.querySelector(".header__nav-links");

  const hamburguer = document.getElementById("hamburguer");
  const navUL = document.getElementById("hamburguer");

  hamburguer.addEventListener("click", () => {
    navUL.classList.toggle("show");
  });

  // burguerMenuEl.addEventListener("click", () => {
  //   if (burguerMenuEl.classList.contains("open")) {
  //     burguerMenuEl.classList.remove("open");
  //     windowEl.style.display = "";
  //   } else {
  //     burguerMenuEl.classList.add("open");
  //     windowEl.style.display = "inherit";
  //   }
  // });
}
