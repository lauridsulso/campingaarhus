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

barMenu();



//navigationsmenuen (tine)
function hidemenu() {
    document.querySelector("#menuButton").checked = false;
}



// antal spillere (maja, laurids, pernille, tine)

function createPlayers() {
    let userInput = parseInt(document.getElementById("numberofplayers").value);
    for (let i = 0; i <= userInput - 1; i++) {
        document.getElementById("her").innerHTML += "<input placeholder='Spillernavn' type='text' />"
    }
    navigateTo("indtastjeresnavne")
}


function createGame() {
    //få spillernes navne fra input
    let userInputs = document.querySelectorAll("#her input");

    //opret array med spiller objects 
    let newPlayers = [];
    for (const userInput of userInputs) {
        console.log(userInput.value);
        let newPlayer = {
            name: userInput.value
        }
        newPlayers.push(newPlayer);
    }

    //opret nyt spil object
    let newGame = {
        numberOfPlayers: newPlayers.length,
        players: newPlayers
    };
    console.log(newGame);

}



