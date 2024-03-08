var Taunter = [2, 3, 4, 5, 6];
var Guards = [0]
var TrapperSieger = [1];
var Destroyer = [1];
var swap_types = ["Guards", "Taunter", "Destroyer", "Trapper", "Sieger"];
function Primarch(Type) {
    var status = [0];
    var checkBox = 0;
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