//#region Menu
function includeHTML(x) {
    const pages = [
        "/construction.html",
        "/Game/Main/Wars.html",
        "/Game/Main/Base-Building.html",
        "/Events/Main/Temple-Raid.html",
        "/Events/Main/Team-Gauntlet.html",
        "/Events/Main/Crystal-Caves.html",
        "/Events/Main/Fight-Pits.html",
        "/Events/Main/Fortification.html",
        "/Events/Main/Breeding.html",
        "/Events/Main/Assault.html",
        "/Events/Main/Dungeons.html",
        "/Game/Atlas/Troop-Management.html",
        "/Game/Atlas/Sniping.html",
        "/Game/Atlas/Raiding.html",
        "/Game/Atlas/Glory-Swapping.html",
        "/Game/Atlas/Alert-Bot.html",
        "/Events/Atlas/Glory-Hunt.html",
        "/Events/Atlas/Troop-Training.html",
        "/Events/Atlas/Crafting.html",
        "/Tools/Swap-calc.html",
        "/Tools/SwapClocks.html",
        "/Tools/Reds-Breeding-Path.html"
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
//#endregion Menu
//#region Swap-calculator
const glory100 = 655;
const minglory100 = glory100 * 1.111111;
function Calculate() {
    const button1 = document.getElementById("Calc");
    let lvl = document.getElementById("Plvl").value;
    let ap = document.getElementById("PrimAP").value;
    let rules = document.getElementById("Rules").checked;
    if (lvl >= 25 && lvl <= 1000 && ap >= 50 && ap <= 2000 && rules) {
        button1.style.visibility = "visible";
    } else {
        button1.style.visibility = "hidden";
    }
}
function Swap() {
    const button1 = document.getElementById("Calc");
    const txtbx_lvl = document.getElementById("Plvl");
    const txtbx_ap = document.getElementById("PrimAP");
    const result = document.getElementById("result");
    let status = button1.innerText;
    if (status == "Calculate") {
        let lvl = txtbx_lvl.value;
        let ap = txtbx_ap.value;
        let lvlmin;
        let lvlmax;
        if (lvl >= glory100 && lvl < minglory100) {
            lvlmin = lvl * 0.9;
            lvlmax = 999;
        } else if (lvl >= minglory100) {
            lvlmin = glory100;
            lvlmax = 999;
        } else {
            lvlmin = lvl * 0.9;
            lvlmax = lvl * 1.1;
        }
        const ID = ["Player", "PlayerMin", "PlayerMax", "DP1", "DPmin1", "DPmax1", "DP2", "DPmin2", "DPmax2", "DP3", "DPmin3", "DPmax3"];
        let stats = [lvl, lvlmin, lvlmax, ap * 2, ap * 1.8, ap * 2.2, ap * 1.5, ap * 1.35, ap * 1.65, ap, ap * 0.9, ap * 1.1];
        if (stats.length === ID.length) {
            for (let i = 0; i < stats.length; i++) {
                document.getElementById(ID[i]).innerHTML = Math.round(stats[i]);
            }
        }
        result.style.display = "inline-block";
        document.getElementById("Guideline").style.display = "none";
        button1.innerHTML = "Reset";
    } else if (status == "Reset") {
        txtbx_lvl.value = "";
        txtbx_ap.value = "";
        result.style.display = "none";
        button1.innerHTML = "Calculate";
    }
}
function guidelines() {
    let rules = document.getElementById("Guideline").style.display;
    if (rules == "none") {
        document.getElementById("Guideline").style.display = "block";
    } else if (rules == "block") {
        document.getElementById("Guideline").style.display = "none";
    }
}
//#endregion Swap-calculator
//#region Swap-clocks
var Taunter = ["Swap-2", "Swap-3", "Swap-4", "Swap-5", "Swap-6"];
var Guards = ["Swap-0"];
var TrapperSieger = ["Swap-1"];
var Destroyer = ["Swap-1"];
var swap_types = ["Guards", "Taunter", "Destroyer", "Trapper", "Sieger"];
function Primarch(Type) {
    let status = [0];
    let checkBox = 0;
    for (var i = 0; i < swap_types.length; i++) {
        checkBox = document.getElementById(swap_types[i]);
        if (Type == "Clear all") {
            checkBox.checked = false;
        } else if (Type == "Check all") {
            checkBox.checked = true;
        }
        if (checkBox.checked == true) {
            status[i] = true;
        } else {
            status[i] = false;
        }
    }
    Visibility(Guards, status[0])
    Visibility(Taunter, status[1])
    Mixed(TrapperSieger, Destroyer, status)
}
function Visibility(array, status) {
    for (var a = 0; a < array.length; a++) {
        var box = document.getElementById(array[a]);
        if (status == true) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    }
}
function Mixed(TrapSieg, Destro, status) {
    const Mix_Prims = findCommonValues(TrapSieg, Destro);
    const Pure_Destroyer = findNonCommonValues(Destro, Mix_Prims);
    const Pure_TrapperSieger = findNonCommonValues(TrapSieg, Mix_Prims);
    if (!status[2] && !status[3] && !status[4] === true) {
        Visibility(Mix_Prims, false)
    } else {
        Visibility(Mix_Prims, true)
    }
    if (!status[3] && !status[4] === true) {
        Visibility(Pure_TrapperSieger, false)
    } else {
        Visibility(Pure_TrapperSieger, true)
    }
    Visibility(Pure_Destroyer, status[2]);
}
function findCommonValues(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}
function findNonCommonValues(arr1, arr2) {
    return arr1.filter(value => !arr2.includes(value));
}
//#endregion Swap-clocks
function New_Wiki() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    document.getElementById("X").innerHTML = w;
    document.getElementById("Y").innerHTML = h;
}