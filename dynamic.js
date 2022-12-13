window.addEventListener('load', getNewArticle());

function getNewArticle() {
    const list = document.getElementsByClassName("main__tech-title-list")[0];
    const listArray = [].slice.call(list.children);

    const ai = document.getElementsByClassName("main__tech-blurb-container")[0];
    const os = document.getElementsByClassName("main__tech-blurb-container")[1];
    const wp = document.getElementsByClassName("main__tech-blurb-container")[2];
    const fe = document.getElementsByClassName("main__tech-blurb-container")[3];

    const allArray = [ai, os, wp, fe];

    list.addEventListener("click", (event) => {
        if (event.path[0].textContent == "Artificial Intelligence and Machine Learning" |
            event.path[0].textContent == "Open Source Frameworks" |
            event.path[0].textContent == "Web Programming" |
            event.path[0].textContent == "Front-end Technologies") {
            // Remove ID
            listArray.map((item) => {
                if (item.id === "current") {
                    item.removeAttribute("id");
                }
            });

            // Add ID
            event.path[1].setAttribute("id", "current");

            // Remove all open classList
            allArray.map((item) => {
                if (item.classList[2] == "open") {
                    item.classList.remove("open");
                };
            });

            // Add open classList 
            switch (event.path[0].textContent) {
                case "Artificial Intelligence and Machine Learning":
                    ai.classList.add("open");
                    break;
                case "Open Source Frameworks":
                    os.classList.add("open");
                    break;
                case "Web Programming":
                    wp.classList.add("open");
                    break;
                case "Front-end Technologies":
                    fe.classList.add("open");
                    break;
            }
        }
    })
}