function accordionmenu(x) {
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
        if (acc[i].classList.contains("active")) {
            menuToggle(acc[i]);
        } else if (acc[i] == x) {
            menuToggle(acc[i]);
        } 
    }
}
function menuToggle(x) {
    var panel = x.nextElementSibling;
    x.classList.toggle("active");
    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}