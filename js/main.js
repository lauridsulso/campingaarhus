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

function createPlayers() {
    let userInput = parseInt(document.getElementById("numberofplayers").value);
    for (let i = 0; i <= userInput - 1; i++) {
        document.getElementById("her").innerHTML += "<input type='text' />"
    }
    navigateTo("indtastjeresnavne")
}



