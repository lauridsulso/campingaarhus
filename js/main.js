//maja og pernille

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


//tine 
function hidemenu() {
    document.querySelector("#menu").classList.add("hidemenu");
}
