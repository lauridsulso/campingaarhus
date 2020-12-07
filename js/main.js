function madMenu() {
document.getElementById('forsvind').style.display = "block";
document.getElementById('menuKort').style.display = "none";
document.getElementById('takeaway').classList.add("activeButton");
document.getElementById('bestilbord').classList.remove("activeButton");


}

function barMenu() {
document.getElementById('forsvind').style.display = "none";
document.getElementById('menuKort').style.display = "block";
document.getElementById('bestilbord').classList.add("activeButton");
document.getElementById('takeaway').classList.remove("activeButton");
}

