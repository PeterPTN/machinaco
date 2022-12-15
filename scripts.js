window.onload = setOnLoad;

function setOnLoad() {
    getScrollValues();
    addNavClass();
    removeNavClass();
}

const burger = document.getElementsByClassName("hero__hamburger")[0];
const navMenu = document.getElementsByClassName("hero__nav-container")[0];
const navbar = document.getElementsByClassName("hero__topbar")[0];

function getScrollValues() {
    window.addEventListener("scroll", (event) => {
        event.path[1].scrollY > 50 ? navbar.classList.add("open") : navbar.classList.remove("open");
    })
}

function removeNavClass() {
    document.body.addEventListener("click", (event) => {
        if (navMenu.classList.contains("open")) {
            if (!event.target.matches(".hero__hamburger")) {
                console.log('event target:', event.target)
                navMenu.classList.remove("open");
                burger.classList.remove("open");
            }
        }
    })
}


function addNavClass() {
    burger.addEventListener("click", (event) => {
      

        if (!navMenu.classList.contains("open")) {

            console.log("not contain");
            navMenu.classList.add("open");
            burger.classList.add("open");
        }
    })
}


