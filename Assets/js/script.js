// =============================================
// ELEMENTOS DO MENU MOBILE
// =============================================

const menuBtn = document.getElementById("menuBtn");
const navMobile = document.getElementById("navMobile");
const iconMenu = document.getElementById("iconMenu");
const iconClose = document.getElementById("iconClose");


// =============================================
// ABRIR E FECHAR MENU MOBILE
// =============================================

if (menuBtn && navMobile && iconMenu && iconClose) {

  menuBtn.addEventListener("click", () => {

    const isOpen = !navMobile.hidden;

    navMobile.hidden = isOpen;

    iconMenu.style.display = isOpen
      ? "block"
      : "none";

    iconClose.style.display = isOpen
      ? "none"
      : "block";

    menuBtn.setAttribute(
      "aria-label",
      isOpen
        ? "Abrir menu"
        : "Fechar menu"
    );

  });


  // =============================================
  // FECHAR MENU AO CLICAR EM UM LINK
  // =============================================

  navMobile
    .querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener("click", () => {

        navMobile.hidden = true;

        iconMenu.style.display = "block";
        iconClose.style.display = "none";

        menuBtn.setAttribute(
          "aria-label",
          "Abrir menu"
        );

      });

    });

}


// =============================================
// MENU ATIVO CONFORME A ROLAGEM
// =============================================

const sections = [
  "inicio",
  "sobre",
  "projetos",
  "habilidades",
  "contato"
];

const navLinks =
  document.querySelectorAll(".nav-link");


const observer = new IntersectionObserver(

  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        navLinks.forEach((link) => {

          link.classList.toggle(
            "active",
            link.dataset.section === entry.target.id
          );

        });

      }

    });

  },

  {
    rootMargin: "-40% 0px -55% 0px"
  }

);


// =============================================
// OBSERVAR AS SEÇÕES
// =============================================

sections.forEach((id) => {

  const element =
    document.getElementById(id);

  if (element) {
    observer.observe(element);
  }

});


// =============================================
// ANO AUTOMÁTICO NO RODAPÉ
// =============================================

const year =
  document.getElementById("year");

if (year) {

  year.textContent =
    new Date().getFullYear();

}