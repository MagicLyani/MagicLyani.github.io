function includeHTML(x) {
    const pages = [
        "./construction.html",
        "./Game/Main/Wars.html",
        "./Game/Main/Base-Building.html",
        "./Events/Main/Temple-Raid.html",
        "./Events/Main/Team-Gauntlet.html",
        "./Events/Main/Crystal-Caves.html",
        "./Events/Main/Fight-Pits.html",
        "./Events/Main/Fortification.html",
        "./Events/Main/Breeding.html",
        "./Events/Main/Assault.html",
        "./Events/Main/Dungeons.html",
        "./Game/Atlas/Troop-Management.html",
        "./Game/Atlas/Sniping.html",
        "./Game/Atlas/Raiding.html",
        "./Game/Atlas/Glory-Swapping.html",
        "./Game/Atlas/Alert-Bot.html",
        "./Events/Atlas/Glory-Hunt.html",
        "./Events/Atlas/Troop-Training.html",
        "./Events/Atlas/Crafting.html",
        "./Tools/Swap-calc.html",
        "./Tools/SwapClocks.html",
        "./Tools/Reds-Breeding-Path.html"
    ];
    var z, file, xhttp;
    z = document.getElementById("Content");
    file = pages[x];
    if (file) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    z.innerHTML = this.responseText;
                    closeNav();
                } else if (this.status == 404) {
                    includeHTML(0);
                }
            }
        }
        xhttp.open("GET", file, true);
        xhttp.send();
        return;
    }
}
function New_Wiki() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    document.getElementById("X").innerHTML = w;
    document.getElementById("Y").innerHTML = h;
}