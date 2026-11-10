// =============================================
// MENU MOBILE: ABRE, FECHA E MANTÉM ESTADO
// =============================================

const menuBtn = document.getElementById("menuBtn");
const navMobile = document.getElementById("navMobile");
const iconMenu = document.getElementById("iconMenu");
const iconClose = document.getElementById("iconClose");

if (menuBtn && navMobile && iconMenu && iconClose) {
  const setMenuOpen = (open) => {
    // Mantém o atributo hidden e o ícone sempre sincronizados.
    navMobile.hidden = !open;
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    iconMenu.style.display = open ? "none" : "block";
    iconClose.style.display = open ? "block" : "none";
  };

  // Garante menu recolhido ao abrir ou recarregar a página.
  setMenuOpen(false);

  menuBtn.addEventListener("click", () => {
    setMenuOpen(navMobile.hidden);
  });

  // Fechar depois de selecionar uma seção.
  navMobile.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  // Fechar ao tocar fora do menu.
  document.addEventListener("click", (event) => {
    if (
      !navMobile.hidden &&
      !navMobile.contains(event.target) &&
      !menuBtn.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  });

  // Teclado: ESC fecha o menu.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !navMobile.hidden) {
      setMenuOpen(false);
      menuBtn.focus();
    }
  });

  // Não carregar o estado mobile ao passar para desktop.
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768 && !navMobile.hidden) {
      setMenuOpen(false);
    }
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