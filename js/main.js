//maja og pernille, skjuler madmenu/barmenu

function madMenu() {
    document.getElementById('forsvind').style.display = "block";
    document.getElementById('menuKort').style.display = "none";
    document.getElementById('barmenu-knap').classList.add("activeButton");
    document.getElementById('madmenu-knap').classList.remove("activeButton");
}



function barMenu() {
    document.getElementById('forsvind').style.display = "none";
    document.getElementById('menuKort').style.display = "block";
    document.getElementById('madmenu-knap').classList.add("activeButton");
    document.getElementById('barmenu-knap').classList.remove("activeButton");

}



//navigationsmenuen (tine)
function hidemenu() {
    document.querySelector("#menuButton").checked = false;
}


// antal spillere
var btn = document.getElementsByTagName("input")[1];

btn.onclick = function () {
    var userInput = parseInt(document.getElementsByTagName("input")[0].value, 10);
    for (var i = 0; i <= userInput - 1; i++) {
        document.getElementById("her").innerHTML += "<input type='text' />"
    }
};



