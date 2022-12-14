window.addEventListener('load', getNewArticle());

function getNewArticle() {
    const list = document.getElementsByClassName("main__tech-title-list")[0];
    const listArray = [].slice.call(list.children);

    const frontEnd = document.getElementsByClassName("main__tech-blurb-container")[0];
    const backEnd = document.getElementsByClassName("main__tech-blurb-container")[1];
    const dataBase = document.getElementsByClassName("main__tech-blurb-container")[2];
    const bigData = document.getElementsByClassName("main__tech-blurb-container")[3];
    const deskTop = document.getElementsByClassName("main__tech-blurb-container")[4];
    const cloud = document.getElementsByClassName("main__tech-blurb-container")[5];

    const allArray = [frontEnd, backEnd, dataBase, bigData, deskTop, cloud];

    list.addEventListener("click", (event) => {
        let clickPath = event.composedPath()[0].textContent || event.path[0].textContent;

        if (clickPath == "Front-end Programming Languages" ||
            clickPath == "Back-end Programming Langauges" ||
            clickPath == "Databases" ||
            clickPath == "Big Data" ||
            clickPath == "Desktop" ||
            clickPath == "Clouds") {

            // Class
            let currentPath = event.composedPath()[1] || event.path[1];

            // Remove ID
            listArray.map((item) => {
                if (item.id === "current") {
                    item.removeAttribute("id");
                }
            });

            // Add ID
            currentPath.setAttribute("id", "current");

            // Remove all open classList
            allArray.map((item) => {
                if (item.classList[2] == "open") {
                    item.classList.remove("open");
                };
            });

            // Add open classList 
            switch (clickPath) {
                case "Front-end Programming Languages":
                    frontEnd.classList.add("open");
                    break;
                case "Back-end Programming Langauges":
                    backEnd.classList.add("open");
                    break;
                case "Databases":
                    dataBase.classList.add("open");
                    break;
                case "Big Data":
                    bigData.classList.add("open");
                    break;
                case "Desktop":
                    deskTop.classList.add("open");
                    break;
                case "Clouds":
                    cloud.classList.add("open");
                    break;
                default:
                    console.log("Broke");
                    break;
            }
        }
    })
}