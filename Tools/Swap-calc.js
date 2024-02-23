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