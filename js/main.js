const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".burger-btn");
const allNavItems = document.querySelectorAll(".nav__item");
const navBtnBars = document.querySelector(".burger-btn__bars");
const allSections = document.querySelectorAll(".section");
const fotterYear = document.querySelector(".footer__year");

const handleNav = () => {
  nav.classList.toggle("nav--active");
  navBtnBars.classList.remove('black-bars-color');
  allNavItems.forEach((item) => {
    item.classList.toggle("nav-items-animation");
  });
  allNavItems.forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.remove("nav--active");
      allNavItems.forEach((item) => {
        item.classList.remove("nav-items-animation");
      });
    });
  });
};

const handleNavItemsAnimation = () => {
  let delayTime = 0;

  allNavItems.forEach((item) => {
    item.style.animationDelay = "." + (delayTime + 2) + "s";
    delayTime++;
  });
};
const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  fotterYear.innerText = year;
};
const handleObserver = () => {
  const currentSection = window.scrollY;

  allSections.forEach(section => {
  
    if(section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
      navBtnBars.classList.add('black-bars-color')
    } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
      navBtnBars.classList.remove('black-bars-color')
    }


  })
}





handleCurrentYear();
handleNavItemsAnimation();
navBtn.addEventListener("click", handleNav);
window.addEventListener('scroll', handleObserver)
