let status = localStorage.getItem('status') || ' ';
let theme = "light";
let app_body = document.getElementById("main");
let theme_btn = document.getElementById("theme-btn");
let theme_light = document.getElementById("theme-light");

if (app_body.classList.contains("light")) {
    theme_light.style.display = "none";
    theme_btn.addEventListener("click", function() {
        app_body.classList.remove("light");
        app_body.classList.add("dark");  
        theme_btn.style.display = "none";
        theme_light.style.display = "block";
        let theme = localStorage.setItem("theme", "dark");
    });
    theme_light.addEventListener("click", function() {
        app_body.classList.remove("dark");
        app_body.classList.add("light");
        theme_btn.style.display = "block";
        theme_light.style.display = "none";
        let theme = localStorage.setItem("theme", "Light");
    });
}

if (typeof(Storage) !== "undefined") {
    theme = localStorage.getItem("theme");
    if(theme == "dark"){
        app_body.classList.remove("light");
        app_body.classList.add("dark");
        theme_btn.style.display = "none";
        theme_light.style.display = "block";
        let theme = localStorage.setItem("theme", "dark");
    }
}


