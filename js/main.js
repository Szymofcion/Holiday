const nav = document.querySelector(".nav");
      const navBtn = document.querySelector(".burger-btn");
      const allNavItems = document.querySelectorAll(".nav__item");
      
      const handleNav = () => {
        nav.classList.toggle("nav--active");
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
          item.style.animationDelay = '.' + (delayTime + 2) + "s";
          delayTime++;
        });
      };
      handleNavItemsAnimation();
      navBtn.addEventListener("click", handleNav);