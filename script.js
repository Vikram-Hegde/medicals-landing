window.onload = () => {
        const list = document.querySelectorAll("nav ul li a");

        list.forEach(listItem => {

            listItem.addEventListener("click", () => {
                const active = document.querySelector(".active");
                active.classList.remove("active");
                listItem.classList.add("active");
            });
        });
    }