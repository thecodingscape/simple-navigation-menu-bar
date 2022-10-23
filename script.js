const sub_menu = document.querySelector(".nav-sub-menu"),
    dropdown = document.querySelector("#sub-dropdown");

dropdown.addEventListener("click", function () {
    
    // sub-menu.active class addition
    sub_menu.classList.toggle("active");

    //dropdown icon changes

    if (document.getElementById('sub-dropdown').classList.contains("bi-chevron-down")) {
        document.getElementById('sub-dropdown').classList.toggle("bi-chevron-up");
    }
    else {
        document.getElementById('sub-dropdown').classList.toggle("bi-chevron-up");
    }

});