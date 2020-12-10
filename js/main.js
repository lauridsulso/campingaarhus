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


// exit knap i spillet (maja, tine)
function exit() {
    let page = (confirm("Er du sikker på, at du vil afslutte spillet?"));
    if (page) {
        window.location.hash = 'home';
    } else {
        window.history.go('#onboard1');
    }

}

// SCOREKORT STARTER HER

// antal spillere (maja, laurids, pernille, tine)
function createPlayers() {
    let userInput = parseInt(document.getElementById("numberofplayers").value);
    for (let i = 0; i <= userInput - 1; i++) {
        document.getElementById("indtast-navn").innerHTML += "<input placeholder='Spillernavn' type='text' />"
    }
    navigateTo("indtastjeresnavne")
}



function createGame() {
    //få spillernes navne fra input
    let userInputs = document.querySelectorAll("#indtast-navn input");

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

    _gamesRef.add(newGame);
}


// antal bokse ved hul 1, udfra hvor mange spillere de er (maja, laurids, pernille, tine)
function createPlayersHoles() {
    let userInput = parseInt(document.getElementById("numberofplayers").value);
    for (let i = 0; i <= userInput - 1; i++) {
        document.getElementById("indtast-slag").innerHTML += "<input placeholder='antal slag' type='text' />"
    }
    navigateTo("hul1")
}





//POPUP boks til scoreboard
// Get the modal
let modal = document.getElementById("scoreboard-Modal");

// Get the button that opens the modal
let btn = document.getElementById("scoreboard-knap");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}